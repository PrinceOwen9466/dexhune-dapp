import { ChainNetwork, Token } from "@/models";
import { defineStore } from "pinia";
import {
	BrowserProvider,
	Eip1193Provider,
	Contract,
	formatUnits,
	parseUnits,
	JsonRpcSigner,
} from "ethers";
import {
	ABI_DEXHUNE_ERC20,
	ABI_DEXHUNE_EXCHANGE,
	ABI_DEXHUNE_PRICE_DAO,
	ABI_IERC20,
} from "@/models/abis";
import { DexhunePriceDAO } from "@/models/DexhunePriceDAO";
import { DexhuneExchange } from "@/models/DexhuneExchange";
import { DexhuneERC20 } from "@/models/DexhuneERC20";
import { getDAppError } from ".";
import { IERC20 } from "@/models/IERC20";

const NATIVE_TOKEN = "AVAX";
const NATIVE_DECIMALS = 18;

let DEXHUNE_EXCHANGE_ADDRESS: string;
let DEXHUNE_DAO_ADDRESS: string;
let DEXHUNE_TOKEN_ADDRESS: string;

// const DEV = import.meta.env.DEV;
const DEV = true;

if (DEV) {
	DEXHUNE_EXCHANGE_ADDRESS = "0x99BeF76E54061FF672B900f362943F3C28fe0038";
	DEXHUNE_DAO_ADDRESS = "0x74d1cED2bE8814657C08fc1d1841AC3a9583285E";
	DEXHUNE_TOKEN_ADDRESS = "0xDf33F9687E88BC05CDa7C3e48ADa09D526Cb6966";
} else {
	DEXHUNE_EXCHANGE_ADDRESS = "0xf839030571f7f57ab50e9ff51e7ba90a0d608b07";
	DEXHUNE_DAO_ADDRESS = "0xE50d8D0dC620e0C4Ee604932f17b5AF96165ae9D";
	DEXHUNE_TOKEN_ADDRESS = "0x7f1f78FDAdE5D9B6200BeA7cd6EB88D8bA83C45c";
}

// FX: https://subnets.avax.network/c-chain/address/0xf839030571f7f57ab50e9ff51e7ba90a0d608b07
// DAO: https://subnets.avax.network/c-chain/address/0xE50d8D0dC620e0C4Ee604932f17b5AF96165ae9D?tab=code&contractTab=read
// TK: https://subnets.avax.network/c-chain/address/0x7f1f78FDAdE5D9B6200BeA7cd6EB88D8bA83C45c

export interface WalletState {
	connected: boolean;
	address: string;
	network: ChainNetwork;
	projectId: string;
	price: number;
	fetchedTokens: boolean;
	tokens: Token[];

	dao?: DexhunePriceDAO;
	fx?: DexhuneExchange;
	token?: DexhuneERC20;
	tokenMap: Map<string, IERC20>;
}

const TESTNET_NETWORK: ChainNetwork = {
	name: "Avalanche Fuji Testnet",
	chainId: 43113,
	currency: "AVAX",
	rpcUrl: "https://ava-testnet.public.blastapi.io/ext/bc/C/rpc",
	explorerUrl: "https://subnets-test.avax.network/c-chain",
};

const MAIN_NETWORK: ChainNetwork = {
	name: "Avalanche C-Chain",
	chainId: 43114,
	currency: "AVAX",
	rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
	explorerUrl: "https://subnets.avax.network/c-chain",
};

const initialState = (): WalletState => ({
	connected: false,
	address: "",
	network: DEV ? TESTNET_NETWORK : MAIN_NETWORK,
	projectId: import.meta.env.VITE_APP_PROJECT_ID,
	price: 0,

	fetchedTokens: false,
	tokens: [],
	tokenMap: new Map<string, IERC20>(),
});

let _provider: BrowserProvider;
let _signer: JsonRpcSigner;

function getLink(addr: string) {
	let baseUrl: string;

	if (DEV) {
		baseUrl = "https://subnets-test.avax.network/c-chain/address/";
	} else {
		baseUrl = "https://subnets.avax.network/c-chain/address/";
	}

	return baseUrl + addr;
}

let FX = new Contract(
	DEXHUNE_EXCHANGE_ADDRESS,
	ABI_DEXHUNE_EXCHANGE
) as unknown as DexhuneExchange;
let PriceDAO = new Contract(
	DEXHUNE_DAO_ADDRESS,
	ABI_DEXHUNE_PRICE_DAO
) as unknown as DexhunePriceDAO;
let Token = new Contract(
	DEXHUNE_TOKEN_ADDRESS,
	ABI_DEXHUNE_ERC20
) as unknown as DexhuneERC20;

export const useWalletStore = defineStore("Wallet", {
	state: initialState,
	getters: {
		fxLink: () => getLink(DEXHUNE_EXCHANGE_ADDRESS),
		daoLink: () => getLink(DEXHUNE_DAO_ADDRESS),
		tokenLink: () => getLink(DEXHUNE_TOKEN_ADDRESS),
		dxhAddress: () => DEXHUNE_DAO_ADDRESS,
		nativeTk: () => NATIVE_TOKEN,
	},
	actions: {
		async queryPrice() {
			const price = await FX.viewPrice();
			// TODO: Prep for overflows
			this.price = Number(formatUnits(price, 18));
		},

		_queryToken(addr: string) {
			const n = this.tokens.findIndex((x) => x.addr == addr);

			if (n >= 0) {
				return this.tokens[n];
			}

			return undefined;
		},

		normalizeNative(amount: number) {
			return parseUnits(amount.toFixed(NATIVE_DECIMALS), NATIVE_DECIMALS);
		},

		async normalizeAmount(tokenAddr: string, amount: number) {
			const tk = this._queryToken(tokenAddr);
			let dec: number;

			if ((tk && !tk.decimals) || !tk) {
				const etk = this.resolveToken(tokenAddr);

				try {
					// TODO: Multiple retries, then some sort of warning?
					dec = Number(await etk.decimals());

					if (tk) {
						tk.decimals = dec;
					}
				} catch (err) {
					console.error(err);
					dec = 18;
				}
			} else dec = tk.decimals ?? 18;

			return parseUnits(amount.toFixed(dec), dec);
		},

		resolveToken(addr: string) {
			let tk: IERC20;

			if (!this.tokenMap.has(addr)) {
				tk = new Contract(addr, ABI_IERC20, _signer) as unknown as IERC20;

				this.tokenMap.set(addr, tk);
				return tk;
			}

			return this.tokenMap.get(addr) as IERC20;
		},

		async assignProvider(prov: Eip1193Provider) {
			const provider = new BrowserProvider(prov);
			const signer = await provider.getSigner();

			await provider._detectNetwork();

			this.address = await signer.getAddress();
			_provider = provider;
			_signer = signer;

			PriceDAO = PriceDAO.connect(signer);
			Token = Token.connect(signer);
			FX = FX.connect(signer);

			this.tokenMap.clear();
			this.fetchTokens();

			this.connected = true;
		},

		async fetchTokens() {
			if (this.fetchedTokens) return;

			this.fetchedTokens = true;
			let i = 1;

			while (true) {
				try {
					// TODO: In the event of too many tokens, this might be a little problematic...
					const tk = await FX.viewTokenByIndex(i++);

					this.tokens.push({
						tokenNo: Number(tk.tokenNo),
						name: tk.name,
						sym: tk.sym,
						addr: tk.addr,
						parityAddr: tk.parityAddr,
						reward: Number(tk.reward),
						rewardThreshold: Number(tk.rewardThreshold),
						scheme: Number(tk.scheme),
						price: Number(formatUnits(tk.price, 18)),
						orders: Number(tk.orders),
					});

					console.log(this.tokens[this.tokens.length - 1].price);
				} catch {
					break;
				}
			}
		},

		async transferApproved(tokenAddr: string, amount: bigint) {
			const tk = this.resolveToken(tokenAddr);
			const fxAddr = DEXHUNE_EXCHANGE_ADDRESS;

			try {
				const allowed = await tk.allowance(this.address, fxAddr);
				return allowed > amount;
			} catch (err) {
				return getDAppError(err);
			}
		},

		async approve(tokenAddr: string, amount: bigint) {
			const tk = this.resolveToken(tokenAddr);
			const fxAddr = DEXHUNE_EXCHANGE_ADDRESS;

			try {
				await tk.approve(fxAddr, amount);
			} catch (err) {
				return getDAppError(err);
			}
		},

		async clearOrders() {
			try {
				await FX.clearOrders();
			} catch (err) {
				return getDAppError(err);
			}
		},

		async buyFX(address: string, amount: bigint) {
			const provider = _provider;
			if (!provider) {
				return;
			}

			try {
				await FX.createBuyOrder(address, {
					value: amount,
				});

				await FX.settleOrders(address, true);
			} catch (err) {
				return getDAppError(err);
			}
		},

		async sellFX(address: string, amount: bigint) {
			const provider = _provider;
			if (!provider) {
				return;
			}

			try {
				await FX.createSellOrder(address, amount);
				await FX.settleOrders(address, false);
			} catch (err) {
				return getDAppError(err);
			}
		},
	},
});

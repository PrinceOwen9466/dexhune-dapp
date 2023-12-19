import { ChainNetwork } from "@/models";
import { defineStore } from "pinia";
import {
	ethers,
	BrowserProvider,
	Eip1193Provider,
	Interface,
	Contract,
	formatUnits,
} from "ethers";
import {
	ABI_DEXHUNE_ERC20,
	ABI_DEXHUNE_EXCHANGE,
	ABI_DEXHUNE_PRICE_DAO,
} from "@/models/abis";
import { ContractFactory } from "ethers";
import {
	BYTECODE_DEXHUNE_EXCHANGE,
	BYTECODE_DEXHUNE_PRICE_DAO,
} from "@/models/bytecodes";
import { DexhunePriceDAO } from "@/models/DexhunePriceDAO";
import { DexhuneExchange } from "@/models/DexhuneExchange";
import { DexhuneERC20 } from "@/models/DexhuneERC20";
import { getDAppError } from ".";

// import DEXHUNE_EXCHANGE_ABI from "src/assets/abi/DexhuneExchange.abi.json";
// import DEXHUNE_PRICE_DAO_ABI from "src/assets/abi/DexhunePriceDAO.abi.json";
// import DEXHUNE_TOKEN_ABI from "src/assets/abi/DexhuneToken.abi.json";

let DEXHUNE_EXCHANGE_ADDRESS: string;
let DEXHUNE_DAO_ADDRESS: string;
let DEXHUNE_TOKEN_ADDRESS: string;

if (import.meta.env.DEV) {
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
	provider?: BrowserProvider;

	dao?: DexhunePriceDAO;
	fx?: DexhuneExchange;
	token?: DexhuneERC20;
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
	network: import.meta.env.DEV ? TESTNET_NETWORK : MAIN_NETWORK,
	projectId: import.meta.env.VITE_APP_PROJECT_ID,
	price: 0,
});

function getLink(addr: string) {
	let baseUrl: string;

	if (import.meta.env.DEV) {
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
	},
	actions: {
		async queryPrice() {
			const price = await FX.viewPrice();
			// TODO: Prep for overflows
			this.price = Number(formatUnits(price, 18));
		},

		async assignProvider(prov: Eip1193Provider) {
			const provider = new BrowserProvider(prov);
			const signer = await provider.getSigner();

			this.address = await signer.getAddress();
			this.provider = provider;

			PriceDAO = PriceDAO.connect(signer);
			Token = Token.connect(signer);
			FX = FX.connect(signer);

			this.connected = true;
		},

		async buyFX({ address, amount }: { address: string; amount: number }) {
			const provider = this.provider;
			if (!provider) {
				return;
			}

			console.log("Buying");

			try {
				console.log("Creating buy order: ", address, amount);
				await FX.createBuyOrder(address, {
					value: amount,
				});
			} catch (err) {
				return getDAppError(err);
			}
		},

		async sellFX({ address, amount }: { address: string; amount: number }) {
			const provider = this.provider;
			if (!provider) {
				return;
			}

			try {
				await FX.createSellOrder(address, amount);
			} catch (err) {
				return getDAppError(err);
			}
		},
	},
});

import { ChainNetwork } from "@/models";
import { defineStore } from "pinia";

export interface WalletState {
	connected: boolean;
	network: ChainNetwork;
	projectId: string;
	price: number;
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
	network: import.meta.env.DEV ? TESTNET_NETWORK : MAIN_NETWORK,
	projectId: import.meta.env.VITE_APP_PROJECT_ID,
	price: 0,
});

export const useWalletStore = defineStore("Wallet", {
	state: initialState,
	actions: {
		async init() {
			// const provider = new ethers.BrowserProvider(window.ethereum);
			// provider.getSigner()
		},

		async queryPrice() {
			//
		},
	},
});

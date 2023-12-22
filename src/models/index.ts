export interface ChainNetwork {
	rpcUrl: string;
	currency: string;
	name: string;
	chainId: number;
	explorerUrl: string;
}

export interface Token {
	tokenNo: number;
	name: string;
	sym: string;
	addr: string;
	parityAddr: string;
	reward: number;
	rewardThreshold: number;
	scheme: number;
	price: number;
	orders: number;
	decimals?: number;
}

export interface ExchangeDataModel {
	address: string;
	amount: number;
}

export type ErrorMap<T extends object> = Record<
	keyof T,
	string | null | undefined
>;

export type BusyMap<T extends object> = Record<keyof T, boolean | undefined>;

export function hasError<T extends object>(map: ErrorMap<T>) {
	for (const key in map) {
		if (Object.prototype.hasOwnProperty.call(map, key)) {
			const value = map[key as keyof T];

			if (!!value) {
				return true;
			}
		}
	}

	return false;
}

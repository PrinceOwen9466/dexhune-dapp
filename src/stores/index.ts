import { JsonRpcError } from "ethers";
import "pinia";
import { createPinia } from "pinia";

// declare module "pinia" {
// 	export interface PiniaCustomProperties {
// 		meetingHub: MeetingHubInstance;
// 		mediasoup: MediasoupDevice;
// 	}
// }

export interface DAppErrResponse {
	code: number;
	message: string;
}

export const UnknownApiError: DAppErrResponse = {
	code: -99999,
	message: "An unexpected error occurred",
};

export function getDAppError(err: unknown | Error) {
	try {
		// console.log({ err });
		const kerr = <Error>err;
		let message = "";

		if ("shortMessage" in kerr) {
			message = kerr.message as string;
		}

		return {
			code: 0,
			message,
		};
	} catch {
		return UnknownApiError;
	}

	return err as DAppErrResponse;
}

export default createPinia;

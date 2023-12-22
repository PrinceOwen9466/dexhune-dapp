import { Vue3Mq, useMq as useMqFn } from "vue3-mq";
import { bootstrap } from "./boot";

const options = {
	breakpoints: {
		// sm: 450,
		// md: 1250,
		// lg: Infinity,
		// sm: 320,
		xxs: 0,
		sm: 450,
		md: 768,
		// md: 768,
		lg: 1536,
	},
	defaultBreakpoint: "sm",
};

export function useMq() {
	return useMqFn() as VueMqContext;
}

export default bootstrap(({ app }) => {
	app.use(Vue3Mq, options);
});

export interface VueMqContext {
	current: string;
	xs: boolean;
	smMinus: boolean;
	smPlus: boolean;
	sm: boolean;
	mdMinus: boolean;
	mdPlus: boolean;
	md: boolean;
	lgMinus: boolean;
	lgPlus: boolean;
	lg: boolean;
	xlMinus: boolean;
	xlPlus: boolean;
	xl: boolean;
	xxl: boolean;
	orientation: string;
	isLandscape: boolean;
	isPortrait: boolean;
	theme: string;
	isDark: boolean;
	isLight: boolean;
	motionPreference: string;
	isMotion: boolean;
	isInert: boolean;
}

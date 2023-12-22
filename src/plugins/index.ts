import { App } from "vue";
import router from "./router";
import PrimeVueFactory from "./prime";
import VueMqFactory from "./vue-mq";
import PiniaFactory from "src/stores";

import "src/css/app.scss";

export default (app: App) => {
	const store = PiniaFactory();

	const params = {
		app,
		store,
		router,
	};

	PrimeVueFactory(params);
	VueMqFactory(params);

	app.use(store);
	app.use(router);
	app.provide(Symbol("router"), router);
};

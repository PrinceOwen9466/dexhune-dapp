import { App } from "vue";
import router from "./router";
import PrimeVueFactory from "./prime";
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

  app.use(store);
  app.use(router);
  app.provide(Symbol("router"), router);
};

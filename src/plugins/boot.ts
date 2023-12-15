import { Pinia } from "pinia";
import { App } from "vue";
import { Router } from "vue-router";

export type PluginBootstrap = (params: BootstrapParams) => void;
const bootstrap = (callback: PluginBootstrap) => {
  return callback
}; 

interface BootstrapParams {
  app: App;
  store: Pinia;
  router: Router;
}

export { bootstrap };

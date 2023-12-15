import { bootstrap } from "./boot";
// import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";

// import "primevue/resources/themes/lara-light-green/theme.css"


export default bootstrap(({ app }) => {
  // app.use(PrimeVue);
  app.component("PrimeButton", Button);
  app.component("PrimeCard", Card);
});

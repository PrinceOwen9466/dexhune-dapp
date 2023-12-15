import { bootstrap } from "./boot";
// import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import Tooltip from "primevue/tooltip";

import TabMenu from "primevue/tabmenu";
import InputText from "primevue/inputtext";

// import "primevue/resources/themes/lara-light-green/theme.css"

export default bootstrap(({ app }) => {
	// app.use(PrimeVue);
	app.component("PrimeButton", Button);
	app.component("PrimeCard", Card);
	app.component("PrimeTabMenu", TabMenu);
	app.component("PrimeInput", InputText);

	app.directive("tooltip", Tooltip);
});

import { bootstrap } from "./boot";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import Tooltip from "primevue/tooltip";

import TabMenu from "primevue/tabmenu";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";

import Skeleton from "primevue/skeleton";

import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

// import "primevue/resources/themes/lara-light-green/theme.css"

export default bootstrap(({ app }) => {
	// app.use(PrimeVue);
	app.component("PrimeButton", Button);
	app.component("PrimeCard", Card);
	app.component("PrimeTabMenu", TabMenu);
	app.component("PrimeInput", InputText);
	app.component("PrimeInputNumber", InputNumber);
	app.component("PrimeInputGroup", InputGroup);
	app.component("PrimeInputGroupAddon", InputGroupAddon);
	app.component("PrimeSkeleton", Skeleton);

	app.component("PrimeToast", Toast);

	app.directive("tooltip", Tooltip);

	app.use(ToastService);
	app.use(PrimeVue);
});

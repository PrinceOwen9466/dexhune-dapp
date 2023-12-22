import { bootstrap } from "./boot";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import Tooltip from "primevue/tooltip";
import Dropdown from "primevue/dropdown";

import TabMenu from "primevue/tabmenu";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import ProgressSpinner from "primevue/progressspinner";

import Skeleton from "primevue/skeleton";

import Toast from "primevue/toast";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";

import ConfirmDialog from "primevue/confirmdialog";

import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";

import "primeicons/primeicons.css";

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
	app.component("PrimeDropdown", Dropdown);

	app.component("PrimeMenubar", Menubar);
	app.component("PrimeMenu", Menu);

	app.component("PrimeProgressSpinner", ProgressSpinner);
	app.component("PrimeConfirmDialog", ConfirmDialog);

	app.directive("tooltip", Tooltip);

	app.use(ToastService);
	app.use(ConfirmationService);
	app.use(PrimeVue);
});

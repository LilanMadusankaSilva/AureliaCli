import { Aurelia, PLATFORM } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";

export class App {
	title: string = "Adra";
	
	configureRouter(config: RouterConfiguration, router: Router) {
		config.title = this.title;
		config.map([{
			route: ["", "home"],
			name: "home",
			settings: { icon: "fa fa-home" },
			moduleId: PLATFORM.moduleName("../home/home"),
			nav: true,
			title: "Home"
		}, {
			route: "fetch-data",
			name: "fetchdata",
			settings: { icon: "fa fa-list" },
			moduleId: PLATFORM.moduleName("../fetchdata/fetchdata"),
			nav: false,
			title: "Fetch data"
		}]);
	}
}

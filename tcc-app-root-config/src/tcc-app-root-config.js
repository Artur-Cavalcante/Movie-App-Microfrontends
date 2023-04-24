import { registerApplication, start } from "single-spa";
import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
  loaders: { topNav: "", }, errors: { topNav: "" }
});

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

applications.forEach(registerApplication);

System.import("@tcc-app/core")
  .then(() => {
    layoutEngine.activate();
    start();
  }
);
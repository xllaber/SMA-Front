import {RouterModule, Routes} from "@angular/router";
import {ClientsComponent} from "./components/clients/clients.component";
import {DirectivesComponent} from "./components/directives/directives.component";
import {FormComponent} from "./components/clients/form/form.component";

const APP_ROUTES:Routes = [
  {path: "clients", component: ClientsComponent},
  {path: "clients/form", component: FormComponent},
  {path: "clients/form/:id", component: FormComponent},
  {path: "directives", component: DirectivesComponent},
  {path: "", pathMatch: "full", redirectTo: "/clients"}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

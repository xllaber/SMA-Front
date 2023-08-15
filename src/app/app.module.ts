import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {APP_ROUTING} from "./app.routes";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ClientsComponent } from './components/clients/clients.component';
import { HttpClientModule } from "@angular/common/http";
import { FormComponent } from './components/clients/form/form.component';
import {FormsModule} from "@angular/forms";
import {registerLocaleData} from "@angular/common";
import localeEs from "@angular/common/locales/es"

registerLocaleData(localeEs, "es");

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DirectivesComponent,
    ClientsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "es"}],
  bootstrap: [AppComponent]
})
export class AppModule { }

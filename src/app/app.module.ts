import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { NavbarComponent } from './componente/navbar/navbar.component';
import { LenguajesComponent } from './componente/lenguajes/lenguajes.component';
import { AppRoutingModule } from './app-routing.module';
import { DescripcionComponent } from './componente/descripcion/descripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    LenguajesComponent,
    DescripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

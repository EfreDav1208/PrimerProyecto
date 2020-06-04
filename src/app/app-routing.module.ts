import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { LenguajesComponent } from './componente/lenguajes/lenguajes.component';
import { DescripcionComponent } from './componente/descripcion/descripcion.component';

const routes: Routes=[
  { path: 'inicio', component:InicioComponent},
  { path: 'lenguajes', component:LenguajesComponent},
  { path: 'descripcion', component:DescripcionComponent},
  { path: '**', pathMatch:'full', redirectTo:'inicio'},

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

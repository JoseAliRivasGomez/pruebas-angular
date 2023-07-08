import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RUTAS } from './integracion-avanzadas/rutas/app.routes';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(RUTAS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

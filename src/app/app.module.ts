import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './unitarias-avanzadas/espias/medicos.component';
import { IncrementadorComponent } from './integracion-basicas/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MedicoComponent } from './integracion-basicas/medico/medico.component';
import { HospitalComponent } from './integracion-basicas/hospital/hospital.component';
import { NavbarComponent } from './integracion-avanzadas/navbar/navbar.component';
import { RouterMedicoComponent } from './integracion-avanzadas/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    IncrementadorComponent,
    MedicoComponent,
    HospitalComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

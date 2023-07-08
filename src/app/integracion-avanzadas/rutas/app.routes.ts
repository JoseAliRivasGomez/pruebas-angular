
import { Routes } from '@angular/router';
import { HospitalComponent } from '../../integracion-basicas/hospital/hospital.component';
import { MedicoComponent } from '../../integracion-basicas/medico/medico.component';
import { IncrementadorComponent } from '../../integracion-basicas/incrementador/incrementador.component';


export const RUTAS: Routes = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'medico/:id', component: MedicoComponent },
    { path: '**', component: IncrementadorComponent }
];

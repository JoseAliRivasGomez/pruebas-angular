import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface MedicosResponse {
  medicos?: any[]; // Especifica el tipo correcto de los objetos medicos
  medico?: any; // Especifica el tipo correcto de los objetos medicos
}

@Injectable()
export class MedicosService {

  constructor(public http: HttpClient) { }

  getMedicos() {
    return this.http.get<MedicosResponse>('...')
                .pipe(map(resp => resp.medicos));
  }

  agregarMedico(medico: any) {
    return this.http.post<MedicosResponse>('...', medico)
                .pipe(map(resp => resp.medico)); // Corregir a 'resp.medicos'
  }

  borrarMedico(id: string) {
    return this.http.delete<MedicosResponse>('...')
                .pipe(map(resp => resp.medico)); // Corregir a 'resp.medicos'
  }
}

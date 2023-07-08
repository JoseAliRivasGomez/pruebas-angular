import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface MedicosResponse {
  medicos?: any[]; // Especifica el tipo correcto de los objetos medicos
}

@Injectable()
export class MedicoService {

  constructor( public http: HttpClient ) { }

  getMedicos() {
    return this.http.get<MedicosResponse>('...')
                .pipe(map(resp => resp.medicos));
  }

}

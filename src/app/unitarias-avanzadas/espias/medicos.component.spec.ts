import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable, from, empty, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Importa HttpClientModule y HttpClient

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    let servicio: MedicosService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach( () => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);
        servicio = new MedicosService(httpClientSpy); // Pasa cualquier dependencia necesaria en el constructor de MedicosService
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los médicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn(servicio, 'getMedicos').and.returnValue(from([medicos]));

        componente.ngOnInit();

        //console.log("Medicos: " + componente.medicos);

        expect( componente.medicos.length ).toBeGreaterThan(0);

    });


    it('Debe llamar al servidor para agregar un médico', () => {
        spyOn(servicio, 'agregarMedico').and.returnValue(empty());

        componente.agregarMedico();

        expect(servicio.agregarMedico).toHaveBeenCalled();
    });

    it('Debe agregar un nuevo médico al arreglo de médicos', () => {
        const medico = { id: 1, nombre: 'Juan' };

        spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adición, la propiedad mensajeError debe ser igual al error del servicio', () => {
        const miError = 'No se pudo agregar el médico';

        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(miError);
    });

    it('Debe llamar al servidor para borrar un médico', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        spyOn(servicio, 'borrarMedico').and.returnValue(empty());

        componente.borrarMedico('1');

        expect(servicio.borrarMedico).toHaveBeenCalledWith('1');
    });

    it('NO debe llamar al servidor para borrar un médico', () => {
        spyOn(window, 'confirm').and.returnValue(false);
        spyOn(servicio, 'borrarMedico').and.returnValue(empty());

        componente.borrarMedico('1');

        expect(servicio.borrarMedico).not.toHaveBeenCalledWith('1');
    });

});

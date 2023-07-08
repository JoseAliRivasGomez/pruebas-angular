import { RUTAS } from './app.routes';
import { MedicoComponent } from '../../integracion-basicas/medico/medico.component';




describe( 'Rutas principales', () => {

    it( 'Debe de existir la ruta medico/:id', () => {

        expect( RUTAS ).toContain({
            path: 'medico/:id',
            component: MedicoComponent
        });


    });




});

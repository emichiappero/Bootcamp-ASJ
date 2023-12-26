import { RouterModule, Routes } from '@angular/router';

//importamos componentes
import { HijoComponent } from './components/hijo/hijo.component'
import { InicioComponent } from './components/inicio/inicio.component';

// http://localhost:4200/
const routes: Routes = [
  { path: 'inicio/:idProducto/:producto/pais/:pais', component: InicioComponent },
  { path: 'hijo', component: HijoComponent },
  { path: '', component: HijoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'hijo' },
];

export const routing = RouterModule.forRoot(routes);
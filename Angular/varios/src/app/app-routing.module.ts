import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { ContactoComponent } from './components/contacto/contacto.component';

// URL = https://localhost:4200/
const routes: Routes = [
  //{ path: 'URL', component: }
  { path: 'inicio/:idProducto/:producto', component: InicioComponent }, // https://localhost:4200/inicio/123 ---> muestro InicioComponent
  { path: 'hijo', component: HijoComponent }, // https://localhost:4200/hijo ---> muestro HijoComponent
  { path: 'contactenos', component: ContactoComponent }, // https://localhost:4200/contactenos ---> muestro ContactoComponent
  { path: '', component: HijoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'contactenos' },
  //{ path: 'ruta1', component: Componente1, outlet: 'otroOutlet' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

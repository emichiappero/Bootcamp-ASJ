import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { ListaComponent } from './components/lista/lista.component';
import { PruebaComponent } from './components/prueba/prueba.component';

const routes: Routes = [
  // Estas son las rutas de nuestra aplicación
  { path: 'contenido', component: ContenidoComponent },
  { path: 'ejemplo', component: EjemploComponent },
  { path: 'servicios', component: PruebaComponent },
  // Esta objeto redirecciona a una ruta especifica cuando no encuentra una ruta específica
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  //Ruta con parametros
  { path: 'lista/:id', component: ListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

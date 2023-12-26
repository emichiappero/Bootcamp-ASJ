// 1. Importamos las librerias necesarias para el uso de rutas
import { RouterModule, Routes } from '@angular/router';

// 2. Importamos los componentes para las rutas
import { ContenidoComponent } from './components/contenido/contenido.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { PruebaComponent } from './components/prueba/prueba.component';

// 3. Creamos una constante de tipo Routes que contendrá las rutas
const APP_ROUTE: Routes = [
  // Estas son las rutas de nuestra aplicación
  { path: 'contenido', component: ContenidoComponent },
  { path: 'ejemplo', component: EjemploComponent },
  { path: 'servicios', component: PruebaComponent },
  // Esta objeto redirecciona a una ruta especifica cuando no encuentra una ruta específica
  { path: '**', pathMatch: 'full', redirectTo: 'contenido' },
];

// 4. Exporta una constante creada a partir de RouterModule de las rutas descritas antes
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);

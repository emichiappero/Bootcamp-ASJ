import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  nombre = 'María Laura';
  apellido = 'Robledo ZARASTECHI';
  total = 123.45;
  fecha = new Date();
  lorem = 'lorem ipsum bvla bla asdasds asdasdlkajsd';
  objeto = {
    nombre: this.nombre,
    apellido: this.apellido,
    fecha: this.fecha,
    monto: this.total,
  };

  //Filtro de busqueda personalizado
  search: string = '';
  estudiantes = [
    {
      nombre: 'Juana',
      apellido: 'Martinez',
      estado: 'Aprobado',
    },
    {
      nombre: 'Lautaro',
      apellido: 'Martinez',
      estado: 'Desaprobado',
    },
    {
      nombre: 'Juan',
      apellido: 'Perez',
      estado: 'Aprobado',
    },
    {
      nombre: 'Roberto',
      apellido: 'Gutierrez',
      estado: 'Desaprobado',
    },
  ];

  // NOTA: Acordarse de importar FormsModule en app.module.ts para poder utilizar ngModel
}

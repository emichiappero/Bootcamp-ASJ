import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {
  constructor(private ruta: ActivatedRoute) {
    console.log(ruta);
  }

  valor_input = '';
  colores: string[] = ['azul', 'violeta', 'rosa'];
  numero = 1;
  agregar() {
    this.colores.push(this.valor_input);
    this.valor_input = '';
  }

  alert() {
    this.numero = this.numero > 10 ? 1 : 11;
  }

  idURL = this.ruta.snapshot.params['id'];
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  constructor(private ruta: ActivatedRoute) {
    console.log(ruta);
  }

  parametroURL = this.ruta.snapshot.params['idProducto'];

  producto = this.ruta.snapshot.params['producto'];
}

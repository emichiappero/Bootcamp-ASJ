import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'este es un titulo que esta en el padre';

  msjContenido: string = '';

  recibirMsj(msj: string) {
    this.msjContenido = msj;
  }

  contenidoInput = '';
  mostrar(txt: string) {
    this.contenidoInput = txt;
    console.log(txt);
  }

  dato: string = 'hola'; //llamada a la BD
}

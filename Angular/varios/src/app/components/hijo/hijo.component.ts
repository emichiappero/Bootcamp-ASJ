import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css',
})
export class HijoComponent {
  //COMUNICACIÓN PADRE a HIJO
  //Declarar una variable que recibe el dato enviado por el padre
  @Input() datoEnviado: any = {};
  @Input() otro: string = '';

  //COMUNICACIÓN HIJO a PADRE

  //Crear una variable que vamos a enviarle al padre
  @Output() mensaje: EventEmitter<string>;

  constructor() {
    this.mensaje = new EventEmitter();
  }

  enviarMsj() {
    this.mensaje.emit('Comunicación Hijo-Padre');
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contenido',
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css',
})
export class ContenidoComponent {
  //declaramos la variable que va a recibir los datos enviados por el padre
  @Input() dato_enviado: any = {};

  // Creamos la variable a enviar al padre
  @Output() mensaje: EventEmitter<string>;

  constructor() {
    // Inicializamos la emicion de eventos
    this.mensaje = new EventEmitter();
  }

  emitirMensaje() {
    // Usando la variable emitimos el valor que queremos enviar
    this.mensaje.emit('Hola viejo, te llama tu hijo!!!');
  }

  titulo = "Este es el componente 'Contenido'";

  num = 0;

  flag = false;

  producto = '';

  compras = ['Fruta', 'Carne', 'Bebidas', 'Palta', 'Helado', 'otro producto'];

  persona = {
    nombre: 'Emiliano',
    apellido: 'Chiappero',
    edad: 38,
  };

  generarAleatorio() {
    this.num = Math.floor(Math.random() * 10);
  }

  agregarProducto() {
    this.compras.push(this.producto);
    this.producto = '';
  }
}

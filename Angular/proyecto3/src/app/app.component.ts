import { Component, OnInit } from '@angular/core';
import { ServEjemploService } from './services/serv-ejemplo.service';
import { datos } from './datosEjemplo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'proyecto3';

  datos: any = [];

  personajes: any = [];

  constructor(public miServicio: ServEjemploService) {}

  ngOnInit(): void {
    console.log('Trayendo datos : ', datos);
    //llamamos al método "getDato()" del Servicio
    this.datos = this.miServicio.getDatos();

    this.personajes = this.miServicio.getDataAPI().subscribe((data) => {
      console.log(data); //info: {}, results: [{},{},{}]
      this.personajes = data;
    });
  }
}

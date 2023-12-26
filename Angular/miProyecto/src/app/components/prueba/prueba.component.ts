import { Component } from '@angular/core';
import { PruebaService } from '../../services/prueba.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css',
})
export class PruebaComponent {
  datos: any = [];
  persona: any = [];
  id = 1;
  character: any = [];

  constructor(public miServicio: PruebaService) {
    // Obtengo todos los personajes mediante el servicio
    this.miServicio.getDataAPI().subscribe((data) => {
      // Almaceno los personajes
      this.persona = data;
      console.log(data);
    });
  }

  //Se ejecuta cuando el constructor termina de renderizarse
  ngOnInit(): void {
    this.datos = this.miServicio.getData();
    console.log('COMPONENTE');
    console.log(this.datos);

    this.miServicio.getCharacter(this.id).subscribe((data) => {
      this.character = data;
    });
  }
}

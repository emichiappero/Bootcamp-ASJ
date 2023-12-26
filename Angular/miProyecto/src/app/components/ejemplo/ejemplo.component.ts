import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrl: './ejemplo.component.css',
})
export class EjemploComponent {
  city: string = '';

  update(city: string) {
    console.log('City: ' + city);
    this.city = city;
  }
}

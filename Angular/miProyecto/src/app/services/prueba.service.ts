import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PruebaService {
  constructor(private http: HttpClient) {
    console.log('Servicio listo para usar!!!');
  }

  public getDataAPI() {
    return this.http.get('https://rickandmortyapi.com/api/character/?page=1');
  }

  public getCharacter(id: number) {
    return this.http.get('https://rickandmortyapi.com/api/character/' + id);
  }

  getData() {
    let data = [
      { nombre: 'Juan', apellido: 'Perez' },
      { nombre: 'Roberto', apellido: 'Gomez Bolaño' },
      { nombre: 'Claudia', apellido: 'Longeti' },
    ];
    return data;
  }
}

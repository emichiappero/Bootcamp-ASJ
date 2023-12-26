import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServEjemploService {
  constructor(private http: HttpClient) {
    console.log('Servicio funcionando');
  }

  public getDatos() {
    let data = [
      { nombre: 'Tarea 1', terminada: true },
      { nombre: 'Tarea 2', terminada: false },
      { nombre: 'Tarea 3', terminada: true },
      { nombre: 'Tarea 4', terminada: true },
    ];

    return data;
  }

  public getDataAPI() {
    return this.http.get('https://rickandmortyapi.com/api/character/?page=1');
  }

  public getPersonajeAPI(id: number) {
    //Un personaje particular
    return this.http.get('https://rickandmortyapi.com/api/character/' + id);
  }
}

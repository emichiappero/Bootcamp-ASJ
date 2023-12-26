import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosServService {
  constructor(private http: HttpClient) {}

  URL_API = 'https://reqres.in/api/users';

  datosUsuarios: any = {
    id: -1,
    name: '',
    job: '',
  };

  //GET Usuarios
  public obtenerUsuarios(): Observable<any> {
    console.log('HTTP GET');
    return this.http.get(this.URL_API);
  }

  //POST Usuarios
  public crearUsuario(usuario: any): Observable<any> {
    console.log('HTTP POST');
    return this.http.post(this.URL_API, usuario);
  }

  //DELETE Usuarios
  public eliminarUsuario(id: any): Observable<any> {
    console.log('HTTP DELETE');
    return this.http.delete(this.URL_API + '/' + id);
  }

  //PUT Usuarios
  public modificarUsuario(usuario: any): Observable<any> {
    return this.http.put(this.URL_API + '/' + this.datosUsuarios.id, usuario);
  }
}

import { Component, OnInit } from '@angular/core';
import { UsuariosServService } from '../../services/usuarios-serv.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit {
  constructor(public userServicio: UsuariosServService) {}

  usuarios: any = [];

  ngOnInit(): void {
    this.list();
  }

  clearForm(form: NgForm) {
    form.reset();
  }

  //Listado Usuarios
  list() {
    this.userServicio.obtenerUsuarios().subscribe(
      (data) => {
        //console.log(data);
        this.usuarios = data.data;
      },
      (err) => console.log(err)
    );
  }

  //Nuevo Usuario
  create(form: NgForm) {
    console.log(form.value);
    if (form.value.id != -1) {
      this.userServicio.modificarUsuario(form.value).subscribe(
        (data) => {
          console.log('Respuesta de Modificar', data);
          form.reset();
          this.list();
        },
        (err) => console.log(err)
      );
    } else {
      this.userServicio.crearUsuario(form.value).subscribe(
        (data) => {
          console.log('Respuesta de crear', data);
          form.reset();
          this.list();
        },
        (err) => console.log(err)
      );
    }
  }

  //Eliminar Usuario
  delete(id: any) {
    let confirmacion = confirm(
      '¿Está seguro que desea eliminar el usuario #' + id + ' ?'
    );
    if (confirmacion) {
      this.userServicio.eliminarUsuario(id).subscribe(
        (data) => {
          console.log('Respuesta de eliminar', data);
          this.list();
        },
        (err) => console.log(err)
      );
    }
  }

  //Modificar Usuario
  modificar(usuario: any) {
    console.log(usuario);
    //this.userServicio.datosUsuarios = usuario;
    this.userServicio.datosUsuarios = {
      id: usuario.id,
      name: usuario.first_name,
      job: 'algún otro trabajo',
    };
  }
}

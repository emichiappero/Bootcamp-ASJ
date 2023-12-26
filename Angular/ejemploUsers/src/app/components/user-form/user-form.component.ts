import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  constructor(public userService: UserService, private route: Router) {}

  mensaje: string = '';

  //Capturar parametro ID

  //Si tiene ---> Modifcar
  //OnInit --> Llamo un metodo del servicio, que traiga 1 usuario con id = parametro ID

  //Sino tiene --> Creo

  resetForm(form: NgForm) {
    form.reset();
    this.userService.datosUsuario = {
      id: -1,
    };

    setTimeout(() => {
      this.mensaje = '';
      console.log('Esperandooooo...');
    }, 2500);
  }

  //Nuevo Usuario
  create(form: NgForm) {
    if (form.value.id != -1) {
      //actualizo
      this.userService.updateUser(form.value).subscribe((res) => {
        console.log('Respuesta del PUT' + res);
        this.mensaje = 'Usuario actualizado correctamente';
        this.resetForm(form); //llamo al metodo resetForm
        this.route.navigate(['/users']); //actualizo listado
      });
    } else {
      //crear un nuevo usuario
      if (!form.valid) {
        console.log('Formulario invalido');
        return;
      } else {
        const usu = {
          name: form.value.name,
          job: form.value.job,
        };
        this.userService.createUser(usu).subscribe((res) => {
          console.log('Respuesta del POST' + res);
          this.mensaje = 'Usuario creado correctamente';
          this.resetForm(form); //limpia los inputs del formulario
          this.route.navigate(['/users']); //actualizo listado
        });
        console.log('PROBANDOOOOO');
      }
    }
  }
}

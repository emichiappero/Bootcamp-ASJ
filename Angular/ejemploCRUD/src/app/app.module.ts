import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

import { UsuariosServService } from './services/usuarios-serv.service';

@NgModule({
  declarations: [AppComponent, UsuariosComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UsuariosServService],
  bootstrap: [AppComponent],
})
export class AppModule {}

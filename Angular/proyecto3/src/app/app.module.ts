import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServEjemploService } from './services/serv-ejemplo.service';
import { PipesComponent } from './components/pipes/pipes.component';
import { MiPipePipe } from './pipes/mi-pipe.pipe';
import { CuadradoPipe } from './pipes/cuadrado.pipe';
import { BuscarPipe } from './pipes/buscar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    MiPipePipe,
    CuadradoPipe,
    BuscarPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ServEjemploService],
  bootstrap: [AppComponent],
})
export class AppModule {}

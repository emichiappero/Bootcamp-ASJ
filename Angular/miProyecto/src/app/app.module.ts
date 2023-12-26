import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { ListaComponent } from './components/lista/lista.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './search.pipe';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { PruebaComponent } from './components/prueba/prueba.component';

//servicio
import { PruebaService } from './services/prueba.service';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    ListaComponent,
    SearchPipe,
    EjemploComponent,
    PruebaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PruebaService],
  bootstrap: [AppComponent],
})
export class AppModule {}

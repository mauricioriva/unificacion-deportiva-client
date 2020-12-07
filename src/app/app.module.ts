import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanchaComponent } from './components/cancha/cancha.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { TorneoComponent } from './components/torneo/torneo.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { PartidoComponent } from './components/partido/partido.component';

@NgModule({
  declarations: [
    AppComponent,
    CanchaComponent,
    CategoriaComponent,
    TorneoComponent,
    EquipoComponent,
    //PartidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

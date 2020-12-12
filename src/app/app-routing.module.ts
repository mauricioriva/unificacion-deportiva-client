import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { TorneoComponent } from './components/torneo/torneo.component';
import { CanchaComponent } from './components/cancha/cancha.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { ListEquipoComponent } from './components/list-equipo/list-equipo.component';
import { ListTorneoComponent } from './components/list-torneo/list-torneo.component';
import { PartidoEquipoComponent } from './components/partido/partido-equipo/partido-equipo.component';
import { PartidoTorneoComponent } from './components/partido/partido-torneo/partido-torneo.component';

const routes: Routes = [
  {path: '', component: CategoriaComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'torneo/categoria/:id', component: TorneoComponent},
  {path: 'cancha/categoria/:id', component: CanchaComponent},
  {path: 'equipo/categoria/:id', component: EquipoComponent},
  {path: 'partido/torneo/:id', component: PartidoTorneoComponent},
  {path: 'partido/equipo/:id', component: PartidoEquipoComponent},
  {path: 'equipo', component: ListEquipoComponent},
  {path: 'torneo', component: ListTorneoComponent},
  
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

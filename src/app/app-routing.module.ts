import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { TorneoComponent } from './components/torneo/torneo.component';
import { CanchaComponent } from './components/cancha/cancha.component';
import { EquipoComponent } from './components/equipo/equipo.component';
//import { PartidoComponent } from './components/partido/partido.component';

const routes: Routes = [
  {path: '', component: CategoriaComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'torneo/categoria/:id', component: TorneoComponent},
  {path: 'cancha/categoria/:id', component: CanchaComponent},
  {path: 'equipo/categoria/:id', component: EquipoComponent},
  //{path: 'partido/torneo/:id', component: PartidoComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

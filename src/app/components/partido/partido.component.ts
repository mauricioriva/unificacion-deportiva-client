import { Component, OnInit } from '@angular/core';

import { Partido } from '../../_models/partido';
import { PartidoService } from '../../_services/partido.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {

  partidos: Partido[] | any;
  partido: Partido | any;

  idTorneo: number;

  constructor(private partidoService: PartidoService,
    private activeRouter: ActivatedRoute,) { }

  ngOnInit(): void {
    this.idTorneo = this.activeRouter.params['_value'].id;
    this.getPartidosTorneo();
  }

  getPartidosTorneo(){
    this.partidos = [];
    this.partidoService.getPartidosTorneo(this.idTorneo).subscribe(
      res => {
        this.partidos = res;
      },
      err => console.error(err)
    )
    //Temporal
    this.partidos = [{
      id: 1,
      id_torneo: 1,
      id_cancha: 1,
      id_equipo_local: 1,
      id_equipo_visita: 2,
      horario_partido: "7:00 - 9:00",
      goles_local: 0,
      goles_visita: 1,
      jornada: 3,
      estado: "En juego",
      estatus: 2
    }]
    //////
  }

}

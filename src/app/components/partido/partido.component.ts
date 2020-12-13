import { Component, OnInit } from '@angular/core';

import { Partido } from '../../_models/partido';
import { PartidoService } from '../../_services/partido.service';
import { TorneoService } from '../../_services/torneo.service';
import { EquipoService } from '../../_services/equipo.service';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {

  partidos: Partido[] | any;
  partido: Partido | any;

  constructor(private partidoService: PartidoService,
    private torneoService: TorneoService,
    private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.getPartidos();
    //Temporal
    this.partidos = [{
      id: 1,
      equipo_local: "Pumas",
      equipo_visita: "America",
      cancha: "C.U.",
      goles_visita: 1,
      goles_local: 3,
      horario_partido: "12-12-2020",
      jornada: 2,
      estatus: 4,
      estado: 7,
      torneo: "Liga MX"
    }]
  }

  getPartidos(){
    this.partidos = [];
    this.partidoService.getPartidos().subscribe(
      res => {
        this.partidos = res;
        // Por cada uno de los partidos, usar los service 
        //para hacer la consulta de los nombres del torneo y de los equipos
        for (let index = 0; index < this.partidos.length; index++) {
          this.torneoService.getTorneo(this.partidos[index].id_torneo).subscribe(
            res => {
              this.partidos[index].torneo = res.nombre_torneo
            },
            err => console.error(err)
          )
          this.equipoService.getEquipo(this.partidos[index].id_equipo_local).subscribe(
            res => {
              this.partidos[index].equipo_local = res.nombre_equipo
            },
            err => console.error(err)
          )
          this.equipoService.getEquipo(this.partidos[index].id_equipo_visita).subscribe(
            res => {
              this.partidos[index].equipo_visita = res.nombre_equipo
            },
            err => console.error(err)
          )
        }
      },
      err => console.error(err)
    )
  }

}

import { Component, OnInit } from '@angular/core';

import { Equipo } from '../../_models/equipo';
import { EquipoService } from '../../_services/equipo.service';

@Component({
  selector: 'app-list-equipo',
  templateUrl: './list-equipo.component.html',
  styleUrls: ['./list-equipo.component.css']
})
export class ListEquipoComponent implements OnInit {

  equipos: Equipo[] | any;
  equipo: Equipo | any;

  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos(){
    this.equipos = [];
    this.equipoService.getEquipos().subscribe(
      res => {
        this.equipos = res;
      },
      err => console.error(err)
    )
  }

}

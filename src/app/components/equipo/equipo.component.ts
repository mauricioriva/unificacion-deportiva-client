import { Component, OnInit } from '@angular/core';

import { Equipo } from '../../_models/equipo';
import { EquipoService } from '../../_services/equipo.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipos: Equipo[] | any;
  equipo: Equipo | any;

  idCategoria: number;

  constructor(private equipoService: EquipoService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.idCategoria = this.router.params['_value'].id;
    this.getEquiposCategoria();
  }

  getEquiposCategoria(){
    this.equipos = [];
    this.equipoService.getEquiposCategoria(this.idCategoria).subscribe(
      res => {
        this.equipos = res;
      },
      err => console.error(err)
    )
    // Temporal
    this.equipos = [{
      id: 1,
      id_categoria: 1,
      nombre_equipo: "Pumas",
      color_playera: "Azul",
      color_short: "Dorado",
      logo: "PUMA",
      grupo: "Liga MX",
      estatus: 2,
      archivo_registros: "Archivo.pdf"
    }]
    ///////////////
  }

}

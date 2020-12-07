import { Component, OnInit } from '@angular/core';

import { Cancha } from '../../_models/cancha';
import { CanchaService } from '../../_services/cancha.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cancha',
  templateUrl: './cancha.component.html',
  styleUrls: ['./cancha.component.css']
})
export class CanchaComponent implements OnInit {

  canchas: Cancha[] | any;
  cancha: Cancha | any;

  constructor(private canchaService: CanchaService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    var idCategoria = this.router.params['_value'].id;
    this.getCanchasCategoria(idCategoria);
  }

  getCanchasCategoria(idCategoria: number){
    this.canchas = [];
    let canchas: Cancha[] | any = [];
    this.canchaService.getCanchasCategoria(idCategoria).subscribe(
      res => {
        this.canchas = res;
        canchas = res;
      },
      err => console.error(err)
    )
    //////////// Temporal
    this.canchas = [{
      id: 1,
      id_categoria: 1,
      nombre_cancha: "Estadio",
      domicilio_cancha: "Mexico",
      estatus: "1"
    }]

    canchas = [{
      id: 1,
      id_categoria: 1,
      nombre_cancha: "Estadio",
      domicilio_cancha: "Mexico",
      estatus: "1"
    }]
    return canchas;
  }

}

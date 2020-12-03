import { Component, OnInit } from '@angular/core';

import { Torneo } from '../../_models/torneo';
import { TorneoService } from '../../_services/torneo.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.component.html',
  styleUrls: ['./torneo.component.css']
})
export class TorneoComponent implements OnInit {

  torneos: Torneo[] | any;
  torneo: Torneo | any;

  idCategoria: number;

  constructor(private torneoService: TorneoService, 
    private activeRouter: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.idCategoria = this.activeRouter.params['_value'].id;
    this.getTorneosCategoria();
  }

  getTorneosCategoria(){
    this.torneos = [];
    this.torneoService.getTorneosCategoria(this.idCategoria).subscribe(
      res => {
        this.torneos = res;
      },
      err => console.error(err)
    )
    //Temporal
    this.torneos = [{
      id: 1,
      id_categoria: 1,
      nombre_torneo: "Liga MX",
      fecha_inicio: "10 Abril 2021",
      estatus: 1,
    }]
  }

  goToPartidos(torneo){
    this.router.navigate(['/partido/torneo/' + torneo.id])
  }

}

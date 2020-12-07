import { Component, OnInit } from '@angular/core';

import { Torneo } from '../../_models/torneo';
import { TorneoService } from '../../_services/torneo.service';
import { Categoria } from '../../_models/categoria';
import { CategoriaService } from '../../_services/categoria.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.component.html',
  styleUrls: ['./torneo.component.css']
})
export class TorneoComponent implements OnInit {

  torneos: Torneo[] | any;
  torneo: Torneo | any;
  categoria: Categoria | any;

  idCategoria: number;

  constructor(private torneoService: TorneoService, 
    private activeRouter: ActivatedRoute, private categoriaService: CategoriaService,
    private router: Router) { }

  ngOnInit(): void {
    this.idCategoria = this.activeRouter.params['_value'].id;
    this.categoriaService.getCategoria(this.idCategoria).subscribe(
      res => {
        this.categoria = res;
      },
      err => console.error(err)
    )
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
  }

  goToPartidos(torneo){
    this.router.navigate(['/partido/torneo/' + torneo.id])
  }

}

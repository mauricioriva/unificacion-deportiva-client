import { Component, OnInit } from '@angular/core';

import { Equipo } from '../../_models/equipo';
import { EquipoService } from '../../_services/equipo.service';
import { Categoria } from '../../_models/categoria';
import { CategoriaService } from '../../_services/categoria.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipos: Equipo[] | any;
  equipo: Equipo | any;
  categoria: Categoria | any;

  idCategoria: number;

  constructor(private equipoService: EquipoService,private categoriaService: CategoriaService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.idCategoria = this.router.params['_value'].id;
    this.categoriaService.getCategoria(this.idCategoria).subscribe(
      res => {
        this.categoria = res;
      },
      err => console.error(err)
    )
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
  }

}

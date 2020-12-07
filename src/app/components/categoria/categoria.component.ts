import { Component, OnInit } from '@angular/core';

import { Categoria } from '../../_models/categoria';
import { CategoriaService } from '../../_services/categoria.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[] | any;
  categoria: Categoria | any;

  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(){
    this.categorias = [];
    this.categoriaService.getCategorias().subscribe(
      res => {
        this.categorias = res;
      },
      err => console.error(err)
    )
  }

  goToTorneo(categoria){
    this.router.navigate(['/torneo/categoria/' + categoria.id])
  }

  goToEquipos(categoria){
    this.router.navigate(['/equipo/categoria/' + categoria.id])
  }

}

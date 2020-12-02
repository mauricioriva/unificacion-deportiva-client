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

  idCategoria: number;

  constructor(private canchaService: CanchaService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.idCategoria = this.router.params['_value'].id;
    this.getCanchasCategoria();
  }

  getCanchasCategoria(){
    /////
  }

}

import { Component, OnInit } from '@angular/core';

import { Torneo } from '../../_models/torneo';
import { TorneoService } from '../../_services/torneo.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list-torneo',
  templateUrl: './list-torneo.component.html',
  styleUrls: ['./list-torneo.component.css']
})
export class ListTorneoComponent implements OnInit {

  torneos: Torneo[] | any;
  torneo: Torneo | any;

  constructor(private torneoService: TorneoService, private router: Router) { }

  ngOnInit(): void {
    this.getTorneos();
  }

  getTorneos(){
    this.torneos = [];
    this.torneoService.getTorneos().subscribe(
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

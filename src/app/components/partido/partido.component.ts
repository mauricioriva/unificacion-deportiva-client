/**import { Component, OnInit } from '@angular/core';

import { Partido } from '../../_models/partido';
import { PartidoService } from '../../_services/partido.service';
import { Cancha } from '../../_models/cancha';
import { CanchaService } from '../../_services/cancha.service';
import { Torneo } from '../../_models/torneo';
import { TorneoService } from '../../_services/torneo.service';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {

  canchas: Cancha[] | any;
  torneo: Torneo | any;
  partidos: Partido[] | any;
  partido: Partido | any;
  partidoForm: FormGroup;
  submitted = false;

  idTorneo: number;

  constructor(private partidoService: PartidoService, private torneoService: TorneoService,
    private activeRouter: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.idTorneo = this.activeRouter.params['_value'].id;
    this.torneoService.getTorneo(this.idTorneo).subscribe(
      res => {
        //this.torneo = res;
        //Temporal
      },
      err => console.error(err)
    )
    this.torneo = {
      id: 1,
      id_categoria: 1,
      nombre_torneo: "Liga MX",
      fecha_inicio: "10 Abril 2021",
      estatus: 1,
    }
    this.getPartidosTorneo();
    this.partidoForm = this.formBuilder.group({
      id:[''],
      id_torneo:['',Validators.required],
      id_cancha:['', Validators.required],
      id_equipo_local:['', Validators.required],
      id_equipo_visita:['',Validators.required],
      horario_partido:['',Validators.required],
      goles_local:['',Validators.required],
      goles_visita:['',Validators.required],
      jornada:['',Validators.required],
      estado:['',Validators.required],
      estatus:['',Validators.required]
    })
  }

  getPartidosTorneo(){
    this.partidos = [];
    this.partidoService.getPartidosTorneo(this.idTorneo).subscribe(
      res => {
        this.partidos = res;
      },
      err => console.error(err)
    )
    //Temporal
    this.partidos = [{
      id: 1,
      id_torneo: 1,
      id_cancha: 1,
      id_equipo_local: 1,
      id_equipo_visita: 2,
      horario_partido: "7:00 - 9:00",
      goles_local: 0,
      goles_visita: 1,
      jornada: 3,
      estado: "En juego",
      estatus: 2
    }]
    //////
  }

  deletePartido(id){
    this.partidoService.deletePartido(id).subscribe(
      res => {
        this.getPartidosTorneo();
      },
      err => console.error(err)
    )
  }

  createPartido(){
    this.submitted = true;

    if(this.partidoForm.invalid){
      console.log('Formulario invalido');
      return;
    }

    this.partidoService.createPartido(this.partidoForm.value).subscribe(
      res => {
        $("#partidoModal").modal('hide');
        this.getPartidosTorneo();
      },
      err => console.error(err)
    )
  }

  updatePartido(){
    this.submitted = true;

    if(this.partidoForm.invalid){
      console.log('Formulario invalido');
      return;
    }

    this.partidoService.updatePartido(this.partidoForm.value).subscribe(
      res => {
        $('#partidoModalEditar').modal('hide');
        this.getPartidosTorneo();
      },
      err => console.error(err)
    )
  }

  get f() { return this.partidoForm.controls; }

  openModalPartido(){
    this.partidoForm.reset();
    $('#partidoModal').modal('show');
  }

  openModalPartidoEditar(partido){
    this.partidoForm.setValue(partido);
    $('#partidoEditarModal').modal('show');
  }

}
*/
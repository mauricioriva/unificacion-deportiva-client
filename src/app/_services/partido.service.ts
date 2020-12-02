import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partido } from '../_models/partido';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getPartidos(){
    return this.http.get(this.API_URI + '/partido');
  }

  getPartido(id: number){
    return this.http.get(this.API_URI + '/partido/' + id);
  }

  getPartidosCategoria(id: number){
    return this.http.get(this.API_URI + '/partido/categoria/' + id);
  }

  getPartidosTorneo(id: number){
    return this.http.get(this.API_URI + '/partido/torneo/' + id);
  }

  getPartidosEquipo(id: number){
    return this.http.get(this.API_URI + '/partido/equipo/' + id);
  }

  createPartido(partido: Partido){
    return this.http.post(this.API_URI + '/partido', partido);
  }

  updatePartido(partido: Partido){
    return this.http.put(this.API_URI + '/partido/' + partido.id, partido);
  }

  deletePartido(id: number){
    return this.http.delete(this.API_URI + '/partido/' + id);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../_models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getEquipos(){
    return this.http.get(this.API_URI + '/equipo');
  }

  getEquipo(id: number){
    return this.http.get(this.API_URI + '/equipo/' + id);
  }

  getEquiposCategoria(id: number){
    return this.http.get(this.API_URI + '/equipo/categoria/' + id);
  }
}

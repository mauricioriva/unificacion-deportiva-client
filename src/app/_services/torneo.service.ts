import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Torneo } from '../_models/torneo';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTorneos(){
    return this.http.get(this.API_URI + '/torneo');
  }

  getTorneo(id: number){
    return this.http.get(this.API_URI + '/torneo/' + id);
  }

  getTorneosCategoria(id: number){
    return this.http.get(this.API_URI + '/torneo/categoria/' + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cancha } from '../_models/cancha';

@Injectable({
  providedIn: 'root'
})
export class CanchaService {

  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCanchas(){
    return this.http.get(this.API_URI + '/cancha');
  }

  getCancha(id: number){
    return this.http.get(this.API_URI + '/cancha/' + id);
  }

  getCanchasCategoria(id: number){
    return this.http.get(this.API_URI + '/cancha/categoria/' + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../_models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCategorias(){
    return this.http.get(this.API_URI + '/categoria');
  }

  getCategoria(id: number){
    return this.http.get(this.API_URI + '/categoria/' + id);
  }
}

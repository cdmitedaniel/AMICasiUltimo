import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  selectedArticulo: Articulo;
  articulos: Articulo[];
  
  readonly URL_API = 'http://68.66.207.7:3000/api/articulos';
 // readonly URL_API = 'http://localhost:3000/api/articulos';


  constructor(public http: HttpClient) {
    this.selectedArticulo = new Articulo();
  }

  postArticulo(articulo: Articulo) {
    return this.http.post(this.URL_API, articulo);
  }

  getArticulos() {
    return this.http.get(this.URL_API);
  }

  putArticulo(articulo: Articulo) {
    return this.http.put(this.URL_API + `/${articulo._id}`, articulo);
  }

  deleteArticulo(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

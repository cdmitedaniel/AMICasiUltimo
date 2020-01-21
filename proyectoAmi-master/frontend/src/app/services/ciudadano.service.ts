import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ciudadano } from '../models/ciudadano';

@Injectable({
  providedIn: 'root'
})
export class CiudadanoService {

  selectedCiudadano: Ciudadano;
  ciudadanos: Ciudadano[];
  
  readonly URL_API = 'http://68.66.207.7:3000/api/ciudadanos';
 // readonly URL_API = 'http://localhost:3000/api/ciudadanos';


  constructor(public http: HttpClient) {
    this.selectedCiudadano = new Ciudadano();
  }

  postCiudadano(ciudadano: Ciudadano) {
    return this.http.post(this.URL_API, ciudadano);
  }

  getCiudadanos() {
    return this.http.get(this.URL_API);
  }

  putCiudadano(ciudadano: Ciudadano) {
    return this.http.put(this.URL_API + `/${ciudadano._id}`, ciudadano);
  }

  deleteCiudadano(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

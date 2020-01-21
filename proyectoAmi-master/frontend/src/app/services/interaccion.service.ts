import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interaccion } from '../models/interaccion';

@Injectable({
  providedIn: 'root'
})
export class InteraccionService {

  selectedInteraccion: Interaccion;
  interaccions: Interaccion[];
  
  readonly URL_API = 'http://68.66.207.7:3000/api/interaccions';
 // readonly URL_API = 'http://localhost:3000/api/interaccions';


  constructor(public http: HttpClient) {
    this.selectedInteraccion = new Interaccion();
  }

  postInteraccion(interaccion: Interaccion) {
    return this.http.post(this.URL_API, interaccion);
  }

  getInteraccions() {
    return this.http.get(this.URL_API);
  }

  putInteraccion(interaccion: Interaccion) {
    return this.http.put(this.URL_API + `/${interaccion._id}`, interaccion);
  }

  deleteInteraccion(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

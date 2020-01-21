import { Injectable } from '@angular/core';
import { Historial } from '../models/historial';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {


  selectedHistorial: Historial;
  historiales: Historial[]
 readonly URL_API = 'http://68.66.207.7:3000/api/historial';
 // readonly URL_API = 'http://localhost:3000/api/historial';

  constructor(public http:HttpClient) {
this.selectedHistorial=new Historial();
   }

   postHistorial(historial: Historial) {
    return this.http.post(this.URL_API, historial);
  }

  getHistoriales() {
    return this.http.get(this.URL_API);
  }

  putHistorial(historial: Historial) {
    return this.http.put(this.URL_API + `/${historial._id}`, historial);
  }

  deleteHistorial(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }



}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Votos } from '../models/votos';

@Injectable({
  providedIn: 'root'
})
export class VotosService {

  selectedVotos: Votos;
  votos: Votos[];
  
  readonly URL_API = 'http://68.66.207.7:3000/api/votos';
 // readonly URL_API = 'http://localhost:3000/api/votos';


  constructor(public http: HttpClient) {
    this.selectedVotos = new Votos();
  }

  postVoto(voto: Votos) {
    return this.http.post(this.URL_API, voto);
  }

  getVotos() {
    return this.http.get(this.URL_API);
  }

  putVoto(voto: Votos) {
    return this.http.put(this.URL_API + `/${voto._id}`, voto);
  }

  deleteVoto(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

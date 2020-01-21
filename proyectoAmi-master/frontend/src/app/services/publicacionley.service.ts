import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicacionley } from '../models/publicacionLey';

@Injectable({
  providedIn: 'root'
})
export class PublicacionleyService {

  selectedPublicacionley: Publicacionley;
  publicacionleys: Publicacionley[];
  
  readonly URL_API = 'http://68.66.207.7:3000/api/publicacionleys';
 // readonly URL_API = 'http://localhost:3000/api/publicacionleys';


  constructor(public http: HttpClient) {
    this.selectedPublicacionley = new Publicacionley();
  }

  postPublicacionley(publicacionley: Publicacionley) {
    return this.http.post(this.URL_API, publicacionley);
  }

  getPublicacionleys() {
    return this.http.get(this.URL_API);
  }

  putPublicacionley(publicacionley: Publicacionley) {
    return this.http.put(this.URL_API + `/${publicacionley._id}`, publicacionley);
  }

  deletePublicacionley(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

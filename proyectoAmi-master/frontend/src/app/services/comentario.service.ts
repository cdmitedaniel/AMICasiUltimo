import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  selectedComentario: Comentario;
  comentarios: Comentario[];
  
  readonly URL_API = 'http://68.66.207.7:3000/api/comentarios';
 // readonly URL_API = 'http://localhost:3000/api/comentarios';


  constructor(public http: HttpClient) {
    this.selectedComentario = new Comentario();
  }

  postComentario(comentario: Comentario) {
    return this.http.post(this.URL_API, comentario);
  }

  getComentarios() {
    return this.http.get(this.URL_API);
  }

  putComentario(comentario: Comentario) {
    return this.http.put(this.URL_API + `/${comentario._id}`, comentario);
  }

  deleteComentario(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

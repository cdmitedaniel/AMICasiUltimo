import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {


  selectedPersona:Persona;
  personas:Persona[]
 readonly URL_API = 'http://68.66.207.7:3000/api/personas';
 // readonly URL_API = 'http://localhost:3000/api/personas';

  constructor(public http:HttpClient) {
this.selectedPersona=new Persona();
   }

   postPersona(persona: Persona) {
    return this.http.post(this.URL_API, persona);
  }

  getPersonas() {
    return this.http.get(this.URL_API);
  }

  putPersona(persona: Persona) {
    return this.http.put(this.URL_API + `/${persona._id}`, persona);
  }

  deletePersona(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }



}

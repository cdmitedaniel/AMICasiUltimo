import { Injectable } from '@angular/core';
import { Ley } from '../models/ley';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeyService {


  selectedLey:Ley;
  leyes:Ley[]
 readonly URL_API = 'http://68.66.207.7:3000/api/ley';
 // readonly URL_API = 'http://localhost:3000/api/ley';

  constructor(public http:HttpClient) {
this.selectedLey=new Ley();
   }

   postLey(ley: Ley) {
    return this.http.post(this.URL_API, ley);
  }

  getLeyes() {
    return this.http.get(this.URL_API);
  }

  putLey(ley: Ley) {
    return this.http.put(this.URL_API + `/${ley._id}`, ley);
  }

  deleteLey(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }



}

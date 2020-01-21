import { Component } from '@angular/core';
import { User } from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public userLogueado:User;
  ngOnInit(){
    this.userLogueado=JSON.parse(localStorage.getItem("currentUser"));
  }

  cerrarsesion(){
    localStorage.removeItem("currentUser");
    location.reload();
  }
}

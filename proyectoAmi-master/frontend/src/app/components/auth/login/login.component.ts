import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  
  private user: User = {
    _id:'',
    idpersona:'',
    rol:'', 
    user: '',
    password: ''
  };
  public isError = false;
  public loginError = "";
  ngOnInit() {
  }
  onLogin(form: NgForm) {
    if (form.valid) {
          return this.authService.loginuser(this.user.user, this.user.password)
        .subscribe(
          data => {
            this.authService.setUserLoggedIn(data);
            this.router.navigate(['/inicio']);
            location.reload();
          },
          error =>{
            this.loginError = error.error.status;
            setTimeout(() => {
              this.loginError = "";
            }, 4000);
          }
        );
        
      
    } else {
      this.loginError = "Campos son requeridos";
      this.onIsError();
    
    }

}
onIsError(): void {
  this.isError = true;
  setTimeout(() => {
    this.isError = false;
    this.loginError = "";
  }, 4000);
}
}

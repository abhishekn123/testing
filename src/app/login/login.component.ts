import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  logindata ={};
  constructor(private Auth:AuthServiceService) { }

  ngOnInit() {
  }
  LOGIN()
  {
    this.Auth.loginuser(this.logindata).subscribe(
      res=>
      {
        localStorage.setItem(`token`,res['token']);
      },
      err=>
      {
        console.log(err);
      }); 
  }
}

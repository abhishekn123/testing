import { Component, OnInit } from '@angular/core';
 import { AuthServiceService } from '../auth-service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  userdata ={};
  constructor( private Auth:AuthServiceService) { }

  ngOnInit() {}
  REGISTER()
  {
    this.Auth.registeruser(this.userdata).subscribe(
      res=>
      {
        console.log(res);
        localStorage.setItem(`token`,res['token']);
      },err=>
      {
        console.log(err);
      });
  }
}

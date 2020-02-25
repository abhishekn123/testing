import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private url= "http://localhost:3000/api/reg";
  private loginurl ="http://localhost:3000/api/log";
  private validateurl ="http://localhost:3000/api/validateuser"
  constructor( private http : HttpClient,private router:Router) { }
  registeruser(userdata)
  {
   return  this.http.post(this.url,userdata)
  }
  loginuser(logindata)
  {
     return this.http.post(this.loginurl,logindata)
  }
  validuser()
  {
    let token = localStorage.getItem('token');
   if(token!=null)
   {
     let token=localStorage.getItem('token');
        return  this.http.post(this.validateurl,{"token":token});          
   }
   else
   {
    this.router.navigate(['/login']);
   }
  }
  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}

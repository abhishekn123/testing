import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private auth:AuthServiceService,private router:Router)
  {
  
  }
  canActivate():boolean
  {
   this.auth.validuser().subscribe(
    res=>
     {
        
       console.log(typeof(res['value']));
       if(res['value'].localeCompare("valid")==0)
       {
        return true;
       }
       else
       {
         return false;
       }
     },
     err=>
     {
          return false;
     }
   )
   return true;
  }
  
}

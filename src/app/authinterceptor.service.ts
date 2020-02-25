import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthServiceService } from './auth-service.service'
import { Router } from '@angular/router';
@Injectable()
export class AuthinterceptorService implements HttpInterceptor 
{
  constructor(private injector: Injector,private router:Router){}
  intercept(req, next) {
    let authService = this.injector.get(AuthServiceService)
    if(authService.getToken()!=null)
    {
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
      }
    )
    return next.handle(tokenizedReq)
  }
else
{ 
 this.router.navigate(['/login']); 
 return next.handle(req);
}
  }
}

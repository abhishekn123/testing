import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth.guard';
import { FreecontentComponent } from './freecontent/freecontent.component';
import { RestrictedcontentComponent } from './restrictedcontent/restrictedcontent.component'


const routes: Routes = [
  {
  path:'register',
  component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent,
    
  },
  {
    path:'freecontent',
    component:FreecontentComponent
  },
  {
    path:'premium',
    component:RestrictedcontentComponent,
    canActivate:[AuthGuard]
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthServiceService } from './auth-service.service';
import { FormsModule } from '@angular/forms'
import { AuthGuard } from './auth.guard';
import { FreecontentComponent } from './freecontent/freecontent.component';
import { RestrictedcontentComponent } from './restrictedcontent/restrictedcontent.component';
import { FreemovieService } from './freemovie.service'
import { AuthinterceptorService } from  './authinterceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FreecontentComponent,
    RestrictedcontentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    //HTTP_INTERCEPTORS
  ],
  providers: [ AuthServiceService,AuthGuard,FreemovieService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthinterceptorService,
    multi:true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }

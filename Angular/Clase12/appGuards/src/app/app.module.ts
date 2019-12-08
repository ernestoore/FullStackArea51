import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { AuthService } from './services/auth.service';
import { AuthenticationGuard } from './guards/authentication.guards';
import { ReactiveFormsModule } from '@angular/forms'
import { GuardadoGuard } from './guards/guardado.guard';
import { RegistroComponent } from './registro/registro.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppInterceptor } from './services/app.interceptor';


const rutas: Routes = [
  { path: "login", component: LoginComponent },
  //Para redireccionar a la ruta login por default
  { path: "registro", component: RegistroComponent },
  { path: "**", redirectTo: "Login" },
  //canActivate es un arreglo. La ruta home esta siendo protegida
  { path: "home", component: HomeComponent, canActivate: [AuthenticationGuard] },
  {
    path: "productos", component: ProductosComponent, canActivateChild: [AuthenticationGuard], children: [
      { path: "edicion", component: EdicionComponent, canDeactivate: [GuardadoGuard] },
      { path: "nuevo", component: NuevoComponent, }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductosComponent,
    EdicionComponent,
    NuevoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    //forRoot es para transmitir las rutas a Angular.
    RouterModule.forRoot(rutas),
    ReactiveFormsModule,
    HttpClientModule
  ],
  //Se debe declarar el Guard
  providers: [AuthService, AuthenticationGuard,{
    //Para declarar y utilizar el interceptor
  provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi:true}],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { AuthService } from './services/auth.service';
import { AuthenticationGuard } from './authentication.guards';

const rutas: Routes = [
  {path: "login", component: LoginComponent},
  //Para redireccionar a la ruta login por default
  {path: "**", redirectTo: "Login"},
//canActivate es un arreglo. La ruta home esta siendo protegida
{path: "home", component: HomeComponent,  canActivate:[AuthenticationGuard]},
{path: "productos", component: ProductosComponent, canActivateChild:[AuthenticationGuard], children : [
{path: "edicion", component: EdicionComponent},
{path: "nuevo", component: NuevoComponent, }
]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductosComponent,
    EdicionComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
//forRoot es para transmitir las rutas a Angular.
    RouterModule.forRoot(rutas)
  ],
  //Se debe declarar el Guard
  providers: [AuthService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';


const rutas: Routes = [
  //La ruta vacia hace referencia a la raiz del sitio.
  // component: recibe la definicion de la clase
    {path: "", component: LoginComponent},
    {path: "home", component: HomeComponent},
    {path: "listado", component: ListadoComponent},
    {path: "edicion", component: EdicionComponent},
    {path: "nuevo", component: NuevoComponent},
    //El doble asterisco significa cualquier ruta
    //Opcion 1:
    /* {path: "**", component: NoEncontradoComponent}, */
    //Opcion2:
    //Otra opcion es redirectTo: (Es una cadena que debe ser predefinida)
    {path: "**", redirectTo: "home"}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListadoComponent,
    EdicionComponent,
    NuevoComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

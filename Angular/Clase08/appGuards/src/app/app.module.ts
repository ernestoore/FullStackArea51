import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListadoUsuarioComponent } from './listado-usuario/listado-usuario.component';
import { EdicionUsuarioComponent } from './edicion-usuario/edicion-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios.service';

const rutas: Routes = [
  {path: "", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "listadoUsuario", component: ListadoUsuarioComponent, children: [
    {path: "edicionUsuario/:id", component: EdicionUsuarioComponent},
    {path: "nuevoUsuario", component: NuevoUsuarioComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListadoUsuarioComponent,
    EdicionUsuarioComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

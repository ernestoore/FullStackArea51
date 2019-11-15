import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import { HistoriasComponent } from './historias/historias.component';
import { ReactiveFormsModule } from '@angular/forms';

const rutas: Routes = [
  {path: "", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "historias", component: HistoriasComponent},
  {path: "**", redirectTo: ""}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HistoriasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

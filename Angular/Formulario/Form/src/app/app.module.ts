import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { FormService } from './form.service';

const rutas: Routes = [

]

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }

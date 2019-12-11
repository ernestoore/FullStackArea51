import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { EdicionAutoresComponent } from './edicion-autores/edicion-autores.component';
import { ListadoAutoresComponent } from './listado-autores/listado-autores.component';
import { NuevoAutoresComponent } from './nuevo-autores/nuevo-autores.component';


@NgModule({
  declarations: [EdicionAutoresComponent, ListadoAutoresComponent, NuevoAutoresComponent],
  imports: [
    CommonModule,
    AutoresRoutingModule
  ]
})
export class AutoresModule { }

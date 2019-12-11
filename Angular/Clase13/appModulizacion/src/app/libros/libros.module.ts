import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { LibrosRouting } from './libros-routing.module';
import { LibrosServiceService } from './libros-service.service';
import { CompartidoModule } from '../compartido/compartido.module';



@NgModule({
  declarations: [ListadoComponent, EdicionComponent, NuevoComponent],
  imports: [
    //El commonModule es quien contiene las directivas estructurales
    //de angular: ngIf, ngFor
    CommonModule,
    LibrosRouting,
    CompartidoModule
  ],
  providers: [LibrosServiceService]
})
export class LibrosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertaComponent } from './alerta/alerta.component';



@NgModule({
  declarations: [AlertaComponent],
  imports: [
    CommonModule
  ],
  //para utilizar un componente en otro modulo se debe exportar
  //Y luego importar en el modulo que se quiere utilizar
  exports: [AlertaComponent]
})
export class CompartidoModule { }

import { Component, OnInit } from '@angular/core';
import { ICanDeactivate } from '../guards/guardado.guard';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})

//Implementa el ICanDeactivate para que este pueda ser implementado de esta manera por otros componentes

export class EdicionComponent implements OnInit, ICanDeactivate {
  grupo: FormGroup

dataInicial= {
  nombre: "Ernesto"
}

datosModificados: boolean = true

  constructor() {
    this.grupo = new FormGroup({
      //El FormControl tiene 2 valores.
      //1.Paramtro por defecto
      // 2. El segundo parametro son las validaciones.
        nombre:new FormControl(this.dataInicial.nombre)
    })

// valueChanges es un observable que esta revisando si los valores en el formulario han cambiado.
// El metodo suscribe me dice si algo ha cambiado o no.
    this.grupo.valueChanges.subscribe(() => {
      this.datosModificados = false
    })


   }

  ngOnInit() {
  }

//implementa el metodo guardado de la interfaz ICanDeactivate (implementada).
//True: si los datos han sido cambiadode sus valores iniciales
  guardado(): boolean {

    if(this.datosModificados) return false

    //Se debe validar si la data inicial ha cambiado.
    if(this.dataInicial.nombre == this.grupo.value.nombre) {
    return false
    } else {
      return true
    }
  }

  salvar(){
    this.datosModificados = true
  }


}

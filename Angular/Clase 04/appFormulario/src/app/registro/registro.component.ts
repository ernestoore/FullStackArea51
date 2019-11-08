import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombre: string = "FullStack"

  // Decorador para conectar con la referencia en HTML, requiere de 2 parametros (desde la version 7 a - era solo 1 parametros)
  // La primera es una string
  //El segundo parametro es un Json: El valor no va a cambiar. 
  @ViewChild("formulario", {static: true}) formularioRegistro
  constructor() { }

  ngOnInit() {
  }

  registrar(){
    if(this.formularioRegistro.valid){
      console.log("El formulario es valido")
      console.log(this.formularioRegistro.value)
      // value es u JSON que contiene los controles y sus respecivos valores.
      // Esta es la informacion que se enviara a un API REST o un microservicio.

      this.formularioRegistro.reset({})
      //Para limpiar el formulario luego de grabar la informacion.
      // El metodo reset permite un parametro Json para poner valores por defecto

    }else{
      console.log("El formulario no es valido")
    }
    //console.log(this.formularioRegistro)
  }

  cargarTodo(){
    this.formularioRegistro.setValue({
      nombre: "Marcela",
      correo: "marcela@correo.com",
      contrasena: "1234"
    })
    //setValue tiene un parametro, que es el nombre de uno de los controles.
  }

  /* cargarParcial(){
    this.formularioRegistro.setValue({
      nombre: "Marcela",
      contrasena: "1234",
      correo: ""
    })
    //setValue tiene un parametro de formato JSON, se deben incluir los nombres de todos los controles.
    //El metodo setValue obliga a que se coloque un valor a cada uno de los controles.
  } */

  cargarParcial(){
    this.formularioRegistro.form.patchValue({
      nombre: "Marcela",
      contrasena: "1234",
    })
    //patch tiene un parametro de formato JSON
    //El metodo patchValue permite cargar parcialmente la data de los controles.
  }

}

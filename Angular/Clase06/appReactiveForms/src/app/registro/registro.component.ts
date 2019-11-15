import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //Cuando se trabaja con ReactiveFormsModule se trabaja con un grupo
  grupo: FormGroup
  dominiosGratuitos: Array<string> = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"]
  dominioEmpresa: string = "area51.pe"

  //Cuando se crea un componente se crea el constructor y ngOInit que son parte del ciclo de vida de Angular.
  //Primero se ejecuta el constructor. Solo se ejecuta una vez
  constructor() {
    //FormGroup espera un Json
    this.grupo = new FormGroup({
      //Cada propiedad es un control.
      //primer valor: Inicializador
      //segundo valor: restricciones. Nos basamos en una interface llamada Validator.
                      //Es un parametro generico que puede recibir un arreglo

      nombre: new FormControl(null,Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email,
        //Opcion1 :Con el bind le dice que cuando utilice el objeto de contexto "this" dentro de la validacion
        //se de la clase de validarCorreoGratuito (class FormControl)
        this.validarCorreoGratuito.bind(this), this.soloCorreoEmpresarial(this.dominioEmpresa)]),
      contrasena: new FormControl(null, Validators.required),

      //Cuando son varias validaciones, se debe utilizar un arreglo []
      confirmacion: new FormControl(null, [Validators.required, this.validarConfirmacion])
    })
   }

   //email(fc: formControl): {email: true}
   validarCorreoGratuito(fc: FormControl):{[s: string]: boolean}{
     //El formcontrol tiene una propiedad value que contiene el valor del control.
    if(!fc || !fc.value || fc.value.split("@").length==1) return null //Si el control no existe devuelve null.
    /*Otra opcion es colocar el objeto dentro del metodo.
    const dominiosGratuitos: Array<string> = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"]
    */
    
    const dominio = fc.value.split("@")[1].toLowerCase()
    if(this.dominiosGratuitos.indexOf(dominio) > -1) {
       //Si hay error se devuelve un valor con la estructura {[s: string]: boolean}.
      return {"correoGratuito": true}
    }
    //Si no hay error se devuelve null.
    return null
   }

   soloCorreoEmpresarial(dominioValido: string) : ValidatorFn{
     const dominioCorrecto = (fc: FormControl): {[s: string]: boolean} => {
      if(!fc || !fc.value) return null
      if(fc.value.trim()=="") return null
      const valor = fc.value
      const partes = valor.split("@")
      if(partes.length == 1) return null
      const dominio = partes[1].toLowerCase()
      if(dominio != dominioValido){
       return {"correoEmpresa": true}
      }
      return null
    }
    return dominioCorrecto
   }


   
    

  //Es una invención de angular
  ngOnInit() {
  }

  registrar(){
    if(this.grupo.valid)
    {
      //Para obtener la data de los controles:
      console.log("Value", this.grupo.value)
      console.log("getRawValue", this.grupo.getRawValue)
      console.log("Datos Válidos")
    }else{
      console.log("Datos Inválidos")
    }
    
  }

  cargarData(){
    //Para cargar la data completa del formulario
    this.grupo.setValue({
      nombre: "abc",
      correo: "miCorreo@correo.com",
      contrasena: "12345",
      confirmacion: "12345"
    })
  }

  cargarDataParcial(){
    //Para cargar data parcial se debe utilizar patchValue
    this.grupo.patchValue({
      nombre: "Javier",
      correo: "empresa@correo.com"
    })
  }

  limpiarData(){
    this.grupo.reset()
  }

  validarConfirmacion(fc: AbstractControl): {[s: string]: boolean}
  {
    //Si no existe el formControl o el formGroup no hay nada que validar
    if(!fc || !fc.parent) return null

    const contrasena = fc.parent.get("contrasena")
    const confirmacion = fc.parent.get("confirmacion")

    //Si no existe el control contrasena o confirmacion entonces no se continua
    if (!contrasena || !confirmacion) return null

    //El vacio o null se interpreta como false
    if(!confirmacion.value.trim()) return null

    if(contrasena.value != confirmacion.value) return
    {contrasenaNoCoincide: true}

    //Si son iguales, entonces se devuelve null
    return null
  }


  
}

import { Component, Input, Output, EventEmitter } from "@angular/core";
import { UsuarioService } from './usuario.service';

@Component({
    selector: "login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    @Input() headline
    @Output() onLogging = new EventEmitter() //Todas las salidas son instancias de la clase EventEmitter.
    correo: string //Propiedades del componente
    contrasena: string
    instancia: UsuarioService      //Para poder utilizar el servicio, debo crear una propiedad, para utilizarla desde otros metodos

    constructor(servicio: UsuarioService){
        this.instancia = servicio
    } 

    loggearse() {

        this.instancia.correo = this.correo
        this.instancia.contrasena = this.contrasena
        this.instancia.login()
        /*this.onLogging.emit({
            correo: this.correo.trim(),
            contrasena: this.contrasena.trim()
        }) */
        // Se esta enviando un Json es el app.component.html el que lo recibe
    }

    valorIngresado(evt) {
        console.log(evt.target.value)
    }

}
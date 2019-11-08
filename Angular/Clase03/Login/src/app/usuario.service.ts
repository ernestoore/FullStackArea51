import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

//Composición de un servicio
// Un servicio es una clase
// Una inyeccion se puede realizar en cualquier clase y angular casi todo son clases.
//Por lo tanto se puede colocar un servicio dentro de otro servicio.


@Injectable() //Decorador para decirle a Angular que antes de inyectar el servicio debe revisarlo.
export class UsuarioService {
    // Se crean dos propiedad
    correo: string
    contrasena: string

    constructor(private loggerService: LoggerService){} // Se esta inyectando el servicio LoggerService en UsuarioService

    login(){ //Tambien se pueden compartir metodos
        this.loggerService.mostrarMensaje("Usuario Logueado")
    }

}
import { Injectable, EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';

export interface User{
id :number,
email: string,
password: string,
role: string
}

@Injectable({

//Cuando tiene la propiedad root. Ya esta registrado a nivel global
  providedIn: 'root'
})

export class AuthService {

private loggedUser: boolean = false
private lstUsers= new Array<User>()

//El eventEmitter funciona para todo lo que sea asincrono. Si cerramos Angular, este sigue funcionando.
onStateChange = new EventEmitter()


  //Para navegar a otra ruta se necesita inyectar el servicio Route
  constructor(private route: Router) {
    const user1 = {
      id : 1,
      email: "ernesto@gmail.com",
      password: "admin",
      role: "admin"
    }
    const user2 = {
      id : 2,
      email: "sergio@gmail.com",
      password: "admin",
      role: "user"
    }

    this.lstUsers.push(user1)
    this.lstUsers.push(user2)
   }

login(){
//La propiedad navigate recibe como primer parametro un arreglo.
  this.route.navigate(["home"])
  this.loggedUser = true
  //Para guardar data en la sesion
  sessionStorage.setItem("loggedUser", "1")
  this.onStateChange.emit(true)
}

logout(){
  //Te debe desloggear y llevarte a la pagina del login
  this.loggedUser = false
  this.route.navigate(["login"])
  //Para borrar todo lo que hay en la sesion
  sessionStorage.clear()
//Emit significa que hay un cambio y no necesariamente se requiere enviar un parametro-
//this.onStateChange.emit()
  this.onStateChange.emit(false)
}

isLoggedUser():boolean {
  //Devuelve el valor si el usuario esta loggeado
  let logueado = false
  if (sessionStorage.getItem("loggedUser")){
    logueado=true
  }
  return this.loggedUser || logueado
}

}

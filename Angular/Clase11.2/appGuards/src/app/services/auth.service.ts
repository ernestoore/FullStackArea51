import { Injectable, EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from '../modelos/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({

  //Cuando tiene la propiedad root. Ya esta registrado a nivel global
  providedIn: 'root'
})

export class AuthService {

  private loggedUser: boolean = false

  //El eventEmitter funciona para todo lo que sea asincrono. Si cerramos Angular, este sigue funcionando.
  onStateChange = new EventEmitter()


  //Para navegar a otra ruta se necesita inyectar el servicio Route
  constructor(private route: Router, private http: HttpClient) {

  }

  loginUsuario(usuario: Usuario) {
    this.http.post<Object>("http//clase.tibajodemanda.com/usuario/login", usuario)
      .subscribe(
        data => {
          //La propiedad navigate recibe como primer parametro un arreglo.
          this.route.navigate(["home"])
          this.loggedUser = true
          //Para guardar data en la sesion
          sessionStorage.setItem("loggedUser", JSON.stringify(data))
          this.onStateChange.emit(true)
        },
        error => console.log(error)
      )
  }

  getToken() {
    //Lo que guardamos en LocalStorage es una cadena, para volverlo JSON utilizamos JSON.parse
    const data = JSON.parse(sessionStorage.getItem("loggedUser"))
    return data.result.token
  }

  logout() {
    //Te debe desloggear y llevarte a la pagina del login
    this.loggedUser = false
    this.route.navigate(["login"])
    //Para borrar todo lo que hay en la sesion
    sessionStorage.clear()
    //Emit significa que hay un cambio y no necesariamente se requiere enviar un parametro-
    //this.onStateChange.emit()
    this.onStateChange.emit(false)
  }

  isLoggedUser(): boolean {
    //Devuelve el valor si el usuario esta loggeado
    let logueado = false
    if (sessionStorage.getItem("loggedUser")) {
      logueado = true
    }
    return this.loggedUser || logueado
  }

  //El post devuelve un Observable y este debe especificarel tipo
  // Si es JSON:{} o Object o {status: number, message: string}
  insert(usuario: Usuario): Observable<{ status: number, message: string }> {
    //para conectarme al servicio rest debo usar HTTPCLIENT
    //Un API rest se basa en verbos.
    //El metodo pide varias cosas:
    //1. Donde esta el api (endpoint)
    //2. El segundo parametros son los datos que vas a insertar.
    //El metodo post devuelve un Observable. !!!! Solo nos preopamos por realizar la peticion con suscribe.
    return this.http.post<{ status: number, message: string }>("http://clase.tibajodemanda.com/usuario", usuario)

    /*
    //Solo nos va a interesar los dos primeros parametros del suscribe
      .subscribe(
    // El primero es el que recibe la informacion
    data => this.route.navigate(["login"]),
    //El segundo lo recibe cuando hay errores.
    error => console.log(error)
      )
      */
  }

}

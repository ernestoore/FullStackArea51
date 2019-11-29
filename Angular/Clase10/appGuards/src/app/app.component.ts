import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable, Observer } from 'rxjs'; // Se encuentra la definicion de la clase Observable

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appGuards';
  userLogged: boolean = false

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.userLogged = this.auth.isLoggedUser()
    //onStateChange es del tipo EventEmitter, por lo que se puede utilizar el metodo suscribe para escuchar cambios.
    this.auth.onStateChange.subscribe(status => this.userLogged = status)

    //Una promesa es una instancia de la clase Promise (Recien existe a partir de la version 6 de JS)
    // La clase Promise tiene un constructor que contiene una funcion. Esta funcion a su vez tiene dos parametros
    //Paramtros: Resolve & Reject(de tipo funcion)
    const promesa = new Promise((resolve, reject) => {

      /* Ejemplo
      setTimeout(() => {
          //resolve esta deolviendo un arreglo con data en formato Json
        //resolve([{username: "u1"}, {username: "u2"}])
        reject(new Error("Error de conexion a la base de datos"))
      }, 2000)
    })*/

      //Llamada a api rest
      const llamada = new XMLHttpRequest()
      //onreadystatechange se ejecuta permanentemente mientras hayan cambios ene el Api Rest
      llamada.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resolve(this.responseText)
        } else {
          reject(new Error("Error de conexion a la base de datos"))
        }
      }
      llamada.open("get", "https://jsonplaceholder.typicode.com/todos")
      llamada.send()

      // La instancia de la clase Promise tiene un metodo Then() que contiene dos funciones como parametros
      // Si la promesa se cumple se ejecuta la primera funcion
      // Si la promesa se rechaza se ejecuta la segunda funcion
      //data es el parametro que recibe al ejecutarse resolve()
      promesa.then((data) => {
        console.log("La promesa se cumplio")
        console.log(data)
      }, (error) => {
        console.log("La promesa fue rechazada")
        console.log(error)

      })
    })

    //Ejemplo de varias promesas:
    const p1 = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve("promesa cumplida")
      }, 2000)
    })

    const p2 = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve("Catálogo")
      }, 2000)
    })

    //Verifica que se ejecuten las dos promesas para luego dar una respuesta.
    Promise.all([p1, p2])
      .then(data => console.log(data)
      )

    //OBSERVABLES
    //Forma mas basica de un observable: Contiene una funcion
    const obs = Observable.create(
      //Dentro del observable se encuentra el observer. El observador me respondera con una cadena
      (observador: Observer<string>) => {
        setTimeout(() => {
          console.log("primer mensaje enviado")
          //El observador comunica a traves del metodo next(). Este puede tener o no tener parametros.
          observador.next("Llego el inspector de la compañia electrica")
        }, 2000)


        setTimeout(() => {
          observador.next("Alguien toco la puerta")
        },4000)

        //El metodo completees el ultimo que se ejecutara.
        setTimeout(() => {
          observador.complete()
        },5000)

        //No puede haber otro metodo despues de que se ejecuta este
        setTimeout(() => {
          observador.error("Se incendio la casa")
        },6000)

      }
    )

    //Suscribe tiene 3 parametros y todos son metodos:
    obs.subscribe(
      //Primer paramtro: Corresponde al metodo next
      data => console.log(data),
      //Segundo parametro: Corresponde al metodo error
      error => console.log(error),
//Tercer parametro: Corresponde al metodo complete
() => console.log("Cumplido")
    )
  }

  logout() {
    this.auth.logout()
  }
}

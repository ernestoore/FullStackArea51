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
  //Propiedad donde se almacenaran los datos recibidos
  datosRecibidos: Array<any> = []

  constructor(private auth: AuthService) {
  }

  ngOnInit() {


    //1. Observable con el observador
    const obs: Observable<any> = Observable.create(
      (observador: Observer<any>) =>{
          const llamada = new XMLHttpRequest()

          llamada.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200){
              //Cuando llega algo de informacion el observador envia hacia el subscriptor a traves del metodo next
              observador.next(JSON.parse(this.responseText))
            }
          }
            llamada.open("get", "https://jsonplaceholder.typicode.com/todos")
            llamada.send()
      }
    )

    //2.Subscripcion
      obs.subscribe(
      //El primer parametro del susbscribe es cuando el observador utiliza el metodo next
      (data) => {this.datosRecibidos = data},
      // El segundo parametro es cuando hay un error. Ej. Error 401
      (error) =>console.log(error),
      // El tercer metodo es cuando el observador emplea el metodo complete.
      () => console.log("tarea terminada")
      )

  }

  logout() {
    this.auth.logout()
  }
}

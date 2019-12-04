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
   this.userLogged = this.auth.isLoggedUser()
    this.auth.onStateChange.subscribe(status => this.userLogged = status)
  }

  logout() {
    this.auth.logout()
    this.auth.onStateChange.emit(false)
  }
}

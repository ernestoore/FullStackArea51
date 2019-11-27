import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appGuards';
userLogged: boolean = false

constructor(private auth: AuthService) {
}

ngOnInit(){
  this.userLogged = this.auth.isLoggedUser()
  //onStateChange es del tipo EventEmitter, por lo que se puede utilizar el metodo suscribe para escuchar cambios.
  this.auth.onStateChange.subscribe(status => this.userLogged = status)
}

logout(){
  this.auth.logout()
}
}


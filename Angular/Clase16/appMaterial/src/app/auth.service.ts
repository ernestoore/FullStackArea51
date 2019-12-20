import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogged: boolean = false
  //Clase subject que es un observable y un observador al mismo tiempo
  //Solo los observadores tienen el metodo next
  onUserChangeStatus: Subject<boolean> = new Subject<boolean>()
  constructor(private readonly router: Router) { }

  login() {
    this.onUserChangeStatus.next(true)
    sessionStorage.setItem("user", "user logged")
    this.userLogged = true
    this.router.navigate(["/Home"])
  }

  logout() {
    this.onUserChangeStatus.next(false)
    //Si el usuario se desloguea se eliminan las variables de la session.
    sessionStorage.clear()
    this.userLogged = false
    this.router.navigate(["/"])
  }

  islogged() {
    if (this.userLogged || sessionStorage.getItem("user")) {
      return true
    }
    return false
  }
}
}

import {Injectable} from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()

//  Se estan implementando dos interfaces
export class AuthenticationGuard implements CanActivate, CanActivateChild{

    constructor(private auth: AuthService) {
    }
  //La interfazte pide que sea implementada
  //Devuelve un booleano, si es True te permite ingresar
  canActivate(): boolean {
  return this.auth.isLoggedUser()
  }

canActivateChild(): boolean {
  //1era opcion
  //return this.auth.isLoggedUser()
//2da opcion
  return this.canActivate()
}

}

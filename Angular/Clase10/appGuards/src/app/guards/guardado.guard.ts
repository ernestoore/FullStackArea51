import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

//La interfaz pide que se implemente el metodo guardado.
export interface  ICanDeactivate {
//Se crea un propiedad llamada guardado que es una funcion que devolvera un boolean
guardado:() => boolean
}

@Injectable({
  providedIn: 'root'
})

//La clase recibe una interfaz llamada CanDeactivate
// Esta interfaz a su vez implementa la Interfaz IcanDeactivate
export class GuardadoGuard implements CanDeactivate<ICanDeactivate> {
    // metodo que recibe como parametro ICanDeactivate.
    //canDeactivate(comp: EdicionComponent): boolean{
    canDeactivate(comp: ICanDeactivate): boolean{
      const estado:boolean = comp.guardado()

// enviar un mensaje para confirmar si desea salir de la ruta:
      if(estado){
        if(confirm("Hay datos no guardados. ¿Desea guardarlos?")){
        //No sale de la ruta
        return false
        } else{
        // Si sale de la ruta
          return true
        }
      }else{
        return true
      }
    }
  }


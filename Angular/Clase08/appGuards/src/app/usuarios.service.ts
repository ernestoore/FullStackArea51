import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  //Lista es un arreglo de tipo Json y es declarado como vacio
private lista: Array<{}> = []

  constructor() { }

  listar(){
    //devuelve la propiedad lista
    return this.lista
  }

  //opcion 1: recibe parametros de correo: string, contrasena: string, id: number
  //opcion 2: recibe un parametro object
  //opcion 3: recibe un parametro de tipo object
  insertar(usuario: Object){
    this.lista.push(usuario)
  }

  //Se puede enviar el indice del arreglo
  //Si se contempla la opcion id se puede pasar como parametro
  editar(id: number){
    //Filter recorre todos los parametros del arreglo.
    //El metodo flter devuelve un arreglo.
    return this.lista.filter((el: any) => el.id == id)[0]
  }

}

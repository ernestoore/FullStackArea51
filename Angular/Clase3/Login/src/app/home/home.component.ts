import { Component, OnInit, Input} from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() info // Es una entrada y una propiedad del componente Home.
  lista: Array<string> = ["Carmen", "Marcela", "Oscar", "Carlos"] //Lista propiedad de tipo arreglo de strings.

  /* servicioHome = new UsuarioService() */ //Instancia de la misma clase para traer la informacion almacenada en Login
  
  /*public servicioUsuario: UsuarioService //Propiedad para poder utilizarla en otros metrodos
    constructor(servicio: UsuarioService) {
    this.servicioUsuario = servicio
   } */

    constructor(public servicioUsuario: UsuarioService) {} //Si se antepone private/public el parametro se comporta como propiedad
   
  ngOnInit() {
  }

  MostrarData(){
    console.log(this.servicioUsuario.correo) //Imprime en la consola el valor del correo
  }

}

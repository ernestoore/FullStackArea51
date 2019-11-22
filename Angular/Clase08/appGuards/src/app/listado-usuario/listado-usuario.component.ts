import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit {

  listadoUsuario: Array<any> = []

  constructor(private usuario: UsuariosService, private router: Router) { }

  ngOnInit() {
    this.listadoUsuario = this.usuario.listar()
  }

  nuevoRegistro(){
    this.router.navigate(['/listadoUsuario','nuevoUsuario'])
  }

  editarRegistro(id: number){
    this.router.navigate(['/listadoUsuario','edicionUsuario',id]) //usuario/edicion/id
  }

}

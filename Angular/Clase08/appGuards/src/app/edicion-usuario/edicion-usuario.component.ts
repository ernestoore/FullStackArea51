import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';
import {Router, ActivateRoute} from '@angular/router';

@Component({
  selector: 'app-edicion-usuario',
  templateUrl: './edicion-usuario.component.html',
  styleUrls: ['./edicion-usuario.component.css']
})
export class EdicionUsuarioComponent implements OnInit {

 grupo: FormGroup

  constructor(private router: Rourter, private activateRoute: ActivateRoute, private usuarios: UsuariosService) {
    this.grupo = new FormGroup({
      id: new FormControl(),
      nombreUsuario: new FormControl(null,[Validators.required]),
      apellidoUsuario : new FormControl(null,[Validators.required])

    })

   }

  ngOnInit() {
    this.activateRoute.paramMap.suscribe((respuesta: any) =>{
      const id = respuesta.params.id
      const usuario = this.usuario.editar(id)
      // si existe usuario que se asigne al formgroup
      if(usuario) this.grupo.setValue(usuario)
    })
  }

}

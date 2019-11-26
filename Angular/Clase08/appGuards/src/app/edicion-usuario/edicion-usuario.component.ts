import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edicion-usuario',
  templateUrl: './edicion-usuario.component.html',
  styleUrls: ['./edicion-usuario.component.css']
})
export class EdicionUsuarioComponent implements OnInit {

 grupo: FormGroup

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private usuarios: UsuariosService) {
    this.grupo = new FormGroup({
      id: new FormControl(),
      nombreUsuario: new FormControl(null,[Validators.required]),
      apellidoUsuario : new FormControl(null,[Validators.required])

    })

   }

   grabar() {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((respuesta: any) =>{
      const id = respuesta.params.id
      const usuario = this.usuarios.editar(id)
      // si existe usuario que se asigne al formgroup
      //setValue recibe un objeto que tenga estructura del Formgroup y asigna los valores a cada Control.
      if(usuario) this.grupo.setValue(usuario)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

grupo: FormGroup

  constructor(private usuario: UsuariosService) {
    this.grupo = new FormGroup({
      //Date.now trae un number bastante grande.
      id: new FormControl(Date.now()),
      nombreUsuario: new FormControl(null,[Validators.required]),
      apellidoUsuario : new FormControl(null,[Validators.required])

    })

   }

  ngOnInit() {
  }

  grabar(){
    this.usuario.insertar(this.grupo.value)
    //Para borrar la data luego de grabar
    this.grupo.reset()
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Usuario } from '../modelos/usuario';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  grupo: FormGroup

  constructor(private auth: AuthService, private router: Router) {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, [Validators.required])
    })

  }

  ngOnInit() {
  }

  registro() {
    //Implementacion de interfaz
    const usuario: Usuario = this.grupo.getRawValue()
    this.auth.insert(usuario)
      //La otra manera es colocar el suscribe aqui, debido a que sabemos que devuelve un Observable
      .subscribe(
        data => this.router.navigate(["login"]),
        error => console.log(error)
      )
  }
}

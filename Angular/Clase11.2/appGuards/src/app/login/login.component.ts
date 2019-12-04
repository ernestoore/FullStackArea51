import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../modelos/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  grupo:FormGroup


  constructor(private auth: AuthService, private route: Router) {
    this.grupo = new FormGroup({
correo: new FormControl(null, [Validators.required, Validators.email]),
contrasena: new FormControl(null, Validators.required)
    })

   }

  ngOnInit() {
  }

  login(){
    const usuario: Usuario = this.grupo.getRawValue()
    this.auth.loginUsuario(usuario)

  }

}

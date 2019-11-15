import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  grupo: FormGroup
  dominiosGratuitos: Array<string> = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"]

  constructor() {
    this.grupo = new FormGroup({
      email: new FormControl(null, Validators.required, this.validarCorreo.bind(this)),
      contrasena: new FormControl(null, Validators.required)
    })
   }

  ngOnInit() {
  }

  validarCorreo(fc: FormControl): {[s: string]: boolean}{
    if(!fc || !fc.value || fc.value.split("@").length==1) return null

    const dominio = fc.value.split("@")[1].toLowerCase()
    if(this.dominiosGratuitos.indexOf(dominio) > -1) {
      return {"correoGratuito": true}
    }
    return null

  }
}

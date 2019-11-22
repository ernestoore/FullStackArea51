import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  grupo: FormGroup
  constructor() {

    this.grupo = new FormGroup({
      emailUsuario: new FormControl(null, [Validators.required, Validators.email]),
      passUsuario: new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  elemento: string
  constructor(public formService: FormService) { }

  ngOnInit() {
  }

  Submit(){
    this.formService.lista.push(this.elemento)
  }

}

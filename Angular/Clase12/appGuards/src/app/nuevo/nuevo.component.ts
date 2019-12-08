import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  grupo: FormGroup

  constructor(private productoService : ProductService, private route : Router) {
      this.grupo = new FormGroup({
        nombre: new FormControl(null, Validators.required),
        descripcion: new FormControl(null, Validators.required)
      })
   }


   agregar(){
     this.productoService.insert(this.grupo.value)
      .subscribe(
        data => {
          this.productoService.onListaActualizada.next(),
          this.route.navigate(["/productos"])
        }

      )
   }

  ngOnInit() {
  }

}

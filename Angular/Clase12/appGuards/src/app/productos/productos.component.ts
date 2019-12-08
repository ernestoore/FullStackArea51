import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto';
import { ProductService } from '../services/product.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Array<Producto> = []

  constructor(private productoService : ProductService) { }

  ngOnInit() {

    this.productoService.onListaActualizada
      .subscribe(
        data => this.listar()
      )


    this.listar()
    }

    listar(){
      this.productoService.get()
        .subscribe(
          (data: any) => this.productos = data.results,
          error => console.log(error)
        )
     }
}

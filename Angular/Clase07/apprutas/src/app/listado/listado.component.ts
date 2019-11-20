import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  filtrarMarca(){

    //Si se quiere agregar al queryString un parametro mas:
    //this.router.navigate(["/cliente","listado"]),{queryParams: {marca: 'esika'}, queryParamsHandling: 'merge', preserveFragment: true}

    this.router.navigate(["/cliente","listado"]),{queryParams: {marca: 'esika'}, queryParamsHandling: 'preserve', preserveFragment: true}
    //Si no quieres que se eliminen los parametros del QueryString actuales.
    //Si quieres agregar el parametro de QueryString llamado marca se utiliza queryParamsHandling
    //Para el fragmento se debe utilizar la propiedad preserveFragment
  }

}

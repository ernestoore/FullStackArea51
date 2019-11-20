import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
  //Se crea una variable del tipo any:
  // Si el parametro viene de una bd relacional es de tipo number.
  // Si el parametro viende de una bd no relacional es de tipo string.
  id : any
  // Se inyecta el servicio Activate route en el constructor

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //Primero debo campturar la url para luego utilizarla. Se utiliza snapshot (Consegui un objeto de la url)
    //Con el paramMap se recorren todos los parametros.
    //Con el metodo Get obtengo el valor de uno de los parametros.
    //Una vez capturado el valor puedo realizar una consulta a una base de datos.
    this.id = this.activateRoute.snapshot.paramMap.get("id")

    console.log(this.id)
  }

  nuevoRegistro(){
    //Quiero navegar a la misma ruta de edicion.
    this.router.navigate(['cliente','edicion',50])
  }

}

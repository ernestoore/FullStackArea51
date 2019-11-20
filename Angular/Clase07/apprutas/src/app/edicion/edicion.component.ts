import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

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


  // Este metodo se ejecuta solo una vez al igual que el constructor.
  ngOnInit() {
    //Primero debo campturar la url para luego utilizarla. Se utiliza snapshot (Consegui un objeto de la url)
    //Con el paramMap se recorren todos los parametros.
    //Con el metodo Get obtengo el valor de uno de los parametros.
    //Una vez capturado el valor puedo realizar una consulta a una base de datos.

    //>>> Se utiliza cuando se conoce que desde el componente no se cambiara la URL.
    this.id = this.activateRoute.snapshot.paramMap.get("id")
    //El paramMap (basado en observables) solo escucha cualquier cambio en los parametros de la url:
    //Se utilizar el suscribe que funciona como un contrato con el paramMap (puesto de quisco)
    //Se ejecuta una funcion callback como parametro del Subscribe.
    //Cuando se ejecuta la funcion: info contiene todos los parametros de la URL.
    //Los observables estan por encima del componente.
    this.activateRoute.paramMap.subscribe((info: ParamMap)=> {
      //Revisar
      this.id = info.get("id")
    })
    console.log(this.id)
  }

  nuevoRegistro(){
    //Quiero navegar a la misma ruta de edicion.
    this.router.navigate(['cliente','edicion',50])
  }

}

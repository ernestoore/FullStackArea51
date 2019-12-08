import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Producto } from '../modelos/producto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  onListaActualizada = new Subject()


  constructor(private http: HttpClient, private auth: AuthService) { }

  get(){
    /* const token = this.auth.getToken()
    const headers: HttpHeaders = new HttpHeaders({
      "authorization": `Bearer ${token}`
    }) */

    return this.http.get("http://clase.tibajodemanda.com/producto"/* , {headers} */)
      /* .subscribe(
        data => console.table(data),
        error => console.log(error)
      ) */
  }

  insert(producto: Producto){
    /* const token = this.auth.getToken()
    const headers : HttpHeaders = new HttpHeaders({
      "authorization" : `Bearer ${token}`
    }) */
    return this.http.post("http://clase.tibajodemanda.com/producto", producto/* , {headers} */)
  }

}

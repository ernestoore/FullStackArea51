import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor{

    constructor(private auth: AuthService) {
        
    }
    intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.auth.getToken()
        let clon = req.clone({headers: req.headers.append("authorization", `bearer ${token}`)})

        return next.handle(clon)
    }
}
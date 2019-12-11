import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { LoginComponent } from './nucleo/login/login.component';
import { HomeComponent } from './nucleo/home/home.component';

const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "home", component: HomeComponent},
    //loadChildren es un string con 2 partes: La division es por #
    // la primera parte es la ubicacion del modulo
    // La segunda parte es el nombre de la clase del modulo
    {path: "libros", loadChildren: "./libros/libros.module#LibrosModule"}
]

// decorador para modulos
@NgModule({
    //Si se carga todo inicialmente se usa forRoot
    //Si no se carga todo inciialmente se usa forChild 
    //- ya existe en memoria el espacio para las rutas
    imports:[RouterModule.forRoot(routes)],
    declarations: [],
    providers: [],
    //Debemos exportar el RouterModule porque es donde esta el <router-outlet>
    // Cuando se agregar en exports es como colocarlo con public para que otros
    //modulos puedan utilizarlo.
    exports: [RouterModule]
})



export class AppRouting {}
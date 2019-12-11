import { NgModule } from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router"
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { LoginComponent } from './nucleo/login/login.component';
import { HomeComponent } from './nucleo/home/home.component';

const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "home", component: HomeComponent},
    /*loadChildren es un string con 2 partes: La division es por #
    // la primera parte es la ubicacion del modulo
    // La segunda parte es el nombre de la clase del modulo
    {path: "libros", loadChildren: "./libros/libros.module#LibrosModule"}
    */
    //LoadChildren ahora es una funcion que va a importar
    //El metodo import requiere un parametro. La ruta del modulo
   {path: "libros", loadChildren: () => import("./libros/libros.module")
    //es un metodo asyncrono por lo que devuelve un promesa
    //el metodo then tiene como parametro una fn con un parametro
    //indica que cargue el modulo de libros.
    .then( mod => mod.LibrosModule)
    },
    {path: "autores", loadChildren: () => import('./autores/autores.module')
    .then(mod => mod.AutoresModule)
    },
    {path: "editoriales", loadChildren: () => import('./editoriales/editoriales.module')
    .then(mod => mod.EditorialesModule)
    }
]

// decorador para modulos
@NgModule({
    //Si se carga todo inicialmente se usa forRoot
    //Si no se carga todo inciialmente se usa forChild 
    //- ya existe en memoria el espacio para las rutas
    imports:[RouterModule.forRoot(routes, {preloadingStrategy:
        //Se va a descargar los modulos en background a los temporales.
        PreloadAllModules
    })],
    declarations: [],
    providers: [],
    //Debemos exportar el RouterModule porque es donde esta el <router-outlet>
    // Cuando se agregar en exports es como colocarlo con public para que otros
    //modulos puedan utilizarlo.
    exports: [RouterModule]
})



export class AppRouting {}
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { componentFactoryName } from '@angular/compiler';
import { EdicionComponent } from './edicion/edicion.component';

const routes: Routes = [
    {
        path: "", children: [
            { path: "listado", component: ListadoComponent },
            { path: "nuevo", component: NuevoComponent },
            { path: "edicion", component: EdicionComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class LibrosRouting { }
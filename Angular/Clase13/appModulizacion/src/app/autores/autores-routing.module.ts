import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoAutoresComponent } from './listado-autores/listado-autores.component';
import { NuevoAutoresComponent } from './nuevo-autores/nuevo-autores.component';
import { EdicionAutoresComponent } from './edicion-autores/edicion-autores.component';


const routes: Routes = [
  {path: "", children: [
    {path: "listado", component: ListadoAutoresComponent},
    {path: "nuevo", component: NuevoAutoresComponent},
    {path: "edicion", component: EdicionAutoresComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }

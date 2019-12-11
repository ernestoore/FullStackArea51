import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoEditorialesComponent } from '../editoriales/listado-editoriales/listado-editoriales.component';
import { NuevoEditorialesComponent } from './nuevo-editoriales/nuevo-editoriales.component';
import { EdicionEditorialesComponent } from './edicion-editoriales/edicion-editoriales.component';


const routes: Routes = [
  {path: "editoriales", children: [
    {path: "listado", component: ListadoEditorialesComponent},
    {path: "nuevo", component: NuevoEditorialesComponent},
    {path: "edicion", component: EdicionEditorialesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorialesRoutingModule { }

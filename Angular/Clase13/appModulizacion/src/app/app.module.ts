import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { AppRouting } from './app-routing.module';
import { NucleoModule } from './nucleo/nucleo.module';
import { LibrosModule } from './libros/libros.module';
import { AutoresModule } from './autores/autores.module';
import { EditorialesModule } from './editoriales/editoriales.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
  ],
  imports: [
    //En appModule BrowserModule importa internamente CommonModule
    BrowserModule,
    //Para que angular sepa que otros modulos 
    //existen se requiere importarlos
    AppRouting,
    NucleoModule,
    LibrosModule,
    AutoresModule,
    EditorialesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

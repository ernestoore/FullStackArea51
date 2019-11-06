import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home/home.component'
import { UsuarioService } from './usuario.service';
import { LoggerService } from './logger.service';
@NgModule({
  declarations: [
    AppComponent, LoginComponent, HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsuarioService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

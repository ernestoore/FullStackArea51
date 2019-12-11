import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [MenuComponent, LoginComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent]
})
export class NucleoModule { }

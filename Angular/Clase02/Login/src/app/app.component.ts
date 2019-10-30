import { Component, APP_BOOTSTRAP_LISTENER } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible: boolean = true;
  titulo: string = 'Ingrese sus Credenciales';

  constructor() {
    /* setTimeout(() => {
      this.visible = false
    }, 5000); */
  }

  cambiarVisibilidad() {
    this.visible = !this.visible;
  }

  login() {
    this.visible = !this.visible;
  }

}

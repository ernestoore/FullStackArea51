import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    @Input() headline
    @Output() onLogging = new EventEmitter() //Todas las salidas son instancias de la clase EventEmitter.

    loggearse() {
        this.onLogging.emit()
    }

    valorIngresado(evt) {
        console.log(evt.target.value)
    }

}
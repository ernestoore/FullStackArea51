export class LoggerService{
//Lo primero que se debe de hacer es declararlo en el module.ts
    mostrarMensaje(mensaje){
        console.log("%c" + mensaje, "color: red")
    }
}
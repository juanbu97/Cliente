/**
 * Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. 
 * Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. 
 * Para determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() proporcionada.
 * 
 * @author Juan Antonio Bujalance García
 */
{
    let elementoDiv;

    let informacion = function (evento) {


        let coordenadaX = evento.clientX;
        let coordenadaY = evento.clientY;

        let [tamanoX, tamanoY] = tamanoVentanaNavegador();


        let posicionHorizontal = (coordenadaX > tamanoX / 2) ? "derecha" : "izquierda";
        let posicionVertical = (coordenadaY > tamanoY / 2) ? "abajo" : "arriba";

        muestraInformacion(['Posición', posicionHorizontal, posicionVertical]);
    }

    let muestraInformacion = function (mensaje) {
        elementoDiv.innerHTML = '<h1>' + mensaje[0] + '</h1>';
        for (let i = 1; i < mensaje.length; i++) {
            elementoDiv.innerHTML += '<p>' + mensaje[i] + '</p>';
        }
    }
    let tamanoVentanaNavegador = function () {

        return [document.body.clientWidth, document.body.clientHeight];
    }

    let inicio = function () {
        document.addEventListener("click", informacion);
        elementoDiv = document.getElementById("info");


    }

    document.addEventListener("DOMContentLoaded", inicio);
}
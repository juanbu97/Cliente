/**
 * Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. 
 * Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. 
 * Para determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() proporcionada.
 * 
 * @author Juan Antonio Bujalance García
 */
{

    let informacion = function (elEvento) {
        let evento = elEvento;

        let coordenadaX = evento.clientX;
        let coordenadaY = evento.clientY;

        let dimensiones = tamanoVentanaNavegador();
        let tamanoX = dimensiones[0];
        let tamanoY = dimensiones[1];

        let posicionHorizontal = "";
        let posicionVertical = "";

        if (coordenadaX > tamanoX / 2) {
            posicionHorizontal = "derecha";
        }
        else {
            posicionHorizontal = "izquierda";
        }

        if (coordenadaY > tamanoY / 2) {
            posicionVertical = "abajo";
        }
        else {
            posicionVertical = "arriba";
        }

        muestraInformacion(['Posición', posicionHorizontal, posicionVertical]);
    }

    let muestraInformacion = function (mensaje) {
        document.getElementById("info").innerHTML = '<h1>' + mensaje[0] + '</h1>';
        for (let i = 1; i < mensaje.length; i++) {
            document.getElementById("info").innerHTML += '<p>' + mensaje[i] + '</p>';
        }
    }
    let tamanoVentanaNavegador = function () {
        let dimensiones = [];
        dimensiones = [window.innerWidth, window.innerHeight];
        return dimensiones;
    }
    let inicio = function () {

        document.onclick = informacion;


    }
    window.onload = inicio;
}
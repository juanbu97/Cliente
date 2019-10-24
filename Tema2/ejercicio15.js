/**
 * Completar el código JavaScript proporcionado para que:

Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición del puntero respecto del navegador y respecto de la página:
Información que se muestra para los eventos del ratón
Figura 6.1 Información que se muestra para los eventos del ratón

Para mostrar los mensajes, utilizar la función muestraInformacion() deduciendo su funcionamiento a partir de su código fuente.
Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo evento y su información asociada:
Información que se muestra para los eventos del teclado
Figura 6.2 Información que se muestra para los eventos del teclado

Añadir la siguiente característica al script: cuando se pulsa un botón del ratón, el color de fondo del cuadro de mensaje debe ser amarillo (#FFFFCC) y cuando se pulsa una tecla, el color de fondo debe ser azul (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser blanco.
El color de fondo del cuadro de información cambia en función del tipo de evento
Figura 6.3 El color de fondo del cuadro de información cambia en función del tipo de evento
@author Juan Antonio Bujalance García
*/
//creación de bloque para evitar la globalidad.
{
    //variable global al bloque.
    let parrafo;


    let inicio = function () {
        //asocio todos los eventos.
        parrafo = document.getElementById("parrafo"); //solo lo cargo una vez.
        let elementoBody = document.body;

        elementoBody.addEventListener("keypress",muestraTecla);
        elementoBody.addEventListener("mousemove",cambiaColor);
        elementoBody.addEventListener("click",muestraRaton);
    }
    
    document.addEventListener("DOMContentLoaded",inicio);

    let muestraRaton = function (event) {//EVITANDO LA GLOBALIDAD AL DECLARAR CON LET Y METERLO DENTRO DE UN BLOQUE

        //let evento =  window.event; ANTIGUALLA DE IE
        let coordenadaX = event.clientX;
        let coordenadaY = event.clientY;
        let coordenadaXpantalla = event.pageX;
        let coordenadaYpantalla = event.pageY;

        //let claseRaton = document.getElementById("parrafo");
        parrafo.innerHTML = "<h1>Ratón</h1> Navegador [" + coordenadaX + ", " + coordenadaY + "]<br> Página [" + coordenadaXpantalla + ", " + coordenadaYpantalla + "]";
        parrafo.className = "raton";
    }

    let muestraTecla = function (event) {

        let teclaPulsada = event.keyCode;
        let letra = String.fromCharCode(teclaPulsada);
        //let parrafo = document.getElementById("parrafo").onkeypress = muestraTecla;
        parrafo.innerHTML = "<h1>Teclado</h1> Carácter [" + letra + "]<br>Código: [" + teclaPulsada + "]";
        parrafo.className = "teclado";

    }

    let cambiaColor = function () {
        //let mueveRaton = document.getElementById("parrafo");
        parrafo.className = "mueveRaton";
    }
}
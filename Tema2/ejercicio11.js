/**
 * Ejercicio 11
*
*A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:

*Número de enlaces de la página
*Dirección a la que enlaza el penúltimo enlace
*Numero de enlaces que enlazan a http://prueba
*Número de enlaces del tercer párrafo
*@author Juan Antonio Bujalance García
 */

{
    let info;
    let enlaces;
    let parrafos;
    let enlacesParrafo;


    
    muestraInformacion = function () {
        info.innerHTML = "Numero de enlaces = " + enlaces.length;
        info.innerHTML = info.innerHTML + "<br/>" + "El penultimo enlace apunta a: " + enlaces[enlaces.length - 2].href;;
        contarEnlacesPrueba();
        info.innerHTML = info.innerHTML + "<br/>" + "Número de enlaces en el tercer párrafo = " + enlacesParrafo.length;
        
    }
    
    
    
    // Direccion del penultimo enlace
    
    
    
    //Nunero de enlaces que apuntan a http://prueba
    function contarEnlacesPrueba() {
        let contador = 0;
        for (let i = 0; i < enlaces.length; i++) {
            if (enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/")
            contador++;
        }
        
        info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a http://prueba";
    }

    let inicia = function () {
        info = document.getElementById("informacion");
    
        // Numero de enlaces de la pagina
        enlaces = document.getElementsByTagName("a");
        parrafos = document.getElementsByTagName("p");
        enlacesParrafo = parrafos[2].getElementsByTagName("a");
        muestraInformacion();
    }
    
    document.addEventListener("DOMContentLoaded", inicia);
    
    
}

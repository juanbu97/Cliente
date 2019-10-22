/**
 * Ejercicio 17
 *
 * Mejorar el ejemplo anterior indicando en todo momento al usuario el
 * número de caracteres que aún puede escribir. Además, se debe 
 * permitir pulsar las teclas Backspace, Supr. y las flechas 
 * horizontales cuando se haya llegado al máximo número de 
 * caracteres. 
 * @author Juan Antonio Bujalance García 
 */
{
    let elemento;
    let info;

    let limita = function () {   
 
    let codigoCaracter = evento.charCode || evento.keyCode;
    // Permitir utilizar las teclas con flecha horizontal
    if(codigoCaracter == 37 || codigoCaracter == 39) {
        return true;
    }
    
    // Permitir borrar con la tecla Backspace y con la tecla Supr.
    if(codigoCaracter == 8 || codigoCaracter == 46) {
        return true;
    }
    else if(elemento.value.length >= 100 ) {
        return false;
    }
    else {
        return true;
    }
}

let actualizaInfo = function () {
    
    if(elemento.value.length >= 100 ) {
        info.innerHTML = "Máximo "+100+" caracteres";
    }
    else {
        info.innerHTML = "Puedes escribir hasta "+(100-elemento.value.length)+" caracteres adicionales";
    }
}

let inicio = function () {
    elemento = document.getElementById("texto");
    info = document.getElementById("info");

    elemento.onkeypress = limita;
    elemento.onkeyup = actualizaInfo;
    
}
window.onload = inicio;

}
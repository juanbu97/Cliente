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
    const MAX_CARACTERES = 100;

    let elementoTextArea, elementoDiv;

    let limita = function (event) {

        switch (event.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'ArrowUp':
            case 'ArrowDown':
            case 'Backspace':
            case 'Delete':
                return;
        }
        if (elementoTextArea.value.length >= MAX_CARACTERES)
            event.preventDefault(); //anula el comportamiento por defecto del evento
    }

    let mostrarInformacion = function () {

        let caracteresRestantes = MAX_CARACTERES - elementoTextArea.value.length;

        elementoDiv.innerHTML = caracteresRestantes
            ? `Caracteres restantes:  ${caracteresRestantes} `
            : `Máximo de caracteres alcanzado ${MAX_CARACTERES}`;
    }

    let inicio = function () {
        elementoTextArea = document.getElementById("texto");
        elementoDiv = document.getElementById("info");

        elementoTextArea.addEventListener("keydown", limita);
        elementoTextArea.addEventListener("keyup", mostrarInformacion);
    }
    document.addEventListener("DOMContentLoaded", inicio);
}
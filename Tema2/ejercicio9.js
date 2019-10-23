/**
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como
 * argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
 * sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 * @author Juan Antonio Bujalance García
 */
let cadena = prompt("Introduzca una cadena");

 function esMayuscula(cadena) {
     if(cadena === cadena.toUpperCase()){
         console.log("Es mayúscula");
     }else if(cadena === cadena.toLowerCase()){
         console.log("Es minúscula");
     }else{
         console.log("Combinación");
     }
 }

esMayuscula(cadena);
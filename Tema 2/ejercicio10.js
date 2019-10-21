/**
 * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
 * palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de
 * palíndromo complejo: "La ruta nos aporto otro paso natural".
 * @author Juan Antonio Bujalance García
 */

let cadena = prompt("Introduzca una cadena");
    
let cadenaInvertida = "";

/**
 * método que devuelve true si la cadena es palíndroma
 * @param {*} cadena 
 */
 function esPalindorma(cadena) {
     if(cadenaInvertida == cadena){
         palindroma = true;
     }else{
         palindroma = false;
     }
     return palindroma;
 }
/**
 * método que invierte una cadena
 * @param {*} cadena 
 */
 function invertirCadena(cadena) {
    
    for( i = cadena.length-1; i>=0; i--){
      cadenaInvertida += cadena[i];
    }
    
 }

 
 invertirCadena(cadena);
/*
* Con el metodo replace cambio los empacios en blanco por cadenas vacías,
* con trim elimino los espacios al principio y al final de la cadena y
* con toLowerCase la covierto a minúscula
*/

 cadena = cadena.replace(/ /g, "").trim().toLowerCase();
 
 cadenaInvertida = cadenaInvertida.replace(/ /g, "").trim().toLowerCase();

 
 console.log(esPalindorma(cadenaInvertida));
/*9. Cree una función que reciba una letra del alfabeto y muestre si tal 
letra corresponde a algún elemento del siguiente arreglo */

//Use ciclo for (con .length) en la solución de este problema


function validarLetra(letra) {
let arreglo = ["a", "b", "c", "d", "e", "f", "g"];
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] === letra) {
            return true;
        }
    }
    return false;
}

let validar = validarLetra("t");
console.log(validar);


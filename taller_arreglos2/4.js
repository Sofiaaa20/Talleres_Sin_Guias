/*4. Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en él. */

let arreglo = [];
let numeros = 0;
let contador = 0;
let total = 0;

function numPrimos() {
    for (let index = 0; index < 2; index++) {
        numeros = parseInt(prompt("Ingrese el arreglo"));
        arreglo.push(numeros);
        for (let i = 0; i < arreglo.length; i++) {
            if (!(arreglo[i] % 2 == 0 )) {
                console.log(arreglo[i]);
            }
        }
    }
    return arreglo;
}
numPrimos();
console.log(arreglo);

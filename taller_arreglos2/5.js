/*5. Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de edad. */

let n = 0;
let arreglo = [];
let edad = 0;
let nombre = "";
let contador = 0;

function numeros(n) {
    n = parseInt(prompt("ingrese la cantidad de personas"));

    for (let index = 0; index < n; index++) {
        nombre = prompt("ingrese el nombre");
        edad = parseInt(prompt("ingrese la edad"));

        if (edad >= 18) {
            arreglo.push(nombre)
            contador++;
        }
    }
}
    
numeros()
console.log(arreglo);
console.log(contador+" son mayores de edad");
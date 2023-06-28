/*10. Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que introduzca el arreglo. */


function nombreConC() {
    let array = [];
    let contador = 0;

for (let index = 0; index < 1; index++) {
    let nombres = prompt("ingresa nombres")    
    array.push(nombres);

    for (let i = 0; i < array.length; i ++) {
        if (array[i].includes("c")) {
            contador++
        }
    }
}
    return contador;
}
nombreConC();
console.log(array);
console.log("la letra c esta: "+contador);
/*9. Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos. */

let arreglo = [10,20,30];
let array = [20,40,60];
let promedio = 0;
let promedio1 = 0;
let suma = 0;
let suma1 = 0;
let contador = 0;
let contador1=0;

function promedioMayor(arreglo,array) {
    for (let index = 0; index < arreglo.length; index++) {
        suma = suma + arreglo[index];
        contador++;

        for (let i = 0; i < array.length; i++) {
            suma1 = suma1 + array[i]
            contador1++;
        }
    }
    promedio = suma / contador;
    promedio1 = suma1 / contador1;

    if (promedio > promedio1) {
        console.log("El promedio mayor es: ",promedio);

    }else {
         console.log("El promedio mayor es: ",promedio1);
    }

return arreglo,array;
}

promedioMayor();
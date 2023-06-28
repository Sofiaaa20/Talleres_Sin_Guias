/*1. Dado el arreglo [1,2,3,4,5,6]:
a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla. 
c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1. 
d) Calcular el promedio de todos los elementos del arreglo*/

let arreglo = [1,2,3,4,5,6];
let i = 0;

while (i < arreglo.length) {
    console.log(arreglo[i]);
    i++
}

for (let index = 0; index < arreglo.length; index++) {
    console.log(arreglo[index]);
}

let copia = [];
for (let index = 0; index < arreglo.length; index++) {
    copia.push(arreglo[index+1]);
}
console.log(copia);


let suma = 0;
for (let index = 0; index < arreglo.length; index++) {
    suma += arreglo[index];
}
console.log("el promedio es de ", suma/arreglo.length);


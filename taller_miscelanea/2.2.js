/*2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3 */

let arreglo = [3, 50, 70, 600, 40];

arreglo.forEach(i => {
    if (i % 3 == 0) {
        console.log(i);
    }
});
/*5. Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b. */

let b = ["abc", 4, 88, 99]
let arregloIndependiente = b.slice()

b.push(11)
arregloIndependiente.push(11)

console.log(arregloIndependiente);
console.log(b);
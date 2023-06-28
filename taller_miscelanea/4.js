/*4. Dado el siguiente arreglo let k = [17, 4, 64, 79, 109, 112] , 
recorrer cada elemento con foreach e
imprimir los elementos que sean números impares */


let arreglo = [17, 4, 64, 79, 109, 112];

arreglo.forEach(index => {
    if (!(index % 2 == 0)) {
        console.log(index);
    }
});

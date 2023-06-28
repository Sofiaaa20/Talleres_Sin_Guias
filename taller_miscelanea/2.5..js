/*5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para
mostrar si el nombre Juan se encuentra dentro del arreglo+*/

let arreglo =  ["Maria", "Pedro", "Juan", "Pablo", "Diana"];

/*let arreglo =  ["Maria", "Pedro", "Juan", "Pablo", "Diana"];

arreglo.forEach(i => {
    if (arreglo[i] = "Juan") {
        console.log("Si la contiene");
    }
}); */

for (let index = 0; index < arreglo.length; index++) {
    if (arreglo[index] == "Juan") {
        console.log("Si la contiene");
    }
    
}
/*6. Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”, “Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades) queden en el arreglo que les corresponde. Use ciclos.*/


let valle = ['Cali' , 'Tulua', 'Cartago', 'Salento'];
let quindio = ['Cordoba', 'Armenia', 'Palmira', 'Circasia'];

let arregloValle = ['Cali','Tulua','Palmira','Cartago'];
let arregloQuindio = ['Cordoba','Armenia','Salento','Circasia'];

let arregloV = [];
let arregloQ = [];

for (let index = 0; index < arregloValle.length,arregloQuindio.length; index++) {
    for (let i = 0; i < valle.length; i++) {
        if (arregloValle[index] === valle[i]) {
            arregloV.push()
        }  
    }
  
}

console.log(arregloV);

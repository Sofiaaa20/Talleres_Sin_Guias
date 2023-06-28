function NumerosOrdenados() {
    let array=[];
    let total = parseInt(prompt("Ingrese la cantidad de usuarios:"));
  
    for (let index = 0; index < total; index++) {
      const numeros = parseInt(prompt("Ingrese los numeros"));
      array.push(numeros);
  
      array.sort(function(a, b){return a-b});
    }
    return array;
}

console.log(NumerosOrdenados());
/*2. Dado el arreglo [1,2,3,4,5,6,7,8,9,10]:
a) Agregue el elemento 345 usando push y verifique el cambio en el arreglo b)
b) Agregue el elemento true usando push y verifique el cambio en el arreglo
c) Agregue el elemento "ADSO" usando push y verifique el cambio en el arreglo 
d) Agregue los elementos 455, 78, false usando push en un solo llamado y verifique el cambio en el arreglo
e) Agregue los elementos "ABcd", true, 21 usando push en un solo llamado y verifique el cambio en el arreglo */


let arreglo = [1,2,3,4,5,6,7,8,9,10];
arreglo.push(345);
console.log(arreglo);

let arreglo1 = [1,2,3,4,5,6,7,8,9,10];
arreglo1.push(true)
console.log(arreglo1);

let arreglo2 = [1,2,3,4,5,6,7,8,9,10];
arreglo2.push("ADSO")
console.log(arreglo2);

let arreglo3 = [1,2,3,4,5,6,7,8,9,10];
arreglo1.push(455)
console.log(arreglo3);

let arreglo4 = [1,2,3,4,5,6,7,8,9,10];
arreglo4.push("ABcd",true,21);
console.log(arreglo4);

/*4.Valor (2 puntos) Pedro trabaja en una empresa desarrolladora que está haciendo un software para el cliente orbi (una empresa multinacional). Pedro requiere una función que reciba como argumento el arreglo de caracteres ["b", "p", "s", "z", "o", "b", "a", "w", "r", “i”] y muestre si es posible formar la palabra orbi con los elementos del arreglo. .En caso de ser posible, quite los elementos del arreglo que no sirven para formar la palabra orbi y luego ordene el arreglo para que quede como el siguiente: [“o”, “r”, “b”, “i”]. 
Cree la función que  requiere Pedro. Haga el análisis y luego codifique. */

function orbi(arreglo) {
   
    let validacion = true;
    let arregloNuevo = ["o", "r", "b", "i"];

    for (let i = 0; i < arregloNuevo.length; i++) {
        for (let index = 0; index < arreglo.lenght; index++) {

            if (arregloNuevo[i] === arreglo[index] ) {
                validacion = true
               if (arregloNuevo[i] != arreglo[index]) {
                arreglo.splice(arreglo[index]);
               }
            } else {
                console.log("no es posible");
            }
        }
    }
        if (validacion) {
            console.log("Si es posible crear la palabra orbi");

        } else {
            console.log("no es posible");
        }

        return arreglo;
    }

    let resultado = orbi(['b', 'p', 's', 'z', 'o', 'b', 'a', 'w', 'r', 'i']);
    console.log(arreglo);
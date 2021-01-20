/* Problema 1: Se debe crear una solución que dado 2 números X y Y cualesquiera,
 se obtenga la multiplicación de los mismos SIN usar el operador de
 multiplicación *. */


 //solucion 1 : usando recursividad

function multiplicación(x,y){
 if(y == 0){
     return 0
    }else{
        if(y == 1){
            return x
        }else{
            return x + multiplicación(x, y-1);
        }
    }
}

const resultado = multiplicación(0,2);//input
console.log(resultado)//output
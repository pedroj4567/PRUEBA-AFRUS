/* Cantidad de elementos del arreglo.[listo]
Porcentaje de números pares e impares.
Porcentaje de números mayores a 1000.
Cuál es el mayor y menor valor.
Asuma los siguientes indicadores: Tome en cuenta que el mayor número representa el 100%, 
 indique cual es el porcentaje del número mínimo y el porcentaje del promedio de todos los números. */

 const array = [800,3,1500,250,480,720];

 //cantidad de elementos dentro de array
 const cantidadE = array.length;
 //numeros mayores 
const mayor = Math.max(...array);

const menor = Math.min(...array)

 //pares e impares
const pares = (array) =>{
 let pares1 = [];
 let impares1= [];
 let pares = 0;
 let impares= 0;
  for (let i = 0; i<array.length;i++){
    if(i%2==0){
      pares1.push(array[i]);
       pares = pares +1;
      }else{
         impares1.push(array[i]);
         impares = impares + 1;
  }

}   
const suma = pares1.reduce((a,b)=>a+b, 0);
const porcentaje = (suma/mayor)/100
console.log(porcentaje)

 const suma1 = impares1.reduce((d,e)=>d+e, 0);
const porcentaje1 = (suma1/mayor)/100;
console.log(porcentaje1) 
console.log(`Los numeros impares son: ${impares}`)
console.log(`Los numeros pares son: ${pares}`)
}







//mostrar informacion requerida
function mostrarinfo (){
    console.log(`La cantidad de datos es: ${cantidadE}`)
    pares(array); 
    console.log(`El numero mayor es: ${mayor}`)
    console.log(`El numero menor es: ${menor}`)
}


mostrarinfo();





 

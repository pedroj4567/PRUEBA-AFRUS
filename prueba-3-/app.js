/* 
Debe tener al menos 16 caracteres.(LISTO)
Debe tener letras minúsculas y mayúsculas (LISTO).
No puede tener 2 letras iguales consecutivas.(lISTO)
Debe contener al menos 4 números.
No puede tener 2 números iguales consecutivos. 
Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de ellos puede repetirse en ninguna posición y además los caracteres no pueden estar juntos.
No se puede usar el número 0.(LISTO)
No se puede colocar espacios.(lISTO)
 */


// numeros repetidos
const caracteresRepetidos = function(str) {
    let ocurrencias= 0;
    let revisados = [];

        for (var i=0; i<str.length; i++) {
            if (!revisados.includes(str[i]) && str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
             revisados.push(str[i]);
            ocurrencias = ocurrencias+1;
         }
     }
        if(ocurrencias == 0){
            console.log("La contraseña no posee ningun carácter repetido")
        }else{
            console.log("LA CONTRASEÑA NO DEBE CONTENER EL MISMO CARÁCTER CONSECUTIVO")
        }
 }


const emptynum = (str) =>{

    let splitted3 = str.split("");

    let search3 = splitted3.map((letra3)=>{
        if(letra3 === " " || letra3 === "0"){
            console.log("La contrseña no debe contener espacios ni 0")
        }
    })

}

const longitudpass= (str) =>{
    let pegar = str.trim();
    let longSplitted = pegar.split('');
    let total = longSplitted.length;
    if(total === " "){
        console.log("Por favor, ingrese una contraseña");   
    }else{
        if(total<16){
            console.log("Contraseña fuera de rango, la contraseña debe tener como minimo 16 carácteres")
        }else{
            console.log("Rango mayor a 16 caracteres: PASS")
        }
    }
}
//corregir este bloque de codigo 


const vaidarMayusculas= (str) =>{
 
    let may = 0;
    let separar = str.split("")

    let buscar = separar.map((w)=>{
       
        if(w == w.toUpperCase()){
          console.log("MAYUSCULAS: PASS")
        }else{
            if(!w.toUpperCase() == w){
                console.log("la contraseña debe contener letras en mayusculas")
            }
        }
    
    });
    
      
}


const vaidarMinusculas= (str) =>{
    
    let separar1 = str.split("")
    let buscar1 = separar1.map((w1)=>{
        if(w1 == w1.toLowerCase()){
          console.log("Minusculas: PASS")
        }else{
            if(!w1.toLowerCase() === w1){
                console.log("la contraseña debe contener letras en minusculas")
            }
        }
    });
    
   
}



const str = "pedroD54634";//input

console.log(`La contraseña: ${str}`)
if( str.trim() === "" || str.trim() === " "){
    console.log("Ingrese una contraseña")
}
const a = longitudpass(str);
console.log("-------------------------------------------------------------")
const b = vaidarMayusculas(str)
console.log("-------------------------------------------------------------")
const c = vaidarMinusculas(str)
console.log("-------------------------------------------------------------")
const d = emptynum(str);
console.log("-------------------------------------------------------------")
const e = caracteresRepetidos(str);
console.log("-------------------------------------------------------------")


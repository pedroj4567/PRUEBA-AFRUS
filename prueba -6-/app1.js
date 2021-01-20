//entrada

const entrada = prompt("Ingrese el nombre o el numero del pokemon");
const url = `https://pokeapi.co/api/v2/pokemon/${entrada}/` ;

//recargar paginas
function actualizarLaPagina(){
    window.location.reload();
} 

// conexion
fetch(url)
.then(response => response.json())//pendiente con el transformar a json
.then(data =>{

const {id,name,weight,sprites,height,types} = data;

    let element = document.getElementById("elem");
    element.innerHTML = `
    <img src =" ${data.sprites.front_default}"/>
    <p>Nombre: ${data.name}</p>
    <p>Numero de pokemon: ${data.id}</p>
    <p>Tipo: ${data.types[0].type.name}</p>
    <p>altura: ${data.height}</p>
    <p>Peso: ${data.weight} </p>
    `
 
})
.catch(error=>alert("Pokemon not found"));










//DECLARAMOS ARRAYS VACIOS
let arrInt = [];
const arrStr = [];

fetch('Prueba.json').then(answer => {
    if(!answer.ok) throw new Error ("No se ha encontrado Archivo json");
      return answer.json(); 
}).then(datos =>{

    arrInt = datos.map(item => item.id);

    console.log("IDs:", arrInt);

})
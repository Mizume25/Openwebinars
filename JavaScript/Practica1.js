//Formas de declarar variables en JS
let wordone = "Hola Mundo" //Let = donde guarda su variable 
console.log (wordone); //Console.log debuggea la secuencia

var wordtwo = "Adios Mundo" //var = donde gauarda su variable
console.log (wordtwo);
//Se recomeinda emplea más let que var

const salario = 1000; //Declaracion de constantes

//Estructuras de control

    //Detalles a recordar: Js es un lenguaje ¡case sensitive!

//Estructura if
/*if (condition) {
    
} else {
    
}

//Estructura Switch
switch (key) {
    case value:
        
        break;

    default:
        break;
}

//Estructura de bucles
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

while (condition) {
    
}

do {
    
} while (condition);

*/

// Estructura de arrays y foreach
let students = ["Joan", "Maria", "Tania"];  // ✅ Array correcto

students.forEach(element => {
    console.log(element);  // ✅ forEach correcto
});
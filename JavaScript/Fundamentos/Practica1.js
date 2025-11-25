//Formas de declarar variables en JS
//let wordone = "Hola Mundko" //Let = donde guarda su variable 
//console.log (wordone); //Console.log debuggea la secuencia

//var wordtwo = "Adios Mundo" //var = donde gauarda su variable
//console.log (wordtwo);
//Se recomeinda emplea más let que var

//const salario = 1000; //Declaracion de constantes

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
/*
let students = ["Joan", "Maria", "Tania"];  // 

students.forEach(element => {
    console.log(element);  // 
});
*/

// Tipos de datos

//Valores Strings pueden representarse con "" y '' (se recomeinda "")

//Valores de numeros pueden expresarse en enteros o decimales

//Valores booleanos se representan en true o false 

//Valores null --> Tipos no primitivos de datos


//Podemos cambiar la funcionalidad de los valores

//"Casting"
let isActive = "1";
console.log (typeof isActive); // String

isActive = Boolean(isActive);

console.log(typeof isActive) // Boolean

let test = "Dos mil viente tres";
test = Number(test);
//Al hacer casting de un String imprimira NaN como "Not a Number"
console.log(test);
test = 1;
console.log((10 - test));

// Un Boolean da true con numeros positivos y negativos y false con 0 o valores null


// Function 
//CamelCase
function hello() {
let testtwo = console.log ("Hello World")
// No hace falta tipificar el tipo de dato
}

hello()

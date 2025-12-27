//Bloque de la Funcion
function printGreet(params) {
     return "Hello World"; // Devolver valor
   
}
//Llamar Funcion
let result = printGreet();
console.log (result);

function Getcopyright() {
let copyright = "Gabriel - Openwebinars"
return copyright
}

let result1 = Getcopyright();
console.log(result1)

//Valores en la funcion: parametros / Valores en la invocacionde la funcion: Argumentos
function getCopyright(name = "OpenWebinars", year = 2023) { // Parametros
let copyright = name + " - " + year;
return copyright
}

getCopyright("Gabriel", 2024); // Argumentos

//El Orden de las funciones no afecta a su ejecucion ("Hoisting")
Hello();

function Hello() {
console.log("Bye World")
}

//Expresiones de funciones
/*Anonima: Sin nombre de la funcion (Expresion puntual por no decir casi nula)*/

let func = function() {
    return 1;
}

// Los parametros son callback's
            //Argumentos
!(function (name, year){
console.log(name + " - " + year) // Estructura de la funcion
})("Gabriel",2023); // Parametros Autoinvocados

// <----------------------------------------->

!function (name, year) {
    console.log(name + " - " + year)
} ("Gabriel", 2023)


//Estructura de la Funcioon
function random(name,year,callback) {
    let copy = callback(name,year)
    return copy;
}

// Anonima: Sin nombree solo con parametros | 

// Callbacks: con nombre pero con funciones por argumentos | 
function imprimir(callback) {
    callback();
}

imprimir(function() {
    console.log("Hello World 2025");
});
// Auto-invocadas: Ejecutan y se llaman a si mimsas


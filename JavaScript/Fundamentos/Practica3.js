//Programa sencillo de numeros random y operaciones aritmeticas

//Declaracion de variables
let randomNumber = random()
let randomNumberOne = random()
let randomNumberTwo = random()

//Main Menu
console.log("==Operaciones Aritmeticas Simples==")

//Mostrar numero
console.log("Con el Numero Random:", randomNumber)

console.log("\nEl numero random operara los siguentes numeros random",randomNumberOne,randomNumberTwo)
 // Testing de las operaciones

// Si el numero es menor o igual a 50 sumara y restara si es mayor dividira y multiplicara
if(test(randomNumber)){

    console.log("\nEl numero", randomNumber, "es menor o igual que 50 por tanto dividira y multiplicara")
        console.log (randomNumber," x ",randomNumberOne," = ", multi(randomNumber,randomNumberOne)) 
        console.log (randomNumber," / ",randomNumberTwo," = ", div(randomNumber,randomNumberTwo)) 
} else {

    console.log("\nEl numero", randomNumber, "es mayor que 50 por tanto sumara y restara")
        console.log (randomNumber," + ",randomNumberOne," = ", sum(randomNumber,randomNumberOne)) 
        console.log (randomNumber," - ",randomNumberTwo," = ", rest(randomNumber,randomNumberTwo))    
}



//Function generated random number
function random () {
    let randomNumber = Math.floor(Math.random() * 100); // Números del 0 al 9
    return randomNumber  
}

//Function testing
function test (randomNumber) { 
    return randomNumber <=50? true:false; 
}

//Funcion para summar
function sum(randomNumber,randomNumberOne) {
return randomNumber + randomNumberOne
}

//Funcion para restar
function rest(randomNumber,randomNumberTwo) {
return randomNumber - randomNumberTwo
}

//Funcion para multiplicar
function multi(randomNumber,randomNumberOne) {
return randomNumber*randomNumberOne
}

//Funcion para dividir
function div(randomNumber,randomNumberTwo) {
return randomNumber/randomNumberTwo
}
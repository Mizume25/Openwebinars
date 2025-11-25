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
    let resultado1 = multi(randomNumber,randomNumberOne)
    let resultado2 = div(randomNumber,randomNumberTwo)
    console.log (randomNumber," x ",randomNumberOne," = ", resultado1) 
    console.log (randomNumber," / ",randomNumberTwo," = ", resultado2) 
} else {
    let resultado1 = sum(randomNumber,randomNumberOne)
    let resultado2 = rest(randomNumber,randomNumberTwo)

    console.log (randomNumber," + ",randomNumberOne," = ", resultado1) 
    console.log (randomNumber," - ",randomNumberTwo," = ", resultado2)    
}



//Function generated random number
function random () {
    let randomNumber = Math.floor(Math.random() * 100); // Números del 0 al 9
    return randomNumber  
}

//Function testing
function test (randomNumber) {
    
    if (randomNumber <= 50){
    console.log("\nEl numero", randomNumber, "es menor o igual que 50 por tanto dividira y multiplicara")
    Boolean = true
    } else {
    console.log("\nEl numero", randomNumber, "es mayor que 50 por tanto sumara y restara")
    Boolean = false
    }
    return Boolean  
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
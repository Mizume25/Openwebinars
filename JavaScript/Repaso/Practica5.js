//Parejo o senar
let randomNumber = Math.floor(Math.random() * 100); // Números del 0 al 9
console.log("¿Es el numero",randomNumber,"parejo o senar?")
setAnswer(randomNumber)

function setAnswer(randomNumber) {
if (randomNumber % 2 == 0){
console.log("El numero es parejo")
} else {
console.log("El numero es senar")
}

}
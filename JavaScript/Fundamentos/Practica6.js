//Escriu un programa que demani un nombre enter i determini si és múltiple de 2 i/o de 5.
let randomNumber = Math.floor(Math.random() * 51); // Números del 0 al 9
if (randomNumber % 2 == 0 && randomNumber % 5 == 0){
console.log("El numero",randomNumber,"es multiple de 2 y 5")
} else if ( randomNumber % 2 == 0 || randomNumber % 5 == 0){
console.log("El numero",randomNumber,"es multiple de 2 o 5")
}  else {
console.log("El numero",randomNumber, "No es Multiple de ninguno")
}
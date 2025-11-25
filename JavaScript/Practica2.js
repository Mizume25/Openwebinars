// Escribe un programa que demani un numero y declare si es par o impar
let number = parseInt(prompt("Introduce un número:")); // Variable random de 1 - 10
if (number % 2 === 0) {
    console.log("El número " + number + " es PAR");
} else {
    console.log("El número " + number + " es IMPAR");
}
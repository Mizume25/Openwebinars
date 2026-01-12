const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== PROGRAMA DE DATOS PERSONALES ===");

rl.question("Ingresa tu nombre: ", (nombre) => {
  rl.question("Ingresa tu edad: ", (edad) => {
    rl.question("Ingresa tu ciudad: ", (ciudad) => {
      console.log("\n=== DATOS INGRESADOS ===");
      console.log(`Nombre: ${nombre}`);
      console.log(`Edad: ${edad}`);
      console.log(`Ciudad: ${ciudad}`);
      rl.close();
    });
  });
});
//Frases aleatorias
const frases = [
    "La paciencia es la madre de la ciencia.",
    "El código que no se prueba, no funciona.",
    "No hay mal que por bien no venga.",
    "Hazlo simple, pero significativo.",
    "El éxito es la suma de pequeños esfuerzos diarios.",
    "Si funciona, no lo toques.",
    "La curiosidad mató al gato, pero la satisfacción lo trajo de vuelta.",
    "Un programador es un organismo que convierte cafeína en código.",
    "Lo que hoy parece un huracán, mañana será una brisa.",
    "Menos es más.",
    "Errar es de humanos, pero para fastidiarla de verdad hace falta un ordenador."
];

//Declaramos Botono y Display
const BTNRandom = document.getElementById("new-phrase-btn");
const phraseDisplay = document.getElementById("phrase-display");


// Frase Default
(function () {
    phraseDisplay.textContent = "¡Pulsa el botón para empezar!";
})();



//Evento Click
BTNRandom.addEventListener('click', function () {
    //Cargamos numero maximo de frases que hay
    const maxNum = frases.length;

    //declaramos un random que de un random entre el rango maximo
    let randomNumber = Math.floor(Math.random() * maxNum);
    
    //Inyectamos el texto
    phraseDisplay.textContent = frases[randomNumber];
    console.log("Estas imprimiendo la frase en la posicion", randomNumber);
});
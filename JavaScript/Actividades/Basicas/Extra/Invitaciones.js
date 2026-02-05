//DECLARAMOS VARIABLES
const placeImg = document.getElementById("imgT");
const negativaBTN = document.getElementById("NO");
const frasesDuda = [
    "¿Pensarlo? Pero si ya tengo casa sola... 🐢",
    "Amooor cada vez que pulses este boton un gatito muere.🐢 ",
    "Sabes bien que el botton Si te hace ojitos (como yo) 🐢",
    "¿Es por la tortuga? ¡La tortuga también quiere que vengas! 🐢",
    "Si lo piensas mucho, mi amor se enfría. ¡Di que sí! 🐢",
    "¿Segura? Mira que el botón de 'SÍ' tiene regalo incluido... 🐢",
    "Pensar cansa mucho, mejor acepta y vamos a celebrar. 🐢"
];

//Funcion autoInvocada
(function () {
    placeImg.style.cssText = `background-image: url("IMG/Turtle1.png");`
}());

const pensarBTN = document.getElementById("pensar");
const textoSuplica = document.getElementById("suplicar");
const section = document.querySelector(".glass-card");
//Palabras para pensar
let i = 0;
pensarBTN.addEventListener('click',function () {

    //Declaramos un indice modular
    i = (i + 1) % frasesDuda.length;

    textoSuplica.textContent = frasesDuda[i];


});

const displayCard = document.querySelector(".card-info");

displayCard.addEventListener('click',function () {
   
});
negativaBTN.onmouseenter = function() {
    negativaBTN.style.cssText = `  position: absolute; transition: 0.2s;    `
     
    placeImg.style.cssText = `background-image: url("IMG/Turtle2.png");`
    if (section) { // Validamos que exista para evitar el error
        const maxX = section.clientWidth - this.offsetWidth;
        const maxY = section.clientHeight - this.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        this.style.left = randomX + "px";
        this.style.top = randomY + "px";
    } else {
        console.error("No se encontró el contenedor 'section'. Revisa el selector.");
    }

     textoSuplica.textContent = "Amor...."
};

negativaBTN.addEventListener('click',function () {
    textoSuplica.textContent = "Como que no ¿no? el boton de si esta arriba amor!"
})


const positiva = document.getElementById("SI");

function lanzarConfeti() {
    confetti({
        particleCount: 100, // Número de papelitos
        spread: 70,          // Ángulo de expansión (70 grados)
        origin: { y: 0.6 },  // 0 es arriba, 1 es abajo (0.6 es un poco abajo del centro)
        colors: ['#ff0080', '#ffffff'] // Rosa fuerte y blanco
    });
}
positiva.addEventListener('click',function () {
    // 1. Lanzamos el confeti
    lanzarConfeti();

    // 2. Cambiamos la tortuga a una súper feliz
    placeImg.style.cssText= `background-image: url("IMG/Turtle3.png");`

    // 3. Puedes poner un mensaje final
    textoSuplica.textContent = "SIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII"
    
    // Opcional: Ocultar los otros botones para que solo se vea la celebración
    negativaBTN.style.display = "none";
    pensarBTN.style.display = "none";
    
})
    

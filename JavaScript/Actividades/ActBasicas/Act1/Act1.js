//Interruptor
const btn = document.getElementById("theme-toggle");
const body = document.querySelector("body");

//Evento: Quita y modifica la classe
btn.addEventListener('click',function () {
    body.classList.toggle("light")
    body.classList.toggle("dark");
});
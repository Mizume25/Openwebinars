//Interruptor
const btn = document.getElementById("theme-toggle");
const body = document.querySelector("body");
btn.textContent = "off";
//Evento: Quita y modifica la classe
btn.addEventListener('click',function () {
    body.classList.toggle("light")
    body.classList.toggle("dark");
    
    if (btn.textContent === "on") {
        btn.textContent = "off"
    } else {
        btn.textContent = "on"
    }
});
// 1. Solo seleccionamos el "padre" y la zona donde cambiaremos el fondo
const navMain = document.querySelector(".navbar");
const pantalla = document.querySelector(".nav-item "); // O la clase que uses abajo

// 2. Escuchamos el movimiento del ratón en toda la barra
navMain.addEventListener('mouseover', (event) => {
    
    // Verificamos si donde pusimos el ratón tiene el atributo data-color
    const colorEncontrado = event.target.dataset.color;

    if (colorEncontrado) {
        // Cambiamos el fondo de la pantalla al valor que dice el data-color
        pantalla.style.backgroundColor = colorEncontrado;
        
        // Bonus: Cambiamos el texto para saber dónde estamos
        pantalla.querySelector('p').textContent = `Fondo: ${colorEncontrado}`;
    }
});

// 3. Cuando el ratón sale de la barra, limpiamos
navMain.addEventListener('mouseout', () => {
    pantalla.style.backgroundColor = "";
    pantalla.querySelector('p').textContent = "Pasa el ratón por el menú";
});


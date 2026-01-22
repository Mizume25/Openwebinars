//DECLARAMOS VARIABLES
const operationSelect = document.querySelector("#options-cards");
const SelectBtn = document.querySelector("#showResult");
const zona = document.querySelector(".card");

// Creamos la estructura inicial UNA VEZ
function crearEstructuraInicial() {
    const htmlContent = `<h2 id="card-title">TITULO EJEMPLO</h2>
                        <p id="card-description">Aquí irá la descripción inyectada.</p>
                        <span id="card-price">0.00€</span><br>
                        <small id="idDisplay">id:</small>`;
    zona.innerHTML = htmlContent;
    
    // Ahora podemos obtener referencias a los elementos creados
    window.titleElement = document.querySelector("#card-title");
    window.descriptionElement = document.querySelector("#card-description");
    window.priceElement = document.querySelector("#card-price");
    window.idElement = document.querySelector("#idDisplay");
}

// Inicializar estructura
crearEstructuraInicial();

// Función optimizada para cargar cualquier card
function loadCard(id) {
    fetch('Act5.json')
    .then(response => {
        if(!response.ok) throw new Error('Error al cargar JSON');
        return response.json();
    })
    .then(datos => {
        const item = datos.productos.find(p => p.id === id);
        if (item) {
            // Actualizamos solo el contenido de los elementos existentes
            titleElement.textContent = item.titulo || 'Sin título';
            descriptionElement.textContent = item.descripcion || 'Sin descripción';
            priceElement.textContent = `${item.precio || '0.00'}€`;
            idElement.textContent = `id: ${item.id}`;
        } else {
            // Si no encuentra el producto, mostrar mensaje en la card
            titleElement.textContent = 'Producto no encontrado';
            descriptionElement.textContent = `No existe producto con ID ${id}`;
            priceElement.textContent = '0.00€';
            idElement.textContent = `id: ${id} (no encontrado)`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        titleElement.textContent = 'Error de carga';
        descriptionElement.textContent = 'No se pudieron cargar los datos';
        priceElement.textContent = '0.00€';
        idElement.textContent = 'id: error';
    });
}

// Versión alternativa: definir las referencias globalmente primero
// y luego crear la estructura (opción más limpia)
/*
let titleElement, descriptionElement, priceElement, idElement;

function inicializarCard() {
    zona.innerHTML = `
        <h2 id="card-title"></h2>
        <p id="card-description"></p>
        <span id="card-price"></span><br>
        <small id="idDisplay"></small>
    `;
    
    // Obtener referencias después de crear el HTML
    titleElement = document.querySelector("#card-title");
    descriptionElement = document.querySelector("#card-description");
    priceElement = document.querySelector("#card-price");
    idElement = document.querySelector("#idDisplay");
    
    // Establecer valores por defecto
    setDefaultCard();
}

function setDefaultCard() {
    titleElement.textContent = "TITULO EJEMPLO";
    descriptionElement.textContent = "Aquí irá la descripción inyectada.";
    priceElement.textContent = "0.00€";
    idElement.textContent = "id:";
}

// Llamar a inicializarCard() al cargar la página
*/

SelectBtn.addEventListener("click", function () {
    const selectedValue = parseInt(operationSelect.value);
    
    if (selectedValue === 1) {
        loadCard(1);
    } else if (selectedValue === 2) {
        loadCard(2);
    }else if (selectedValue === 3){
        loadCard(3)
    }else if (selectedValue === 0) {
        // Opción para restaurar valores por defecto
        titleElement.textContent = "TITULO EJEMPLO";
        descriptionElement.textContent = "Aquí irá la descripción inyectada.";
        priceElement.textContent = "0.00€";
        idElement.textContent = "id:";
    }
});
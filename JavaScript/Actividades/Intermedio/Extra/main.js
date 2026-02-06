// main.js
import { startStock } from './api.js';
import { renderizarWeb, renderizarCart, CardsDisplay } from './ui.js';

// --- ESTADO DE LA APLICACIÓN ---
let dispensa = [];
let client = [];
let auterList = []; // Para manejar filtros + orden
let total = 0;
let countItems = 0;
let filtrado = false;
let interfazCliente = false;

// --- SELECTORES ---
const displayCountItems = document.getElementById("contadorCarrito");
const displayTotalUser = document.getElementById("bill");
const BtnListUser = document.getElementById("list-User");
const BTNsales = document.getElementById("btnOfertas");
const SelectCategory = document.getElementById("SelectCategory");
const SelectPrice = document.getElementById("SelectPrice");
const inputSearch = document.getElementById("inputBusqueda");

// --- INICIALIZACIÓN DE TEXTOS ---
BTNsales.innerHTML = `<i class="fas fa-tag"></i> Productos en Oferta`;
displayTotalUser.textContent = "0.00";
BtnListUser.innerHTML = "Mostrar Compra";

// --- LÓGICA DE ACTUALIZACIÓN ---

const actualizarUIGlobal = () => {
    displayTotalUser.textContent = Math.abs(total).toFixed(2);
    displayCountItems.textContent = countItems;
};

// Exponemos funciones al objeto window para los onclick de las cards
window.updateItems = (id) => {
    const producto = dispensa.find(p => p.id == id);
    if (producto && producto.stock > 0) {
        countItems++;
        producto.stock--;
        total += producto.precio;

        let itemEnCarrito = client.find(item => item.id == id);
        if (itemEnCarrito) {
            itemEnCarrito.cantidad++;
        } else {
            producto.cantidad = 1;
            client.push(producto);
        }

        actualizarUIGlobal();
        // Actualizar stock visualmente en la card
        const stockEl = document.getElementById(`stock-num-${id}`);
        if (stockEl) stockEl.textContent = producto.stock;
    } else {
        alert("¡No queda stock!");
    }
};

window.backItems = (id) => {
    const obj = client.find(p => p.id == id);
    const catalogo = dispensa.find(p => p.id == id);

    total -= obj.precio;
    countItems--;
    catalogo.stock++;
    obj.cantidad--;

    if (obj.cantidad === 0) {
        client = client.filter(p => p.id !== id);
    }
    
    actualizarUIGlobal();
    renderizarCart(client); // Re-renderizamos el carrito para ver cambios
};

// --- FUNCIONALIDADES DE FILTRADO Y BÚSQUEDA ---

const ejecutarBusqueda = () => {
    const queryStr = inputSearch.value.trim().toLowerCase();
    if (!queryStr) return;
    
    const resultado = dispensa.filter(p => p.nombre.toLowerCase().includes(queryStr));
    if (resultado.length > 0) {
        renderizarWeb(resultado);
    } else {
        CardsDisplay.innerHTML = `<div class="empty-state"><p>No se encontró "${queryStr}"</p></div>`;
    }
    inputSearch.value = "";
};

// --- EVENTOS ---

// Botón de Ofertas (Tu lógica de toggle de estilos)
BTNsales.addEventListener('click', () => {
    const listaATrabajar = filtrado ? auterList : dispensa;
    
    if (BTNsales.value === "SI") {
        const ofertas = listaATrabajar.filter(p => p.oferta === true);
        renderizarWeb(ofertas);
        BTNsales.value = "NO";
        BTNsales.classList.replace("btn-accent", "btn-danger");
        BTNsales.innerHTML = `<i class="fas fa-tag"></i> Ver Todos`;
    } else {
        renderizarWeb(listaATrabajar);
        BTNsales.value = "SI";
        BTNsales.classList.replace("btn-danger", "btn-accent");
        BTNsales.innerHTML = `<i class="fas fa-tag"></i> Productos en Oferta`;
    }
});

// Selector de Categorías
SelectCategory.addEventListener('change', (e) => {
    const categorias = { "1": "verdura", "2": "carniceria", "3": "lacteo", "4": "pescaderia", "5": "despensa" };
    const query = categorias[e.target.value];

    if (!query) {
        filtrado = false;
        renderizarWeb(dispensa);
    } else {
        filtrado = true;
        auterList = dispensa.filter(p => p.categoria === query);
        renderizarWeb(auterList);
    }
    SelectPrice.value = "order-gen"; // Reset del orden al cambiar categoría
});

// Selector de Precio (Orden)
SelectPrice.addEventListener('change', (e) => {
    let lista = filtrado ? [...auterList] : [...dispensa];
    
    if (e.target.value === "order-asc") lista.sort((a, b) => a.precio - b.precio);
    if (e.target.value === "order-desc") lista.sort((a, b) => b.precio - a.precio);
    
    renderizarWeb(lista);
});

// Búsqueda
document.getElementById("search").addEventListener('click', ejecutarBusqueda);

// Mostrar Carrito / Volver al Catálogo
BtnListUser.addEventListener('click', () => {
    interfazCliente = !interfazCliente;
    if (interfazCliente) {
        renderizarCart(client);
        BtnListUser.innerHTML = "Volver al Catálogo";
        BtnListUser.classList.add("btn-user");
    } else {
        renderizarWeb(dispensa);
        BtnListUser.innerHTML = "Mostrar Compra";
        BtnListUser.classList.remove("btn-user");
    }
});

// Botón "Mostrar Todos" e Inicio
document.getElementById("btnMostrar").addEventListener("click", () => {
    filtrado = false;
    interfazCliente = false;
    renderizarWeb(dispensa);
});

// --- ARRANQUE ---
(async () => {
    dispensa = await startStock();
    renderizarWeb(dispensa);
})();
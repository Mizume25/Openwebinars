/*Carga: Trae una lista de productos desde un JSON.

Lógica de Negocio: Debes mostrar todos los productos, pero aquellos que tengan menos de 
5 unidades en stock deben tener un borde rojo y un aviso que diga "¡ÚLTIMAS UNIDADES!".
Botón de Filtro: Añade un botón que, al pulsarlo, oculte todos los productos excepto 
los que tienen poco stock (para que el frutero sepa qué tiene que reponer).*/

//DECALRAR VARIABLES
const zonaProductos = document.querySelector("#grid-productos");
const btnAll = document.querySelector("#btn-todos");

function showAll() {
    fetch("Act3.json")
    //Mensaje de error
    .then(answer => {
        if (!answer.ok) { throw new Error('No se pudo cargar el archivo JSON') }
        return answer.json();
    })
    //Construir objeto
    .then(data => {
        let html = ``;
        data.forEach(item => {
            html += `<div class="product-card" data-id="${item.id}">
    <span class="category-badge">${item.categoria}</span>
    
    <div class="image-container">
        <img src="${item.foto}" alt="Producto">
    </div>

    <div class="product-info">
        <h3 class="product-name">${item.nombre}</h3>
        <p class="product-price">${item.precio} <span class="unit">/ kg</span></p>
        
        <div class="stock-status">
            <span>Stock: <strong>${item.stock}</strong> unidades</span>
            <p class="low-stock-warning">⚠️ ¡Últimas unidades!</p>
        </div>
        </div>
        </div>
            `
        });

        zonaProductos.innerHTML = html;

        
    })
    .catch(err => console.error(err));
}


btnAll.addEventListener("click",function () {
    showAll();
});





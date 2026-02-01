/*Grid Dinámico: Un catálogo autogestionado con CSS Grid.

Lógica de Carrito: Al pulsar "Añadir", el stock visual debe bajar y el total del carrito subir.

Persistencia: Si el stock llega a 0, el botón debe desactivarse y la tarjeta cambiar de aspecto (opacidad).

Buscador en tiempo real: Un input que filtre por nombre mientras escribes.
*/

const catalogProduct = document.querySelector("#catalogo");


let count = 0;
fetch("Act4.json").then(answer => { 
    if (!answer.ok) throw new Error('No se ha cargado archivo JSON') 
    return answer.json();
})
    .then(data => {
        let html = ``;
        data.forEach(item => {
            html += `<article class="card" data-id="${item.id}">
    <img src="${item.foto}" alt="${item.nombre}">
    
    <div class="info">
        <h3>${item.nombre}</h3>
        <p>Categoria: <strong>${item.categoria}</strong></p>
        <p>Precio: <strong class="precio-valor">${item.precio}</strong></p>
        <p class="disponible">Stock disponible: ${item.stock}</p>
        </div>

    <button class="btn-add">Añadir a la cesta</button>
</article>`
        });

        catalogProduct.innerHTML = html;

    }).catch(err => {
        catalogProduct.innerHTML = `<p>Error al cargar los productos.</p>`;
        console.error(err);
    });
const btnaddProduct = document.querySelector(".btn-add");
const itemProduct = document.querySelector("#cart-count");
const priceProductTotal = document.querySelector("#cart-total");
const stockProduct = document.querySelector(".disponible");
const priceP = document.querySelector(".precio-valor");

itemProduct.addEventListener('click',function() {
    count++;
    console.log(count)
});

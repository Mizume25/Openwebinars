//DECALRAMOS DISPLAYS
const zona = document.querySelector("#grid-productos"); // Asegúrate de que apunte al contenedor GRID, no a una sola card

//Construimos json
fetch('Act3.json')
    .then(answer => {
        if (!answer.ok) throw new Error('No se ha podido cargar el archivo JSON');
        return answer.json();
    })
    .then(data => {
        let html = ``;
        data.forEach(item => {
            // USAMOS += para acumular todas las tarjetas
            html += `
            <div class="product-card">
                <img id="p-img" src="${item.foto}" alt="Cargando..." style="width: 150px;">
                <h2 id="p-nombre">${item.nombre}</h2>
                <p>Precio: <span id="p-precio">${item.precio}</span><span id="p-unidad">/kg</span></p>
                <p>Disponible: <span id="p-stock">${item.stock}</span></p>
                <button id="btn-comprar">Añadir a la cesta</button>
            </div>`; 
        });

        zona.innerHTML = html;

    }).catch(err => console.error(err));
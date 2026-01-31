//DECALRAMOS DISPLAYS

const zona = document.querySelector(".producto-card");

//Construimos json
fetch('Act2.json')
    .then(answer => {
        if (!answer.ok) throw new Error('No se ha podido cargar el archivo JSON');
        return answer.json();
    })
    .then(data => {
        let html = ``;
        data.forEach(item => {
            html += ` <img id="p-img" src="${item.imagen}" alt="Cargando..." style="width: 150px;">
            <h2 id="p-nombre">${item.nombre}</h2>
            <p>Precio: <span id="p-precio">${item.precio}</span><span id="p-unidad">${item.unidad}</span></p>
            <p>Disponible: <span id="p-stock">${item.stock}</span></p>
            <button id="btn-comprar">Añadir a la cesta</button>`;

        });

    zona.innerHTML = html;

    }).catch(err => console.error(err));
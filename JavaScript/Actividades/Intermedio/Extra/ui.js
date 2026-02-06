// ui.js
export const CardsDisplay = document.getElementById("display");

export const renderizarWeb = (lista) => {
    CardsDisplay.innerHTML = "";
    let html = "";
    lista.forEach((item) => {
        html += `
        <div class="card" onclick="updateItems(${item.id})" style="text-transform: capitalize;">
            <h4>${item.nombre}</h4>
            <p><strong>Precio:</strong> ${item.precio}€</p>
            <div class="stock-container">
                <span>Stock:</span>
                <p id="stock-num-${item.id}">${item.stock}</p>
            </div>
            <span class="oferr">${item.oferta ? "¡EN OFERTA!" : "Precio habitual"}</span>
        </div>`;
    });
    CardsDisplay.innerHTML = html;
};

export const renderizarCart = (client) => {
    if (client.length === 0) {
        CardsDisplay.innerHTML = `<div class="empty-state"><p style="color:red">CARRITO VACÍO</p></div>`;
        return;
    }
    CardsDisplay.innerHTML = "";
    let html = "";
    client.forEach((p) => {
        html += `
        <div class="card" style="background: #e3f2fd; border: 1.5px solid #61b0ff;">
            <h4>${p.nombre}</h4>
            <h3>Cantidad: <span id="cantidad-num-${p.id}">${p.cantidad}</span></h3>
            <button class="btn-danger-outline" onclick="backItems(${p.id})">Restar</button>
        </div>`;
    });
    CardsDisplay.innerHTML = html;
};
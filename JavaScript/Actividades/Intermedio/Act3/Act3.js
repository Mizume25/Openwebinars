//Gesto inteligente
const inputItem = document.getElementById("inputBusqueda");
const cardisplay = document.getElementById("display");
const btnShowAll = document.getElementById("btnMostrar");
const btnOcultar = document.getElementById("btnocultar");
fetch("Act3.json").then(answer =>{
    if (!answer.ok) throw new Error ('No se pudo cargar el archivo');
    return answer.json();
    
}).then (response =>{
    let html = ``;
    response.forEach(item => {
        html += `<div class="card">
                <span class="badge">${item.categoria}</span>
                <h4>${item.nombre}</h4>
                <p><strong>Precio:</strong> ${item.precio}€</p>
                <p>Stock: ${item.stock}</p>
                </div>`;
    });

    cardisplay.innerHTML = html;

}).catch (err => {
    console.log(err);
});

// Default: Oculta INput, boton ocultat + cards
(function () {
    
    inputItem.style.cssText = `display:none;`;
    btnOcultar.style.cssText = `display:none`;
    console.log("Input y Button escondidos");
    cardisplay.style.cssText = `display:none;`;
    console.log("Cards escondidos");
}());

//Muestra los cards de grid
btnShowAll.addEventListener('click',function () {
    cardisplay.style.cssText = `display:grid;`;
    console.log("Mostrar productos");
    btnOcultar.style.cssText = `display:block`;

});

btnOcultar.addEventListener('click',function () {
    cardisplay.style.cssText = `display:none;`;
    console.log("Ocultar productos");
    btnOcultar.style.cssText = `display:none`;
});



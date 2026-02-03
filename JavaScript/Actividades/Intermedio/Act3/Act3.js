//Gesto inteligente
const inputItem = document.getElementById("inputBusqueda");
const cardisplay = document.getElementById("display");
const btnShowAll = document.getElementById("btnMostrar");
const btnOcultar = document.getElementById("btnocultar");
const btnFind = document.getElementById("btnBuscar");
const searchBTN = document.getElementById("search");
const btnFilter = document.getElementById("btnVerduras");
const btnOferta = document.getElementById("btnOfertas");
let catalogo = [];

const itemCont = document.getElementById("contadorCarrito");

// Default: Oculta Input, boton ocultat + cards
(function () {
    itemCont.textContent = 0;
    searchBTN.style.cssText = `display:none;`;
    inputItem.style.cssText = `display:none;`;
    btnOcultar.style.cssText = `display:none`;
    console.log("Input y Button escondidos");
    cardisplay.style.cssText = `display:none;`;
    console.log("Cards escondidos");
}());
let count = 0;
function CountItems() {
    count++;
    itemCont.textContent = count;
    console.log("Total en carrito:", count);
}

fetch("Act3.json").then(answer => {
    if (!answer.ok) throw new Error('No se pudo cargar el archivo');
    return answer.json();

}).then(response => {
    catalogo = response;
    console.log("Variables guardadas en local");
}).catch(err => {
    console.log(err);
});



//Muestra los cards de grid
btnShowAll.addEventListener('click', function () {
    cardisplay.style.cssText = `display:grid;`;
    console.log("Mostrar productos");
    let html = ``;
    catalogo.forEach(item => {
        html += `<div class="card" onclick="CountItems(count)">
                <span class="badge">${item.nombre}</span>
                <h4>${item.nombre}</h4>
                <p><strong>Precio:</strong> ${item.precio}€</p>
                <p>Stock: ${item.stock}</p>
                <span class="oferr">${item.oferta ? "¡EN OFERTA!" : "Precio habitual"}</span>
                </div>`;
    });
    cardisplay.innerHTML = html;
    btnOcultar.style.cssText = `display:block`;

});


//Oculata el boton y el display de los cards
btnOcultar.addEventListener('click', function () {
    cardisplay.innerHTML = "";
    console.log("Borrar productos");
    btnOcultar.style.cssText = `display:none`;
});


//Boton que filtra 1 solo elemento que busque el usuario
btnFind.addEventListener('click', function () {
    inputItem.style.cssText = `display:block;`;
    searchBTN.style.cssText = `display:block;`;

    searchBTN.addEventListener('click', function () {
        let producto = inputItem.value;
        const objeto = catalogo.find(item => item.nombre == producto);

        if (inputItem.value == "") alert("No puedes pasar valores vacios")
        if (!objeto) {
            alert("No se ha encontrado el producto");
            return
        } else {
            cardisplay.style.cssText = `display:grid;`;

            let html = ``;

            html += `<div class="card" onclick="CountItems(count)">
            <span class="badge">${objeto.categoria}</span>
            <h4>${objeto.nombre}</h4>
            <p><strong>Precio:</strong> ${objeto.precio}€</p>
            <p>Stock: ${objeto.stock}</p>
             <span class="oferr">${objeto.oferta ? "¡EN OFERTA!" : "Precio habitual"}</span>
            </div>`;

            btnOcultar.style.cssText = `display:block`;
            cardisplay.innerHTML = html;
            inputItem.value = " ";


        }


    });


});
//Filtrar por verduras
btnFilter.addEventListener('click', function () {
    // 1. Guardamos el resultado del filtro en una nueva variable
    const verduras = catalogo.filter(item => item.categoria == "verdura");

    // 2. Comprobamos si hay resultados
    if (verduras.length === 0) {
        alert("No hay verduras");
        return;
    }

    // 3. Preparamos el HTML (FUERA del bucle)
    let html = ``;
    cardisplay.style.cssText = `display:grid;`;
    btnOcultar.style.cssText = `display:block`;
    // 4. Recorremos el nuevo array filtrado, NO el catálogo original
    verduras.forEach(item => {
        html += `<div class="card" onclick="CountItems(count)">
            <span class="badge">${item.categoria}</span>
            <h4>${item.nombre}</h4>
            <p><strong>Precio:</strong> ${item.precio}€</p>
            <p>Stock: ${item.stock}</p>
             <span class="oferr">${item.oferta ? "¡EN OFERTA!" : "Precio habitual"}</span>
            </div>`;
    });

    // 5. Inyectamos todo el string acumulado
    cardisplay.innerHTML = html;
});


// Filtrar por ofertas
btnOferta.addEventListener('click', function () {
    // 1. IMPORTANTE: Usa .filter() para obtener los OBJETOS
    const listaOfertas = catalogo.filter(item => item.oferta === true);

    // 2. Comprobamos si el array tiene algo (usando .length)
    if (listaOfertas.length === 0) {
        alert("No hay productos en oferta actualmente");
        return;
    }

    // 3. Preparamos el contenedor
    let html = ``;
    cardisplay.style.cssText = `display:grid;`;
    btnOcultar.style.cssText = `display:block`;

    // 4. Recorremos 'listaOfertas' (el array que creamos en el paso 1)
    listaOfertas.forEach(item => {
        html += `<div class="card" onclick="CountItems(count)">
            <span class="badge">${item.categoria}</span>
            <h4>${item.nombre}</h4>
            <p><strong>Precio:</strong> ${item.precio}€</p>
            <p>Stock: ${item.stock}</p>
             <span class="oferr">¡EN OFERTA!</span>
            </div>`;
    });

    // 5. Inyectamos el resultado
    cardisplay.innerHTML = html;
});

let contVerdura = document.getElementById("contVerdura");
let contFruta = document.getElementById("contFruta");
let contLacteo = document.getElementById("contLacteo");
let contCarniceria = document.getElementById("contCarniceria");
let contPescaderia = document.getElementById("contPescaderia");
let contDespensa = document.getElementById("contDespensa");

let countV = 0;
let countF = 0;
let countL = 0;
let countC = 0;
let countP = 0;
let countD = 0;




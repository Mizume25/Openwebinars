//Gestion inteligente
//Declaramos variables y constantes

const inputItem = document.getElementById("inputBusqueda");
const cardisplay = document.getElementById("display");
const btnShowAll = document.getElementById("btnMostrar");
const btnOcultar = document.getElementById("btnocultar");
const btnFind = document.getElementById("btnBuscar");
const searchBTN = document.getElementById("search");
const btnFilter = document.getElementById("btnVerduras");
const btnOferta = document.getElementById("btnOfertas");
const billUser = document.getElementById("bill");
//Arrays de soporte (arrays que guarda el json, arrays de repetidos, arrays de catalogo de usuario)
let catalogo = [];
let arrayRepetidos = [];
let list = [];

//Variables del aside
const listUser = document.getElementById("list");
const btnListUser = document.getElementById("list-User");
const btnDeleteListUser = document.getElementById("list-delete");
const itemCont = document.getElementById("contadorCarrito");

// Default: Oculta botones default
(function () {
    itemCont.textContent = 0;
    searchBTN.style.cssText = `display:none;`;
    inputItem.style.cssText = `display:none;`;
    btnOcultar.style.cssText = `display:none`;
    btnDeleteListUser.style.cssText = `display:none`;
    billUser.textContent = 0;
    console.log("Input y Button escondidos");
    console.log("Cards escondidos");
}());

//Contador de items
let count = 0; 

//FUNCION: Contador de items globales
function CountItems() {
    count++; // Modifica la variable global directamente
    itemCont.textContent = count;
    console.log("Total en carrito:", count);
}

//FUNCION: Agrega objetos y cuenta repetidos
function addUserList(id) {
    //Transformamos en objeto 1 objeto del catalogode objetos (productos)
    const obj = catalogo.find(item => item.id == id);
    

    //Comprobamos que este no estereptido
    if (arrayRepetidos.some(idRepetido => idRepetido == id)) {
        
        //Si lo esta buscaremos el item
        const itemEnCarrito = list.find(item => item.id == id);
        itemEnCarrito.cantidad++; //Aumetamos cantidad
        
        //Imprimimos resultado
        console.log("Cantidad aumentada:", itemEnCarrito.nombre, itemEnCarrito.cantidad);

    } else {
        //Si no lo estas

        //Agregamos una entrada e inicializamos
        obj.cantidad = 1;
        
        //Agregar objeto al carrito
        list.push(obj);
        
        //agregamos valor
        arrayRepetidos.unshift(id);
        
        //Imprimimos resultado
        console.log("Item nuevo guardado en el carrito");
    }
    if (obj.stock == 0) {
        alert(`No nos queda más ${obj.nombre} en nuestra tienda, seleccione otro producto`);
        return
    } else{
         obj.stock--;
        stockItemsCatalog(id);
    }
    CountItems(); 
   
}

//FETCH: Lee archivo JSON y guarda en el array local todos los objetos
fetch("Act3.json").then(answer => {
    if (!answer.ok) throw new Error('No se pudo cargar el archivo');
    return answer.json();
//En caso de que no escribe un error
}).then(response => {
    catalogo = response; // Guarda el array
    console.log("Variables guardadas en local");
}).catch(err => {
    console.log(err); //Imprime error catch
});

let total = 0;
function buyUser(price) {
    total += price
    billUser.textContent = total.toFixed(2);
}
// Boton que muestra todos los cards
btnShowAll.addEventListener('click', function () {
    console.log("Mostrar productos");
    let html = ``; //Declaramos html
    catalogo.forEach(item => { //Foeach
        html += `<div class="card" onclick="addUserList(${item.id}); buyUser(${item.precio})" data-id=${item.id}>
                <span class="badge">${item.nombre}</span>
                <h4>${item.nombre}</h4>
                <p><strong>Precio:</strong> ${item.precio}€</p>
                <span>Stock</span><p id="stock-num-${item.id}">${item.stock}</p>
                <span class="oferr">${item.oferta ? "¡EN OFERTA!" : "Precio habitual"}</span>
                </div>`;
    });
    cardisplay.innerHTML = html; //Inyectamos html
    btnOcultar.style.cssText = `display:block`; // Desbloqueamos boton de ocultar

});


//Boton de Ocultar Items
btnOcultar.addEventListener('click', function () {
    cardisplay.innerHTML = ""; //Limpia html de cards
    console.log("Borrar productos"); // Imprime
    btnOcultar.style.cssText = `display:none`; // Y se borra a si mismo (solo esta disponible si haces 1 accion)
});


//Boton que filtra 1 solo elemento que busque el usuario
btnFind.addEventListener('click', function () {
    inputItem.style.cssText = `display:block;`; //Abre el input para buscar

    searchBTN.style.cssText = `display:block;`; //Abre el boton para buscar elementos

    searchBTN.addEventListener('click', function () {
        let producto = inputItem.value;
        const objeto = catalogo.find(item => item.nombre == producto);

        //Devuelve una alerta si hay valores vacios
        if (inputItem.value == "") return alert("No puedes pasar valores vacios")
        
        //Si el objeto no se enucentra en el JSON
        if (!objeto) {
            alert("No se ha encontrado el producto");
            return
        } else {
            //declaramos html
            let html = ``; 

            //Declaramos html + creamos card
            html += `<div class="card" onclick="addUserList(${objeto.id}); buyUser(${objeto.precio})" data-id=${objeto.id}>
            <span class="badge">${objeto.categoria}</span>
            <h4>${objeto.nombre}</h4>
            <p><strong>Precio:</strong> ${objeto.precio}€</p>
            <span>Stock</span><p id="stock-num-${objeto.id}">${objeto.stock}</p>
             <span class="oferr">${objeto.oferta ? "¡EN OFERTA!" : "Precio habitual"}</span>
            </div>`;

            btnOcultar.style.cssText = `display:block`; //Activamos boton de ocultar

            cardisplay.innerHTML = html; // inyectamos html

            inputItem.value = " "; //limpiamos input


        }


    });


});

function stockItemsCatalog(id) {
    // 1. Buscamos el objeto en el array para bajar el stock en la "lógica"
    let itemData = catalogo.find(item => item.id == id);
    
    if (itemData.stock > 0) {
        itemData.stock--;

        // 2. SEÑALAMOS el elemento específico del HTML
        // Construimos el ID dinámicamente: si id es 5, buscará "stock-num-5"
        const elSotckVisual = document.getElementById(`stock-num-${id}`);

        // 3. CAMBIAMOS solo el contenido de ese elemento
        if (elSotckVisual) {
            elSotckVisual.textContent = itemData.stock;
        }
    }
}

//Filtramos por Verduras
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
        html += `<div class="card" onclick="addUserList(${item.id}); buyUser(${item.precio})" data-id=${item.id}>
            <span class="badge">${item.categoria}</span>
            <h4>${item.nombre}</h4>
            <p><strong>Precio:</strong> ${item.precio}€</p>
            <span>Stock</span><p id="stock-num-${item.id}">${item.stock}</p>
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
        html += `<div class="card" onclick="addUserList(${item.id}); buyUser(${item.precio})" data-id=${item.id}>
            <span class="badge">${item.categoria}</span>
            <h4>${item.nombre}</h4>
            <p><strong>Precio:</strong> ${item.precio}€</p>
            <span>Stock</span><p id="stock-num-${item.id}">${item.stock}</p>
             <span class="oferr">¡EN OFERTA!</span>
            </div>`;
    });

    // 5. Inyectamos el resultado
    cardisplay.innerHTML = html;
});

//Boton que oculta display de lista usuario
btnDeleteListUser.addEventListener('click',function () {
    listUser.innerHTML = " ";
    console.log("Borrar carrito");
    btnDeleteListUser.style.cssText = `display:none`;
})

//Boton que muestra carrito de usuario
btnListUser.addEventListener('click',function () {
    if (count < 1) {
        alert('Debes seleccionar productos que mostrar');
        return
    } else {

    btnDeleteListUser.style.cssText = `display:block`;
   let html = ``;
   list.forEach(item=>{
         html += `<div class="card">
            <h4>${item.nombre}</h4>
            <p><strong>Precio:</strong> ${item.precio}€</p>
            <p>Cantidad: ${item.cantidad}</p>
            </div>`;
   }); 

   listUser.innerHTML = html;

   }

});



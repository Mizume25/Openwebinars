//DECLARACION DE VARIABLES
const AllStockBTN = document.getElementById("btnMostrar");
const DelteView = document.getElementById("btnocultar");
const SelectCategory = document.getElementById("SelectCategory");
const SelectPrice = document.getElementById("SelectPrice");
const BTNsales = document.getElementById("btnOfertas");
const BTNsearch = document.getElementById("search");
const inputSearch = document.getElementById("inputBusqueda");
const displayCountItems = document.getElementById("contadorCarrito");
const displayTotalUser = document.getElementById("bill");
const BtnListUser = document.getElementById("list-User");

BTNsales.innerHTML = `<i class="fas fa-tag"></i>Productos en Oferta`;
displayTotalUser.textContent = 0;
BtnListUser.innerHTML = "Mostrar Compra";
//Array de objetos de la dispensa
let dispensa = [];
let filtrado = false;
let active = false;
let auterList = [];
let countItems = 0;
let total = 0;
let totalCatalog = 0;
let client = [];
let interfazCliente = false;
displayCountItems.textContent = countItems;
// Usamos el documento entero para escuchar cualquier click

/*document.addEventListener('click', function (e) {
    const esBotonOSelect = e.target.tagName === 'BUTTON' || e.target.tagName === 'SELECT';
    const noEsBotonInicio = e.target.id !== 'btnMostrar';

    if (!active && esBotonOSelect && noEsBotonInicio) {
        alert('Debes iniciar la despensa');
        // Esto evita que otros eventos del mismo botón se ejecuten
        e.stopImmediatePropagation(); 
        return;
    }
});
*/





//Funcion: Que actualiza items generales
function updateItems(id) {
    // 1. Buscamos el objeto real dentro de nuestro array 'dispensa'
    const producto = dispensa.find((p) => p.id == id);

    // 2. Verificamos que el producto exista y tenga stock
    if (producto && producto.stock > 0) {
        countItems++;
        displayCountItems.textContent = countItems;
        // Restamos 1 al stock en el objeto del array
        producto.stock--;

        //Modificamos total
        total += producto.precio;

        //Guardamos el producto
        

        if (client.some(objetoEnCarrito => objetoEnCarrito.id == id)) {
             const itemEnCarrito = client.find(item => item.id == id);
             itemEnCarrito.cantidad++;
             console.log("Cantidad aumentada:", itemEnCarrito.nombre, itemEnCarrito.cantidad);
        } else {
        
        //Primera cantidad
        producto.cantidad = 1;
        
        //Subimos el producto
        client.push(producto);

        //Mostramos el total
        displayTotalUser.textContent = total.toFixed(2);

        }

         // 3. Actualizamos el HTML para que el usuario vea el cambio
        const displayStock = document.getElementById(`stock-num-${id}`);
        if (displayStock) {
            displayStock.textContent = producto.stock;
        }

        console.log(`Stock actualizado para ${producto.nombre}: ${producto.stock}`);
    } else {
        alert("¡No queda stock de este producto!");
    }
}

//Funcion:Actualiza items generales desde el array Cliente
function backItems(id) {
    try {
        //1.Quitar Cantidad actual del card html
        const obj = client.find((p) => p.id == id);
        
        const index = client.findIndex(p => p.id == id);
        const catalogo = dispensa.find((p) => p.id == id);

        total -= obj.precio; 
        countItems--;
        catalogo.stock++; 
        displayTotalUser.textContent = Math.abs(total).toFixed(2);  
        displayCountItems.textContent = countItems;
        //En caso de no haber mas cantidad - Se borrara el objeto
        if (client.length == 0) {
            CardsDisplay.innerHTML = " ";
            return
        }

        if (obj.cantidad > 1) {
        //Actualizamos items

        obj.cantidad--; // 2.Actualizamos items
        document.getElementById(`cantidad-num-${id}`).innerHTML = obj.cantidad;
        
        
        } else {

        client.splice(index, 1);
        return renderizarCart();

        
        }
    } catch (error) {
        console.error("Error en la carga:", error);
        CardsDisplay.innerHTML = `<h2>Error al cargar productos</h2>`;
    }
}

//FUNCION: Filtrar Cards
const filterCards = async (e) => {
    try {

        let query = null;

        //Analizamos diferentes casos
        switch (e.target.value) {
            case "1":
                query = "verdura";
                break;
            case "2":
                query = "carniceria";
                break;
            case "3":
                query = "lacteo";
                break;
            case "4":
                query = "pescaderia";
                break;
            case "5":
                query = "despensa";
                break;
            default: "0"
                query = "non";
                break;
        }

        //Si selecciona todas deja la funcion como esta
        if (query == "non") return loadAllCards(startStock);

        //Filtramos categoria
        let consulta = dispensa.filter((p) => p.categoria == query);

        CardsDisplay.innerHTML = " ";

        //Renderizamos página
        renderizarWeb(consulta);
        console.log("Filtrado por ", query);
        return Object.values(consulta);
    } catch (error) {
        console.error("Error en la carga:", error);
        CardsDisplay.innerHTML = `<h2>Error al cargar productos</h2>`;
    }
};

//FUNCION: Ordena los cards
const orderCards = async (e, list) => {
    try {
        //Si esta el valor filtrado, filtrara el objeto completo y si no el filtrado
        let tempArray = list == null ? dispensa : list;
        let orderBy;

        //Ordenamos
        switch (e.target.value) {
            case "order-asc":
                orderBy = tempArray.sort((a, b) => a.precio - b.precio);
                break;
            case "order-desc":
                orderBy = tempArray.sort((a, b) => b.precio - a.precio);
            default: "order-gen"
                break;
        };

        renderizarWeb(orderBy);
    } catch (error) {
        console.error("Error en la carga:", error);
        CardsDisplay.innerHTML = `<h2>Error al cargar productos</h2>`;
    }

};

//FUNCION: Filter Cards Ofert
const ofertFilter = async (e, list) => {
    try {

        let tempArray = list == null ? dispensa : list;
        let query;
        //Solo filtramos en caso de haber ofertas (si no vuelve a la normalidad)
        switch (e.target.value) {
            case "SI":
                query = tempArray.filter((p) => p.oferta == true);
                BTNsales.classList.remove("btn-accent");
                BTNsales.classList.add("btn-danger");
                BTNsales.value = "NO";
                BTNsales.innerHTML = `<i class="fas fa-tag"></i>Productos Generales`
                return renderizarWeb(query);
            case "NO":
                BTNsales.classList.remove("btn-danger");
                BTNsales.classList.add("btn-accent");
                BTNsales.value = "SI";
                BTNsales.innerHTML = `<i class="fas fa-tag"></i>Productos en Oferta`
                return renderizarWeb(tempArray);
        }

    } catch (error) {
        console.error("Error en la carga:", error);
        CardsDisplay.innerHTML = `<h2>Error al cargar productos</h2>`;
    }
};

//FUNCION: Busca productos especificos
const searchProduct = async (e) => {

    try {
        //Transformamos input a valores en minuscula
        let newInput = inputSearch.value.trim().toLowerCase();

        // Si el input está vacío, no hacemos nada
        if (newInput === "") return;

        //Buscamos coincidencia
        let query = dispensa.filter((p) => p.nombre == newInput);

        // 3. VALIDACIÓN: Comprobamos si el array tiene algo
        if (query.length > 0) {
            let object = query[0];
            renderizarItem(object);
        } else {
            // Si no hay resultados, mostramos un mensaje en lugar de romper el código
            CardsDisplay.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <p>No se encontró el producto: "${newInput}"</p>
                </div>`;
        }



        inputSearch.value = " ";
    } catch (error) {
        console.error("Error en la carga:", error);
        CardsDisplay.innerHTML = `<h2>Error al cargar productos</h2>`;
    }
}

(function() {
   loadAllCards(startStock);
})();

//Evento: Cargar todos los cards
AllStockBTN.addEventListener("click", () => {
    renderizarWeb(dispensa);
    //active = true;
});

//Evento: Borra vista general
DelteView.addEventListener('click', (e) => {
    e.stopPropagation();
    removeView(e);

});

//Evento: Filtra los cards por categoria
SelectCategory.addEventListener('change', async (e) => {
    SelectPrice.value = "order-gen";
    filtrado = true;
    auterList = await filterCards(e);
});

//Evento: Ordenar los cards por precio
SelectPrice.addEventListener('change', (e) => {
    if (filtrado) {
        orderCards(e, auterList);
    } else {
        orderCards(e, null);
    }
});

//Evento: Filtrado por ofertas
BTNsales.addEventListener('click', async (e) => {
    if (filtrado) {
        ofertFilter(e, auterList);
    } else {
        ofertFilter(e, null);
    }
})

//Evento: Busca un elemento especifico
BTNsearch.addEventListener('click', searchProduct);


//Evento: Muestra la lista de compra del cliente
BtnListUser.addEventListener('click',async (e) =>{
    
      if (!interfazCliente) {
        renderizarCart(e);  //renderiza interfaz cliente
        //Cambia estilos
        BtnListUser.classList.remove("btn-confirm");
        BtnListUser.classList.toggle("btn-user");
        BtnListUser.innerHTML = "Volver al Catálogo";
        interfazCliente = true;
      } else{
        await renderizarWeb(dispensa); //renderiza interfaz consutla
        
        //Cambia estilos
        BtnListUser.classList.remove("btn-user");
        BtnListUser.classList.toggle("btn-confirm");
        BtnListUser.innerHTML = "Mostrar Compra";
        interfazCliente = false;
      }
    
});




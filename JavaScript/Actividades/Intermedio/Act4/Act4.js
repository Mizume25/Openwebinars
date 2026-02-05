//Declaramos variable
const displayCards = document.getElementById("catalogo-grid"); // Cards
const selectCategory = document.getElementById("filter-categoria");  //Filtrar ropa
const selectGender = document.getElementsByName("genero");
const selectOrder = document.getElementById("sort-order");

//Recibimos JSON y lo convertimo
let catalogo = [];
let filtrado = false;
let remotObject = [];


//Renderizado Limpio
// 1. Crea una sola función para pintar
const renderizarCatalogo = (lista) => {
    // Marcamos el inicio para medir (opcional)
    const t0 = performance.now();

    if (lista.length === 0) {
        displayCards.innerHTML = "<h2>No hay productos</h2>";
        return;
    }

    // Usamos map y join, que es ligeramente más rápido que += en strings largos
    const html = lista.map(p => `
        <div class="card" data-id="${p.id}">
            <div class="card-image-container">
                <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
                ${p.stock < 5 ? '<span class="stock-badge">¡Últimas unidades!</span>' : ''}
            </div>
            <div class="card-info">
                <div class="card-header">
                    <span class="brand">${p.brand}</span>
                    <span class="id-tag">#${p.id}</span>
                </div>
                <h3>${p.nombre}</h3>
                <div class="badge-container">
                    <span class="tag tag-gender">${p.genero}</span>
                </div>
                <div class="card-footer">
                    <span class="price">$${p.precio.toFixed(2)}</span>
                </div>
            </div>
        </div>
    `).join('');

    displayCards.innerHTML = html;

    const t1 = performance.now();
    console.log(`Renderizado en ${t1 - t0}ms`); // Verás que baja de 800ms a 10-50ms
};

const startShop = async () => {
    try {


        // 'AWAIT' detiene la ejecución hasta que la promesa del fetch se resuelva
        const respuesta = await fetch('Act4.json');

        //Lanzamos error en caso de que no carge los archivos
        if (!respuesta.ok) throw new Error("No se pudo cargar el archivo JSON");

        //Cargamos los datos en un array
        const datos = await respuesta.json();

        //El array anidado se convierte en un objeto plano
        catalogo = Object.values(datos.catalogo).flat();
        console.log(datos)



    } catch (error) {
        console.error("Error en la carga:", error);
        displayCards.innerHTML = `<h2>Error al cargar productos</h2>`;
    }
}

//Construir cards
const buildCards = async (callback) => {
    console.log("Construccion de cards");

    await callback();

    let html = ``;

    renderizarCatalogo(catalogo);
    console.log("Cards Inyectados!")

};

//cuando renderice la pagina por vez primera construira los cards
document.addEventListener('DOMContentLoaded', () => {
    buildCards(startShop);
});




//FILTRADOS POR CATEGORIA
const filterCatalog = async (e) => {
    try {
        //Borramos cualquier elemento anterior
        displayCards.innerHTML = " ";

        //Variables que inicializamos
        let max = 0;
        let min = 0;
        let consulta;

        //Estructuras de control del evento
        if (e.target.value == "camisas") {
            max = 1013;
            min = 1000;
            console.log("Filtrado por camisas");
        } else if (e.target.value == "pantalones") {
            max = 2013;
            min = 2000;
            console.log("Filtrado por pantalones");
        } else if (e.target.value == "zapatos") {
            max = 3013;
            min = 3000;
            console.log("Filtrado por zapatos");
        } else if (e.target.value == "complementos") {
            max = 4013;
            min = 4000;
            console.log("Filtrado por complementos");
        } else if (e.target.value == "todos") {
            buildCards(startShop);
            filtrado = false;
            return
        }
        //Estructura de filtradoç
        if (min != 0 && max != 0) {
            console.log("filtrado por categoria");
            consulta = catalogo.filter((p) => p.id > min && p.id < max);
        } else {
            console.log("filtrado por genero");
            consulta = catalogo.filter((p) => p.genero == e.target.value);
        }
        
        //Recorremos el array
        renderizarCatalogo(consulta);

        remotObject = consulta;
        
    } catch (error) {
        console.error("Error en la carga:", error);
        displayCards.innerHTML = `<h2>Error al cargar productos</h2>`;
    }
    
    
}


const OrderFilter = async (e,remotObject) => {
    try {
        let orderBy;
        let tempArray = remotObject == undefined ? catalogo: remotObject;

        if (e.target.value == "fecha-desc") {
            //Mas reciente a mas antiguo
            orderBy = tempArray.sort((a, b) => {
                return new Date(b.fechaSalida) - new Date(a.fechaSalida);
            });
            console.log("fecha mas reciente");
        } else if (e.target.value == "fecha-asc") {

            //Mas antiguo a mas reciente
            orderBy = tempArray.sort((a, b) => {
                return new Date(a.fechaSalida) - new Date(b.fechaSalida);
            });
            console.log("fecha mas antigua");
        } else if (e.target.value == "precio-asc") {
            //Mas bajo a mas alto
            orderBy = tempArray.sort((a, b) => a.precio - b.precio);
            console.log("Precio mas bajo");
        } else if (e.target.value == "precio-desc") {
            //Mas alto a mas bajo
            orderBy = tempArray.sort((a, b) => b.precio - a.precio);
            console.log("Precio mas alto");
        } else if (e.target.value == "general-order") {
            orderBy = tempArray.sort((a, b) => a.id - b.id);
            console.log("Default");
        }


        //Mapeo del objeto
        let html = ``;
        
        renderizarCatalogo(orderBy);

    } catch (error) {
        console.error("Error en la carga:", error);
        displayCards.innerHTML = `<h2>Error al cargar productos</h2>`;
    }
}


//Filtrado de Categoria

selectCategory.addEventListener('change', (e) => {
    filtrado = true;
    filterCatalog(e); 
    selectOrder.value = "general-order";
});

//Filtrado de Genero
selectGender.forEach(option => {
    option.addEventListener('change', (e) => {
    filtrado = true;
    filterCatalog(e); 
    selectOrder.value = "general-order";
});

});

//Filtrado de Orden
selectOrder.addEventListener('change', (e) => {
    if (!filtrado) {
        OrderFilter(e,remotObject);
    } else {
        OrderFilter(e,remotObject);
    }
});
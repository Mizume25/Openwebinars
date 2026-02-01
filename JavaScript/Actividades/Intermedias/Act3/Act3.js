// DECLARAR VARIABLES
const zonaProductos = document.querySelector("#grid-productos");
const btnAll = document.querySelector("#btn-todos");
const btnFiltro = document.querySelector("#btn-filtro");

// Función principal para cargar y mostrar productos
// Recibe un parámetro 'soloBajoStock' (por defecto falso)
function mostrarProductos(soloBajoStock = false) {
    fetch("Act3.json")
    .then(answer => {
        if (!answer.ok) { throw new Error('No se pudo cargar el archivo JSON') }
        return answer.json();
    })
    .then(data => {
        let html = ``;
        
        // Filtrar los datos si el usuario pulsó el botón de stock bajo
        const productosAmostrar = soloBajoStock 
            ? data.filter(item => item.stock < 5) 
            : data;

        productosAmostrar.forEach(item => {
            // Lógica de negocio: Verificar si tiene poco stock
            const esBajoStock = item.stock < 5;
            
            // Clase CSS condicional para el borde rojo y visibilidad del aviso
            const claseBorde = esBajoStock ? "low-stock-border" : "";
            const avisoVisible = esBajoStock ? "block" : "none";

            html += `
            <div class="product-card ${claseBorde}" data-id="${item.id}">
                <span class="category-badge">${item.categoria}</span>
                
                <div class="image-container">
                    <img src="${item.foto}" alt="${item.nombre}">
                </div>

                <div class="product-info">
                    <h3 class="product-name">${item.nombre}</h3>
                    <p class="product-price">${item.precio} <span class="unit">/ kg</span></p>
                    
                    <div class="stock-status">
                        <span>Stock: <strong>${item.stock}</strong> unidades</span>
                        <p class="low-stock-warning" style="display: ${avisoVisible}">⚠️ ¡ÚLTIMAS UNIDADES!</p>
                    </div>
                </div>
            </div>`;
        });

        zonaProductos.innerHTML = html;
    })
    .catch(err => {
        zonaProductos.innerHTML = `<p>Error al cargar los productos.</p>`;
        console.error(err);
    });
}

// EVENTOS
// Cargar todo al inicio
document.addEventListener("DOMContentLoaded", () => mostrarProductos());

// Botón "Ver todo"
btnAll.addEventListener("click", () => {
    mostrarProductos(false);
});

// Botón "Mostrar solo falta de stock"
btnFiltro.addEventListener("click", () => {
    mostrarProductos(true);
});
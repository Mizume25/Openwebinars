
//DECLARACION DE VARIABLES
const inputValue = document.querySelector("#nueva-tarea");
const btnAddElementList = document.querySelector("#btn-agregar");
const displayList = document.querySelector("#lista-tareas");

// --- PASO 2: LOS DATOS (EL "JSON") ---
//OBTENGO DICHERO DE ACT4.JSON
function cargarJSON (){

    fetch('Act4.json')

        .then(respuesta =>{
        //GENERAMOS TRY CATCH
        if (!respuesta.ok) throw new Error('Error al cargar el archivo JSON');
            return respuesta.json();
        })

        //EN CASO DE SI QUE RECIBE RESPUESTA
        .then(datos => {
        

        let html = '<ul>';
            datos.forEach(item => {
                
                const id = item.id || 'No id';
                const tarea = item.tarea || ' No Tarea ';
                
                html += `<li>${id} &nbsp; ${tarea}</li>`;
            });
            html += '</ul>';

            displayList.innerHTML = html;
    });
}

cargarJSON();

fetch('Act4.json')
    .then (respuesa =>{
          if(!respuesta) throw new Error ("No se ha encontrado el archivo JSON")
    })
    .then (datos =>{
        const id = datos[1].id;

        
    })

btnAddElementList.addEventListener("click", function() {
    // 1. Limpiamos espacios en blanco extra con .trim()
    const textoTarea = inputValue.value.trim();

    // 2. Validación correcta (usando comparación ===)
    if (textoTarea === "") {
        alert("No puedes enviar tareas vacías");
        return; // Salimos de la función para que no siga ejecutando
    }

    // 3. Crear el nuevo elemento visualmente
    const nuevoItem = document.createElement('li');
    id++;
    nuevoItem.textContent = `${id} - ${textoTarea}`;
    
    // Buscamos el <ul> que creaste dentro de displayList
    const ul = displayList.querySelector('ul');
    if (ul) {
        ul.appendChild(nuevoItem);
    }

    // 4. Limpiar el input correctamente
    inputValue.value = ""; 
});


// --- PASO 3: FUNCIÓN PARA PINTAR/MOSTRAR ---
// Crea una función que recorra tu Array de datos (puedes usar .forEach()).
// Dentro del bucle:
// 1. Crea un elemento <li> usando document.createElement.
// 2. Asígnale el texto del objeto actual.
// 3. Úsalo para hacer un .appendChild() dentro de tu lista <ul>.
// TIP: Acuérdate de limpiar la lista (ul.innerHTML = "") al principio de la función para no duplicar.


// --- PASO 4: EVENTO DE CLIC (ACCIÓN DEL USUARIO) ---
// Escucha el evento "click" del botón. Cuando ocurra:
// 1. Lee el valor del <input>.
// 2. Crea un nuevo objeto JSON con ese valor.
// 3. Haz un .push() de ese objeto a tu Array de datos.
// 4. Llama de nuevo a la función del PASO 3 para que la pantalla se actualice.


// --- PASO 5: INICIO ---
// Llama a la función del PASO 3 una vez al final del script para que los 
// datos iniciales se vean nada más cargar la página.
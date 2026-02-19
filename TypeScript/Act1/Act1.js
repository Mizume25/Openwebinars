//Declaramos el boton del DOM
const btnNext = document.getElementById('next');
const displayDiv = document.getElementById('card');
;
//Recibimos Archivo JSON        //Funcion y que devuelve Promesa <array de objetos o Undefined>
const dataHandler = async () => {
    try {
        //Obtenemos JSON
        const answer = await fetch('Act1.json');
        //Condicional 
        if (!answer.ok)
            throw new Error("No se puede cargar el JSON");
        //Guardamos un array de objeto response con interficie propieties
        let response = await answer.json();
        //imprimimos aviso
        console.log("JSON Cargado");
        return response; //Retornemos el objeto
    }
    catch (error) {
        console.error("Error en la carga:", error);
    }
};
// 1. El Callback: Su única misión es pintar
const renderList = (data) => {
    let html = ``;
    data.forEach((p) => {
        // Estructuramos mejor el HTML para que sea legible
        html += `
            <div class="user-card">
                <ul>
                    <li><strong>Nombre:</strong> ${p.name}</li>
                    <li><strong>Apellido:</strong> ${p.last_name}</li>
                    <li><strong>Edad:</strong> ${p.age}</li>
                    <li><strong>Certificados:</strong> ${p.cert.join(", ")}</li>
                </ul>
            </div>
            <hr>`;
    });
    if (displayDiv) {
        displayDiv.innerHTML = html;
    }
};
//Funcion Asincrona que recibe un Evento
async function loadJson(e, callback) {
    let list = await dataHandler();
    if (list) {
        console.log("Lista Cargado"),
            callback(list);
    }
    else {
        console.error("No se pudieron cargar los datos para el callback.");
    }
}
// Usamos una función de flecha para envolver la llamada
btnNext?.addEventListener('click', (e) => loadJson(e, renderList));
// Accedemos al primero de la lista y le asignamos el tipo de encabezado
const titleWeb = document.getElementsByTagName('h1')[0];
// Ahora TS te dejará editarlo sin quejas
if (titleWeb) {
    titleWeb.textContent = "Prueba";
}
export {};
//# sourceMappingURL=Act1.js.map
//GENERACION DE CELDAS APROVECHANDO JSONS de CLASE
//FUNCION: Lee y retorna el archivo JSON
const fetchData = async () => {
    try {
        //1. Lee el archivo
        const answer = await fetch('Pr7.json');
        //2. Comprueba
        if (!answer.ok)
            throw new Error("El archivo no se puede leer");
        //3. Construye
        //El objecto data tiene 2 interficies hechas array
        const data = await answer.json();
        return data;
    }
    catch (e) {
        console.log(e);
    }
};
//FUNCION: Renderiza Elementos del DOM
//Declaramos elementos del DOM
const displayThead = document.getElementById('headTable');
const displayBody = document.getElementById('bodyTable');
//2.1 Renderizar TH's
function renderTH(data) {
    //HTML
    let html = `<th colspan="2">Equipos</th>`;
    //RECORREMOS ARRAY
    data.leyenda.forEach((p) => {
        html += `<th>${p.abv}</th>`;
    });
    //Insertamos fila
    let rowTable = document.createElement('tr');
    // Tienes que separar las clases por comas
    rowTable.classList.add("border-0", "border-bottom", "border-danger", "border-3");
    //Insertamos row en el table
    displayThead?.appendChild(rowTable);
    //Inyectamos html
    rowTable.innerHTML = html;
}
//FUNCION: Renderiza td's de la tabla
function renderTD(data) {
    let cont = 1;
    //RECORREMOS EL ARRAY
    data.equipos.forEach((p) => {
        // 1. Creamos la fila
        let rowTable = document.createElement('tr');
        // 2. Definimos el contenido (USANDO '=' EN LUGAR DE '+=')
        // Nota: He usado 'index + 1' para el contador, ¡así te ahorras una variable externa!
        let html = `
        <td>${cont}</td>
        <td><img src="${p.icon}" alt="${p.pais}" style="width:30px"> ${p.pais}</td>
        <td>${p.pt}</td>
        <td>${p.pj}</td>
        <td>${p.pg}</td>
        <td>${p.pe}</td>
        <td>${p.pp}</td>
        <td>${p.pf}</td>
        <td>${p.pc}</td>
        <td>${p.bon}</td>
    `;
        // 3. Inyectamos y añadimos al DOM
        rowTable.innerHTML = html;
        displayBody?.appendChild(rowTable);
        cont++;
    });
}
//FUNCION: META FUNCIONES
const renderTable = async () => {
    //1. Capturamos JSON
    const data = await fetchData();
    if (data === undefined)
        return;
    //Renderizamos TH
    renderTH(data);
    //Renedrizamos TD
    renderTD(data);
};
//Evento
document.addEventListener('DOMContentLoaded', renderTable);
export {};
//# sourceMappingURL=Act5.js.map
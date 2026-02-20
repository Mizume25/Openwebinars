//GENERACION DE CELDAS APROVECHANDO JSONS de CLASE

//GENERAMOS INTERFICIES

// 1. Primer modo
/*interface tablePropietis {
    pais:   string,
    icon:   string,
    pt:     number,
    pj:     number,
    pg:     number,
    pe:     number,
    pp:     number,
    pf:     number,
    pc:     number,
    bon:    number
}*/

//2. Maped Typed
type NumericStats = 'pt' | 'pj' | 'pg' | 'pe' | 'pp' | 'pf' | 'pc' | 'bon';


//Interfaz de Tabla
type tablePropietis = {
    pais: string;
    icon: string;
} & { [K in NumericStats]: number };


// Interfaz de leyenda
interface captionPropietis {
    abv: string,
    traduccion: string
}

// META INTERFICIE
interface DataResponse {
    equipos: tablePropietis[];
    leyenda: captionPropietis[];
}



//FUNCION: Lee y retorna el archivo JSON
const fetchData = async () => {

    try {

        //1. Lee el archivo
        const answer = await fetch('Pr7.json');

        //2. Comprueba
        if (!answer.ok) throw new Error("El archivo no se puede leer");

        //3. Construye

        //El objecto data tiene 2 interficies hechas array
        const data: DataResponse = await answer.json();


        return data;

    } catch (e) {
        console.log(e);
    }


}


//FUNCION: Renderiza Elementos del DOM

//Declaramos elementos del DOM
const displayTable = document.getElementById('tableMain');

//2.1 Renderizar TH's
function renderTH(data: DataResponse) {
    //Comprobar
    if (!displayTable) return;

    //HTML
    let html = `<th colspan="2">Equipos</th>`;

    //RECORREMOS ARRAY
    data.leyenda.forEach((p) => {
        html += `<th>${p.abv}</th>`
    });

    //Insertamos fila
    let rowTable = document.createElement('tr');

   // Tienes que separar las clases por comas
    rowTable.classList.add("border-0", "border-bottom", "border-danger", "border-3");

    //Insertamos row en el table
    displayTable.appendChild(rowTable);

    //Inyectamos html
    rowTable.innerHTML = html;

}


//FUNCION: Renderiza td's de la tabla
function renderTD(data: DataResponse) {
    //Comprobar
    if (!displayTable) return;


    let cont: number = 1;
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

        displayTable.appendChild(rowTable);

        cont++;
    });


}

//FUNCION: META FUNCIONES
const renderTable = async () => {
    //1. Capturamos JSON
    const data: DataResponse | undefined = await fetchData();

    if (data === undefined) return;

    //Renderizamos TH
    renderTH(data);

    //Renedrizamos TD
    renderTD(data);

}


//Evento
document.addEventListener('DOMContentLoaded', renderTable);

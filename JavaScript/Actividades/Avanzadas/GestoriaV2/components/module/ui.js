//PRINTS E INYECCIONES DE HTML

//FUNCION: MOVER NAVS Y ACTUALIZARLOS - PARAMETRO: Event
export function switchSection (e) {

    e.preventDefault();

    //BORRAMOS ESTILOS DEL ASDIE
    removeStyleOPT();

    //SELECCIONAMOS EL NAV MAIN
    removeStyleNav();

   e.target.classList.add("active");
   e.target.classList.remove("text-white");
} 

export function switchOPT(e) {
    e.preventDefault();

    //SELECCIONAMOS EL NAV DE OPTATIVAS
    document.querySelectorAll("#optativas .list-group-item").forEach((btn) =>{
        //Recorrido por el nav del main
        removeStyleNav();

        btn.classList.remove("active");
        

        e.target.classList.add("active");
    })
};

//FUNCION: RENDERIZA TABLA
export function renderTable (list) {
    
    document.getElementById('table-body').innerHTML = " ";
    let html = ``;

    //Recorremos Lista
    list.forEach((p) =>{
        
        let color = p.average >= 5? "bg-success":"bg-danger";
        let avg = p.average;
        html += `<tr>
            <td class="ps-4">#${p.id}</td>
            <td class="fw-bold">${p.name} ${p.surname}</td>
            <td>${p.math}</td>
            <td>${p.language}</td>
            <td class="">${p.science}</td>
            <td class="">${p.history}</td>
            <td class="fw-bold ${color}">${avg}</td>
          
        </tr>`;
    })

    document.getElementById('table-body').innerHTML = html;

}

//FUNCION: RENDERIZA TABLA GENERAL
export function renderGeneral (list){
    //Renderizamos Heads
    renderTableGeneral();

    document.getElementById('table-body').innerHTML = " ";
    let html = ``;

    //Recorremos Lista
    list.forEach((p) =>{
        html += `<tr>
            <td class="ps-4">#${p.id}</td>
            <td class="fw-bold">${p.name} ${p.surname}</td>
            <td>${p.age}</td>
            <td>${p.course}</td>
            <td>${p.incidents}</td>
            <td>${p.enrollmentDate}</td>
            <td class="text-end pe-4">
            <button class="btn btn-sm btn-outline-secondary" data-id="${p.id}">Editar</button>
            <button class="btn btn-sm btn-outline-danger" data-id="${p.id}">Eliminar</button>
            </td>
          
        </tr>`;
    });

    document.getElementById('table-body').innerHTML = html;


}

//FUNCION: Renderiza la lista de optativas
export function renderListOPT(filteredList, e) {
    const selectedName = e.target.value;
    const tableBody = document.getElementById('table-body');
    
    let html = "";

    filteredList.forEach((p) => {
        // Buscamos el objeto específico dentro del array del alumno
        const targetOpt = p.electives.find(opt => opt.name === selectedName);

        // Si por alguna razón no la encuentra (seguridad), usamos valores vacíos
        const grade = targetOpt ? targetOpt.grade : "-";

        html += `
        <tr>
            <td class="ps-4">#${p.id}</td>
            <td class="fw-bold">${p.name} ${p.surname}</td>
            <td>${selectedName}</td>
            <td class="text-center">${grade}</td>
        </tr>`;
    });

    tableBody.innerHTML = html;
}

//FUNCION: Introduce el Tutor de cada curso
export function renderNameTutor (obj) {
    let dis = document.getElementById('nombre-tutor-texto');
    dis.textContent = obj.name;
}

export function renderListTutor (obj) {
    let dis = document.getElementById('nombre-tutor-texto');
    
    let html = `<span>`;

    obj.forEach((p)=>{
        html += `${p.name} ${p.surname} &nbsp;`;
    });

    html += `</span>`;

    dis.innerHTML = html;

}



//HELPERS
function removeStyleNav (){
    //SELECCIONAMOS EL NAV MAIN
    document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
       
        link.classList.remove("active");
        link.classList.add("text-white"); 

        
    });
}


function removeStyleOPT (){
    document.querySelectorAll("#optativas .list-group-item").forEach((btn) =>{
        btn.classList.remove("active");
    })
}

//FUNCION: Renderiza tabla de Optativas
function renderTableOPT (){

    document.getElementById('head-table').innerHTML = "";

    let html = ` <tr>
                <th class="ps-4">ID</th>
                <th>Alumno</th>
                <th>OPT</th>
                <th>NOTA</th> 
                </tr>`;

    document.getElementById('head-table').innerHTML = html;
}


//FUNCION: Renderiza tabla genral
function renderTableGeneral (){
    document.getElementById('head-table').innerHTML = "";
    
    let html = ` <tr>
                <th class="ps-4">ID</th>
                <th>Alumno</th>
                <th>Edad</th>
                <th>Curso</th>
                <th>Incidencias</th>
                <th>Fecha Matriculacion</th>
                <th class="text-end pe-4">EDIT</th>
                </tr>`;

    document.getElementById('head-table').innerHTML = html;
}


//FUNCION: Renderiza tabla Default
function resetTableDefault(){
    document.getElementById('head-table').innerHTML = "";

    let html = ` <tr>
                <th class="ps-4">ID</th>
                <th>Alumno</th>
                <th>Mates</th>
                <th>Lengua</th>
                <th>Ciencia</th>
                <th>Historia</th>
                <th>Media</th>  
                </tr>`;

    document.getElementById('head-table').innerHTML = html;
}
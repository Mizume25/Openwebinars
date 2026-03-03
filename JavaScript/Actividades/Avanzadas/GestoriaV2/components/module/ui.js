


//PRINTS E INYECCIONES DE HTML
const sectionPage = document.getElementById("sectionPage")
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
    document.getElementById('card-tutor').style.display = 'block';
    sectionPage.style.display = 'block';
    
    resetTableDefault();

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
    document.getElementById('card-tutor').style.display = 'block';
    sectionPage.style.display = 'block';
    
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
    document.getElementById('card-tutor').style.display = 'block';
    sectionPage.style.display = 'block';
    
    renderTableOPT();

    const selectedName = e.target.value; // "Robotics", "Choir", etc.
    const tableBody = document.getElementById('table-body');
    
    let html = ``;

    filteredList.forEach((p) => {
        // Usamos el método del modelo pasando el nombre seleccionado
        const grade = p.getGradeByElectiveName(selectedName);

        html += `
        <tr>
            <td class="ps-4">#${p.id}</td>
            <td class="fw-bold">${p.name} ${p.surname}</td>
            <td>${p.course}</td>
            <td class="text-center">${grade}</td>
        </tr>`;
    });

    tableBody.innerHTML = html;
}

//FUNCION: Introduce el Tutor de cada curso
export function renderTutor (obj) {

    //Declaramos los lugares del dom
    const dis = document.getElementById('nombre-tutor-texto');
    const imgProfe = document.getElementById('profesor-img');
    const nombre = document.getElementById('profesor-nombre');
    const correoProfe = document.getElementById('profesor-correo');

    //Obtenemos caracteristicas del profesor
    dis.textContent = obj.name;
    imgProfe.src = `components/IMG/${obj.name}.png`;
    nombre.textContent = `${obj.name}`
    correoProfe.textContent = `${obj.email}`;
}

//FUNCION: Cargar lista de cards de profesores
export function renderListTutor(list){
    document.getElementById('card-tutor').style.display = 'none';
    sectionPage.style.display = 'none';

    const sectionGeneral = document.getElementById('sectionGeneral');

    const div = document.createElement('div');

    div.classList.add('grid-tutores');


    let cards = ``;

    list.forEach((p) =>{
        cards += `
        <div class="card border-0 shadow-sm overflow-hidden" id="card-profesor">
                    <div class="bg-primary py-2 text-center text-white small fw-bold">TUTORÍA</div>
                    <div class="card-body text-center py-4">
                        <div class="mb-3 position-relative d-inline-block">
                            <img src="components/IMG/${p.name}.png" id="profesor-img" class="rounded-circle border border-3 border-white shadow-sm" alt="Foto Profesor" style="width: 80px; height: 80px; object-fit: cover;">
                            <span class="position-absolute bottom-0 end-0 bg-success border border-2 border-white rounded-circle" style="width: 15px; height: 15px;"></span>
                        </div>
                        <p class="mb-0 fw-bold" id="profesor-nombre">${p.name}</p>
                        <p class="text-muted small mb-3" id="profesor-correo">${p.email}</p>
                        <div class="d-flex justify-content-center gap-2">
                            <button class="btn btn-sm btn-light rounded-circle shadow-sm" title="Contactar"><i class="fas fa-envelope text-primary"></i></button>
                            <button class="btn btn-sm btn-light rounded-circle shadow-sm" title="Horario"><i class="fas fa-calendar-alt text-secondary"></i></button>
                        </div>
                    </div>
                </div>
        `
    });

    div.innerHTML = cards;

    

    sectionGeneral.appendChild(div);


}

//FUNCION: Resetear la página
function resetPageTable (){
    const sectionGeneral = document.getElementById('sectionGeneral');

    let html = `
     <div class="card border-0 shadow-sm" id="sectionPage">
                    <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                        <div>
                            <h5 class="mb-0 fw-bold text-secondary">Listado de Estudiantes</h5>
                            <small class="text-muted" id="tutor-info-table">
                                <i class="fas fa-chalkboard-teacher me-1"></i> Tutor: <span id="nombre-tutor-texto" class="fw-semibold text-primary">---</span>
                            </small>
                        </div>
                        <span class="badge bg-info-subtle text-info px-3 py-2 rounded-pill">Ciclo 2026</span>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-hover align-middle mb-0" id="main-table">
                                <thead class="table-light text-muted small uppercase" id="head-table">
                                    <tr>
                                        <th class="ps-4">ID</th>
                                        <th>Alumno</th>
                                        <th>Mates</th>
                                        <th>Lengua</th>
                                        <th>Ciencia</th>
                                        <th>Historia</th>
                                        <th>Media</th>
                                    </tr>
                                </thead>
                                <tbody id="table-body" class="border-top-0">
                                    
                                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    `;

    sectionGeneral.innerHTML = html;
}




export function renderNameTutor (obj) {
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
                <th>Curso </th>
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
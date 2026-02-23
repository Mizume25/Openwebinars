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

//FUNCION: Introduce el Tutor de cada curso
export function renderNameTutor (name) {
    document.getElementById('nombre-tutor-texto').textContent = name;
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
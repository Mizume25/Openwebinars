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
    
    let html = ``;
    
   

    //Recorremos Lista
    list.forEach((p) =>{
        let avg = (p.math + p.language / 2);
        html += `<tr>
            <td class="ps-4">#${p.id}</td>
            <td class="fw-bold">${p.name} ${p.surname}</td>
            <td>${p.age}</td>
            <td>${p.course}</td>
            <td class="">${p.math}</td>
            <td class="">${p.language}</td>
            <td class="fw-bold">${avg}</td>
            <td class="text-end pe-4">
                <button class="btn btn-sm btn-outline-secondary" data-id="${p.id}">Editar</button>
                <button class="btn btn-sm btn-outline-danger" data-id="${p.id}">Eliminar</button>
            </td>
        </tr>`;
    })

    document.getElementById('table-body').innerHTML = html;

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
//Importamos modulos
import * as ui from './ui.js'; 
import * as api from './api.js'; 
import * as sr from './service.js'
const studentTable = document.getElementById("table-body");
let modificado = false;
let form = false;
let listStudent = [];
let arrayStudent = [];
let start;
let useSection = [true,false,false,false];
const formContent = document.getElementById("form-container");
const selectOrder = document.getElementById("filter-materia");
const navMain = document.querySelector(".container");
const OPTDisplay = document.getElementById("optativas");
//FUNCION: INICIO
const main = async () => {
    try {
    //Inicializamos datos
    const list = await api.startGestory();

    //Comprobar
    if (!list) throw new Error ("No se ha recibido alumnos"); 
    
    
    ui.renderT(list.Primero);

    listStudent = Object.values(list).flat()
    arrayStudent = list;
    ui.renderCourse(list);

    } catch (error) {
        console.log(error)
        studentTable.innerHTML = `<h3>Ha habido un error</h3>`;
    }


}


//Evento: Muestra alumnos de primer año
(async function initApp() {
    main();
    
})();

navMain.addEventListener("click",(e) =>{
    if (e.target.id === "c1" || e.target.id === "c2" || e.target.id === "c3" ||e.target.id === "c4") {
        ui.restoreCol();
        if (!modificado) {
        ui.backSelect(); 
        selectOrder.value = "general";   
        }
        
        modificado = false;
        switch (e.target.id) {
            case "c1":
                useSection[0] = true;
                start = 0;
                for (let i = (start + 1) % 4; i !== start; i = (i + 1) % 4) {
                     useSection[i] = false; 
                }
                break;
            case "c2":
                useSection[1] = true;
                start = 1;
                for (let i = (start + 1) % 4; i !== start; i = (i + 1) % 4) {
                     useSection[i] = false;
                }
                break;
            case "c3":
                useSection[2] = true;
                start = 2;
                for (let i = (start + 1) % 4; i !== start; i = (i + 1) % 4) {
                    useSection[i] = false; 
                }
                break;
            case "c4":
                useSection[3] = true;
                start = 3;
                for (let i = (start + 1) % 4; i !== start; i = (i + 1) % 4) {
                     useSection[i] = false;
                }
                break;
            default:
                break;
        }
    }
})

//Evento: Clica Optativas y muestra y carga datos de optativas
const handleOptClick = (e) => {
    if (!modificado) {
        ui.nullNav();    
        ui.modifyCol();  
        modificado = true;
        
    }   
    ui.decorateOPT(e);
    const listOPT = sr.filterOPT(e, listStudent);
    ui.renderOPT(listOPT);
};

//Evento: Selecciona Optativas
OPTDisplay.addEventListener('click', (e) =>{
    if (e.target.id == "OPT1" || e.target.id == "OPT2" || e.target.id == "OPT3") {
        handleOptClick(e);
        if (modificado) {
        ui.selectUpdate();  
        selectOrder.value = "general";  
        }
        selectOrder.value = "general";
    }
});



// EVENTO: Abrir Formulario de añadir
document.getElementById("btn-add-ui").addEventListener('click', () => {
    ui.addBTN(); // Esto inyecta el HTML
    form = true;
});

// EVENTO: Abrir Formulario de editar
document.getElementById("btn-edit-ui").addEventListener('click', () => {
    ui.editBTN(); // Esto inyecta el HTML
    form = true;
});

// EVENTO: Cierra el formulario
formContent.addEventListener('click', (e) => {
    if (e.target.id === "closeForm") {
        formContent.innerHTML = ""; 
        form = false;
        console.log("Formulario cerrado con éxito");
    }
});

//EVENTO: Ordenar Filas
selectOrder.addEventListener('change',(e) => {
  
    let grado = sr.knowCours(useSection);
    if (e.target.value == "incidencias") {
        let newList = sr.incidentsFilter(arrayStudent[grado]);
        ui.renderT(newList);
        return
    }
    let newList = sr.mediaStudent(arrayStudent[grado]);

        //Convertirmos y ordenamos
        sr.orderRows(e,newList);

        ui.renderT(newList);

});




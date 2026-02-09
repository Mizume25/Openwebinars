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
let listOPT = [];
let descOrder = false;
let useSection = [true,false,false,false];
const formContent = document.getElementById("form-container");
const selectOrder = document.getElementById("filter-materia");
const navMain = document.querySelector(".container");
const OPTDisplay = document.getElementById("optativas");

let allStudent = false;

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
    if (e.target.id === "c5") {
        ui.selectData();
        ui.modifyColAll();
        modificado = false;
        allStudent = true;
    }
    if (e.target.id === "c1" || e.target.id === "c2" || e.target.id === "c3" ||e.target.id === "c4") {
        ui.restoreCol();
        allStudent = false;
        ui.backSelect(); 
        selectOrder.value = "general";   
        
        
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
        }
    }
})





//Evento: Clica Optativas y muestra y carga datos de optativas
const handleOptClick = (e) => {

    

    if (!modificado) {
        ui.nullNav();    
        ui.restoreColOPT();  
        modificado = true;
        
    }   
    
    ui.decorateOPT(e);
    listOPT = sr.filterOPT(e, listStudent);
    ui.renderOPT(listOPT);
};

//Evento: Selecciona Optativas
OPTDisplay.addEventListener('click', (e) =>{
    if (e.target.id == "OPT1" || e.target.id == "OPT2" || e.target.id == "OPT3") {
        handleOptClick(e);
        ui.selectUpdate();
        selectOrder.value = "general";
    }
});



// EVENTO: Abrir Formulario de añadir
document.getElementById("btn-add-ui").addEventListener('click', () => {
    ui.addBTN(); // Esto inyecta el HTML
    form = true;

    const formulario = document.getElementById('form-create');

    formContent.addEventListener('submit', (e) => {
    if (e.target.id === 'form-create') {
        e.preventDefault();

        const formData = new FormData(e.target);
        const datosForm = Object.fromEntries(formData.entries());

        // 1. MAPEADOR: Crucial para que no de undefined
        // El valor del select debe coincidir con las llaves de tu Gestoria.json
        const mapping = {
            "1": "Primero",
            "2": "Segundo",
            "3": "Tercero",
            "4": "Cuarto"
        };

        const nombreCurso = mapping[datosForm.curso]; // Aquí obtenemos "Primero", "Segundo", etc.
        const cursoActual = arrayStudent[nombreCurso]; // Accedemos al array del JSON

        // 2. COMPROBACIÓN DE SEGURIDAD: Si por error nombreCurso es incorrecto, evitamos el crash
        if (!cursoActual) {
            console.error("No se encontró el curso:", nombreCurso);
            return;
        }

        // 3. CÁLCULO DEL ID: Ahora sí .length no fallará
        const ultimoId = cursoActual.length > 0 
            ? Math.max(...cursoActual.map(al => al.id)) 
            : parseInt(datosForm.curso) * 100;

        const newEntry = {
            "id": ultimoId + 1,
            "nombre": datosForm.nombre,
            "apellido": datosForm.apellido,
            "edad": parseInt(datosForm.edad) || 0,
            "curso": `${datosForm.curso}º`,
            "notas": { "mates": 0, "lengua": 0, "ciencias": 0, "historia": 0 },
            "optativas": [
                { "nombre": "Pendiente", "nota": 0 },
                { "nombre": "Pendiente", "nota": 0 }
            ],
            "incidencias": "Ninguna",
            "fechaMatricula": datosForm.fechaMatricula || new Date().toISOString().split('T')[0]
        };

        // 4. GUARDADO
        arrayStudent[nombreCurso].push(newEntry);
        listStudent.push(newEntry); // Para la vista "Todos"

        ui.renderAll(listStudent);
        formContent.innerHTML = "";
        console.log("Alumno registrado con éxito");
    }
});

});

// 1. Declaramos la escucha de la tabla FUERA, una sola vez.
const tableBody = document.getElementById('table-body');

tableBody.addEventListener('click', (e) => {
    // Solo actuamos si el formulario de edición debe estar activo
    // (Puedes usar una variable global como 'form' o comprobar si el botón tiene una clase activa)
    
    const fila = e.target.closest('tr');
    if (!fila) return; // Si no es una fila, ignoramos.

    const idAlum = parseInt(fila.id.replace('fila-', ''));
    const alumnoEncontrado = listStudent.find(al => al.id === idAlum);
    
    if (alumnoEncontrado) {
        ui.editBTN(); // Inyectamos el HTML amarillo
        ui.llenarFormularioEdicion(alumnoEncontrado); // Rellenamos los datos
        
        document.getElementById('form-container').scrollIntoView({ behavior: 'smooth' });
    }
});

// 2. El botón de la barra lateral ahora solo sirve para avisar al usuario
document.getElementById("btn-edit-ui").addEventListener('click', () => {
    alert("Haz alumno que quieras editar");
    // Opcional: puedes cambiar el estilo de la tabla para que se vea "seleccionable"

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

    if (allStudent) {
        let newList = sr.orderRowsDate(e,listStudent);
        ui.renderAll(newList);
        return;
    }
    if (!modificado) {
        
    
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

    } else {
        if (e.target.value == "edad" || e.target.value == "notaOPT" || e.target.value == "incidencias") {
            if (e.target.value == "incidencias") {
                let newList = sr.incidentsFilter(listOPT);
                ui.renderOPT(newList);
                return;
            } else {
                console.log(e.target.value);
                let newlist = sr.orderOPT(e,listOPT);
                ui.renderOPT(newlist);
                return;
            }
        }
        let newlist = sr.optfilter(e,listOPT);

        ui.renderOPT(newlist);

    }


});






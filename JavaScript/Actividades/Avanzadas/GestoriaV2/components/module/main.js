//ARCHIVO QUE ANIDA TODOS LOS JS
import * as ui from './ui.js';  
import * as select from './selectors.js'
import * as api from './api.js';
import * as serv from './service.js';

//LISTAS IMPORTADAS
let listCourses;
let allStudents;
let teachers;

//Funcion anonima y autoinvocada
(async function () {
    listCourses = await api.getCourses();
    allStudents = await api.getAllStudents();
    teachers = await api.getTeachers();
    console.log(teachers);
    
    console.log("Se han cargado", allStudents.length, " de alumnos");
    console.log("Se han cargado", teachers.length, " de profesores");

    //CARGAMOS POR DEFAULT
    const defaultList = await serv.loadCourse(listCourses, "1");
    ui.renderTable(defaultList);

     //Buscamos tutor
    let tutor = serv.insertTutor(teachers,"1");

    //Renderizamos tutor
    ui.renderTutor(tutor);
})();




//EVENT: Cambia color del NAV
select.navMain.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-curso]');
    //Cambiamos los estilos
    ui.switchSection(e);

    if(btn.dataset.curso == "5"){
        let outerList = serv.insertListTutors(teachers);

        ui.renderNameTutor(outerList);

        return ui.renderGeneral(allStudents);
        
    }

    if (btn.dataset.curso == "profesores") return ui.renderListTutor(teachers);
    //Creamos una nueva lista
    let newList = await serv.loadCourse(listCourses,btn.dataset.curso);

    //Y la renderizamos
    ui.renderTable(newList);

    //Buscamos tutor
    let tutor = serv.insertTutor(teachers,btn.dataset.curso);

    //Renderizamos tutor
    ui.renderTutor(tutor);
});

//EVENT: Cambia color de buttons optativa
select.asideBTN.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-curso]');
    ui.switchOPT(e);

    let newList = serv.loadElective(allStudents,e);

    ui.renderListOPT(newList,e);

     //Buscamos tutor
    let tutor = serv.insertTutor(teachers,btn.dataset.curso);

    //Renderizamos tutor
    ui.renderTutor(tutor);

});



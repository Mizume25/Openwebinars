//Importamos Modelos
import {Student, Teacher} from './model.js'; 


//FUNCION: Leeer y construir JSON
const dataHandler = async () => {

    try {
        
    //1 Leemos json
    const answer = await fetch('components/data/Gestoria.json');

    //Comprobamos
    if(!answer.ok) throw new Error ("No se ha podido leer el archivo JSON");

    //Construirmos Objecto
    const data = await answer.json();

    return data;

    } catch (e) {
        console.log(e);
    }
}

//FUNCION: Devuelve Solo los alumnos
export const getAllStudents = async () => {
    const data = await dataHandler();
    if (!data) return [];

    const allStudents = Object.values(data).flat(); //Aplanamos el esquema JSOON

    let newList = allStudents
    .filter((p) => p.id > 100) //Filtra los alumnos
    .map((obj) => new Student(obj));  //Mapea los alumnos con el molde Student

    console.log(`¡Éxito! Se han cargado ${newList.length} alumnos.`);
    return newList;
};


// FUNCION: Devuelve los profesores filtrados por curso o especialidad
export const getTeachers = async () => {
    const data = await dataHandler();
    
    if (!data) return [];

    // Convertimos todos los profesores a instancias de la clase Teacher
    const teachersList = data.Teachers.map(teacherData => new Teacher(teacherData));

    

    // Ejemplo: filtrar solo los de "Spec" (Optativas)
    console.log(`¡Éxito! Se han cargado ${teachersList.length} profesores.`);
    return teachersList;
};

//FUNCION: Devuelve una lista de arrays de arrays de Students
export const getCourses = async () => {
    const data = await dataHandler();

    // Verificamos si la respuesta es correcta
    if (!data) throw new Error("No se ha podido leer el JSON");

    const courseKeys = ["First", "Second", "Third", "Fourth"];
    const courses = {};

    courseKeys.forEach(key => {
        // Verificamos que el curso exista en el JSON y sea un array
        if (data[key] && Array.isArray(data[key])) {
            // Convertimos cada objeto plano en una instancia de Student
            courses[key] = data[key].map(studentData => new Student(studentData));
        } else {
            courses[key] = []; // Si no hay alumnos, inicializamos vacío
        }
    });

    console.log("Cursos cargados:", courses);
    return courses;
};


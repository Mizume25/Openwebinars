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

    const allStudents = [];
    
    // Definimos las llaves que contienen alumnos según tu consola
    const courseKeys = ["First", "Second", "Third", "Fourth"];

    courseKeys.forEach(key => {
        // Verificamos que la llave exista en el JSON y sea un array
        if (data[key] && Array.isArray(data[key])) {
            data[key].forEach(studentData => {
                allStudents.push(new Student(studentData));
            });
        }
    });

    console.log(`¡Éxito! Se han cargado ${allStudents.length} alumnos.`);
    return allStudents;
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


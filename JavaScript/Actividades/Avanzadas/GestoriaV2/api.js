//Archivo que se encarga de leer el JSON
import { Student, Tutor } from "./model.js"; //IMPORTAMOS MODELOS

//FUNCION QUE LEE LA API
export const init = async () => {

    try {

        //Leemos el archivo
        let answer = await fetch('Gestoria.json');

        //Comprobamos
        if (!answer.ok) throw new Error("No se puedo leer el archivo");

        //Construimos JSON
        const data = await answer.json();

        //Mapeo de Teacher
        const teachers = data.Docentes.map(obj => new Tutor(obj))

        //Mapeo de Todos los cursos
        const cursos = {
            primero: data.Primero.map(obj => new Student(obj)),
            segundo: data.Segundo.map(obj => new Student(obj)),
            tercero: data.Tercero.map(obj => new Student(obj)),
            cuarto: data.Cuarto.map(obj => new Student(obj))
        };

        //Retornamos Estos Objeto
        return { teachers, cursos };


    } catch (e) {
        console.log(e);
    }


}
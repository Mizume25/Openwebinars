//Logica Pura
//META FUNCION
export const loadCourse = async (arrays,number) => {
    const num = parseInt(number);

    if(num < 1 || num > 4) return; //El curso debe existir

    //Filtrara 1 curso u otro dependiendo de e.target.dataset.curso

     //Traduce cual filtra
     let filter = translate(num);
     
     //y lo filtra
     return arrays[filter];
     
    
}

//FUNCION: Filtra lista segun optativas
export function loadElective(list, e) {
    const selectedName = e.target.value;
    
    // Filtramos: "Solo los alumnos que tengan esta optativa en su lista"
    return list.filter(p => 
        p.electives.some(opt => opt.name === selectedName)
    );
}

//FUNCION : INSERTA TUTOR DE UNA CLASE
// service.js
export function insertTutor(list, number) {
  
    let num = parseInt(number);

    //Modificamos
    switch (num) {
        case 1: num = "1st";
            break;
        case 2: num = "2nd";
            break;
        case 3: num = "3rd";
            break;
        case 4: num = "4th";
            break;
        default: num = null;
    }

    const teachersList = Object.values(list);

    const teacher = teachersList.find((t) => t.course === num);

   
    return teacher;

}

//FUNCION: Insert list Tutors
export function insertListTutors(list) {

    const teachersList = Object.values(list);

    const teachers = teachersList.filter((t) => t.course == "1st" || t.course == "2nd" || 
    t.course == "3rd" || t.course == "4th");

    return teachers;

}
function translate(num) {
    switch (num) {
        case 1: return "First";
        case 2: return "Second";
        case 3: return "Third";
        case 4: return "Fourth";
        default: return null;
    }
}


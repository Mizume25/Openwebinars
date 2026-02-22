//MODELO 1: STUDENT
export class Student {

    //1. Propiedades privadas de la classe
    #id;
    #name;
    #surname;
    #age;
    #course;
    #grades;
    #electives;
    #incidents;
    #enrollmentDate;

    //2. Builder
    constructor (id, name, surname, age, course, grades, electives, incidents, enrollmentDate){
        this.#id = id;
        this.#name = name;
        this.#surname = surname;
        this.#age = age;
        this.#course = course;
        this.#grades = grades;
        this.electives = electives;
        this.incidents = incidents;
        this.enrollmentDate = enrollmentDate;
    }


}


export class Teacher {
    // Propiedades privadas
    #id;
    #course;
    #name;
    #surname;
    #spec;
    #role;
    #email;

    constructor(data) {
        this.#id = data.id;
        this.#course = data.course;
        this.#name = data.name;
        this.#surname = data.surname;
        this.#spec = data.spec;
        this.#role = data.role || "Tutor"; // Si no tiene role, asumimos que es Tutor
        this.#email = data.email;
    }

    // Getters para acceder a la info desde la UI
    get fullName() {
        return `${this.#name} ${this.#surname}`;
    }

    get contactInfo() {
        return `${this.#spec} - ${this.#email}`;
    }

    get details() {
        return {
            id: this.#id,
            course: this.#course,
            name: this.#name,
            surname: this.#surname,
            specialization: this.#spec,
            role: this.#role,
            email: this.#email
        };
    }
}
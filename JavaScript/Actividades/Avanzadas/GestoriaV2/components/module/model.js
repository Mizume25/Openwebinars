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
    constructor(data) {
        this.#id = data.id;
        this.#name = data.name;
        this.#surname = data.surname;
        this.#age = data.age;
        this.#course = data.course;
        this.#grades = data.grades;
        this.#electives = data.electives;
        this.#incidents = data.incidents;
        this.#enrollmentDate = data.enrollmentDate;
    }

    get average() {
        // 1. Extraemos solo los números de las notas (math, language, etc.)
        const notasPrincipales = Object.values(this.#grades);

        // 2. Extraemos solo los números de las electivas
        const notasElectivas = this.#electives.map(e => e.grade);

        // 3. Unimos todo en una sola lista de números
        const todasLasNotas = [...notasPrincipales, ...notasElectivas];

        // 4. Sumamos todo
        const sumaTotal = todasLasNotas.reduce((acc, nota) => acc + nota, 0);

        // 5. Calculamos la media (evitamos dividir por 0 por seguridad)
        const totalAsignaturas = todasLasNotas.length;

        return totalAsignaturas > 0
            ? (sumaTotal / totalAsignaturas).toFixed(2)
            : "0.00";
    }

    get id() { return this.#id; }
    get name() { return this.#name; }
    get surname() { return this.#surname; }
    get age() { return this.#age; }
    get course() { return this.#course; }
    get incidents() {return this.#incidents; }
    get enrollmentDate () {return this.#enrollmentDate; }


    // Dentro de class Student
    get math() { return this.#grades.math || 0; }
    get language() { return this.#grades.language || 0; }
    get science() { return this.#grades.science || 0; }
    get history() { return this.#grades.history || 0; }
    get optOneName () {return this.#electives[0].name;}
    get optSecondName () {return this.#electives[1].name}
    get optOneGrade () {return this.#electives[0].grade;}
    get optSecondGrade () {return this.#electives[1].grade;}



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

    get name (){
        return this.#name;
    }

    get surname(){ return this.#surname; }

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


    get course() {
        return this.#course;
    }
    
}
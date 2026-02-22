class Persona {

    //1. Propiedades de la classe
    #name
    #lastName
    #age

    //2. Constructor de la Classe
    constructor(name, lastName, age) {

        //SINTAXI DE REGEXP: EXPRESIONES REGULARES
        /*
        
        - / / -> Empieza y termina la regla
        - ^ -> Asi debe empezar la frase
        - [a-zA-Z] - Se permiten letras a - z tanto Mayusculas como minusculas
        - ÁÉÍÓÚñÑ - Lista de accentos y caracters permitidos
        - \s - Se permiten espacios en blanco
        - + - Debe haber al menos 1 letra o muchas
        - $ - Aqui termina mi frase y nada debe haber despues
        - {2,30} - Minimos y Maximos de caracteres en el fomrulario 
        
        */


        this.#name = name;
        this.#lastName = lastName;
        this.age = age;

    }

    //METODO: Validar contenido
    #testerContent(text){
        const expresionREG = /^[a-zA-ZÁÉÍÓÚñÑ\s]{2,30}$/;
        if (!expresionREG.test(text)) {
            throw new Error(`Texto no válido: ${text}. Debe tener entre 2 y 30 letras.`);
        }
    }


    //3. Getters 
    get name (){return this.#name;}

    get lastName (){return this.#lastName; }

    get age (){return this.#age;}

    // 4. Setters 
    set name(newName) { this.#testerContent(newName); this.#name = newName;}

    set lastName(newLastName) { this.#testerContent(newLastName); this.#lastName = newLastName;}

    set age(newAge) {  
        if(newAge < 10 || newAge > 25) throw new Error("Edad no realista");

        this.#age = newAge;
    }

    
    get fullName() {
        return `${this.#name} ${this.#lastName}`;
    }

}

//CLASSE PERSONA
export class Student extends Persona {

    //1. Builder
    constructor(datos){

        //HERENCIA
        super(datos.name, datos.lastName, datos,age);

        //Propiedades de Student
        this.id = datos.id;
        this.curso = datos.curso;
        this.notas = datos.notas;         // Objeto: {mates: 7, lengua: 8...}
        this.optativas = datos.optativas; // Array de objetos
        this.incidencias = datos.incidencias;
        this.fechaMatricula = datos.fechaMatricula;

    }

    // MÉTODO (Getter): Calcula la media automáticamente
    get avg () {
        const n = this.notas;
        const sumaPrincipales = n.mates + n.lengua + n.ciencias + n.historia;
        
        // Sumamos las notas de las optativas usando reduce
        const sumaOptativas = this.optativas.reduce((acc, opt) => acc + opt.nota, 0);
        
        // Dividimos por 6 (4 principales + 2 optativas según tu JSON)
        return ((sumaPrincipales + sumaOptativas) / 6).toFixed(1);
    }

    // MÉTODO: Para saber si tiene incidencias graves
    get giveIncidence() {
        return this.incidencias !== "Ninguna";
    }

}
//Propiedades del objeto
let name:string = "Gabriel";
let last_name:string = "Nivicela";
let age:number = 20
let relationship:boolean = true;
let money:number = 250.60;

//Crear una interficie de objecto
interface properties {
    name:       string;
    last_name:  string;
    age:        number;
    relation:   boolean;
    money:      number; 
};

//Construir un objeto con una interficie
const person : properties = {
    name:       name,
    last_name:  last_name,
    age:        age,
    relation:   relationship,
    money:      money

};

// Declaramos variables en el DOM
const displayTest = document.getElementById('Prueba');

//Creamos contenido de el DOM
const titleDiv = document.createElement('ul');


titleDiv.id = "titleDiv";


//Condicional 
if(titleDiv && displayTest){
   

   Object.entries(person).forEach(([key, value]) => {
        const bodyDiv = document.createElement('li');
        titleDiv.appendChild(bodyDiv);
        bodyDiv.textContent = `${key}: ${value}`;
        
    });

    displayTest.appendChild(titleDiv);
}




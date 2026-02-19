//Propiedades del objeto
let name = "Gabriel";
let last_name = "Nivicela";
let age = 20;
let relationship = true;
let money = 250.60;
;
//Construir un objeto con una interficie
const person = {
    name: name,
    last_name: last_name,
    age: age,
    relation: relationship,
    money: money
};
// Declaramos variables en el DOM
const displayTest = document.getElementById('Prueba');
//Creamos contenido de el DOM
const titleDiv = document.createElement('ul');
titleDiv.id = "titleDiv";
//Condicional 
if (titleDiv && displayTest) {
    Object.entries(person).forEach(([key, value]) => {
        const bodyDiv = document.createElement('li');
        titleDiv.appendChild(bodyDiv);
        bodyDiv.textContent = `${key}: ${value}`;
    });
    displayTest.appendChild(titleDiv);
}
export {};
//# sourceMappingURL=Act1.js.map
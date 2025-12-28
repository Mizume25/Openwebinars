//REPASO DE CONCEPTOS GENERALES Y CLAVES DE ACT 1

//DECLARAMOS VARIABLES
let DisplayCounter = document.querySelector("#contador-valor");
let addValueCounter = document.querySelector("#contador-incrementar");
let resetValueCounter = document.querySelector("#contador-resetear");
let reduceValueCounter = document.querySelector("#contador-decrementar");

let counter = 0;

//VISTA
function UpdateCounter() {
    DisplayCounter.textContent = counter;
}

//ACCIONES DE LOS BOTONES

//INCREMENTAMOS VALOR
addValueCounter.addEventListener("click", function () {
     counter++;
     UpdateCounter()
     
})

//RESETEAR VALOR
resetValueCounter.addEventListener("click",function () {
     counter = 0;
     UpdateCounter()
     
})

//RESTAR VALOR
reduceValueCounter.addEventListener("click",function () {
     counter--;
     UpdateCounter()
  
    
})




//DECLARAMOS VARIARBLES
//INPUTS INICIALES
const FisrtNumberImput = document.querySelector("#calculadora-num1");
const SecondNumberImput = document.querySelector("#calculadora-num2");

//OPERAR RESULTADO
const OperationAdd = document.querySelector("#calculadora-sumar");
const OperatationRest = document.querySelector("#calculadora-restar");
const OperationMulti = document.querySelector("#calculadora-multiplicar");
const OperationDiv = document.querySelector("#calculadora-dividir");
//MOSTRAR RESULTADO
const ShowResult = document.querySelector("#calculadora-resultado");


function ShowResultFinal(result) {
    ShowResult.textContent = result;
    FisrtNumberImput.value = "";
    SecondNumberImput.value = "";
}

//SUMAR
OperationAdd.addEventListener("click", function () {
    let num1 = Number(FisrtNumberImput.value);
    let num2 = Number(SecondNumberImput.value);

    if (String(FisrtNumberImput.value) == "" && String(FisrtNumberImput.value) == "") {
        alert("Necesitas introducir valores que operar");
        return;
    } else {

        let result = num1 + num2;
        ShowResultFinal(result);
    }


});

//RESTAR
OperatationRest.addEventListener("click", function () {
    let num1 = Number(FisrtNumberImput.value);
    let num2 = Number(SecondNumberImput.value);

    if (String(FisrtNumberImput.value) == "" && String(FisrtNumberImput.value) == "") {
        alert("Necesitas introducir valores que operar");
        return;
    } else {

        let result = num1 - num2;

        ShowResultFinal(result);
    }


});

//MULTIPLICAR
OperationMulti.addEventListener("click", function () {
    let num1 = Number(FisrtNumberImput.value);
    let num2 = Number(SecondNumberImput.value);

    if (String(FisrtNumberImput.value) == "" && String(FisrtNumberImput.value) == "") {
        alert("Necesitas introducir valores que operar");
        return;
    } else {

        let result = num1 * num2;

        ShowResultFinal(result);
    }


});


//DIVIDIR
OperationDiv.addEventListener("click", function () {
    let num1 = Number(FisrtNumberImput.value);
    let num2 = Number(SecondNumberImput.value);

    if (String(FisrtNumberImput.value) == "" && String(FisrtNumberImput.value) == "" ) {
        alert("Necesitas introducir valores que operar");
        return;
    } else {

        let result = num1 / num2;

        ShowResultFinal(result);
    }


});



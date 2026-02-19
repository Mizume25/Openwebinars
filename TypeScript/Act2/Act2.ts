//Decalraciónde variables
let name:string = " ";


//Capturas del DOM
const inputText = document.getElementById('textUser') as HTMLInputElement;
const BTNgreet = document.getElementById('BTNSaludar') as HTMLButtonElement;
const display = document.getElementById('display');
const spanContent = document.createElement('span') as HTMLSpanElement;

//Creamos la funcio
function saludar (){
    if (!inputText || !display) return;
    // 2. Validamos si está vacío (usando === para comparar)

    if (inputText.value.trim() === "") {
        return alert('No puedes introducir valores vacíos');
    }

    if (!display.appendChild(spanContent)){
        
        name = inputText.value;

        spanContent.textContent = `Hola! mi nombre es ${name}`;

        display.appendChild(spanContent);

        inputText.value = "";


    } else{
        name = inputText.value;

        spanContent.textContent = "";

        spanContent.textContent = `Hola! mi nombre es ${name}`;

        inputText.value = "";


    }
}
//Creamos Evento - ? condiciona si existe o no el elemento
BTNgreet?.addEventListener('click', saludar);
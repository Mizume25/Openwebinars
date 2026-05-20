///Zona de Pruebas
const btn = document.getElementById('btn') as HTMLButtonElement;

// as -> Convierte


interface Prueba {
    function: (e:HTMLButtonElement) => void //Puedo tipar funciones
    value:number
}

function test(e:HTMLButtonElement) : void {
    console.log(e)
    console.log("HOLA")
}


const objeto : Prueba = {
    function: test,
    value: 1
}

//Se puede objetivar funciones y hacerlas valores
btn?.addEventListener('click', () => objeto.function);



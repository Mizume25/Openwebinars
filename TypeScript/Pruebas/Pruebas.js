///Zona de Pruebas
var btn = document.getElementById('btn');
function test(e) {
    console.log(e);
    console.log("HOLA");
}
var objeto = {
    function: test,
    value: 1
};
//Se puede objetivar funciones y hacerlas valores
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () { return objeto.function; });

//Logica de filtrado
export const studentTable = document.getElementById("table-body");

//FUNCION: Filtra Optativas
export const filterOPT = (e, list) => {
    const valorSeleccionado = e.target.value; // Capturamos el valor AQUÍ
    const todosLosAlumnos = Object.values(list).flat();

    decorateOPT(e); 

    return todosLosAlumnos
        .filter((p) => p.optativas.some(opt => opt.nombre === valorSeleccionado))
        .map(p => {
            // Buscamos la nota específica de la materia seleccionada para dársela lista a la UI
            const objetoOptativa = p.optativas.find(opt => opt.nombre === valorSeleccionado);
            return {
                ...p,
                notaVisual: objetoOptativa ? objetoOptativa.nota : 0
            };
        });
};

//FUNCION: Decora panel de Optativas
function decorateOPT(e) {
    const botones = document.querySelectorAll("#optativas .list-group-item");
    
    botones.forEach(item => {
        item.classList.remove('active', 'bg-white'); // Quitamos bg-white para que no brille
    });

    const botonPulsado = e.target.closest('.list-group-item');
    if (botonPulsado) {
        botonPulsado.classList.add('active');
        botonPulsado.classList.remove('bg-white'); // El activo no debe ser blanco
    }
}





//Logica de filtrado
export const studentTable = document.getElementById("table-body");
//FUNCION: Mostrar optativas
export const changeOPT = async (e, list) => {
    // 1. Aplanamos el objeto (Ahora 'todos' es un array de alumnos)
    const todosLosAlumnos = Object.values(list).flat();

    decorateOPT(e);
    // 2. FILTRADO CORRECTO: 
    // No puedes hacer p.optativas.nombre porque optativas es una lista [].
    // Tienes que usar .some() para mirar DENTRO de esa lista.
    let outerList = todosLosAlumnos.filter((p) => 
        p.optativas.some(opt => opt.nombre === e.target.value)
    );

    // 3. RENDERIZADO (El resto se queda casi igual)
    const html = outerList.map((p) => {
        let nota = p.optativas[0].nombre == e.target.value? p.optativas[0].nota:p.optativas[1].nota;
        return `
            <tr id="fila-${p.id}">
                <td>${p.id}</td>
                <td><strong>${p.nombre}&nbsp;${p.apellido}</strong></td>
                <td>${p.edad}</td>
                <td>${p.curso}</td>
                <td>${nota}</td>
                <td>
                    <span class="badge bg-warning text-dark">
                        <i class="fas fa-exclamation-triangle"></i> ${p.incidencias}
                    </span>
                </td>
            </tr>`;
    }).join(''); 

    studentTable.innerHTML = html;
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



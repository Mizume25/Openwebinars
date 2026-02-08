
//Renderizado Web
export const studentTable = document.getElementById("table-body");
export const displayNav = document.querySelectorAll("#mainNav .nav-link");
export const headRow = document.querySelector(".table-dark tr");
export const addStudentBTN = document.getElementById("btn-add-ui");
export const formContent = document.getElementById("form-container");
export const orderRows = document.getElementById("filter-materia");

//HTML
studentTable.innerHTML = " ";
let suma = 0;
let notGEn = 0;
let colorBadge = 0;
let colorMAT = 0;
let colorLEN = 0;
let colorSCI = 0;
let colorSTR = 0;

const dataCourse = ["Primero", "Segundo", "Tercero", "Cuarto"];
//FUNCION: Renderizado de alumnos
export const renderT = async (list) => {
  let html = " ";
  studentTable.innerHTML = "";
  list.forEach((p) => {
    suma = p.notas.mates + p.notas.lengua + p.notas.ciencias + p.notas.historia + p.optativas[0].nota + p.optativas[1].nota;
    notGEn = (suma / 6).toFixed(1); // .toFixed(1) para que no salgan 10 decimales
    colorBadge = notGEn >= 5 ? "bg-success" : "bg-danger";
    colorMAT = p.notas.mates >= 5 ? "text-success" : "text-danger";
    colorLEN = p.notas.lengua >= 5 ? "text-success" : "text-danger";
    colorSCI = p.notas.ciencias >= 5 ? "text-success" : "text-danger";
    colorSTR = p.notas.historia >= 5 ? "text-success" : "text-danger";
    html += `<tr id="fila-${p.id}">
             <td>${p.id}</td>
             <td><strong>${p.nombre}&nbsp;${p.apellido} </strong></td>
             <td>${p.edad}</td>
             <td>${p.curso} </td>
             <td class="${colorMAT} fw-bold">${p.notas.mates} </td> <td class="${colorLEN} fw-bold">${p.notas.lengua} </td> 
             <td class="${colorSCI} fw-bold">${p.notas.ciencias}</td> <td class="${colorSTR} fw-bold">${p.notas.historia} </td> 
             <td>${p.optativas[0].nombre}&nbsp;(${p.optativas[0].nota})</td>
             <td>${p.optativas[1].nombre}&nbsp;(${p.optativas[1].nota})</td>
             <td><span class="badge ${colorBadge}">${notGEn}</span></td> <td>
             <span class="badge bg-warning text-dark">
             <i class="fas fa-exclamation-triangle"></i> ${p.incidencias}
             </span>
            </td>
            </tr>`;
  });

  studentTable.innerHTML = html;

};

// ui.js
export const renderOPT = (listOPT) => {
    const html = listOPT.map((p) => `
        <tr id="fila-${p.id}">
            <td>${p.id}</td>
            <td><strong>${p.nombre}&nbsp;${p.apellido}</strong></td>
            <td>${p.edad}</td>
            <td>${p.curso}</td>
            <td>${p.notaVisual}</td> <td>
                <span class="badge bg-warning text-dark">
                    <i class="fas fa-exclamation-triangle"></i> ${p.incidencias}
                </span>
            </td>
        </tr>`).join(''); 

    studentTable.innerHTML = html;
};


//STYLE

//FUNCION: Canviar color Nav
export const renderCourse = (list) => {
  displayNav.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      nullOPT();

      displayNav.forEach(item => {
        item.classList.remove('active');
        item.classList.add('text-white');
      });


      link.classList.add('active');
      link.classList.remove('text-white');

      
      const indice = parseInt(link.dataset.curso) - 1;

      const cursoNombre = dataCourse[indice];

      renderT(list[cursoNombre]);
      

      console.log("Estilo cambiado para:", link.textContent);
    });
  });
};

//FUNCION: Modifica las columnas
export const modifyCol = async () => {
  for (let i = 9; i >= 4; i--) {
    if (headRow.children[i]) {
      headRow.children[i].remove();
    }
  }
}

//FUNCION: Restaura Columnas
export const restoreCol = () => {  
    // Sobreescribimos todo el contenido de la fila de cabecera
    headRow.innerHTML = `
        <th>ID</th>
        <th>Alumno</th>
        <th>Edad</th>
        <th>Curso</th>
        <th>Mates</th>
        <th>Lengua</th>
        <th>Ciencias</th>
        <th>Historia</th>
        <th>Opt 1</th>
        <th>Opt 2</th>
        <th>Media</th>
        <th>Incidencias</th>
    `;
};

// En ui.js
export const nullNav = () => {
    displayNav.forEach(item => {
        item.classList.remove('active');
        item.classList.add('text-white');        
    });
};

export function nullOPT() {
    // Buscamos los botones justo en el momento de limpiar
    const botones = document.querySelectorAll("#optativas .list-group-item");
    botones.forEach(item => {
        item.classList.remove('active');
        // OJO: Si añades bg-white aquí, asegúrate de que decorateOPT lo quite
        item.classList.add('bg-white'); 
    });
}


export const addBTN = async () => {

      

      let html = `<div class="card border-success">
    <div class="card-header bg-success text-white">Nuevo Registro</div>
    <div class="card-body">
        <form id="form-create">
            <input type="text" class="form-control mb-2" placeholder="Nombre" required>
            <input type="text" class="form-control mb-2" placeholder="Apellidos" required>
            <select class="form-select mb-2">
                <option value="1">1º Curso</option>
                <option value="2">2º Curso</option>
            </select>
            <input type="date" class="form-control mb-3" title="Fecha Matriculación">
            <button type="submit" class="btn btn-success w-100">Registrar Estudiante</button>
            <button class="btn btn-danger w-100 mt-2" id="closeForm">Cerrar Formulario</button>
        </form>
    </div>
</div>`

  formContent.innerHTML = html;
}

export const editBTN = async () => {

    let html = `<div class="card border-warning">
    <div class="card-header bg-warning text-dark">Modificar Registro</div>
    <div class="card-body">
        <form id="form-edit">
            <input type="text" class="form-control mb-2" id="edit-nombre" value="Datos actuales...">
            <input type="text" class="form-control mb-2" id="edit-apellido">
            <select class="form-select mb-2" id="edit-curso">
                <option value="1">1º Curso</option>
                <option value="2">2º Curso</option>
            </select>
            <input type="date" class="form-control mb-2" id="edit-fecha">
            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Describa la incidencia" id="edit-incidencia" style="height: 100px"></textarea>
                <label for="edit-incidencia">Abrir Incidencia</label>
            </div>
            <button type="submit" class="btn btn-warning w-100">Guardar Cambios</button>
            <button class="btn btn-danger w-100 mt-2" id="closeForm">Cerrar Formulario</button>
        </form>
    </div>
</div>`

  formContent.innerHTML = html;
}


//FUNCION: Decora panel de Optativas
export function decorateOPT(e) {
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







//Renderizado Web
export const studentTable = document.getElementById("table-body");

//FUNCION: Renderizado Web
export const inputStudents = async (list) => {
  studentTable.innerHTML = " ";
  
  let html = " ";
  let suma = 0;
  let notGEn = 0;
  let colorBadge = 0; 
  let colorMAT = 0;
  let colorLEN = 0;
  let colorSCI = 0;
  let colorSTR = 0;
// Acceso manual por índice

    list.forEach((p) => {
    suma = p.notas.mates + p.notas.lengua + p.notas.ciencias + p.notas.historia + p.optativas[0].nota + p.optativas[1].nota;
    notGEn = (suma / 6).toFixed(1); // .toFixed(1) para que no salgan 10 decimales
    colorBadge = notGEn >= 5 ? "bg-success" : "bg-danger";
    colorMAT = p.notas.mates >= 5 ? "text-success":"text-danger";
    colorLEN = p.notas.lengua >= 5 ? "text-success":"text-danger";
    colorSCI = p.notas.ciencias >= 5 ? "text-success":"text-danger";
    colorSTR = p.notas.historia >= 5 ? "text-success":"text-danger";
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

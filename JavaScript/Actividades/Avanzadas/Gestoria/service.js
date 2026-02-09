//Logica de filtrado
export const studentTable = document.getElementById("table-body");

//FUNCION: Filtra Optativas
export const filterOPT = (e, list) => {
    const valorSeleccionado = e.target.value; // Capturamos el valor AQUÍ
    const todosLosAlumnos = Object.values(list).flat();

    

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

//FUNCION: Ordena Filas por Categoria
export const orderRows = (e,list) => {
    let tempList = list;
    let orderBY;
    switch (e.target.value) {
        case "mates":
            orderBY = tempList.sort((a,b) => b.notas.mates - a.notas.mates);
            break;
        case "lengua":
            orderBY = tempList.sort((a,b) => b.notas.lengua - a.notas.lengua);
            break;
        case "ciencias":
            orderBY = tempList.sort((a,b) => b.notas.ciencias - a.notas.ciencias);
            break;
        case "historia":
            orderBY = tempList.sort((a,b) => b.notas.lengua - a.notas.lengua);
            break;
        case "mediaGeneral":
            orderBY = tempList.sort((a,b) => b.media - a.media);
            break;
        case "nombreAlumno":
            orderBY = tempList.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case "apellidoAlumno":
            orderBY = tempList.sort((a, b) => a.apellido.localeCompare(b.apellido));
            break;
    }

    return orderBY;
};

//FUNCION: Calcular media individual
export const mediaStudent = (list) => {
    let suma = 0;
    let notaGen = 0;
    list.forEach((p) => {
    
    //Sumamos valores
    suma = p.notas.mates + p.notas.lengua + p.notas.ciencias +
    p.notas.historia + p.optativas[0].nota + p.optativas[1].nota;

    //Guardamos en nueva entrada
    notaGen = (suma / 6).toFixed(1);
    p.media = notaGen;

    });

    return list;
}


//FUNCION: Saber en que curso estamos
export const knowCours = (useSection) =>{
    let position = useSection.indexOf(true);

    let grado = "";
    switch (position) {
        case 0:
            grado = "Primero"
            break;
        case 1:
            grado = "Segundo"
            break;
        case 2:
            grado = "Tercero"
            break;
        case 3:
            grado = "Cuarto"
            break;
    }

    return grado;
}

//FUNCION: Capta lista filtrada con incidencias
export const incidentsFilter = (list) =>{
    let outerList = list.filter((p) => p.incidencias != "Ninguna");

    return outerList;
}


//FUNCION: Filtra lista OPT
export const optfilter = (e,list) => {
    let listFilter = [];

    //Filtramos la lista
    switch (e.target.value) {
        case "1":
            listFilter = list.filter((p) => p.curso == "1º");
            break;
        case "2":
            listFilter = list.filter((p) => p.curso == "2º");
            break;
        case "3":
            listFilter = list.filter((p) => p.curso == "3º");
            break;
        case "4":
            listFilter = list.filter((p) => p.curso == "4º");
            break;
        default:"general"
            return list;
    }

    return listFilter;
}

//FUNCION: Ordena listsa OPT
export const orderOPT = (e,list) =>{
    let orderList = list;
    let orderBY;

    switch (e.target.value) {
        case "edad":
            orderBY = orderList.sort((a,b) => b.edad - a.edad);
            break;
        case "nota":
            orderBY = orderList.sort((a,b) => a.notaVisual - b.notaVisual)
        default:"general"
            return list;
    }

    return orderBY;
}




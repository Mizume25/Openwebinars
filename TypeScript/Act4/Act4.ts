//Recorrido de cards

//Creación de interficies  - Propiedades de un Empleado
interface jobProperties {
    titulo: string,
    nacionalidad: string,
    direccion: string,
    edad: number,
    vehiculo: boolean,
    habilidades: string[],
    notas: object[],
    link: string,
}

//FUNCION: Recibe el JSON
const captureJSON = async (): Promise<jobProperties[] | undefined> => {
    try {

        //Leemos el archivo JSON
        const answer = await fetch('Act4.json');

        //Comprobamos error de lectura
        if (!answer.ok) throw new Error("No se ha podido cargar el archivo JSON");

        //Guarda en array de interficies job todo el json
        let data: jobProperties[] = await answer.json();

        return data; //Retornamos la lista

    } catch (error) {
        console.log(error)
    }
}

//FUNCION: UI de renderizado de cards
const renderCards = async () => {

    //Recibimos el objeto
    let data: jobProperties[] | undefined = await captureJSON();

    //Comprobamos sus erratas
    if (data == undefined) return;

    //Declaramos html
    let html = ``;

    data.forEach((item) => {
        html += `<div class="col">
            <article class="card h-100 shadow-sm">
                <div class="card-header bg-danger text-white">
                    <h3 class="h5 mb-0">${item.titulo}</h3>
                </div>

                <div class="card-body">
                    <div class="text-center mb-3">
                        <img src="IMG/alicia.png" alt="Avatar" class="img-fluid rounded-circle shadow-sm"
                            style="width: 80px; border: 2px solid #dee2e6;">
                    </div>

                    <div class="d-flex justify-content-between gap-2">

                        <div style="flex: 1;" class="text-center">
                            <h6 class="fw-bold text-center">Habilidades</h6>
                            <ul class="list-unstyled small">
                            </ul>
                        </div>

                        <div class="border-start border-end px-2" style="flex: 1.2;">
                            <h6 class="fw-bold text-center">Información</h6>
                            <div class="small">
                                <p class="mb-1"><strong>Nac:</strong>${item.nacionalidad}</p>
                                <p class="mb-1"><strong>Dir:</strong>${item.direccion}</p>
                                <p class="mb-1"><strong>Edad:</strong>${item.edad}</p>
                                <p class="mb-0"><strong>Vehículo:</strong>${item.vehiculo ? 'Sí' : 'No'}</p>
                            </div>
                        </div>

                        <div style="flex: 1;" class="text-center">
                            <h6 class="fw-bold text-center">Notas</h6>
                            <ul class="list-unstyled small">
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="card-footer bg-light d-flex align-items-center justify-content-center"
                    style="min-height: 50px;">
                    <a href="#" class="link-info text-decoration-none fw-bold small">LINK DE PROYECTOS</a>
                </div>
            </article>
        </div>`;


    })



}



//Manipulacion de DOM







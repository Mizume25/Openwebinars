// 1. Selección de elementos (mejor seleccionar los IDs específicos)
const img = document.querySelector("#user-img");
const name = document.querySelector("#user-name");
const role = document.querySelector("#user-role");
const bio = document.querySelector("#user-bio");
const list = document.querySelector("#skills-list");

fetch("Act1.json") // Asegúrate de que el nombre coincida
    .then(answer => {
        if (!answer.ok) throw new Error("Error al cargar");
        return answer.json();
    })
    .then(data => {
        // No usamos forEach porque 'data' es un objeto, no una lista
        img.src = data.foto_url;
        name.textContent = data.nombre;
        role.textContent = data.profesion;
        bio.textContent = data.bio;

        // Para las habilidades, aquí sí usamos un bucle
        data.habilidades.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            list.appendChild(li);
        });
    })
    .catch(err => console.error(err));



const btnGuardar = document.querySelector("#btn-guardar");
const inputNombre = document.querySelector("#input-nombre");
const inputBio = document.querySelector("#input-bio");


btnGuardar.addEventListener("click", () => {
    

    const nuevosDatos = {
        nombre: inputNombre.value,
        bio: inputBio.value,
        profesion: "Usuario Local", 
        foto_url: "https://via.placeholder.com/150",
        habilidades: ["Persistencia", "LocalStorage"]
    };


    const datosEnFormatoJSON = JSON.stringify(nuevosDatos);


    localStorage.setItem("perfilUsuario", datosEnFormatoJSON);

    alert("¡Datos guardados! Refresca la página para ver que no se borran.");
    
 
    pintarTarjeta(nuevosDatos);
});


function cargarDatos() {
    const datosGuardados = localStorage.getItem("perfilUsuario");

    if (datosGuardados) {

        const objetoJS = JSON.parse(datosGuardados);
        pintarTarjeta(objetoJS);
    } else {

        fetch("data.json")
            .then(res => res.json())
            .then(data => pintarTarjeta(data));
    }
}


function pintarTarjeta(data) {
    document.querySelector("#user-name").textContent = data.nombre;
    document.querySelector("#user-bio").textContent = data.bio;

}

cargarDatos();
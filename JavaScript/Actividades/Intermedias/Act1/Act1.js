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
const nameUser = document.getElementById("username");
const passWord = document.getElementById("password");
const miFormulario = document.getElementById("registration-form");
const btnShow = document.getElementById("show-btn");
const displayUs = document.getElementById("showUs");

const listUser = []; // Aquí guardaremos OBJETOS, no arrays

// Ocultar botón al inicio
btnShow.style.display = 'none';

miFormulario.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const nameStr = nameUser.value;
    const passStr = passWord.value;

    // Validaciones
    if (nameStr.length < 10) {
        return alert('Usuario bajo en caracteres');
    } 
    if (passStr.length < 6) {
        return alert('Password debe tener mínimo 6 caracteres');
    }

    // GUARDAR: Guardamos un objeto simple { }
    const newUser = {
        nombre: nameStr,
        clave: passStr
    };

    listUser.push(newUser);
    
    // Limpiar formulario y mostrar botón de ver
    btnShow.style.display = 'block';
    console.log("Usuario guardado:", listUser);
});

btnShow.addEventListener('click', function () {
    // IMPORTANTE: Accedemos al ÚLTIMO objeto guardado en el array
    const ultimoUsuario = listUser[listUser.length - 1];

    let html = `
        <div>
            <li><strong>User:</strong> ${ultimoUsuario.nombre}</li>
            <li><strong>Pass:</strong> ${ultimoUsuario.clave}</li>
        </div>`;

    displayUs.innerHTML += html;
});
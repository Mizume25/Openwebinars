async function cargarDatosFutbol() {
    const miToken = "a02d8f59ac614636b366ed907f4a451d"; // Asegúrate de copiarlo tal cual
    const url = "https://api.football-data.org/v4/teams/81"; // El ID del Barça

    try {
        const respuesta = await fetch(url, {
            method: 'GET',
            headers: {
                // ESTA LÍNEA ES LA CLAVE:
                'X-Auth-Token': miToken 
            }
        });

        const data = await respuesta.json();


        // Si el token falla, la API nos manda el objeto que pusiste tú
        if (data.errors) {
            throw new Error(data.errors.token);
        }

        console.log("¡Conectado!", data);

    } catch (error) {
        console.error("Error de validación:", error.message);
    }
};

cargarDatosFutbol();
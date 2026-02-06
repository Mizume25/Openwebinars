// api.js
export const startStock = async () => {
    try {
        const answer = await fetch("Act6.json");
        if (!answer.ok) throw new Error('No se ha podido cargar el archivo JSON');
        const data = await answer.json();
        console.log("JSON cargado con éxito");
        return Object.values(data);
    } catch (error) {
        console.error("Error en la carga:", error);
        return [];
    }
};
//Conversor de JSON
export const startGestory = async (e) => {
  try {
    //Cargamos data con el JSON de los estudiantes
    const response = await fetch("Gestoria.json");

    //Comoprobaciones primeras
    if(!response.ok) throw new Error ('No se ha podido cargar el archivo JSON');

    //Convertirmos el JSON
    let data = await response.json();

    console.log("JSON cargado")

    //Retornamos los valores
    return data;


  } catch (error) {
     console.error("Error en la carga:", error);
  }
};

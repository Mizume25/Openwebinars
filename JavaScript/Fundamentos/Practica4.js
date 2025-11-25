
//
function getCopyright(name, year, callback) {
    let copyright = callback(name, year);
    return copyright;
}

let formatWithPipe = function (name, year) {
    return name + " | " + year;
} // |

let formatWithHypen = function (name, year) {
    return name + " - " + year;
} // -

getCopyright("Armando", 2023, formatWithPipe);
//Llama ala Funcion: "Aramando" = name, 2023 = year, funcion = callback


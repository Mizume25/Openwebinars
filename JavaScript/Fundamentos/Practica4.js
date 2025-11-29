                    //Parametros
/*function getCopyright(name, year = 2023) {
    let copyright = name + " - " + year;
    return copyright;
}
                        //Argumentos
let result = getCopyright("Openwebinars", 2022);
console-console.log(result);ç
*/
//La pre-inizialicacion es mas debil que el arumento


let result = function(name,year = 2023) {
    let copyright = name + " -- " + year;
    return copyright;
}

console.log (result("Gabriel"))


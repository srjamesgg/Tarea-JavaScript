// 3 funciones de flecha, hay que usar CallbackFunction
// Debe manipular Areglos.

const edades = [100,599,56,15,78,56,98,78,11];
const LosMenores = edades.filter(edad => edad <= 18);
console.log(LosMenores);


///////////////

const mensajito = palabra => ' bb que mas ' + palabra;
const saludarUsuario =(callbackFunction, palabra) => {
    let Mensaje = callbackFunction (palabra);
    console.log(Mensaje);
}
saludarUsuario(mensajito, ", saludes del Ferxxo mor ");

/////////// 

const luxury_motos = ["bmw" , "ducati" , "xtz" , "dr"];
const pobr_motos = ["akt","pulsar"]
const cars = luxury_motos.concat(pobr_motos)
console.log(cars);

//////



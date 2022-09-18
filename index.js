// callback functions

const esImpar = numero => numero%2 == 1;

const HelloTres = (callbackFunction, numero) => {
    const esNumeroImpar = callbackFunction (numero);
    console.log(`el numero ${numero} es impar? ${esNumeroImpar}`);
}

HelloTres(esImpar,32);

// otra con callback fuction

// callback function
const saludar = usuario => 'hola ' + usuario;

const saludarUsuario =(callbackFunction, usuario) => {
    let mensajeRecibido = callbackFunction (usuario);
    console.log(mensajeRecibido);
}

saludarUsuario(saludar, "El Ferxxo");


// metodos para arrays

const cars = ["BMW" ,"Volvo", "Lambo", 1, 3 ,5];
const carNames = ["Spark GT","Mustang","Camaro", true, false];
const cities = ["Medellin", "Cali", "Bogota", 3,8,10.235];

//.concat()
const unionAreglos = cars.concat(carNames,cities);
console.log(unionAreglos);

 // .length()

console.log(unionAreglos.length);

// .push()
cars.push("Paris","miami",5);
console.log(cars);

// .pop()

cars.pop();
console.log(cars);

// .map()

const numbers = [4,9,12,18,40];

// const raizCuadrada = numero => Math.sqrt(numero);

const resultadoRaiz = numbers.map(numero => Math.sqrt (numero));

console.log(resultadoRaiz);



const por10 = numbers.map(numero => numero*10);
console.log(por10);

// .filter()

const edades = [10,12,16,89,14,20,15];
const esMayor = edades.filter(edad => edad >= 18);
console.log(esMayor);

const pruebaDos =  [10,12,16,89,14,20,15].filter(edad => edad >= 18);
console.log(pruebaDos);


// .reduce()


const sumaEdades = edades.reduce((acumulador,currentValue)=>{
    return acumulador + currentValue ;
})

console.log(sumaEdades);

// .forEach()

edades.forEach(element => console.log(element));

// 3 funciones de flecha, hay que usar CallbackFunction
// Debe manipular Areglos.


// Bloc 1.3: Callbacks

// Nivell 1

//Exercici 1
//Callback bàsic: 
//Escriu una funció anomenada processar que accepti dos paràmetres:
// un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

function processar(nombre, callback) {
    let miNombre = `Tu nombre és: ${nombre}`;
    callback(miNombre);
}

function nombreProprio(nombre) {
    console.log(nombre);
}

const proc = (nombre, callback) => {
    let miNombre = `Tu nombre és: ${nombre}`;
    callback(miNombre);
}

processar("pedro", nombreProprio);
proc("Juno", nombreProprio);


// Exercici 2
// Callbacks amb operacions matemàtiques: 
// Escriu una funció calculadora que accepti tres paràmetres: 
//dos nombres i una funció de callback. 
//La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. 
// Després, crida calculadora amb una funció que faci la suma dels dos nombres.

function calculadora(num1, num2, callback) {
    callback(num1, num2);
}

function sumar(num1, num2) {
    console.log(num1 + num2);
}

calculadora(2, 2, sumar);

// Nivell 2


//Exercici 3
//Ús de callbacks en funcions asíncrones:
// Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback.
// La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

function esperarISaludar(nombre, callback) {
    setTimeout(() => {
        let miNombre = `Hola ${nombre}`;
        callback(miNombre);
    }, 2000)

}

function saludar(nombre) {
    console.log(nombre);
}

esperarISaludar("pedro", saludar)

//Exercici 4
//Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback.
//La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

const nombresArray = ["Pedro", "Eneida", "Juno", "Tulip"]

function processarElements(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function processarNombres(nombre) {
    console.log(nombre);
}

processarElements(nombresArray, processarNombres);

// Nivell 3
// Exercici 5
// Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback.
// La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.

let cadenaString = "¿Por qué los pájaros no usan Facebook?Porque ya tienen Twitter.";

function processarCadena(string, callback) {
    callback(string.toUpperCase());
}

function cadenaMayusculas(string) {
    console.log(string);
}

processarCadena(cadenaString, cadenaMayusculas);
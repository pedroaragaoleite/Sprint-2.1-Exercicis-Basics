//Bloc 1.4: Rest & Spread operators

//Nivell 1

//Exercici 1
//Operador Spread en Arrays: Crea dues arrays, array1 i array2.
//Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.
const array1 = ['Nueva York', 'Los Ángeles', 'Londres', 'París', 'Tokio', 'Sídney'];
const array2 = ['Inglés', 'Español', 'Francés', 'Alemán', 'Chino Mandarín', 'Árabe', 'Hindi', 'Portugués', 'Ruso', 'Japonés'];

const array3 = [...array1, ...array2];
console.log(array3);


//Exercici 2
//Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

function sumaa(...numbers) {
    let result = 0;
    for (let num of numbers) {
        result += num;
    }
    return result;
}

console.log(sumaa(2, 7, 23, 135, 2567));


//Nivell 2


//Exercici 3
//Copiant objectes amb Spread: Crea un objecte 'objecte1'.
//Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread.
// Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

const object1 = {
    modelo: 'Boeing 747',
    aerolinea: 'Barcelona Airlines',
    capacidadPasajeros: 416,
    velocidadMaxima: 988,
    color: 'Blanco',
}

const object2 = { ...object1 }

object2.color = "Negro";

console.log(object1);
console.log(object2);



//Exercici 4
//Rest en Destructuring: Crea una array amb diversos elements.
//Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.
const arrayElementos = ['Parrilla',
    'Pinzas para parrilla',
    'Carbón o briquetas',
    'Encendedor o fósforos',
    'Espátula para parrilla',
    'Tabla de cortar',
    'Cuchillo para carne']

const [elemento1, elemento2, ...restoDeElementos] = arrayElementos;

console.log(elemento1);
console.log(elemento2);
console.log(restoDeElementos);


//Nivell 3
//Exercici 5
//Spread en Funcions: Crea una funció que accepti tres arguments.
//Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

const tresArgumentos = (a, b, c) => {
    console.log(`Elemento a = ${a}`)
    console.log(`Elemento B = ${b}`)
    console.log(`Elemento C = ${c}`)
}

const arraytresElementos = ["Aire", "Fuego", "Agua"];

tresArgumentos(...arraytresElementos);


//Exercici 6
//Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents.
//Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

const hulk = {
    nombre: 'Hulk',
    color: 'Verde',
    fuerza: 'Flipante'
};

const extraHulk = {
    inteligencia: 'Variable',
    habilidades: ['Super fuerza', 'Regeneración'],
    amigos: ['Thor', 'Iron Man', 'Capitán América'],
    cabreado: true
}

const hulkTotal = { ...hulk, ...extraHulk };

console.log(hulkTotal);



// Bloc 1.1: Arrow functions

// NIVEL 1


// Exercici 1
// Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma.
// Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.

const suma = (a , b) => {return a + b};

//Exercici 2
//Funció de fletxa sense paràmetres:
// Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.

const randomNumber = () => {return Math.ceil(Math.random() * 100)};

//Exercici 3
//Ús de 'this' en les funcions de fletxa:
//Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa.
// La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.

class Person  {
    constructor(name) {
        this.name = name;
    }  
    greet = () => {
        console.log(`Hola, ${this.name}`);
    }   
}

const newPerson = new Person('Juno');
newPerson.greet()


/* -------------------------------------------------------------------------- */

// NIVEL 2

//Exercici 4
//Funció de fletxa dins d'un loop: 
//Crea una funció anomenada printNumbers que accepti un array de números
//i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.

const numbers = [0, 2, 4, 6, 8, 10];

const printNumbers = (array) => {
    for(let i = 0; i < array.length; i++) {
        const number = array[i];
        //llamar un función anónima dentro del loop en cada iteración
    (() => {
        console.log(number);
    })();
    }
}

printNumbers(numbers);


/* -------------------------------------------------------------------------- */

// NIVEL 3

// Funció de fletxa amb 'setTimeout':
// Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.


setTimeout(() => {
    console.log("waited 3 seconds");
}, 3000);



// Bloc 1.2: Operador ternari

// Nivell 1

//Exercici 1

// Operador ternari bàsic: 
// Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir.
// Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.

function potConduir(edad) {
   return edad >= 18 ? "Puedes conducir" : "No puedes conducir.";
} 

// Exercici 2
// Ús amb operadors de comparació:
// Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran.
// Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.

const comparacion = (numOne, numTwo) => {
    if(numOne === numTwo) {
        console.log("Los dos número son iguales!");
    } else {
        const num = numOne > numTwo ? "numOne és més gran" : "numTwo és mé gran";
        return num;
    }  
}



//Nivell 2

//Exercici 3
//Ús enllaçat d'operadors ternaris:
// Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

const determinarNum = (num) => {
   return num === 0 ? `El número es ${num}` : num > 0 ? `El número ${num} es positivo` : `El número ${num} es negativo`;
}   


// Operador ternari amb funcions:
// Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

const trombarMaxim = (a, b, c) => {
    return a > b && a > c ? `El ${a} es mayor que ${b} y el ${c}` : b > a && b > c ? `El ${b} es mayor que ${a} y el ${c}` : `El ${c} es mayor que ${a} y el ${b}`; 
}


// Nivell 3

// Exercici 4
// Operador ternari dins un bucle: 
// Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array.
// Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

const numsParImpar = [1,2,3,4,5,6,7,8,9,10];

const parOImpar = (array) => {
    for(let i = 0; i < array.length; i++) {
        const num = array[i];
        console.log(num % 2 === 0 ? `El número ${num} es par` : `El número ${num} és impar`);
    }
}

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




//Exercici 4
//Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. 
//La funció processarElements ha d'invocar la funció de callback per cada element de l'array.
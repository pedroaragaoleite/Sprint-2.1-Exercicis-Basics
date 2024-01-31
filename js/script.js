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
    num > 0 ? "El número es positivo" : num < 0 ? 
    "El número es negativo"
    : num === 0 ? 
    "El número es cero";
}
    



// Operador ternari amb funcions:
// Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.


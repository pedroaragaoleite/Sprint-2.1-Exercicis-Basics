
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
    if (numOne === numTwo) {
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

const numsParImpar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parOImpar = (array) => {
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        console.log(num % 2 === 0 ? `El número ${num} es par` : `El número ${num} és impar`);
    }
}
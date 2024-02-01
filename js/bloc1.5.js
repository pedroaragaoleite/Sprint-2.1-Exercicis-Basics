//Bloc 1.5: Array transformations


//Nivell 1


//Exercici 1
//Map: Teniu un array de números[1, 2, 3, 4].Crea una nova array que contingui el quadrat de cada número.
const arrayNumeros = [1, 2, 3, 4];

const newArrayNumeros = arrayNumeros.map(numero => numero ** 2);
console.log(newArrayNumeros);


//Exercici 2
//Filter: Teniu una array de números[1, 2, 3, 4].Crea una nova array que només contingui els números parells.

const newArrayParells = arrayNumeros.filter(numero => numero % 2 === 0);
console.log(newArrayParells);

//Exercici 3
//Find: Teniu una array de números[1, 10, 8, 11].
//Utilitza la funció find per a trobar el primer número que és major a 10.

const arrayFind = [1, 10, 8, 11];

const firstNumGreaterThanTen = arrayFind.find(num => num > 10);
console.log(firstNumGreaterThanTen);

//Exercici 4
//Reduce: Teniu una array de números[13, 7, 8, 21].
//Fes servir la funció reduce per a calcular la suma total dels números.

const arrayReduce = [13, 7, 8, 21];

const sumaTotalReduce = arrayReduce.reduce((accumulator, num) => accumulator + num, 0);

console.log(sumaTotalReduce);


//Nivell 2


//Exercici 5
//Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

//Filtra els nombres majors o iguals a 10.
//Multiplica cada nombre filtrat per 2.
//Calcula la suma dels nombres filtrats i multiplicats per 2.
//La funció ha de retornar el resultat de la suma.

const arrayOneLine = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const oneLineFunction = arrayOneLine.filter(num => num >= 10).map(num => num * 2).reduce((accumulator, num) => accumulator + num, 0);
console.log(oneLineFunction);

// console.log(arrayOneLine.filter(num => num >= 10).map(num => num * 2).reduce((accumulator, num) => accumulator + num, 0));

//Nivell 3

//Exercici 6

//Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

const arrayEverySome = [11, 12, 13, 14];

const everyFunction = arrayEverySome.every(num => num > 10);
console.log(everyFunction);

const someFunction = arrayEverySome.some(num => num > 10);
console.log(someFunction);
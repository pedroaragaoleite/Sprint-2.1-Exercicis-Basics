//Bloc 1.7: Promises & Async / Await

//Nivell 1


//Exercici 1
// Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

const promesa = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Hola, món");
    }, 2000)

})



//Exercici 2
//Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior.Crea un.then que imprimeixi el resultat a la consola.

promesa.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})


//Exercici 3
//Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.
const promesaComplete = (input) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (input === "Hola") {
            resolve("El input es igual a Hola")
        } else {
            reject("El input no es igual a Hola, operación fallida")
        }
    }, 2000)
})

promesaComplete('Hol')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })


//Exercici 4
//Ús de async / await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.

async function utilizaPromesa() {

    const result = await promesa;
    console.log(result);
}

utilizaPromesa();

//Nivell 2


//Exercici 5
//Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

async function utilizaPromesaAgain() {
    try {
        console.log("inicio de la funcion");

        const result = await promesa;
        console.log(result);

        console.log("Fin de la funcion");
    } catch (error) {
        console.error(error);
    }
}

utilizaPromesaAgain();

//Nivell 3
//Exercici 6
//Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament.
//Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

const promesaOne = new Promise(resolve => {
    setTimeout(() => {
        console.log("Promesa One");
    }, 2000)
})

const promesaTwo = new Promise(resolve => {
    setTimeout(() => {
        console.log("Promesa Two");
    }, 3000)
})

Promise.all([promesaOne, promesaTwo])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });


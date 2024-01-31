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





// questo è un file TypeScript!
// i commenti si fanno sempre con //

// in un file TS si può fare TUTTO QUELLO che già sapete fare in un file JS
console.log('Ciao, sono TypeScript!')
const x = 'Stefano'
// TS è 100% "retrocompatibile" con JS
// però potremo fare delle cose che NON si possono fare in JS!
// potremo ESPANDERE questa sintassi
console.log('questo è un altro console log!')
console.log('ultimo messaggio ancora una voltaaaa')

// quindi ora andiamo ad analizzare le cose IN PIÙ che si possono
// scrivere in un file .ts

// TS è JS con una forte tipizzazione dei dati
// quali sono i TIPI DI DATO PRIMITIVI in TS:
// - string
// - number
// - boolean
// - null
// - undefined
// - any
// anche altri, tipo "never" etc.

// in TS i TIPI DI DATO si possono applicare alle variabili
const n: number = 50
const firstName: string = 'Stefano'
const isLoading: boolean = false

firstName.slice(0, 2)
// n.slice(0,2) // <-- errore! non possiamo fare lo slice di un numero
// isLoading.length // <-- errore! non possiamo leggere la length di un booleano

const lastName = 'Rossi'
// anche senza specificare il TIPO della variabile lastName, le possibilità
// che l'editor ci offre RIMANGONO quelle delle stringhe!
// come è possibile? TS ha un "superpotere" che si chiama TYPE INFERENCE
// la TYPE INFERENCE, per situazioni relativamente semplici, riesce a DEDURRE
// il TIPO di un dato a partire dal suo valore!

const hundred = 100
// TS ha capito grazie all'assegnazione iniziale del valore 100 che la variabile
// "hundred" è di tipo NUMBER
// hundred.slice(0, 50) // <-- sempre errore!

// se non inseriamo a mano un tipo e TS non riesce a dedurlo grazie al valore
// iniziale (perchè magari non c'è), TS assegnerà al dato un tipo di nome "any"
// una variabile di tipo "any" SPEGNE il suo controllo del tipo da parte di TS
let qualsiasi: any
// qualsiasi ha ereditato il tipo "any"
qualsiasi = 500
// qualsiasi = 'Stefano' // <-- non potremmo in TS riassegnare il tipo di una variabile
// qualsiasi = [50, 60] // <-- non potremmo in TS riassegnare il tipo di una variabile
// quindi "qualsiasi" è una variabile di tipo "any" e TS non è in grado di aiutarci
// nella sua stesura o di controllarla. A questo punto "qualsiasi" è al pari
// di una variabile scritta in JS
// delete qualsiasi.ciao // <-- errore, TS non ce lo sta segnalando però!

let epicode = 'EPICODE'
// epicode = [20] // TS non ammette il cambio di tipo per una variabile

// FUNZIONI
const myFunction = () => {
  const x = 'Ciao'
  return x + ' Stefano!'
} // ritorna 'Ciao Stefano!'

console.log(myFunction().toUpperCase() + ' Come stai?') // 'Ciao Stefano! Come stai?'

const addition = (p1: number, p2: number) => {
  return p1 + p2
}

// TS ha automaticamente capito che addition() è una funzione che RITORNA un NUMERO
// perchè ricevendo due numeri come parametri, la loro somma non può essere
// altro che un altro numero!
addition(5, 8).toString().slice(0, 1).toLowerCase() // vi da una mano a completare
// ragionamenti complessi

const concatStrings = (s1: string, s2: string) => {
  return s1 + s2
}

concatStrings('ciao', 'Stefano').toUpperCase()

const sayHello = (name: string, prefix?: string) => {
  return (prefix || 'Ciao') + ' ' + name
}

sayHello('Giangiorgio', 'Buonasera') // 'Buonasera Giangiorgio'
sayHello('Mariangela', 'Buon pomeriggio') // 'Buon pomeriggio Mariangela'
sayHello('Stefano') // 'Ciao Stefano'
// con il '?' indichiamo un parametro come OPZIONALE (TS ci aggiungerà il tipo "undefined")
// i parametri opzionali vanno definiti sempre in FONDO alla lista dei parametri!

// TYPE UNION
// TS permette di creare una UNIONE di diversi tipi al fine di descrivere meglio
// la tipizzazione di alcune porzione di codice
let myVariable: string | number | boolean = 'Ciao'
myVariable = 100

// TYPE ALIAS
type MyCustomType = string | number
let anotherVariable: MyCustomType = '50'

// ARRAY
const arrayOfNames = ['Stefano', 'Giangiorgio', 'Antimo', 'Claudio'] // string[]
// maniera alternativa
const arrayOfCars: Array<string> = ['Ritmo', 'Punto', 'Polo']

arrayOfNames.push('100')
arrayOfNames.pop()!.length // il ! serve a dire a TS che in questo caso pop() NON
// tornerà undefined -> che significa che arrayOfNames NON è vuoto!

const mixedArray: (string | number)[] = ['Ciao', 1]
// modi alternativi:
// const mixedArray: MyCustomType[] = ['Ciao', 1]
// const mixedArray: Array<string | number> = ['Ciao', 1]
// const mixedArray: Array<MyCustomType> = ['Ciao', 1]
mixedArray.push(100)
mixedArray.push('Ciaone')

// TUPLE
// Una tupla è una specie di array nel quale viene definito il TIPO per ogni posizione!

// array normale:
const myArr: (string | number)[] = [10, 'ciao', 'buongiorno', 100]

const myTuple: [string, string, number, number] = ['ciao', 'stefano', 10, 100]
const peppe: string = 'Giuseppe'
myTuple.push(peppe)
// myTuple[4] // come definire un quinto elemento in una tupla? Stefano non lo sa :(
// Rufat sì!
let myTuple2: [string, string, number, number, ...string[]] = [
  'uno',
  'due',
  3,
  4,
  'ciao',
]
// myTuple2.push(100)
// myTuple2[5] // per lui è una stringa :(

// OGGETTI
// la definizione degli oggetti in TS è la stessa di JS, la TYPE INFERENCE viene molto
// in aiuto!

const specialDog = {
  name: 'Pluto',
  brand: 'Disney',
  age: 5,
  canFly: false,
  furColor: 'Blonde',
  species: {
    name: 'Dog',
    breed: 'Golden Retriever',
  },
  abilities: ['Bark', 'Eat', 'Play', 'Sleep'],
  bark: () => {
    return 'BAU'
  },
}

// ritorno un array con tutte le lunghezze delle stringhe delle abilities di specialDog
const arrayOfLengths = specialDog.abilities.map((ab) => {
  return ab.length
})

// specialDog.lastName // <-- errore, perchè la proprietà non esiste!

// quando c'è la necessità di modellare un dato, ovvero di tipizzarlo secondo
// una struttura possiamo creare noi il tipo per un oggetto.

const teacher = {
  firstName: 'Stefano',
  lastName: 'Casasola',
  modules: ['U1', 'U2', 'U3'],
}

// come facciamo a creare un TIPO per un oggetto fatto così?

type Book = {
  id: string
  price: string
  title: string
  description: string
  imageUrl: string
}

fetch('https://striveschool-api.herokuapp.com/food-books')
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('errore fetch')
    }
  })
  .then((data: Book[]) => {
    // in questo caso TS non ha idea di cosa sia "data", perchè ogni API
    // ritorna nel proprio JSON informazioni diverse!
    console.log(data[0].title)
  })
  .catch((err) => {
    console.log(err)
  })

// però, molto spesso per modellare oggetti invece del TYPE ALIAS si utilizza
// una INTERFACCIA
interface EpiTeacher {
  firstName: string
  lastName: string
  modules: string[]
}

const docente1: EpiTeacher = {
  firstName: 'Mario',
  lastName: 'Rossi',
  modules: ['U4'],
}

const docente2: EpiTeacher = {
  firstName: 'Luigi',
  lastName: 'Rossi',
  modules: ['U5'],
}

const arrayOfDocenti: EpiTeacher[] = []
arrayOfDocenti.push(docente1)
arrayOfDocenti.push(docente2)

arrayOfDocenti.forEach((d) => {
  console.log(d.firstName) // 'Mario' 'Luigi'
})

// al pari delle classi, anche le interfacce si possono "estendere" per partire
// da un punto di partenza già definito in precedenza...
interface FrontendTeacher extends EpiTeacher {
  // FrontendTeacher di base ha già 3 proprietà: firstName, lastName e modules
  // e oltre a queste 3 aggiungiamo...
  DOMyoe: number
}

const zuck: FrontendTeacher = {
  firstName: 'Mark',
  lastName: 'Zuckerberg',
  modules: [],
  DOMyoe: 0,
}

// GENERICS
// Un GENERIC è un TIPO che viene passato come ARGOMENTO per un'INTERFACCIA.
// Vengono comodi quando si vuole rendere un'interfaccia più VERSATILE, più RIUTILIZZABILE.

interface Address<A> {
  street: string
  civicNumber: number
  zipCode: number
  city: string
  area: A // A è parametro di TIPO fornito all'interfaccia Address.
  // Address NON SA cosa sarà A... sa solo che diventerà il TIPO per la proprietà "area"
}

const italianAddress: Address<string> = {
  street: 'Via Roma',
  civicNumber: 100,
  zipCode: 34170,
  city: 'Gorizia',
  area: 'FVG',
}

// 300-332 Hale Alley, Bellefonte, PA 16823, Stati Uniti

interface AmericanArea {
  state: string
  country: string
}

const americanAddress: Address<AmericanArea> = {
  street: 'Hale Alley',
  civicNumber: 300,
  zipCode: 16823,
  city: 'Bellefonte',
  area: {
    state: 'PA',
    country: 'USA',
  },
}

// fornendo all'inteface Address il TIPO per la proprietà "area" in questo particolare
// utilizzo la riesco a piegare a più circostanze, rendendola più versatile e riutilizzabile.

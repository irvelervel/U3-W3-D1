// questo è un file TypeScript!
// i commenti si fanno sempre con //
// in un file TS si può fare TUTTO QUELLO che già sapete fare in un file JS
console.log('Ciao, sono TypeScript!');
var x = 'Stefano';
// TS è 100% "retrocompatibile" con JS
// però potremo fare delle cose che NON si possono fare in JS!
// potremo ESPANDERE questa sintassi
console.log('questo è un altro console log!');
console.log('ultimo messaggio ancora una voltaaaa');
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
var n = 50;
var firstName = 'Stefano';
var isLoading = false;
firstName.slice(0, 2);
// n.slice(0,2) // <-- errore! non possiamo fare lo slice di un numero
// isLoading.length // <-- errore! non possiamo leggere la length di un booleano
var lastName = 'Rossi';
// anche senza specificare il TIPO della variabile lastName, le possibilità
// che l'editor ci offre RIMANGONO quelle delle stringhe!
// come è possibile? TS ha un "superpotere" che si chiama TYPE INFERENCE
// la TYPE INFERENCE, per situazioni relativamente semplici, riesce a DEDURRE
// il TIPO di un dato a partire dal suo valore!
var hundred = 100;
// TS ha capito grazie all'assegnazione iniziale del valore 100 che la variabile
// "hundred" è di tipo NUMBER
// hundred.slice(0, 50) // <-- sempre errore!
// se non inseriamo a mano un tipo e TS non riesce a dedurlo grazie al valore
// iniziale (perchè magari non c'è), TS assegnerà al dato un tipo di nome "any"
// una variabile di tipo "any" SPEGNE il suo controllo del tipo da parte di TS
var qualsiasi;
// qualsiasi ha ereditato il tipo "any"
qualsiasi = 500;
// qualsiasi = 'Stefano' // <-- non potremmo in TS riassegnare il tipo di una variabile
// qualsiasi = [50, 60] // <-- non potremmo in TS riassegnare il tipo di una variabile
// quindi "qualsiasi" è una variabile di tipo "any" e TS non è in grado di aiutarci
// nella sua stesura o di controllarla. A questo punto "qualsiasi" è al pari
// di una variabile scritta in JS
// delete qualsiasi.ciao // <-- errore, TS non ce lo sta segnalando però!
var epicode = 'EPICODE';
// epicode = [20] // TS non ammette il cambio di tipo per una variabile
// FUNZIONI
var myFunction = function () {
    var x = 'Ciao';
    return x + ' Stefano!';
}; // ritorna 'Ciao Stefano!'
console.log(myFunction().toUpperCase() + ' Come stai?'); // 'Ciao Stefano! Come stai?'
var addition = function (p1, p2) {
    return p1 + p2;
};
// TS ha automaticamente capito che addition() è una funzione che RITORNA un NUMERO
// perchè ricevendo due numeri come parametri, la loro somma non può essere
// altro che un altro numero!
addition(5, 8).toString().slice(0, 1).toLowerCase(); // vi da una mano a completare
// ragionamenti complessi
var concatStrings = function (s1, s2) {
    return s1 + s2;
};
concatStrings('ciao', 'Stefano').toUpperCase();
var sayHello = function (name, prefix) {
    return (prefix || 'Ciao') + ' ' + name;
};
sayHello('Giangiorgio', 'Buonasera'); // 'Buonasera Giangiorgio'
sayHello('Mariangela', 'Buon pomeriggio'); // 'Buon pomeriggio Mariangela'
sayHello('Stefano'); // 'Ciao Stefano'
// con il '?' indichiamo un parametro come OPZIONALE (TS ci aggiungerà il tipo "undefined")
// i parametri opzionali vanno definiti sempre in FONDO alla lista dei parametri!

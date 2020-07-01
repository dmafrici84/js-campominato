// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var numeriPc = [];

// Il computer deve generare 16 numeri casuali tra 1 e 100.
var numElementiArrayPc = 16;
var numElementiMax = 100;

numeriPc = inserireElemCasuliInArray(numeriPc, numElementiArrayPc);
console.log("array Pc", numeriPc);

// I numeri non possono essere duplicati
numeriPc = verificaEmodificaElementiArray(numeriPc);
console.log("array Pc verificato e corretto", numeriPc);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var listaNumeriUtente = [];
var punti = 0;

var i = 0;
while ( i < (numElementiMax - numElementiArrayPc) ) {

  // chiedo i numeri all'utente
  numUtente = parseInt(prompt("Inserisci un Numero tra 1 e 100"));

  // verifico il dato dell'utente
  var numUtente1 = numeroValido(numUtente, 1, 100);
  console.log("Dato utente, verifica:", numUtente, numUtente1);

  // inserisco i dati dell'utente in un array
  listaNumeriUtente = inserireElemInArray(listaNumeriUtente, numUtente)
  console.log("array utente", listaNumeriUtente);

  // L’utente non può inserire più volte lo stesso numero.
  listaNumeriUtente1 = verificaElementiArray(listaNumeriUtente);
  console.log("array utente verificato", listaNumeriUtente1);

  // confronto l'array del pc con l'array dell'utente
  var confronto = confrontoElementiDiDueArray(numeriPc, listaNumeriUtente);
  console.log("confronto", confronto);

  // se il numuro utente è valido e non è ripetuto e non è uguale ad uno dei numeri del pc
  if (numUtente1 && !listaNumeriUtente1 && !confronto) {

    ++punti;
    console.log("punti totalizzati:", punti);

    // La partita termina quando il giocatore raggiunge il numero massimo possibile di numeri consentiti.
    if ( i == ((numElementiMax - numElementiArrayPc) - 1)) {

      // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
      alert("Complimenti hai Vinto!!!!!! Hai Totalizzato", punti, "punti!!!!");

      }

  // se il numuro utente è valido e non è ripetuto ma è uguale ad uno dei numeri del pc
  } else if (numUtente1 && !listaNumeriUtente1) {

    // La partita termina quando il giocatore inserisce un numero “vietato” e deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    alert("Mi dispace hai perso. Hai Totalizzato", punti, "punti!!!!");
    i = (numElementiMax - numElementiArrayPc);

  // se il numuro utente è valido ma è ripetuto
  } else if (numUtente1){

    listaNumeriUtente.pop();
    alert("Attenzione il dato è stato già inserito");
    --i;

  // se il numuro utente non è valido
  } else {

    listaNumeriUtente.pop();
    alert("Attenzione il dato non è corretto");
    --i;

  }

  i++;

}


// FUNZIONI

  // FUNZIONE CHE GENERA IN MODO CASUALE UN NUMERO
  function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    numRand = Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
    return numRand;

  }

  // FUNZIONE CHE INSERISCE IN UN ARRAY UN TOT NUMERO DI ELEMENTI GENERATI CASUALMENTE
  function inserireElemCasuliInArray(array, num) {

    for (var i = 0; i < (num - 1); i++) {
      array[i] = getRandomIntInclusive(1, 100);
      array.push(array[i]);
    }
    return array;

  }

  // FUNZIONE CHE VERIFICA SE IN UN ARRAY GLI ELEMNTI INSERITI SONO TUTTI DIVERSI E SE NON LO SONO LI MODIFICA CON UN NUMERO CASUALE
  function verificaEmodificaElementiArray(array) {

    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length && j != i ; j++) {
        if (array[i] == array[j]) {
          array[i] = getRandomIntInclusive(1, 100);
          i = 0;
        }
      }
    }
    return array;

  }

  // FUNZIONE CHE DETERMINA SE IL DATO INSERITO E' UN NUMERO ED E' COMPRESO FRA 2 NUMERI
  function numeroValido(num, numMin, numMax) {

    if (!(isNaN(num)) && (num != "") && (num >= numMin) && (num <= numMax) ) {
      return true;
    } else {
      return false;
    }

  }

  // FUNZIONE CHE INSERISCE IN UN ARRAY UN ELEMENTO
  function inserireElemInArray(array, elemento) {

    array.push(elemento);
    return array;

  }

  // FUNZIONE CHE CONFRONTA GLI ELEMENTI DI 1 ARRAY
  function verificaElementiArray(array) {

    var trovato = false;
    var i = 0;
    while (i < array.length && trovato == false) {
      for (var j = 0; j < array.length && j != i ; j++) {
        if (array[i] == array[j]) {
          trovato = true;
        }
      }
      i++;
    }
    return trovato;

  }


  // FUNZIONE CHE CONFRONTA GLI ELEMENTI DI 2 ARRAY
  function confrontoElementiDiDueArray(array, array1) {

    var trovato = false;
    var i = 0;
    while ( i < array.length && trovato == false ) {
      for (var j = 0; j < array1.length; j++) {
        if (array[i] == array1[j] ) {
          trovato = true;
        }
      }
      i++;
    }
    return trovato;

  }

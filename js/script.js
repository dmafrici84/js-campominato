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
console.log("array Pc",numeriPc);

// I numeri non possono essere duplicati
numeriPc = verificaEmodificaElementiArray(numeriPc);
console.log("array Pc verificato e corretto", numeriPc);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var listaNumeriUtente = [];
var i = 0;
contatore = 0;
while ( i < (numElementiMax - numElementiArrayPc)) {

  numUtente = parseInt(prompt("Inserisci un Numero tra 1 e 100"));
  var numUtente1 = datoUtenteValido(numUtente, 1, 100);
  console.log(numUtente + " " + numUtente1);

  if (numUtente1) {

    listaNumeriUtente = inserireElemInArray(listaNumeriUtente, numUtente)
    console.log("array utente", listaNumeriUtente);

    // L’utente non può inserire più volte lo stesso numero.
    listaNumeriUtente1 = verificaElementiArray(listaNumeriUtente);
    console.log("array utente verificato", listaNumeriUtente1);

    if (listaNumeriUtente1) {

      var confronto = confrontoElementi(numeriPc, listaNumeriUtente);
      console.log("confronto", confronto);

      // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
      if (!confronto) {

        console.log("i",i);
        ++contatore;
        // La partita termina quando il giocatore raggiunge il numero massimo possibile di numeri consentiti.
        if ( i == (numElementiMax - (numElementiArrayPc + 1))) {

          // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
          alert("Complimenti hai Vinto!!!!!! Hai Totalizzato " + contatore + " punti!!!!");

        }

      } else {

        // La partita termina quando il giocatore inserisce un numero “vietato”
        alert("Mi dispace hai perso");
        i = (numElementiMax - numElementiArrayPc);
        
      }

    } else {

      listaNumeriUtente.pop();
      alert("Attenzione il dato non è stato già inserito");
      --i;

    }

  } else {

    alert("Attenzione il dato non è corretto o è stato già inserito");
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

  // FUNZIONE CHE INSERISCE IN UN ARRAY VUOTO UN TOT NUMERO DI ELEMENTI GENERATI CASUALMENTE
  function inserireElemCasuliInArray(array, num) {

    for (var i = 0; i < (num - 1); i++) {
      array[i] = getRandomIntInclusive(1, 100);
      array.push(array[i]);
    }
    return array;

  }

  // FUNZIONE CHE VERIFICA SE IN UN ARRAY GLI ELEMNTI INSERITI SONO TUTTI DIVERSI E SE NON LO SONO LI MODIFICA
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

  // FUNZIONE CHE DETERMINA SE IL DATO INSERITO DALL'UTENTE E' UN NUMERO ED E' COMPRESO FRA 2 NUMERI
  function datoUtenteValido(num, numMin, numMax) {

    if (!(isNaN(num)) && (num != "") && (num >= numMin) && (num <= numMax) ) {
      return true;
    } else {
      return false;
    }

  }

  // FUNZIONE CHE INSERISCE IN UN ARRAY VUOTO UN TOT NUMERO DI ELEMENTI GENERATI DALL'UTENTE
  function inserireElemInArray(array, elemento) {

    array.push(elemento);
    return array;

  }

  // FUNZIONE CHE VERIFICA SE IN UN ARRAY GLI ELEMNTI INSERITI SONO TUTTI DIVERSI
  function verificaElementiArray(array) {

    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length && j != i ; j++) {
        if (array[i] == array[j]) {
          return false;
        }
      }
    }
    return true;

  }

  // FUNZIONE CHE CONFRONTA GLI ELEMENTI DI 2 ARRAY
  function confrontoElementi(array, array1) {

    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array1.length; j++) {
        if (array[i] == array1[j] ) {
          return true;
        }
      }
    }
    return false;

  }

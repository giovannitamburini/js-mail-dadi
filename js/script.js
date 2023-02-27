/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

// PSEUDO CODICE MAIL
/*
- creo una lista in cui inserisco le mail autorizzate
- creo un campo di input nel DOM in cui l'utente inserisce la propria mail
- aggiungo un evento click in un bottone per memorizzare il valore dell'input

- creo un modo per controllare se la mail inserita dall'utente corrisponde
  ad una delle mail inserite nella lista Array:

  ? SE la mail non corrisponde ad una delle mail presenti in lista:
    ° stampo in console 'false'
    ° visualizzo nell'html un messaggio personalizzato

  ? SE la mail corrisponde ad una delle mail presenti in lista:
    ° stampo in console 'true'
    ° visualizzo nell'html un messaggio personalizzato
    */


//creo una lista array
let emails = [ "worker1@gmail.com" , "worker2@gmail.com" , "worker3@gmail.com" , "worker4@gmail.com" , "worker5@gmail.com" ];

// console.log (emails);

// console.log (emails [1] );

//dichiaro la variabile dell'elemento input del DOM
let inputEmailEl = document.getElementById ('inputEmail');

//dichiaro la variabile dell'elemento button del DOM
let accessButtonEl = document.getElementById ('accessButton');

//creo un evento click nel bottone

accessButtonEl.addEventListener('click', function() {

    //stampo in console il valore dell'input
    // console.log (inputEmailEl.value);

    //creo un ciclo per il controllo del valore di input e la lista
    for (let i = 0; i < emails.length; i++) {

        //condizione in cui la mail non corrisponde quando è arrivato l'ultimo giro
        if (emails [i] !== inputEmailEl.value && i === emails.length - 1) {

            console.log ("false");
        }

        //condizione in cui c'è riscontro
        if (emails [i] === inputEmailEl.value) {

            console.log ("true");

            break;
        }
    }
})
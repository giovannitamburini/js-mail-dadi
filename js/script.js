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

/*
-------------------------------------------------
ESERCIZIO 1
-----------------------------------------------
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

/*
PSEUDO CODICE DI GABRIEL

-preparare una lista di email di registrazione
-preparare una variabile sentinella inizzializzata in "falso"
-prendere la mail da un campo di testo alla pressione del pulsante
-per ogni elemento nella lista di email
  ? SE la mail inserita è uguaele alla mail a cui siamo arrivati
   - ALLORA modifica la variabile sentinella in "vero"
  ? SE la variabile sentinella è "vero"
   -ALLORA scrivi in pagina "trovata"
  : altrimenti
   - scrivi in pagina "non trovata"

*/


//creo una lista array
let emails = [ "worker1@gmail.com" , "worker2@gmail.com" , "worker3@gmail.com" , "worker4@gmail.com" , "worker5@gmail.com" ];

//dichiaro la variabile dell'elemento input del DOM
let inputEmailEl = document.getElementById ('inputEmail');

//dichiaro la variabile dell'elemento button del DOM
let accessButtonEl = document.getElementById ('accessButton');

let loginEl = document.getElementById ('login')

//creo un evento click nel bottone
accessButtonEl.addEventListener('click', function() {

    //creo un ciclo per il controllo del valore di input e la lista
    for (let i = 0; i < emails.length; i++) {

        //condizione in cui la mail non corrisponde quando è arrivato l'ultimo giro
        if (emails [i] !== inputEmailEl.value && i === emails.length - 1) {

            loginEl.innerHTML = "accesso negato"

            //style
            loginEl.style.backgroundColor= "red"
            loginEl.style.borderRadius= "3px";
            loginEl.style.transition= "0.3s"

        }

        //condizione in cui c'è riscontro
        if (emails [i] === inputEmailEl.value) {

            loginEl.innerHTML = "accesso consentito"

            //style
            loginEl.style.backgroundColor= "green"
            loginEl.style.borderRadius= "3px";
            loginEl.style.transition= "0.3s"

            break;
        }
    }
})


/*
------------------------------------------
ESERCIZIO 2
------------------------------------------

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? 
*/

/*
PSEUDO CODICE GABRIEL
-mi preparo un array di immagini di dati
-genero un numero random da 1 a 6 per l'utente
-genero un numero random da 1 a 6 per il computer
? SE il numero dell'utente è maggiore del numero del computer
  ° stampo "hai vinto"
: ALTRIMENTI
  °stampo "hai perso"
-mostro l'immagine del dado 1 corrispondente all'indice scelto -1
-mostro l'immagine del dado 2 corrispondente all'indice scelto -1
*/

let rollDiceEl = document.getElementById('rollDice')
let rollUserEl = document.getElementById('rollUser')
let rollPcEl = document.getElementById('rollPc')

let dices = ["https://icon2.cleanpng.com/20180413/blq/kisspng-yahtzee-one-dice-3d-free-playing-die-set-clip-art-dice-5ad07fe8545d11.4008243615236136723456.jpg",
             "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/2048px-Dice-2-b.svg.png",
             "https://www.pinclipart.com/picdir/middle/115-1154873_original-file-face-of-dice-3-clipart.png",
             "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/557px-Dice-4-b.svg.png",
             "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/2048px-Dice-5-b.svg.png",
             "https://www.clipartmax.com/png/small/91-911089_open-dice-6-png.png"
            ];



rollDiceEl.addEventListener('click', function () {

    let diceUser = (Math.random() * 6).toFixed(0);
    let dicePc = (Math.random() * 6).toFixed(0);

    let outComeEl = document.getElementById('outCome');
    let diceResultUserEl = document.getElementById('diceResultUser');
    let diceResultPcEl = document.getElementById('diceResultPc');
    
    //condizioni se l'arrotondamento di Fixed porta come risultato lo 0
    if (diceUser == 0) {

        diceUser = 1;
    }

    if (dicePc == 0) {

        dicePc = 1; 
    }

    //
    let dadoUser = dices [diceUser - 1];
    let dadoPc = dices [dicePc - 1];
    
    if (diceUser > dicePc) {

        // risultato scritto
        outComeEl.innerHTML = "vittoria"

        diceResultUserEl.innerHTML = "il tuo dado: " + diceUser + " ";
        diceResultPcEl.innerHTML = "il dado del pc: " + dicePc + " ";

        //creazione elemento immagine dado user
        let diceImgUser = document.createElement("img");
        diceImgUser.src = dadoUser;
        diceResultUserEl.appendChild(diceImgUser);
        diceImgUser.style.width = "40px";

        //creazione elemento immagine dado pc
        let diceImgPc = document.createElement("img");
        diceImgPc.src = dadoPc;
        diceResultPcEl.appendChild(diceImgPc);
        diceImgPc.style.width = "40px";

        // style
        outComeEl.style.backgroundColor = "green"
        outComeEl.style.color = "white";

    } else if (diceUser == dicePc) {

        outComeEl.innerHTML = "pareggio"
        diceResultUserEl.innerHTML = "il tuo dado: " + diceUser + " ";
        diceResultPcEl.innerHTML = "il dado del pc: " + dicePc + " ";
        
        //creazione elemento immagine dado user
        let diceImgUser = document.createElement("img");
        diceImgUser.src = dadoUser;
        diceResultUserEl.appendChild(diceImgUser);
        diceImgUser.style.width = "40px";

        //creazione elemento immagine dado pc
        let diceImgPc = document.createElement("img");
        diceImgPc.src = dadoPc;
        diceResultPcEl.appendChild(diceImgPc);
        diceImgPc.style.width = "40px";

        // style
        outComeEl.style.backgroundColor = "#2b2b2b";
        outComeEl.style.color = "white";

    } else {

        outComeEl.innerHTML = "sconfitta"
        diceResultUserEl.innerHTML = "il tuo dado: " + diceUser + " ";
        diceResultPcEl.innerHTML = "il dado del pc: " + dicePc + " ";

        //creazione elemento immagine dado user
        let diceImgUser = document.createElement("img");
        diceImgUser.src = dadoUser;
        diceResultUserEl.appendChild(diceImgUser);
        diceImgUser.style.width = "40px";

        //creazione elemento immagine dado pc
        let diceImgPc = document.createElement("img");
        diceImgPc.src = dadoPc;
        diceResultPcEl.appendChild(diceImgPc);
        diceImgPc.style.width = "40px";

        // style
        outComeEl.style.backgroundColor = "red"
        outComeEl.style.color = "white";

    }
})



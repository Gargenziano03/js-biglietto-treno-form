/*
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare 
il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.


MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica:
 usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
 La risposta finale (o output) sarà anch’essa da scrivere in console.


MILESTONE 2: Solo una volta che il milestone 1 sarà completo e
funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire
i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, 
andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, 
per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// FASE 1: seleziona un elemento del Dom cercandolo per ID
const buttonEl = document.getElementById('calcola');
const kmEl = document.getElementById('km');
const etaEl = document.getElementById('eta');

//FASE 2: elaborazione dati
//richiamo funzione
buttonEl.addEventListener('click', function(){
    //Calcolo del prezzo 
    let prezzoBase = km * 0.21;
    let prezzoFinale = prezzoBase

    //se è possibile aggiunta di sconti
    if (eta < 18) {
        prezzoFinale  = (prezzoBase * 0.20) / 100;
    }else if(eta > 65){
        prezzoFinale = (prezzoBase * 0.40) / 100;;
    }else{
        prezzoFinale
    }  
    console.log(`€ ${prezzoFinale} è il prezzo del biglietto`);

});

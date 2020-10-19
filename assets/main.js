// Creare un array contenente dei cognomi in ordine casuale.
var listaCognomi = ["hernandez", "bennacer", "ibrahimovic", "calhanoglu", "rebic", "hauge", "romagnoli", "donnarumma", "kjaer", "calabria", "kessie", "diaz"];
// Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
var cognomeUtente = prompt("Inserisci il tuo Cognome");
listaCognomi.push(cognomeUtente);
//ordine alfabetico
listaCognomi.sort();
// document.getElementById('unordered').innerHTML = listaCognomi;

// Stampare la lista dei cognomi in ordine alfabetico e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).
//stampa lista in ordine alfabetico
console.log(listaCognomi);

//first method to find the position in array
// for (var i = 0; i < listaCognomi.length; i++) {
//     var currentPosition = listaCognomi[i];
//     if (currentPosition == cognomeUtente) {
//         console.log(cognomeUtente + " la tua posizione è " + (i + 1));
//     }
// }

//second method
var position = listaCognomi.indexOf(cognomeUtente);
console.log(cognomeUtente + " You're " + (position + 1)  + "th in the list");

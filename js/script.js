// titolo pagina
const title = document.getElementById("title").innerHTML
// chiedi all'utente il suo nome
const nome = prompt("Please enter your name");
console.log(nome);
// chiedi all'utente il suo cognome
const cognome = prompt("Please enter your surname");
console.log(cognome);
// chiedi all'utente il suo colore preferito
const colorepreferito = prompt("Please enter your favoritecolor");
console.log(colorepreferito);
// calcola il risultato aggiungendo 21 alla fine
const somma = nome + cognome + colorepreferito + 21
console.log(somma);
// aggiungi alla pagina la password creata
document.getElementById("title").innerHTML = `${title}Ecco la tua password: ${somma}`
// risultato atteso nomecognomecolorepreferito21
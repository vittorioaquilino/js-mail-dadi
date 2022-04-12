// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// genero numero random per utente
const userNumber = Math.floor((Math.random() * 6) + 1);
console.log("numero utente", userNumber);

// genero numero random per computer
const computerNumber = Math.floor((Math.random() * 6) + 1);
console.log("numero computer", computerNumber);

// calcolo quale numero è il più alto
let winner;
if (userNumber > computerNumber) {
    winner = "Hai vinto tu";
} else if (userNumber < computerNumber) {
    winner = "Ha vinto il computer";
} else {
    winner = "Avete pareggiato, sorry"
}
console.log(winner);

// stampo in html il risultato
document.getElementById("winner").innerHTML = winner;
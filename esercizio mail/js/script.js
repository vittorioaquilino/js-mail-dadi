// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// creo la lista mail
const emailAccess = ["possoaccedere@gmail.com", "possoaccedere55@gmail.com", "possoaccedere73@gmail.com", "possoaccedere13@gmail.com"];
console.log(emailAccess);

// chiedo email all'utente
const userEmail = prompt("Dimmi la tua mail");
console.log("email utente", userEmail);

// creo un ciclo for per visualizzare se l'email dell'utente è presente nella lista
let emailFound = false;

for (i = 0; i < emailAccess.length; i++) {
    let listEmail = emailAccess[i];
    console.log("Email della lista", listEmail);
    // controllo se l'email rientra
    if (userEmail === listEmail) {
        emailFound = true;
    }
}

// stampo il risultato in html
if (emailFound) {
    document.getElementById("ms-email").innerHTML = ("La tua email è presente nella lista, benvuento");
} else {
    document.getElementById("ms-email").innerHTML = ("La tua email non è presente nella lista, mi dispiace")
}

console.log(emailFound);
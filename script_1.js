
// EXERCICE 1
// EXO 1 partie 1 : Afficher "Bonjour monde" dans la console
console.log("Bonjour Monde");


// EXO 1 partie 2 :
// Demander le prénom dans un prompt
// Afficher "Bonjour prénom" dans la console

let lePrenom = ""
while(lePrenom === "") {
    lePrenom = prompt("C'est quoi ton blaz ?");
  } 

console.log(`Bonjour, ${lePrenom} !`);
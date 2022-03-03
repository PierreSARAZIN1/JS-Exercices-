// EXO 2 :
// Demander nombre
// calculer le factorielle
// Afficher le résultat dans la console

var leNombre = "";
while(leNombre === "") {
    leNombre = prompt("tu veux calculer le factoriel de quoi ?");
  } 

  var n =  Number(leNombre);

var f = [];
function factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
        return f[n] = factorial(n-1) * n;
}


console.log(`ça fait : ${factorial(n)} !`);
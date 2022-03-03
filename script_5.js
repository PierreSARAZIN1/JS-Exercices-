const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];



// ---------------------------------------------------

// Question 1
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")

never = 0
books.forEach(book => {
    if (book.rented === 0) {
        never = 1
    }
})

if (never !==1 ){
    console.log("oui")

}
else console.log("non")

// ---------------------------------------------------

// Question 2 
console.log("Quel est livre le plus emprunté ?")

function compare( a, b ) {
    if ( a.rented < b.rented ){
      return 1;
    }
    if ( a.rented > b.rented ){
      return -1;
    }
    return 0;
  }
// Soumettre l'array à la méthode de comparaison
  books.sort( compare );
  
console.log(books[0])


// ---------------------------------------------------


// Question 3
console.log("Quel est le livre le moins emprunté ?")

function compare( a, b ) {
    if ( a.rented < b.rented ){
      return 1;
    }
    if ( a.rented > b.rented ){
      return -1;
    }
    return 0;
  }
// Soumettre l'array à la méthode de comparaison
  books.sort( compare );
  
console.log(books[11])


// ---------------------------------------------------

// Question 4
console.log("Trouve le livre avec l'ID: 873495")

let id = books.find(book => {
    return book.id === 873495
  });

  console.log(id.title);


// ---------------------------------------------------

// Question 5
console.log("Supprime le livre avec l'ID: 133712")
  

arraynew = []
// Recherche des personnes qui sont nées dans les 70'
books.forEach(book => {
    if (book.id !== 133712) {
        arraynew.unshift(book)
    }
})
// Affichage de l'array
console.log(arraynew)

// ---------------------------------------------------

// Question 5
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")

// Création de la méthode de comparaison des noms 
function compare( a, b ) {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }
// Soumettre l'array à la méthode de comparaison
  arraynew.sort( compare );

// Affichage de l'array
console.log(arraynew)




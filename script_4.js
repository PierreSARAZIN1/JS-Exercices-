

const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

// ---------------------------------------------------

// Question 1
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")

// Création de l'array vide qui va accueillir les personnes nées dans les 70'
array70 = []
// Recherche des personnes qui sont nées dans les 70'
entrepreneurs.forEach(person => {
    if (person.year >= 1970 && person.year <= 1980) {

        // Intégration des personnes concernées dans l'array
        array70.unshift(person)
    }
})
// Affichage de l'array
console.log(array70)

// ---------------------------------------------------

// Question 2
console.log("Sors une array qui contient le prénom et le nom des entrepreneurs")

// Création de l'array vide qui va accueillir les personnes nées dans les 70'
arrayName = []

entrepreneurs.forEach(person => {
// Intégration des noms et prénom dans l'array
        arrayName.push(`${person.first} ${person.last}`)
        

})

// Affichage de l'array
console.log(arrayName)

// ---------------------------------------------------

// Question 3
console.log("Quel âge aurait chaque inventeur aujourd'hui ?")

entrepreneurs.forEach(person => {
//calcul de l'age en fonction de l'année de naissance et ajout de la valeur
        person.age = 2022 - person.year

    })

// Affichage de l'array
console.log(entrepreneurs)

// ---------------------------------------------------

// Question 4
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")

// Création de la méthode de comparaison des noms 
function compare( a, b ) {
    if ( a.last < b.last ){
      return -1;
    }
    if ( a.last > b.last ){
      return 1;
    }
    return 0;
  }
// Soumettre l'array à la méthode de comparaison
  entrepreneurs.sort( compare );

// Affichage de l'array
console.log(entrepreneurs)











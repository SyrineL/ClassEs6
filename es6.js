// 1
// Ajouter a la fin du tableau fruits un nouveau 
// fruit: Raspberry. Sans utiliser la méthode push, 
// seulement la notation es6
let fruits = ['Apple','Orange','Banana']
fruits = [
    ...fruits,
    "Raspberry"
]
console.log(fruits)
//2
// Ajouter au début du tableau `fruits` un nouveau fruit:
//  `Raspberry`. Sans utiliser la méthode unshift, seulement 
//  la notation es6

fruits = ['Apple','Orange','Banana']
fruits = [
    "Raspberry",
     ...fruits
]
console.log(fruits)


//3

// Créer les constantes suivantes:
// const arr1 = ['A', 'B', 'C']
// const arr2 = ['X', 'Y', 'Z']
// Concatener ces deux tableaux pour avoir le résultat suivant:
// ['A', 'B', 'C', 'X', 'Y', 'Z']

const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']
const array = [
    ...arr1,
    ...arr2
]

console.log(array)

//4
// Créer une constante bobby qui sera un objet avec toutes les clés/valeurs 
// de user, et en y ajoutant firstName: "bobby". Seulement avec la 
// notation ES6

const user = {
    age: 10,
    eyes: "vert",
    legs: 2,
    arms: 2,
    hair: "long",
    caracterstique: "gras du bide",
    nose: "petit nez",
    ears: "grandes oreilles",
    glasses: true,
    sosie: "sarkozy"
  }

const bobby = {
    ...user,
    firstName: "Bobby"
}

console.log(bobby)



//5
//   Avec la notation es6, console log chaque element du 
//   tableau avec une boucle forEach
const numbers = [1, 2, 3, 4, 5, 6]



//6
// Avec la notation es6, créer un nouveau tableau contenant seulement 
// les nombres impairs
// const numbers = [1, 2, 3, 4, 5, 6]



//7
// Avec la notation es6, créer un nouveau tableau contenant chaque 
// element au carré

// const numbers = [1, 2, 3, 4, 5, 6]
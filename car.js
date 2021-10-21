// ## 1 - Batmobile

// - Créer un fichier `car.js`
// - Dans car.js, créer un class `Car` avec 2 propriétés de base:
//     - `brand`
//     - `speed`
// - Ajouter 3 méthodes à la classe `Car`:
//     - `accelerate` (accélérer) qui prendra en paramètre un nombre. 
//     Cette méthode va ajouter le nombre a la propriété `speed` définie plus haut
//     - `brake` (freiner) qui prendra en paramètre un nombre. Cette méthode va soustraire le nombre 
//     à la propriété `speed` définie plus haut
//     - `describe` qui va afficher  `xxx running at yyy km/h` avec `brand` a la place de 
//     `xxx` et `speed` a la place de `yyy`
// - Créer une variable `ford` et  lui assigner l'initialisation de la classe avec la 
// brand `ford` et speed `0` et afficher la variable ford dans la console
// - Exécuter la fonction `accelerate` de ford avec une vitesse de 50 km/h et afficher 
// `ford` dans la console
// - Exécuter la fonction `brake` de ford avec une vitesse de 25 km/h et afficher `ford` 
// dans la console
// - Faites la même chose avec une nouvelle voiture

class Car {
    constructor(brand, speed){
        this.brand = brand
        this.speed = speed
    }

    accelerate(number) {
        this.speed += number 
    }
    brake(number) {
        this.speed -= number 
    }
    describe() {
        console.log(`${this.brand} running at ${this.speed} km/h`) 

    }
}

var ford = new Car("ford", 25)
ford.accelerate(90)
ford.brake(8)
ford.describe()


// ## 2 - TV

// - Créer une class `TV` avec les propriétés `brand`, `channel`, `volume`. La chaine par défaut sera 
//  1, et le volume par défaut sera 50
// - Ajouter deux méthodes pour baisser et augmenter le volume. Le volume ne peut pas aller en dessous 
// de 0, et pas au dessus de 100
// - Ajouter une méthode pour changer de chaine. Notre télé a seulement 50 chaines, si on essaye de 
// changer une chaine au dessus de 50, on restera sur la chaine courante. Pareil pour une chaine en 
// dessous de 0
// - Ajouter une méthode pour reset les paramètres de notre `TV`, qui remettra la chaine et le volume 
// de base
// - Ajouter une méthode `describe` qui va afficher les infos de notre `TV`
// - Testez votre classe et ses méthodes avec différentes valeurs


class TV {
    constructor(brand){
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }
    chainePlus(number){
        this.channel += number 
        if (this.channel>50){
            this.channel = 50
        } else if (this.channel < 1){
            this.channel = 1
        }
    }
    lower(number){
        this.volume -= number 
        if (this.volume<0){
            this.volume = 0
        }
    }
    up(number){
        this.volume +=number
        if (this.volume>100){
            this.volume = 100
        }
    }
    describe(){
        console.log(`la tele est ${this.brand}la chaine est la ${this.channel} et le volume est de  ${this.volume}`)
    }
}

var fff = new TV("samsung ")
fff.lower(34)
fff.up(67)
fff.chainePlus(32)
fff.describe()
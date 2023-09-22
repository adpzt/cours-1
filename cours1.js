"use scrict"

var prenom
prenom = "Adrien"
console.log(prenom)  //pour envoyer un mess dans la console

let nom = "Poizat"
console.log(nom)

let phrase 
phrase = "Mon age : "
console.log(phrase)

let annéenaissance = "2005"
let annéeactu = "2023"
let age = annéeactu - annéenaissance //exemple pour soustraire deux variables
console.log (age)
console.log (typeof age)
console.log ("je m'appelle " + nom +" "+ prenom +" "+ "et"+ " mon age :"+age)
// concaténation

let ouvert = true //boolean (verifier quelque choses)

let total = 15.3 

let totalBis = "15,3"

//les 3 types :
var nombremarvel = 6 //number
var Jules = 'César' //string
var nbretoile = 10000000000000 //number
var paillason = 'salut les bg c inoxtag iske ca va' //string
var faceID = true //boolean
var prixordi = 1500 //number
var nomseptnains = 'Zoubida, Zoubidou, Zoubidi, Zoubidet, Zoubain, Zoubou, Zeub' //string
var profiltinder = 'plop^^ je me permets de te dm (g pas lhabitude de faire ça xD) parce que g vu que tu aimais bien les mangas/jeux-vidéos comme moi et je me suis dit tient c rare de croiser une geekette sur twitter (plutôt mignonne en +) voilà hésite pas si tu veux discuter je mords pas' //string
let clonenaruto = 'infini' //string
let defautembauche = 'perfectionniste, nonorganisé, malveillancemax' //string
let flamme = 'Anne' //string

const Slip = 'moi'
console.log(Slip)

//condition
let prenom2 = "adé"
let legume = "shumarreur"

let nbr1 = 5
let nbr2 = 8
let nbr3 = '5'


// if else = exécute une instruction selon la condition donnée
if(nbr1==nbr3){
    alert ("c'est le meme nombre")
}
if (nbr1 === nbr3){
    alert ("c'est encore le meme nombre")
} else {
    alert ("c'est pas votre nombre")
}
// si () {} sinon ()

if (nbr1>nbr2){
    alert ("nbr1 est le plus grand")
} else if (nbr1<nbr2){
    alert ("nbr1 est plus petit")
}else {
    alert ("je ne sais pas")
}

if(prenom2 = "adé" ){
    alert ("GG")
} else {
    alert ("PAS GG")
}

//switch = exécuter un code en fonction de la valeur d'une variable
switch(2){
    case 1 :
        console.log("je suis le chiffre 1")
        break  // a ne jamais oublier
    case 2 :
        console.log("je suis le chiffre 2")
        break
    case 3 :
        console.log("je suis le chiffre 3")
        break
    case 4 :
        console.log("je suis le chiffre 4")
        break
    case 5 :
        console.log("je suis le chiffre 5")
        break
    default :
        console.log("je suis un autre chiffre")
    }

    // == siginifie verifier   alors que = redefini la variable
    // && : et
if (nbr1==5 && nbr2 ==8) {
    alert("je suis trop fort")
}else{
    alert('noob')
}

    // || : ou
if(nbr1==5 || nbr2 ==5){
    alert ("je suis trop fort ou l'autre l'est")
} else {
    alert('noob')
}



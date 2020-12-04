var readline = require("readline-sync");

var age = -1;
var jeunes = 0;
var moyens = 0;
var vieux = 0;



while (age !== 0 && age !== null && (age <= 100)) {
    age = readline.questionInt("Quelle est l'age de la personne : ");
    if(age < 20 && age > 0) {
        jeunes++;
    } else if (age > 40){
        vieux++;
    } else if (age >= 20 && age <= 40) {
        moyens++;
    }
}

console.log(" Il y a " + jeunes + " jeunes \n Il y a " + moyens + " moyens \n Il y a " + vieux + " vieux");
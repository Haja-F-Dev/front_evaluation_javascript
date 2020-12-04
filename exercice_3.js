var readline = require("readline-sync");

var tab = ["Audrey", "Aurélien", "Flavien", "Jeremy", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

console.log(tab);

var saisie = readline.question("Quel est le prenom : ");

var index = tab.indexOf(saisie);

if (index > -1) tab.splice(index, 1);
tab.push(' ');
console.log(tab);


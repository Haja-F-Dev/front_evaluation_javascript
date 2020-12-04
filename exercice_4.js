var readline = require("readline-sync");

var prixUnitaire = readline.questionInt("Quel est le Prix Unitaire : ");
var quantite = readline.questionInt("Quelle est la quantite : ");

// Calcul du TOT
var prixAPayer = prixUnitaire * quantite;

// Calcul du prix remisé
var remise = 0;
var prixRemise = 0;
var pourcentageRmise = 0;
var prixTotalRemise = 0;
var fraixDePort = 0;
var pourcentageFDP = 0;
var prixTotalAvecFDP = 0;
var prixMoinFDP = 0;
const miniFDP = 6;

var txt = "";

if (prixAPayer > 200) {
    remise = 10;
    pourcentageRmise = remise / 100;
    prixRemise = prixAPayer * pourcentageRmise;
    prixTotalRemise = prixAPayer - prixRemise;

    txt = "Saisir " + prixUnitaire + " € et quantité = " + quantite + " : remise " + remise + "% (-" + prixRemise + " €)";
    txt += " soit " + prixTotalRemise + " et frais port ";

    if (prixTotalRemise > 500) {
        fraixDePort = 0;
        prixMoinFDP = prixTotalRemise - fraixDePort;

        txt += fraixDePort + "; à payer : " + prixMoinFDP + "€";
        console.log(txt);
    } else if (prixTotalRemise < 500) {
        fraixDePort = 2;
        pourcentageFDP = fraixDePort / 100;
        prixTotalAvecFDP = prixTotalRemise * pourcentageFDP;
        prixMoinFDP = prixTotalRemise - prixTotalRemise;
        prixFinal = prixTotalRemise + (Math.round(prixTotalAvecFDP * 100)/100)

        txt += fraixDePort + "% de(" + prixTotalRemise + " €) soit + " + (Math.round(prixTotalAvecFDP * 100)/100) + "€;";
        txt += " à payer : " + prixTotalRemise + " + " + (Math.round(prixTotalAvecFDP * 100)/100) + " = " + (Math.round(prixFinal * 100)/100) + " €." ;
        console.log(txt);
    }

} else {
    if (prixAPayer >= 100 && prixAPayer <= 200) {
        remise = 5;
        pourcentageRmise = remise / 100;
        prixRemise = prixAPayer * pourcentageRmise;
        prixTotalRemise = prixAPayer - prixRemise;

        txt = "Saisir " + prixUnitaire + " € et quantité = " + quantite + " : " + prixAPayer + " € donc remise " + remise + "% soit " + prixTotalRemise + "€";

        // Calcul frais de port
        fraixDePort = 2;
        pourcentageFDP = fraixDePort / 100;
        prixTotalAvecFDP = prixTotalRemise * pourcentageFDP;

        
        txt += " et frais de port " + fraixDePort + "% soit " + (Math.round(prixTotalAvecFDP * 10) / 10) + " € mini " + miniFDP + " €; à payer : ";
        txt += prixTotalRemise + " + " + miniFDP + " = " + (prixTotalRemise + miniFDP) + " €.";

        console.log(txt);
    } else if(prixAPayer >= 1 && prixAPayer < 100) {
        remise = 0;
        // Calcul frais de port
        fraixDePort = 2;
        pourcentageFDP = fraixDePort / 100;
        prixTotalAvecFDP = prixTotalRemise * pourcentageFDP;

        txt = "Saisir " + prixUnitaire + " € et quantité = " + quantite + ": remise " + remise + ", frais de port " + fraixDePort + "% soit ";
        txt += Math.round(((prixAPayer * prixTotalAvecFDP) * 1 ) / 10) + " € donc le minimum de " + miniFDP + " € s'applique; à payer : " ;
        txt += prixAPayer + " + " + miniFDP + " = " + (prixAPayer + miniFDP) + " €"

        console.log(txt);
    }
}
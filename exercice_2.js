// Main

var nombre = 7;
tableMultiplication(nombre);

// Function

function tableMultiplication(nb) {
    for (let i = 1; i <= 10; i++) {
        var resultat = i * nb;
        console.log(i + " x " + nb + " = " + resultat);
    }
}




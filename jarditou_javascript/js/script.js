/**
 * CONTROL DU FORMULAIRE
 */

let form = document.querySelector("#contactForm");

// Ecoute de la modificaton du name
form.name.addEventListener("change", function () {
  validName(this);
});
const validName = function (inputName) {
  // Création de la reg exp pour la validation du name
  let nameRegExp = new RegExp(`^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`);

  let testName = nameRegExp.test(inputName.value);
  let smallName = inputName.nextElementSibling;

  if (!testName) {
    smallName.innerHTML = "Veuillez remplir ce champs";
    smallName.classList.add("text-danger");
  }
};

// Ecoute de la modificaton du firstname
form.firstname.addEventListener("change", function () {
  validFirstname(this);
});
const validFirstname = function (inputFirstname) {
  // Création de la reg exp pour la validation du firstname
  let firstnameRegExp = new RegExp(
    `^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`
  );

  let testFirstName = firstnameRegExp.test(inputFirstname.value);
  let smallFirstname = inputFirstname.nextElementSibling;

  if (!testFirstName) {
    smallFirstname.innerHTML = "Veuillez remplir ce champs";
    smallFirstname.classList.add("text-danger");
  }
};

// Ecoute de la modificaton du code postal
form.code_postal.addEventListener("change", function () {
  validCodePostal(this);
});
const validCodePostal = function (inputCodePostal) {
  // Création de la reg exp pour la validation du firstname
  let codePostalRegExp = new RegExp(
    "^((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B))[0-9]{3}$"
  );

  let testCodePostal = codePostalRegExp.test(inputCodePostal.value);
  let smallCodePostal = inputCodePostal.nextElementSibling;

  if (!testCodePostal) {
    smallCodePostal.innerHTML = "Code postal non valide ou à completer";
    smallCodePostal.classList.remove("text-success");
    smallCodePostal.classList.add("text-danger");
  } else {
    smallCodePostal.innerHTML = " ";
    smallCodePostal.classList.add("text-success");
    smallCodePostal.classList.remove("text-danger");
  }
};

// Ecoute de la modification de l'email
form.email.addEventListener("change", function () {
  validEmail(this);
});
const validEmail = function (inputEmail) {
  // Création de la reg exp pour la validation de l'email
  let emailRegExp = new RegExp(
    `^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$`,
    `g`
  );

  let testEmail = emailRegExp.test(inputEmail.value);
  let smallEmail = inputEmail.nextElementSibling;

  if (testEmail) {
    smallEmail.innerHTML = "Adresse mail valide";
    smallEmail.classList.remove("text-danger");
    smallEmail.classList.add("text-success");
  } else {
    smallEmail.innerHTML = "Adresse mail non valide ou à remplir";
    smallEmail.classList.remove("text-success");
    smallEmail.classList.add("text-danger");
  }
};

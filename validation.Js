const formContact = document.querySelector("#formContact");

const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const email = document.querySelector("#email");
const telephone = document.querySelector("#telephone");
const pays = document.querySelector("#pays");
const message = document.querySelector("#message");

const erreur = document.querySelector("#messageValidation");

formContact.addEventListener("submit", function(event) {

    event.preventDefault();

    const erreurs = [];

    if (nom.value.trim() === "") {
        erreurs.push("Veuillez saisir votre nom.");
    }

    if (prenom.value.trim() === "") {
        erreurs.push("Veuillez saisir votre prénom.");
    }

    if (email.value.trim() === "" || !email.value.includes("@")) {
        erreurs.push("Veuillez saisir une adresse email valide.");
    }

    if (!/^[0-9]{8}$/.test(telephone.value)) {
        erreurs.push("Le téléphone doit contenir exactement 8 chiffres.");
    }

    const genre = document.querySelector(
        'input[name="genre"]:checked'
    );

    if (genre === null) {
        erreurs.push("Veuillez choisir votre genre.");
    }

    const interets = document.querySelectorAll(
        'input[name="interet"]:checked'
    );

    if (interets.length === 0) {
        erreurs.push("Veuillez choisir au moins un centre d'intérêt.");
    }

    if (pays.value === "") {
        erreurs.push("Veuillez sélectionner un pays.");
    }

    if (message.value.length > 300) {
        erreurs.push("Le commentaire ne doit pas dépasser 300 caractères.");
    }

    if (erreurs.length > 0) {

        erreur.innerHTML = erreurs.join("<br>");
        erreur.style.color = "red";

    } else {

        erreur.textContent =
            "Formulaire vérifié : vous pouvez poursuivre l'envoi.";

        erreur.style.color = "green";
    }

});
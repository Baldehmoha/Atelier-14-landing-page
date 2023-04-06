document.getElementById("visit").addEventListener("submit", function(e) {
    e.preventDefault();
    let erreur;
    let nom = document.getElementById("nameinput");
    let email = document.getElementById("emailinput");
    let telephone = document.getElementById("phoneinput");

if (!nom.value) {
    erreur = "saisir un nom";
}
if (!email.value) {
    erreur = "saisir un email";
}
if (!telephone.value) {
    erreur = "saisir un numéro de téléphone";
}
if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
} else{
    alert("Demande envoyée! Une notification vous sera envoyé par email. A bientôt chez brahman boutique");
}
  
});
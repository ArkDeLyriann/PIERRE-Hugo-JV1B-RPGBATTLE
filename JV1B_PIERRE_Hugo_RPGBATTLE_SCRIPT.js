atkDidier = document.getElementById("atkDidier");
pvPoulpe = document.getElementById("pvPoulpe");
afficheAction = document.getElementById("afficheAction");

atkDidier.onclick = function() {
    pvPoulpe.innerHTML = parseInt(pvPoulpe.innerHTML)-10;
    afficheAction.innerHTML = "J'ai fait 10 points de dégats.";
}
// Exercice : débuggez ce script :)

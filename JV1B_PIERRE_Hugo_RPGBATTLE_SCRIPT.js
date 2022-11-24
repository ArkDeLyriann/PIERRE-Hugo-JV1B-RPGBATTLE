atkDidier = document.getElementById("atkDidier");
pvPoulpe = document.getElementById("pvPoulpe1");
afficheAction = document.getElementById("afficheAction1");
document.getElementById("pvPoulpe1").style.position = "relative"
let health = document.getElementById("pvPoulpe1")

atkDidier.onclick = function() {
    health.value -= 10;

    afficheAction.innerHTML = "J'ai fait 10 points de dégats.";
}
// Exercice : débuggez ce script :)

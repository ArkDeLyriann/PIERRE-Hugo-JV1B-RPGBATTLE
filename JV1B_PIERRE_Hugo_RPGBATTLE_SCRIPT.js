let pvPoulpe = document.getElementById("pvPoulpe1")
afficheAction = document.getElementById("afficheAction1"); 
let pvCrabe = document.getElementById("pvCrabe")

function atkDidier(){
    pvPoulpe.value -= 10;
    pvCrabe.value -= 10;
    afficheAction.innerHTML = "J'ai fait 10 points de dégats.";
}
// Exercice : débuggez ce script :)

function magieDidier(){
    pvCrabe.value -=30
    afficheAction.innerHTML = "KABOOM 30 dégats dans ta mère"


}
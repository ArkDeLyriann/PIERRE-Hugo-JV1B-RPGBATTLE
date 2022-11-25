let pvPoulpe = document.getElementById("pvPoulpe1")
afficheAction = document.getElementById("afficheAction1"); 
let pvCrabe = document.getElementById("pvCrabe")

function atkDidier(){
    pvPoulpe.value -= 10;
    pvCrabe.value -= 10;
    afficheAction.innerHTML = "J'ai fait 10 points de dégats.";
}


function magieDidier(){
    pvCrabe.value -=30
    afficheAction.innerHTML = "KABOOM 30 dégats dans ta mère"


}

var animationInterval;
var spriteSheetGreen = document.getElementById("spriteGreen");
var spriteSheetBlue = document.getElementById("spriteBlue");
var spriteSheetPurple = document.getElementById("spritePurple");
var spriteSheetOrange = document.getElementById("spriteOrange");
var widthOfSpriteSheet = 400;
var widthOfEachSprite = 200;

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimation() {
  var position = widthOfEachSprite; //position de départ de l'image
  const speed = 700; //en millisecondes
  const diff = widthOfEachSprite; //largeur des sprites

  animationInterval = setInterval(() => {
    spriteSheetGreen.style.backgroundPosition = `-${position}px 0px`;
    spriteSheetBlue.style.backgroundPosition = `-${position}px 0px`;
    spriteSheetPurple.style.backgroundPosition = `-${position}px 0px`;
    spriteSheetOrange.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //changer la position entre les deux sprites
      position = widthOfEachSprite;
    }
    //remettre la position a zéro
  }, speed);
}

//Start animation
startAnimation();
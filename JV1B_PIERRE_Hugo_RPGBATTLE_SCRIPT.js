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
  var position = widthOfEachSprite; //start position for the image
  const speed = 500; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheetGreen.style.backgroundPosition = `-${position}px 0px`;
    spriteSheetBlue.style.backgroundPosition = `-${position}px 0px`;
    spriteSheetPurple.style.backgroundPosition = `-${position}px 0px`;
    spriteSheetOrange.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSprite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}

//Start animation
startAnimation();
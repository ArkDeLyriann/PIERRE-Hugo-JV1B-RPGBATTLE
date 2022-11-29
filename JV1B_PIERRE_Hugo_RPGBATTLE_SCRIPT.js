let pvPoulpe = document.getElementById("pvPoulpe1")
afficheAction = document.getElementById("afficheAction1"); 
let pvCrabe = document.getElementById("pvCrabe")

function defRaphael(){
  afficheAction.innerHTML = "Je me protège des dégats"
}

function atkRaphael(){
    pvPoulpe.value -= 10;
    pvCrabe.value -= 10;
    afficheAction.innerHTML = "J'ai fait 10 points de dégats.";
    damageOnGreen();
    
    //stopdamgeOnGreen();
}


function magieRaphael(){
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
var dmgOnGreen = document.getElementById("dmgOnGreen");
var widthSpriteDmg = 512;
var heighSpriteDmg = 512
var widthSpriteSheetDmg = 2048;
var intervale;

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimation() {
  var position = widthOfEachSprite; //position de départ de l'image
  const speed = 500; //en millisecondes
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

function damageOnGreen(){
  var vertical = widthSpriteDmg; //position de départ de l'image
  var horizontal = heighSpriteDmg
  const dmgSpeed = 50; //en millisecondes
  const horDiff = widthSpriteDmg; //largeur des sprites
  const verDiff = heighSpriteDmg
  
  

  intervale = setInterval(() => {
    dmgOnGreen.style.backgroundPosition = `-${horizontal}px -${vertical}px`;

    if (horizontal < widthSpriteSheetDmg) {
        horizontal = horizontal + horDiff;
    
    } 
    else if (horizontal == widthSpriteSheetDmg) {
        vertical = vertical + verDiff;  
        horizontal = widthSpriteDmg;
    }
    else{
      horizontal = widthSpriteDmg;
      vertical = heighSpriteDmg;
    }
  }, dmgSpeed);
}

function stopdamgeOnGreen() {
  clearInterval(intervale);
  // release our intervalID from the variable
  intervale = null;
}
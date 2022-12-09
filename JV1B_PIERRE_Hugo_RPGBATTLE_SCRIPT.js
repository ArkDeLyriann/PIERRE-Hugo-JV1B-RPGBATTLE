//Variables des stats des Monstres
let pvPoulpe = document.getElementById("pvPoulpe")
let pvCrabe = document.getElementById("pvCrabe")
let pvFish = document.getElementById("pvFish")
var crabox = document.getElementById("spriteCrab")
var cible = 0


//Variables des stats des Heros
let manaRaph = document.getElementById("pmRaph")


//Variables utilisée dans l'animation Idle
var animationInterval;
var spriteSheetGreen = document.getElementById("spriteGreen");
var spriteSheetBlue = document.getElementById("spriteBlue");
var spriteSheetPurple = document.getElementById("spritePurple");
var spriteSheetOrange = document.getElementById("spriteOrange");
var widthSpriteSheetIdle = 400;
var widthSpriteIdle = 200;


//Variables des animations de dégats sur les monstres
var intervale;
var damageSurCrabe = document.getElementById("dmgOnCrab");
var damageSurPoulpe = document.getElementById("dmgOnPoulpe");
var damageSurFish = document.getElementById("dmgOnFish");
var widthSpriteDmg = 512;
var heighSpriteDmg = 512;
var widthSpriteSheetDmg = 2048;
var nombreBoucle = 0;


//Variabkes des animations de dégats sur les héros
var damageSurRaphael = document.getElementById("dmgOnRaphael");
var widthSpriteDmgEnnemy = 200;
var heighSpriteDmgEnnemy = 200;
var widthSpriteSheetDmgEnnemy = 800;


//Variables de défense des Héros
var defRaph=false;

//Boutons
const atkRaphButton = document.getElementById("atkRaphael");

//Variable de compétence utilisée
var lastCompRaph = 0;
var lastCompDon = 0;
var lastCompLeo = 0;
var lastCompMichel = 0;

//Variables pour le comptage de tours
var tour = 0;
var tourHeros = 0;

//Variable de la fin du Jeu
var finDuJeu = false;
const i=0;

//Fonctions de désactivation et réactivation des boutons

//Désactiver les héros hors de leurs tours.
function desactiverRaph(){
  document.getElementById("atkRaph").disabled = true;
  document.getElementById("defRaph").disabled = true;
  document.getElementById("magieRaph").disabled = true;
}

function desactiverLeo(){
  document.getElementById("atkLeo").disabled = true;
  document.getElementById("defLeo").disabled = true;
  document.getElementById("magieLeo").disabled = true;
}

function desactiverDona(){
  document.getElementById("atkDona").disabled = true;
  document.getElementById("defDona").disabled = true;
  document.getElementById("magieDona").disabled = true;
}

function desactiverMichel(){
  document.getElementById("atkMichel").disabled = true;
  document.getElementById("defMichel").disabled = true;
  document.getElementById("magieMichel").disabled = true;
}


//Réactiver les héros à leur tours.
function activerRaph(){
  document.getElementById("atkRaph").disabled = false;
  document.getElementById("defRaph").disabled = false;
  document.getElementById("magieRaph").disabled = false;
}

function activerLeo(){
  document.getElementById("atkLeo").disabled = false;
  document.getElementById("defLeo").disabled = false;
  document.getElementById("magieLeo").disabled = false;
}

function activerDona(){
  document.getElementById("atkDona").disabled = false;
  document.getElementById("defDona").disabled = false;
  document.getElementById("magieDona").disabled = false;
}

function activerMichel(){
  document.getElementById("atkMichel").disabled = false;
  document.getElementById("defMichel").disabled = false;
  document.getElementById("magieMichel").disabled = false;
}

//Focntions des compétences de Raphael
function defRaphael(){
  defRaph = true;

}


function atkRaphael(){
  if(cible==1){
    damageOnPoulpe();
  }
  if(cible==2){
    damageOnCrab();
  }
  if(cible==3){
    damageOnFish();
  }
  desactiverRaph();
  activerLeo();
  tour += 1;
}



function magieRaphael(){
  if (manaRaph.value>=10){
    manaRaph.value -= 10;
    pvCrabe.value -=30;
  
    damageOnRaphael()
    tourJ1=false;
  }
  else{

  }

}

function atkLeonardo(){
  pvPoulpe.value -= 10;
  pvCrabe.value -= 10;
  
  damageOnFish();
  
}

function atkDonatello(){
  pvPoulpe.value -= 10;
  pvCrabe.value -= 10;
  
  damageOnPoulpe();
  
}


//Fonctions pour la séléction de la cible
function selectedPoulpe(){
  cible=1
}




////Fonction pour l'Idle animation des tortues
function IdleAnimation() {
  var position = widthSpriteIdle
  ; //position de départ de l'image
  const speed = 500; //en millisecondes
  const diff = widthSpriteIdle
  ; //largeur des sprites

  animationInterval = setInterval(() => {
    spriteSheetGreen.style.backgroundPosition = `-${position}px 0px`;
    spriteSheetBlue.style.backgroundPosition = `-${position}px 0px`;
    spriteSheetPurple.style.backgroundPosition = `-${position}px 0px`;
    spriteSheetOrange.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthSpriteSheetIdle
    ) {
      position = position + diff;
    } else {
      //changer la position entre les deux sprites
      position = widthSpriteIdle
      ;
    }
    //remettre la position a zéro
  }, speed);
}




//Fonction d'animation des dégats sur le Crabe
function damageOnCrab(){
  var vertical = widthSpriteDmg; //position de départ de l'image
  var horizontal = heighSpriteDmg;
  const dmgSpeed = 50; //en millisecondes
  const horDiff = widthSpriteDmg; //largeur des sprites
  const verDiff = heighSpriteDmg;
  
  

  intervale = setInterval(() => {
    damageSurCrabe.style.backgroundPosition = `-${horizontal}px -${vertical}px`;

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
    nombreBoucle++
    if(nombreBoucle == 10){
    window.clearInterval(intervale);
    nombreBoucle = 0
    }
  }, dmgSpeed);
}


//Fonction d'animation des dégats sur le Poulpe
function damageOnPoulpe(){
  var vertical = widthSpriteDmg; //position de départ de l'image
  var horizontal = heighSpriteDmg;
  const dmgSpeed = 50; //en millisecondes
  const horDiff = widthSpriteDmg; //largeur des sprites
  const verDiff = heighSpriteDmg;
  
  

  intervale = setInterval(() => {
    damageSurPoulpe.style.backgroundPosition = `-${horizontal}px -${vertical}px`;

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
    nombreBoucle++
    if(nombreBoucle == 10){
    window.clearInterval(intervale);
    nombreBoucle = 0
    }
  }, dmgSpeed);
}

//Fonction d'animation des dégats sur le Poisson
function damageOnFish(){
  var vertical = widthSpriteDmg; //position de départ de l'image
  var horizontal = heighSpriteDmg;
  const dmgSpeed = 50; //en millisecondes
  const horDiff = widthSpriteDmg; //largeur des sprites
  const verDiff = heighSpriteDmg;
  
  

  intervale = setInterval(() => {
    damageSurFish.style.backgroundPosition = `-${horizontal}px -${vertical}px`;

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
    nombreBoucle++
    if(nombreBoucle == 10){
    window.clearInterval(intervale);
    nombreBoucle = 0
    }
  }, dmgSpeed);
}


//Fonction pour l'animation de dégats sur Raphael
function damageOnRaphael(){
  var vertical = widthSpriteDmgEnnemy; //position de départ de l'image
  var horizontal = heighSpriteDmgEnnemy;
  const dmgSpeed = 100; //en millisecondes
  const horDiff = widthSpriteDmgEnnemy; //largeur des sprites
  const verDiff = heighSpriteDmgEnnemy;
  
  

  intervale = setInterval(() => {
    damageSurRaphael.style.backgroundPosition = `-${horizontal}px -${vertical}px`;

    if (horizontal < widthSpriteSheetDmgEnnemy) {
        horizontal = horizontal + horDiff;
    
    } 
    else if (horizontal == widthSpriteSheetDmgEnnemy) {
        vertical = vertical + verDiff;  
        horizontal = widthSpriteDmgEnnemy;
    }
    else{
      horizontal = widthSpriteDmgEnnemy;
      vertical = heighSpriteDmgEnnemy;
    }
    nombreBoucle++
    if(nombreBoucle == 10){
    window.clearInterval(intervale);
    nombreBoucle = 0
    }
  }, dmgSpeed);
}




























IdleAnimation(); //Démarre l'Idle des tortues



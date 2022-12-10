//Variables des stats des Monstres
let pvPoulpe = document.getElementById("pvPoulpe")
let pvCrabe = document.getElementById("pvCrabe")
let pvFish = document.getElementById("pvFish")
var crabox = document.getElementById("spriteCrab")
var cible = 0
var cibleRiposte = 0


//Variables des stats des Heros
let manaRaph = document.getElementById("pmRaph")
let pvRaph = document.getElementById("pvRaph")


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
var damageSurLeo = document.getElementById("dmgOnLeo");
var damageSurDona = document.getElementById("dmgOnDona");
var damageSurMichel = document.getElementById("dmgOnMichel");
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
var tourRaphFini = false;
var tourLeoFini = false;
var tourDonaFini = false;
var tourMichelFini= false;

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

//désactiver les boutons de séléction de cible
function desactiverPoulpe(){
  document.getElementById("selectPoulpe").disabled = true;
}

function desactiverCrabe(){
  document.getElementById("selectCrab").disabled = true;
}

function desactiverFish(){
  document.getElementById("selectFish").disabled = true;
}

//réactiver les boutons de séléction de cible
function activerPoulpe(){
  document.getElementById("selectPoulpe").disabled = false;
}

function activerCrabe(){
  document.getElementById("selectCrab").disabled = false;
}

function activerFish(){
  document.getElementById("selectFish").disabled = false;
}



//Fonctions pour la défense des Héros.
function defRaphael(){
  defRaph = true;
  desactiverRaph();
  tour += 1;
  cible = 0;
  tourRaphFini = true;
  activerCrabe();
  activerFish();
  activerPoulpe();

}

//Fonctions pour les attaques de base des héros.
function atkRaphael(){
  if(cible==1){
    damageOnPoulpe();
    pvPoulpe.value -= 10;
  }
  if(cible==2){
    damageOnCrab();
    pvCrabe.value -= 10;
  }
  if(cible==3){
    damageOnFish();
    pvFish.value -= 10;
  }
  desactiverRaph();
  tour += 1;
  cible = 0;
  tourRaphFini = true;
  activerCrabe();
  activerFish();
  activerPoulpe();
}

function atkLeonardo(){
  if(cible==1){
    damageOnPoulpe();
    pvPoulpe.value -= 10;
  }
  if(cible==2){
    damageOnCrab();
    pvCrabe.value -= 10;
  }
  if(cible==3){
    damageOnFish();
    pvFish.value -= 10;
  }
  desactiverLeo();
  tour += 1;
  cible = 0;
  tourLeoFini = true;
  activerCrabe();
  activerFish();
  activerPoulpe();
}

function atkDonatello(){
  if(cible==1){
    damageOnPoulpe();
    pvPoulpe.value -= 10;
  }
  if(cible==2){
    damageOnCrab();
    pvCrabe.value -= 10;
  }
  if(cible==3){
    damageOnFish();
    pvFish.value -= 10;
  }
  desactiverDona();
  tour += 1;
  cible = 0;
  tourDonaFini = true;
  activerCrabe();
  activerFish();
  activerPoulpe();
}

function atkMichelangelo(){
  if(cible==1){
    damageOnPoulpe();
    pvPoulpe.value -= 10;
  }
  if(cible==2){
    damageOnCrab();
    pvCrabe.value -= 10;
  }
  if(cible==3){
    damageOnFish();
    pvFish.value -= 10;
  }
  desactiverMichel();
  tour += 1;
  cible = 0;
  tourMichelFini = true;
}


//Fonctions pour les compétences spéciales des Héros.
function magieRaphael(){
  if (manaRaph.value>=10){
    if(cible==1){
      damageOnPoulpe();
      pvPoulpe.value -= 10;
    }
    if(cible==2){
      damageOnCrab();
      pvCrabe.value -= 10;
    }
    if(cible==3){
      damageOnFish();
      pvFish.value -= 10;
    }
    desactiverRaph();
    tour += 1;
    cible = 0;
    tourRaphFini = true
  }
  else{


  }

}



//Fonctions pour la séléction de la cible
function selectedPoulpe(){
  cible=1;
  desactiverCrabe();
  desactiverFish();
  desactiverPoulpe();
  if (tourRaphFini==false & tourLeoFini==false & tourDonaFini==false & tourMichelFini==false){  //vérification de quelle tortue à déja joué pour activer la suivante dans le tour
    activerRaph();
  }
  if (tourRaphFini==true & tourLeoFini==false & tourDonaFini==false & tourMichelFini==false){
    activerLeo();
  }
  if (tourRaphFini==true & tourLeoFini==true & tourDonaFini==false & tourMichelFini==false){
    activerDona();
  }
  if (tourRaphFini==true & tourLeoFini==true & tourDonaFini==true & tourMichelFini==false){
    activerMichel();
  }
  

}

function selectedCrab(){
  cible=2;
  desactiverCrabe();
  desactiverFish();
  desactiverPoulpe();
  if (tourRaphFini==false & tourLeoFini==false & tourDonaFini==false & tourMichelFini==false){
    activerRaph();
  }
  if (tourRaphFini==true & tourLeoFini==false & tourDonaFini==false & tourMichelFini==false){
    activerLeo();
  }
  if (tourRaphFini==true & tourLeoFini==true & tourDonaFini==false & tourMichelFini==false){
    activerDona();
  }
  if (tourRaphFini==true & tourLeoFini==true & tourDonaFini==true & tourMichelFini==false){
    activerMichel();
  }

}

function selectedFish(){
  cible=3;
  desactiverCrabe();
  desactiverFish();
  desactiverPoulpe();
  if (tourRaphFini==false & tourLeoFini==false & tourDonaFini==false & tourMichelFini==false){
    activerRaph();
  }
  if (tourRaphFini==true & tourLeoFini==false & tourDonaFini==false & tourMichelFini==false){
    activerLeo();
  }
  if (tourRaphFini==true & tourLeoFini==true & tourDonaFini==false & tourMichelFini==false){
    activerDona();
  }
  if (tourRaphFini==true & tourLeoFini==true & tourDonaFini==true & tourMichelFini==false){
    activerMichel();
  }

}

//Fonctions pour la riposte des monstres
//Selecteur de cible pour la riposte
function ciblageRiposte(){
  cibleRiposte = Math.floor(Math.random() * 4)+1;
}

//Attaque du poulpe et ses conditions 
function atkPoulpe(){
  var ripostePoulpe = false;
  while (ripostePoulpe=false){        //tant que le poulpe n'as pas riposté on fait tourner la boucle
    if(cibleRiposte==1){
      if(pvRaph.value>0){
        damageOnRaphael();
        pvRaph.value -= 10;
        cibleRiposte=0;
        tour+=1;
        ripostePoulpe=true;
      }
      else{                //Si la cibles est déja morte on en choisi une nouvelle
        ciblageRiposte()
      }
    }
    if(cibleRiposte==2){
      if(pvLeo.value>0){
        damageOnLeo();
        pvCrabe.value -= 10;
        cibleRiposte=0;
        tour+=1;
        ripostePoulpe = true;
      }
      else{
        ciblageRiposte();
      }
    }
    if(cibleRiposte==3){
      if(pvDona.value>0){
        damageOnDona();
        pvFish.value -= 10;
        cibleRiposte=0;
        tour +=1;
        ripostePoulpe=true;
      }
      else{
        ciblageRiposte();
      }
    }
    if(cibleRiposte==4){
      if(pvMichel.value>0){
        damageOnFish();
        pvFish.value -= 10;
        cibleRiposte=0;
        tour +=1;
        ripostePoulpe=true;
      }
      else{
        ciblageRiposte();
      }
    }
  }
}

function atkCrabe(){
  var riposteCrabe = false;
  while (riposteCrabe=false){        //tant que le Crabe n'as pas riposté on fait tourner la boucle
    if(cibleRiposte==1){
      if(pvRaph.value>0){
        damageOnRaphael();
        pvRaph.value -= 10;
        cibleRiposte=0;
        tour+=1;
        riposteCrabe=true;
      }
      else{                //Si la cibles est déja morte on en choisi une nouvelle
        ciblageRiposte()
      }
    }
    if(cibleRiposte==2){
      if(pvLeo.value>0){
        damageOnLeo();
        pvCrabe.value -= 10;
        cibleRiposte=0;
        tour+=1;
        riposteCrabe = true;
      }
      else{
        ciblageRiposte();
      }
    }
    if(cibleRiposte==3){
      if(pvDona.value>0){
        damageOnDona();
        pvFish.value -= 10;
        cibleRiposte=0;
        tour +=1;
        riposteCrabe=true;
      }
      else{
        ciblageRiposte();
      }
    }
    if(cibleRiposte==4){
      if(pvMichel.value>0){
        damageOnFish();
        pvFish.value -= 10;
        cibleRiposte=0;
        tour +=1;
        riposteCrabe=true;
      }
      else{
        ciblageRiposte();
      }
    }
  }
}

function atkFish(){
  var riposteFish = false;
  while (riposteFish=false){        //tant que le poisson n'as pas riposté on fait tourner la boucle
    if(cibleRiposte==1){
      if(pvRaph.value>0){
        damageOnRaphael();
        pvRaph.value -= 10;
        cibleRiposte=0;
        tour+=1;
        riposteFish=true;
      }
      else{                //Si la cibles est déja morte on en choisi une nouvelle
        ciblageRiposte()
      }
    }
    if(cibleRiposte==2){
      if(pvLeo.value>0){
        damageOnLeo();
        pvCrabe.value -= 10;
        cibleRiposte=0;
        tour+=1;
        riposteFish = true;
      }
      else{
        ciblageRiposte();
      }
    }
    if(cibleRiposte==3){
      if(pvDona.value>0){
        damageOnDona();
        pvFish.value -= 10;
        cibleRiposte=0;
        tour +=1;
        riposteFish=true;
      }
      else{
        ciblageRiposte();
      }
    }
    if(cibleRiposte==4){
      if(pvMichel.value>0){
        damageOnMichel();
        pvFish.value -= 10;
        cibleRiposte=0;
        tour +=1;
        riposteFish=true;
      }
      else{
        ciblageRiposte();
      }
    }
  }
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

function damageOnLeo(){
  var vertical = widthSpriteDmgEnnemy; //position de départ de l'image
  var horizontal = heighSpriteDmgEnnemy;
  const dmgSpeed = 100; //en millisecondes
  const horDiff = widthSpriteDmgEnnemy; //largeur des sprites
  const verDiff = heighSpriteDmgEnnemy;
  
  

  intervale = setInterval(() => {
    damageSurLeo.style.backgroundPosition = `-${horizontal}px -${vertical}px`;

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

function damageOnDona(){
  var vertical = widthSpriteDmgEnnemy; //position de départ de l'image
  var horizontal = heighSpriteDmgEnnemy;
  const dmgSpeed = 100; //en millisecondes
  const horDiff = widthSpriteDmgEnnemy; //largeur des sprites
  const verDiff = heighSpriteDmgEnnemy;
  
  

  intervale = setInterval(() => {
    damageSurDona.style.backgroundPosition = `-${horizontal}px -${vertical}px`;

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

function damageOnMichel(){
  var vertical = widthSpriteDmgEnnemy; //position de départ de l'image
  var horizontal = heighSpriteDmgEnnemy;
  const dmgSpeed = 100; //en millisecondes
  const horDiff = widthSpriteDmgEnnemy; //largeur des sprites
  const verDiff = heighSpriteDmgEnnemy;
  
  

  intervale = setInterval(() => {
    damageSurMichel.style.backgroundPosition = `-${horizontal}px -${vertical}px`;

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




//A FAIRE 
// Programmer la riposte des monstres
// Finir de programmer les options d'attaques spéciales pour tous les héros et leur défenses
//faire disparaitres des sprites des entités mortes
// Créer la obucle de jeu avec le calcul des tours et les conditions de victoire/défaite






















IdleAnimation(); //Démarre l'Idle des tortues



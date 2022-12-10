//Variables des stats des Monstres
let pvPoulpe = document.getElementById("pvPoulpe");
let pvCrabe = document.getElementById("pvCrabe");
let pvFish = document.getElementById("pvFish");
var crabox = document.getElementById("spriteCrab");
var cible = 0;
var cibleRiposte = 0;


//Variables des stats des Heros
herosMorts = 0;
let manaRaph = document.getElementById("pmRaph");
let pvRaph = document.getElementById("pvRaph");
let pvLeo = document.getElementById("pvLeo");
let pvDona = document.getElementById("pvDona");
let pvMichel = document.getElementById("pvMichel");

//Variables utilisée dans l'animation Idle
var animationInterval;
var spriteSheetRaph = document.getElementById("spriteGreen");
var spriteSheetLeo = document.getElementById("spriteBlue");
var spriteSheetDona = document.getElementById("spritePurple");
var spriteSheetMichel = document.getElementById("spriteOrange");
var widthSpriteSheetIdle = 400;
var widthSpriteIdle = 200;

//Variables pour faire disparaitres les monstres
var boiteRaph = document.getElementById("boiteRaphael");
var boiteLeo = document.getElementById("boiteLeonardo");
var boiteDona = document.getElementById("boiteDonatello");
var boiteMichel = document.getElementById("boiteMichelangelo");


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
    if(pvRaph.value>0){                                                                         // si la tortue est encore vivante, alors c'est son tour
      activerRaph();
    }
    else{
      tourRaphFini=true;                                                                        // sinon on passe à la tortue suivante, en incrémentant quand même le compteur de tours
      tour += 1;
      activerLeo();
    }
  }
  if (tourRaphFini==true & tourLeoFini==false & tourDonaFini==false & tourMichelFini==false){
    if(pvLeo.value>0){
      activerLeo();
    }
    else{
      tourLeoFini=true;
      activerDona();
      tour+=1;
    }

  }
  if (tourRaphFini==true & tourLeoFini==true & tourDonaFini==false & tourMichelFini==false){
    if(pvDona.value>0){
      activerDona();
    }
    else{
      tourDonaFini=true;
      activerMichel();
      tour +=1;
    }
  }
  if (tourRaphFini==true & tourLeoFini==true & tourDonaFini==true & tourMichelFini==false){
    if(pvMichel.value>0){
      activerMichel();
    }
    else{
      tourRaphFini=true;
      tour +=1;
    }
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
  while (ripostePoulpe==false){        //tant que le poulpe n'as pas riposté on fait tourner la boucle
    if(cibleRiposte==1){              // qui est la cible ?
      if(pvRaph.value>0){              //La cible est elle vivante
        if(defRaph==false){            // la cible à-t-elle utilisée la compétence de défense au tour précédent
          damageOnRaphael();
          pvRaph.value -= 10;
          cibleRiposte=0;
          tour+=1;
          ripostePoulpe=true;
        }
        else{
          ripostePoulpe=true;
          ciblageRiposte=0;
          tour+=1;
        }
      }
      else{                //Si la cibles est déja morte on en choisi une nouvelle
        ciblageRiposte()
      }
    }
    if(cibleRiposte==2){
      if(pvLeo.value>0){
        if(defLeo==false){
          damageOnLeo();
          pvCrabe.value -= 10;
          cibleRiposte=0;
          tour+=1;
          ripostePoulpe = true;
        }
        else{
          cibleRiposte=0;
          tour+=1;
          ripostePoulpe = true;
        }
      }
      else{
        ciblageRiposte();
      }
    }
    if(cibleRiposte==3){
      if(pvDona.value>0){
        if(defDona==false){
          damageOnDona();
          pvFish.value -= 10;
          cibleRiposte=0;
          tour +=1;
          ripostePoulpe=true;
        }
        else{
          cibleRiposte=0;
          tour+=1;
          ripostePoulpe = true;
        }
      }
      else{
        ciblageRiposte();
      }
    }
    if(cibleRiposte==4){
      if(pvMichel.value>0){
        if(defMichel==false){  
          damageOnFish();
          pvFish.value -= 10;
          cibleRiposte=0;
          tour +=1;
          ripostePoulpe=true;
        }
        else{
          cibleRiposte=0;
          tour+=1;
          ripostePoulpe = true;
        }
      }
      else{
        ciblageRiposte();
      }
    }
  }
}

function atkCrabe(){                                       //Exactement la même fonction mais pour le crabe.
  var riposteCrabe = false;
  while (riposteCrabe==false){        
    if(cibleRiposte==1){
      if(pvRaph.value>0){
        if(defRaph==false){
          damageOnRaphael();
          pvRaph.value -= 10;
          cibleRiposte=0;
          tour+=1;
          riposteCrabe=true;
        }
        else{
          cibleRiposte=0;
          tour +=1;
          riposteCrabe = true;
        }
      }
      else{                
        ciblageRiposte()
      }
    }
    if(cibleRiposte==2){
      if(pvLeo.value>0){
        if(defLeo==false){
          damageOnLeo();
          pvCrabe.value -= 10;
          cibleRiposte=0;
          tour+=1;
          riposteCrabe = true;
        }
        else{
          cibleRiposte=0;
          tour +=1;
          riposteCrabe = true;
        }
      }
      else{
        ciblageRiposte();
      }
    }
    if(cibleRiposte==3){
      if(pvDona.value>0){
        if(defDona==false){
          damageOnDona();
          pvFish.value -= 10;
          cibleRiposte=0;
          tour +=1;
          riposteCrabe=true;
        }
        else{
          cibleRiposte=0;
          tour +=1;
          riposteCrabe = true;
        }
      }
      else{
        ciblageRiposte();
      }
    }
    if(cibleRiposte==4){
      if(pvMichel.value>0){
        if(defMichel==false){
          damageOnFish();
          pvFish.value -= 10;
          cibleRiposte=0;
          tour +=1;
          riposteCrabe=true;
        }
        else{
          cibleRiposte=0;
          tour +=1;
          riposteCrabe = true;
        }
      }
      else{
        ciblageRiposte();
      }
    }
  }
}

function atkFish(){                       //Exactement la même fonction mais pour le Poisson
  var riposteFish = false;
  while (riposteFish==false){        
    if(cibleRiposte==1){
      if(pvRaph.value>0){
        if(defRaph==false){
          damageOnRaphael();
          pvRaph.value -= 10;
          cibleRiposte=0;
          tour+=1;
          riposteFish=true;
        }
        else{
          cibleRiposte=0;
          tour+=1;
          riposteFish=true;
        }
      }
      else{                
        ciblageRiposte()
      }
    }
    if(cibleRiposte==2){
      if(pvLeo.value>0){
        if(defLeo==false){
          damageOnLeo();
          pvCrabe.value -= 10;
          cibleRiposte=0;
          tour+=1;
          riposteFish = true;
        }
        else{
          cibleRiposte=0;
          tour+=1;
          riposteFish=true;
        }
      }
      else{
        ciblageRiposte();
      }
    }
    if(cibleRiposte==3){
      if(pvDona.value>0){
        if(defLeo==false){
          damageOnDona();
          pvFish.value -= 10;
          cibleRiposte=0;
          tour +=1;
          riposteFish=true;
        }
        else{
          cibleRiposte=0;
          tour+=1;
          riposteFish=true;
        }
      }
      else{
        ciblageRiposte();
      }
    }
    if(cibleRiposte==4){
      if(pvMichel.value>0){
        if(defMichel==false){
          damageOnMichel();
          pvFish.value -= 10;
          cibleRiposte=0;
          tour +=1;
          riposteFish=true;
        }
        else{
          cibleRiposte=0;
          tour+=1;
          riposteFish=true;
        }
      }
      else{
        ciblageRiposte();
      }
    }
  }
}

//Fonction qui vérifie si les tortues sont mortes
function verifMortsHeros(){
  if(pvRaph.value<=0){
    spriteSheetRaph.style.visibility ="hidden";
    boiteRaph.style.visibility="hidden";
    herosMorts +=1;
  }
  if(pvLeo.value<=0){
    spriteSheetLeo.style.visibility ="hidden";
    boiteLeo.style.visibility="hidden";
    herosMorts +=1;
  }
  if(pvDona.value<=0){
    spriteSheetDona.style.visibility ="hidden";
    boiteDona.style.visibility="hidden";
    herosMorts +=1;
  }
  if(pvMichel.value<=0){
    spriteSheetMichel.style.visibility ="hidden";
    boiteMichel.style.visibility="hidden";
    herosMorts +=1;
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
    spriteSheetRaph.style.backgroundPosition = `-${position}px 0px`;
    spriteSheetLeo.style.backgroundPosition = `-${position}px 0px`;
    spriteSheetDona.style.backgroundPosition = `-${position}px 0px`;
    spriteSheetMichel.style.backgroundPosition = `-${position}px 0px`;

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
// Finir de programmer les options d'attaques spéciales pour tous les héros et leur défenses
// faire disparaitres des sprites des entités mortes
// Créer la obucle de jeu avec le calcul des tours et les conditions de victoire/défaite

//Boucle principale de jeu

while(finDuJeu==false){
  if (tour==4){
    ciblageRiposte();
    atkPoulpe();
    verifMortsHeros();
    ciblageRiposte();
    atkCrabe();
    verifMortsHeros();
    ciblageRiposte();
    atkFish();
    verifMortsHeros();
  }

}



















IdleAnimation(); //Démarre l'Idle des tortues




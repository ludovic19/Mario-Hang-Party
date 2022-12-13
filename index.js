const ListeMotFacile = [
  { mot: "CHEVAL", indice: "Animal a sabot" },
  { mot: "SABRE", indice: "Arme tranchante" },
  { mot: "CHIEN", indice: "Meilleur ami de l'homme" },
  { mot: "ORDINATEUR", indice: "Appareil pour coder" },
  { mot: "CAFE", indice: "Pour rester reveiller" },
  { mot: "LAMPE", indice: "Pour s'éclairer" },
];

const ListeMotMoyen = [
  { mot: "CHEVAL", indice: "Animal a sabot" },
  { mot: "SABRE", indice: "Arme tranchante" },
  { mot: "CHIEN", indice: "Meilleur ami de l'homme" },
];

const ListeMotDur = [
  { mot: "ANE", indice: "Animal a sabot" },
  { mot: "SABRE", indice: "Arme tranchante" },
  { mot: "CHIEN", indice: "Meilleur ami de l'homme" },
];

const btn = document.querySelectorAll(".boutons .btn");
// const nbrVie = document.querySelector(".vie p");
// const allHearts = document.querySelectorAll(".vie section img");
const level = document.querySelector(".niveauActuel");
const temps = document.querySelector(".image p");
let nbrLettreFind = 0;
// Fonction qui remet toutes les lettres de l'alphabet à inactif après une partie
// class btnactif c'est les boutons cliquer
// class btn inactif c'est les boutons pas encore cliquer
function restartTouche() {
  btn.forEach((elem) => {
    if (elem.className == "btnactif") {
      elem.className = "btn inactif";
    }
  });
}
//Fonction qui supprime le mot existant (la création du nouveau mot est dans la fonction demarrageJeuNiveau)
function restartMot() {
  const paragraphe = document.querySelectorAll(".mots p");
  paragraphe.forEach((elem) => elem.remove());
}

// EventListner sur les btn des lettres de l'alphabet
// Ca check la class du btn
// si inactif, il la passe en actif pour la laisser cliquer, 
// si c'est une des lettres du mot il l'a fait apparaitre
// checkLettre c'est une array des lettres du mot en récupérant les p dans la class .mots
// le nombre d'essai (nbrEssai) est décrémenté si une erreur
// l'erreur est detecté quand la taille nbreLettreErreur est pas égal à la taille de l'array Checklettre
// en gros si ca match avec aucune lettre pour un mot de 5 lettre 
// je dois avoir au moins nbrLettreErreur < 5 ce qui veut dire il a matché une fois
// sinon c'est que il a pas matché si égal et donc erreur
// pour savoir si gagné, une boucle passe à chaque clique sur toute les lettres 
// et tant que les lettres ont pas toutes un style.color black ca gagne pas
// ca perd si  nbrEssai == 0
btn.forEach((elem) => {
  elem.addEventListener("click", function () {
    statut = elem.className;
    const checkLettre = document.querySelectorAll(".mots p");
    let nbrLettreErreur = 0;
    

    if (statut == "btn inactif") {
      elem.className = "btnactif";
    //   myWord.forEach((element) => {
    //     if (element== elem.innerHTML) {
    //       element;
        // } else {
        for (let i=0; i<myWord.length; i++){
            if(myWord[i]==elem.innerHTML){
                checkLettre[i].innerHTML=myWord[i]
            }
            else{nbrLettreErreur++}
        }
          
        }
      

      if (nbrLettreErreur == checkLettre.length) {
        const allHearts = document.querySelectorAll(".vie section img");
        allHearts[allHearts.length - 1].remove();
        
      }

      if (statut == "btnactif") {
        alert("bouton déjà cliquer");
      }
      const allHearts = document.querySelectorAll(".vie section img");

      if (allHearts.length == 0) {
        alert("Perdu");
        demarrageJeuNiveau("lose");
      }

      let nbrLettreFind = 0;
      const paragraphe = document.querySelectorAll(".mots p");
      for(let i=0; i<paragraphe.length; i++){
        if (paragraphe[i].innerHTML==myWord[i]) {
        
          nbrLettreFind++;
        }
        else{
            // console.log(paragraphe[i].inner)
            // console.log(myWord[i])
        }
      };
      if (nbrLettreFind == paragraphe.length) {
        alert("gagné");
        demarrageJeuNiveau("win");
      }
    }
  );
})

// Ca c'est pour remove l'encart de démarrage du jeux une fois que l'utilisateur clique sur commencer
const btnStart = document.querySelector(".begin");
btnStart.addEventListener("click", function () {
  const sectionStart = document.querySelector(".start");
  sectionStart.remove();
  demarrageJeuNiveau("lose");
});

//Fonction pour démarrer le jeu au niveau 1 avec l'array de mot ListeMotFacile
// il initialise les vies à 5
// prend un mot au hasard dans l'array ListeMotFacile
// Split ce mot ce qui me retourne une nouvelle array LettreduMot
// et crée un p dans la class .mots avec chaque lettre
// les lettres ont la color white pour pas les voir pour l'instant (on peut voir pour hidden/visible)
let myWord = []
function demarrageJeuNiveau(winoulose) {
  restartTouche();
  restartMot();
  //   nbrEssai = 5;
  temps.innerHTML = 30;
  //   setInterval(timer,1000)
  listeDeMot = ListeMotFacile;
  //   nbrVie.innerHTML = nbrEssai;
  if (winoulose == "win") {
    if (level.innerHTML == 1) {
      listeDeMot = ListeMotMoyen;
      level.innerHTML = 2;
    } else if (level.innerHTML == 2) {
      listeDeMot = ListeMotDur;
      level.innerHTML = 3;
    }
  } else {
    listeDeMot = ListeMotFacile;
    level.innerHTML = 1;
  }
  let nbreAleatoire = Math.floor(Math.random() * listeDeMot.length);
  let indice = document.querySelector(".indice p");
  if (indice) {
    indice.innerHTML = `"${listeDeMot[nbreAleatoire].indice}"`;
    let lettreDuMot = listeDeMot[nbreAleatoire].mot.split("");
    myWord=lettreDuMot

    //   forEach a remplacer par une boucle for et cacher [0]et[.length-1]
    //   creer une const qui va créer des<p> pour chaque lettre
    //   const lettre = document.createElement("p");
    //   ajouter lettre au parent div.mots
    //   document.querySelector(".mots").appendChild(lettre);
    //   lettre.innerHTML pour inserer la valeur dans le html
    //   boucler dans le tableau lettreDuMot qui crée a chaque fois un p dans la div parent
    for (let i = 0; i < lettreDuMot.length; i++) {
      const lettre = document.createElement("p");
      document.querySelector(".mots").appendChild(lettre);
      lettre.innerHTML = lettreDuMot[i];
    //   on affiche 1ere et derniere lettre 
    //   on replace les lettres par des ? (sinon visible dans linspecteur !)
//  faire un switch ?? 
       if (i == 0) {
        lettre.innerHTML = lettreDuMot[i]

       }else if(i == lettreDuMot.length - 1){
         lettre.innerHTML = lettreDuMot[i]
         
       } 
       else {
        const replaceLettre= lettreDuMot[i].replace(lettreDuMot[i],'?')
         lettre.innerHTML = replaceLettre;
         

       }
      // lettreDuMot[lettreDuMot.length-1].style.visibility == 'visible'
    }
  }
}
function timer() {
  const temps = document.querySelector(".image p");
  time = temps.innerHTML;
  time--;
  temps.innerHTML = time;
  console.log(time);
  if (time == 0) {
    alert("Perdu, trop long");
    demarrageJeuNiveau("lose");
  }
}

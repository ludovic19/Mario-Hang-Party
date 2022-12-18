let newNiveau = localStorage.getItem("newNiveau");
let bonusVie = localStorage.getItem("newVie");
let bonusTemps = localStorage.getItem("newTime");
const level = document.querySelector(".niveauActuel");
const btn = document.querySelectorAll(".boutons .btn");
const temps = document.querySelector(".image p");
let myWord = [];
const musiqueStart = document.querySelector(".musicStart");

if (newNiveau) {
  level.innerHTML = newNiveau;
}
if (bonusVie) {
  let img = document.createElement("img");
  img.src = "./image/gif_Tod.gif";
  img.width = `${50}px`;
  document.querySelector(".nbrvie").appendChild(img);
}
if (bonusTemps) {
  temps.innerHTML = 50;
}

if (level.innerHTML != 1) {
  let h1Start = document.querySelector(".start h1");
  let pStart = document.querySelector(".start p");

  h1Start.innerHTML = "C'est partie pour la prochaine manche";
  pStart.innerHTML = "Quand tu es pret, clique sur Let's Start";
}

localStorage.clear();

const ListeMotFacile = [
  { mot: "NARUTO", indice: "Manga a la mode" },
  { mot: "YOSHI", indice: "Compagnon de Mario" },
  { mot: "CHIEN", indice: "Meilleur ami de l'homme" },
  { mot: "ORDINATEUR", indice: "Appareil pour coder" },
  { mot: "CAFE", indice: "Pour rester reveiller" },
  { mot: "LAMPE", indice: "Aladin" },
  { mot: "CHEVAL", indice: "Animal a sabot" },
  { mot: "SABRE", indice: "Arme tranchante" },
  { mot: "SANGOKU", indice: "Kamehameha" },
  { mot: "PYRAMIDE", indice: "Egypte" },
  { mot: "TITANIC", indice: "Insubmersible" },
  { mot: "CORONAVIRUS", indice: "Virus" },
];

const ListeMotMoyen = [
  { mot: "GITHUB", indice: "Animal a sabot" },
  { mot: "IMPOSSIBLE", indice: "N'est pas Francais" },
  { mot: "CERF", indice: "Animal a bois" },
  { mot: "HERCULE", indice: "Looser de DBZ" },
  { mot: "BATMAN", indice: "Heros de la nuit" },
  { mot: "ETHEREUM", indice: "Blockchain" },
  { mot: "DECATHLON", indice: "A fond la forme" },
  { mot: "IRONHACK", indice: "Meilleur Bootcamp 2022" },
  { mot: "DAHMER", indice: "Tueur en serie" },
  { mot: "NEYMAR", indice: "J'en ..." },
  { mot: "NOTE", indice: "Resultat" },
  { mot: "ARBITRE", indice: "Persone detestee dans le sport" },
];

const ListeMotDur = [
  { mot: "INSUBMERSIBLE", indice: "Titanic" },
  { mot: "GITHUB", indice: "Versioning" },
  { mot: "AVIRON", indice: "Sport a rame" },
  { mot: "EVIDENT", indice: "Ca coule de source" },
  { mot: "APOCALYPSE", indice: "C'est la fin..." },
  { mot: "CACAHUETE", indice: "Apero" },
  { mot: "THERMOS", indice: "Reste chaud" },
  { mot: "SEISME", indice: "Secousse" },
  { mot: "PHOENIX", indice: "Apres les cendres..." },
];

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
// si inactif, il la passe en actif pour la laisser cliquer, si c'est une des lettres du mot il l'a fait apparaitre
// checkLettre c'est une array des lettres du mot en récupérant les p dans la class .mots
// le nombre d'essai (nbrEssai) est décrémenté si une erreur
// l'erreur est detecté quand la taille nbreLettreErreur est pas égal à la taille de l'array Checklettre
// en gros si ca match avec aucune lettre pour un mot de 5 lettre je dois avoir au moins nbrLettreErreur < 5 ce qui veut dire il a matché une fois
// sinon c'est que il a pas matché si égal et donc erreur
// pour savoir si gagné, une boucle passe à chaque clique sur toute les lettres et tant que les lettres ont pas toutes un style.color black ca gagne pas
// ca perd si  nbrEssai == 0
btn.forEach((elem) => {
  elem.addEventListener("click", function () {
    statut = elem.className;
    const checkLettre = document.querySelectorAll(".mots p");
    let nbrLettreErreur = 0;
    if (statut == "btn inactif") {
      elem.className = "btnactif";

      for (let i = 0; i < myWord.length; i++) {
        if (myWord[i] == elem.innerHTML) {
          checkLettre[i].innerHTML = myWord[i];
        } else {
          nbrLettreErreur++;
        }
      }
    }

    if (nbrLettreErreur == checkLettre.length) {
      const marioLive = document.querySelectorAll(".vie section img");
      marioLive[marioLive.length - 1].remove();
    }

    if (statut == "btnactif") {
      alert("bouton déjà cliquer");
    }
    const marioLive = document.querySelectorAll(".vie section img");

    if (marioLive.length == 0) {
      lose();
    }

    let nbrLettreFind = 0;
    const paragraphe = document.querySelectorAll(".mots p");
    for (let i = 0; i < paragraphe.length; i++) {
      if (paragraphe[i].innerHTML == myWord[i]) {
        nbrLettreFind++;
      }
    }
    if (nbrLettreFind == paragraphe.length) {
      win(level.innerHTML);
    }
  });
});

// Ca c'est pour remove l'encart de démarrage du jeux une fois que l'utilisateur clique sur commencer
const btnStart = document.querySelector(".begin");
btnStart.addEventListener("click", function () {
  const sectionStart = document.querySelector(".start");
  sectionStart.remove();
  musiqueStart.volume = 0.1;
  musiqueStart.play();

  demarrageJeuNiveau(level.innerHTML);
});

//Fonction pour démarrer le jeu au niveau 1 avec l'array de mot ListeMotFacile
// il initialise les vies à 5
// prend un mot au hasard dans l'array ListeMotFacile
// Split ce mot ce qui me retourne une nouvelle array LettreduMot
// et crée un p dans la class .mots avec chaqniveauue lettre
// les lettres ont la color white pour pas les voir pour l'instant (on peut voir pour hidden/visible)

function demarrageJeuNiveau(niveau) {
  restartTouche();
  restartMot();
  setInterval(timer, 1000);
  if (niveau == 1) {
    listeDeMot = ListeMotFacile;
  }
  if (niveau == 2) {
    listeDeMot = ListeMotMoyen;
  }
  if (niveau == 3) {
    listeDeMot = ListeMotDur;
  }
  let nbreAleatoire = Math.floor(Math.random() * listeDeMot.length);
  let indice = document.querySelector(".indice p");
  if (indice) {
    indice.innerHTML = `"${listeDeMot[nbreAleatoire].indice}"`;
    let lettreDuMot = listeDeMot[nbreAleatoire].mot.split("");
    myWord = lettreDuMot;

    for (let i = 0; i < lettreDuMot.length; i++) {
      const lettre = document.createElement("p");
      document.querySelector(".mots").appendChild(lettre);
      lettre.innerHTML = lettreDuMot[i];

      if (i == 0) {
        lettre.innerHTML = lettreDuMot[i];
      } else if (i == lettreDuMot.length - 1) {
        lettre.innerHTML = lettreDuMot[i];
      } else {
        const replaceLettre = lettreDuMot[i].replace(lettreDuMot[i], "?");
        lettre.innerHTML = replaceLettre;
      }
    }
  }
}

function timer() {
  const temps = document.querySelector(".image p");
  let time = temps.innerHTML;
  time--;
  temps.innerHTML = time;
  if (time == 0) {
    lose();
  }
}

function win(niveau) {
  if (niveau == 1) {
    let template = `
  <div class="nextGame">

  <img class="marioWin" src="./image/mario_run.png" width="20%">

  <section class="bravo">
  <h1>Bravo, clique sur "OK", un defi t'attend pour un bonus!</h1>
  <div>
  <button class="buttonOK" >OK ?</button>
  </div>
  </section>
  </div>
  `;
    const div = document.createElement("div");
    div.className = "win";
    document.body.querySelector(".jeu").prepend(div);
    document.querySelector(".win").innerHTML = template;
    const btnOk = document.querySelector(".buttonOK");
    btnOk.addEventListener("click", function () {
      localStorage.setItem("niveau", parseInt(level.innerHTML));
      window.location = "labMario.html";
    });
  }
  if (niveau == 2) {
    let template = `
    <div class="nextGame">
  
    <img class="marioWin" src="./image/mario_run.png" width="20%">
  
    <section class="bravo">
    <h1>Attention! Bowser te lance un défi... rejoins le sur le terrain de pong</h1>
    <div>
    <button class="buttonOK" >OK ?</button>
    </div>
    </section>
    </div>
    `;
    const div = document.createElement("div");
    div.className = "win";
    document.body.querySelector(".jeu").prepend(div);
    document.querySelector(".win").innerHTML = template;
    const btnOk = document.querySelector(".buttonOK");
    btnOk.addEventListener("click", function () {
      localStorage.setItem("niveau", parseInt(level.innerHTML));
      window.location = "pongMario.html";
    });
  }
  if (niveau == 3) {
    let template = `
      <div class="nextGame">
      <section class="bravo">
      <h1>Bravo, tu as GAGNE, Peach est liberee!</h1>
      <div>
      <button class="buttonFinGame" >Recommencer le jeu</button>
      </div>
      </section>
      </div>
      `;
    const div = document.createElement("div");
    div.className = "finGame";
    document.body.querySelector(".jeu").prepend(div);
    document.querySelector(".finGame").innerHTML = template;
    const btnOk = document.querySelector(".buttonFinGame");
    btnOk.addEventListener("click", function () {
      localStorage.clear();
      window.location = "index.html";
    });
  }
}

function lose() {
  let template = `
  <div class="nextGame">
  <h1>GAME OVER</h1>
  <div>
  <button class="buttonOK" > Restart OK ?</button>
  </div>
  </div>
  `;
  const div = document.createElement("div");
  div.className = "lose";
  document.body.querySelector(".jeu").prepend(div);
  document.querySelector(".lose").innerHTML = template;
  const btnOk = document.querySelector(".buttonOK");
  btnOk.addEventListener("click", function () {
    localStorage.clear();
    window.location = "index.html";
  });
}

const ListeMotFacile = [
  { mot: "CHEVAL", indice: "Animal a sabot" },
  { mot: "SABRE", indice: "Arme tranchante" },
  { mot: "CHIEN", indice: "Meilleur ami de l'homme" },
];

const ListeMotMoyen = [
  { mot: "CHEVAL", indice: "Animal a sabot" },
  { mot: "SABRE", indice: "Arme tranchante" },
  { mot: "CHIEN", indice: "Meilleur ami de l'homme" },
];

const btn = document.querySelectorAll(".boutons .btn");
const nbrVie = document.querySelector(".vie p");

let nbrLettreFind = 0;

function restartTouche() {
  btn.forEach((elem) => {
    if (elem.className == "btnactif") {
      elem.className = "btn inactif";
    }
  });
}

function restartMot() {
  const paragraphe = document.querySelectorAll(".mots p");
  paragraphe.forEach((elem) => elem.remove());
}



btn.forEach((elem) => {
  elem.addEventListener("click", function () {
    statut = elem.className;
    if (statut = "btn inactif") {
      elem.className = "btnactif";

      const checkLettre = document.querySelectorAll(".mots p");
      let nbrLettreErreur = 0;
      checkLettre.forEach((element) => {
        if (element.innerHTML == elem.innerHTML) {
          element.style.color = "Black";
        } else {
          nbrLettreErreur++;
        }
      });

      if (nbrLettreErreur == checkLettre.length) {
        nbrEssai--;
      }
    } 
    else if(statut = "btnactif") {
        alert("bouton déjà cliquer")
    }

    nbrVie.innerHTML = nbrEssai;
    if (nbrEssai == 0) {
      alert("Perdu");
      demarrageJeuNiveau1();
    }

    // paragraphe.forEach((elem)=> {if(elem.style.color = "Black"){nbrLettreFind++}})
    // if(nbrLettreFind == paragraphe.length)
    // {alert("gagné"); demarrageJeuNiveau2()}
  });
});

const btnStart = document.querySelector(".begin");
btnStart.addEventListener("click", function () {
  const sectionStart = document.querySelector(".start");
  sectionStart.remove();
  demarrageJeuNiveau1();
});

function demarrageJeuNiveau1() {
  restartTouche();
  restartMot();
  nbrEssai = 5
  nbrVie.innerHTML = nbrEssai;
  let nbreAleatoire = Math.floor(Math.random() * ListeMotFacile.length);
  let indice = document.querySelector(".indice p");
  if(indice){
  indice.innerHTML = `"${ListeMotFacile[nbreAleatoire].indice}"`;
  let lettreDuMot = ListeMotFacile[nbreAleatoire].mot.split("");
  lettreDuMot.forEach((elem) => {
    const lettre = document.createElement("p");
    document.querySelector(".mots").appendChild(lettre);
    lettre.innerHTML = elem;
    lettre.style.color = "White";
  });
}
}

function demarrageJeuNiveau2() {
  let nbreAleatoire = Math.floor(Math.random() * ListeMotMoyen.length);
}


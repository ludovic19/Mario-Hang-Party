const tableau = document.querySelector(".tableau");
const ligneTableau = [];

function créationLigne() {
  const ligne = document.createElement("tr");
  ligne.classList.add("ligne");
  tableau.appendChild(ligne);
}

function creer20Ligne() {
  for (let i = 0; i < 10; i++) {
    créationLigne();
  }
}

function creationCol() {
  const allLigne = document.querySelectorAll(".ligne");
  allLigne.forEach((elem) => {
    const colonne = document.createElement("td");
    colonne.classList.add("col");
    elem.appendChild(colonne);
  });
}

function creer26col() {
  for (let i = 0; i < 10; i++) {
    creationCol();
  }
}
creer20Ligne();
creer26col();

//placement initiale joueur
const ligne = document.querySelectorAll(".ligne");
const colLigne1 = ligne[0].querySelectorAll(".col");
const placementInitialJoueur = colLigne1[0];
placementInitialJoueur.classList.add("Joueur");
placementInitialJoueur.style.backgroundImage = "url('./image/marioplat.gif')";
placementInitialJoueur.style.backgroundSize = "60px";

//placement initiale arrivé
const colLigne2 = ligne[ligne.length-1].querySelectorAll(".col");
const placementInitialChateau = colLigne2[colLigne2.length-1];
placementInitialChateau.classList.add("chateau");
placementInitialChateau.style.backgroundImage = "url('./image/chateauMario.gif')";
placementInitialChateau.style.backgroundSize = "60px";

let positionBloc = [];
let positionBlocTop = [];
for (let i = 0; i < 15; i++) {
  let numAleatoireLigne = Math.floor(Math.random() * 10);
  let numAleatoireColonne = Math.floor(Math.random() * 10);
  const ligne = document.querySelectorAll(".ligne");
  const colLigne1 = ligne[numAleatoireLigne].querySelectorAll(".col");
  const placementcibler = colLigne1[numAleatoireColonne];
  if (placementcibler == placementInitialJoueur || placementcibler == placementInitialChateau) {
    continue;
  } else {
    placementcibler.style.backgroundColor = "orange";
  }
}

(i = 0), //bouger sur les lignes
  (j = 0); //bouger sur les colonnes

const colLignetest = ligne[i].querySelectorAll(".col");

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "38") {
    // up arrow
    const colLigneAvant = ligne[i].querySelectorAll(".col");
    const colLignetest = ligne[i - 1].querySelectorAll(".col");
    if (colLignetest[j].style.backgroundColor !== "orange") {
      colLignetest[j].style.backgroundImage = "url('./image/marioplat.gif')";
      colLignetest[j].style.backgroundSize = "60px";

      colLigneAvant[j].style.backgroundImage = "none";
      i--;
    }
  } else if (e.keyCode == "40") {
    // down arrow
    const colLigneAvant = ligne[i].querySelectorAll(".col");
    const colLignetest = ligne[i + 1].querySelectorAll(".col");
    if (colLignetest[j].style.backgroundColor !== "orange") {
      colLignetest[j].style.backgroundImage = "url('./image/marioplat.gif')";
      colLignetest[j].style.backgroundSize = "60px";
      colLigneAvant[j].style.backgroundImage = "none";
      i++;
    }
  } else if (e.keyCode == "37") {
    const colLignetest = ligne[i].querySelectorAll(".col");
    if (colLignetest[j - 1].style.backgroundColor !== "orange") {
      colLignetest[j - 1].style.backgroundImage =
        "url('./image/marioplat.gif')";
      colLignetest[j - 1].style.backgroundSize = "60px";
      colLignetest[j].style.backgroundImage = "none";
      j--;
    }
  } else if (e.keyCode == "39") {
    // right arrow
    const colLignetest = ligne[i].querySelectorAll(".col");
    if (colLignetest[j + 1].style.backgroundColor !== "orange") {
      colLignetest[j + 1].style.backgroundImage =
        "url('./image/marioplat.gif')";
      colLignetest[j + 1].style.backgroundSize = "60px";
      colLignetest[j].style.backgroundImage = "none";
      j++;
    }
  }
}

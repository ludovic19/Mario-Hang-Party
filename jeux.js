let newNiveau = localStorage.getItem("niveau");
let value = parseInt(newNiveau);
value++;
localStorage.setItem("newNiveau", value);
console.log(value);
const tableau = document.querySelector(".tableau");
const musiqueStart = document.querySelector(".musicStart");
// musiqueStart.play();
window.addEventListener("keydown", event => {
    musiqueStart.volume = 0.1;
    musiqueStart.play();
    
  });
  

function addLigne() {
  const ligne = document.createElement("tr");
  ligne.classList.add("ligne");
  tableau.appendChild(ligne);
}

function add10Ligne() {
  for (let i = 0; i < 10; i++) {
    addLigne();
  }
}

function addCol() {
  const allLigne = document.querySelectorAll(".ligne");
  allLigne.forEach((elem) => {
    const colonne = document.createElement("td");
    colonne.classList.add("col");
    elem.appendChild(colonne);
  });
}

function add10col() {
  for (let i = 0; i < 10; i++) {
    addCol();
  }
}
add10Ligne();
add10col();

//placement initiale joueur
const ligne = document.querySelectorAll(".ligne");
const colLigne1 = ligne[0].querySelectorAll(".col");
const placementInitialJoueur = colLigne1[0];
placementInitialJoueur.classList.add("joueur");
placementInitialJoueur.style.backgroundImage = "url('./image/marioplat.gif')";
placementInitialJoueur.style.backgroundSize = "60px";

//placement initiale arrivé
const colLastLigne = ligne[ligne.length - 1].querySelectorAll(".col");
const placementInitialChateau = colLastLigne[colLastLigne.length - 1];
placementInitialChateau.classList.add("chateau");
placementInitialChateau.style.backgroundImage =
  "url('./image/chateauMario.gif')";
placementInitialChateau.style.backgroundSize = "60px";

//placement aléatoire des briques
// for (let i = 0; i < 15; i++) {
//   let numAleatoireLigne = Math.floor(Math.random() * 10);
//   let numAleatoireColonne = Math.floor(Math.random() * 10);
//   const ligne = document.querySelectorAll(".ligne");
//   const colLigne1 = ligne[numAleatoireLigne].querySelectorAll(".col");
//   const placementBrique = colLigne1[numAleatoireColonne];
//   if (
//     placementBrique == placementInitialJoueur ||
//     placementBrique == placementInitialChateau
//   ) {
//     continue;
//   } else {
//     placementBrique.style.backgroundColor = "orange";
//   }
// }
// const ligne = document.querySelectorAll(".ligne")
const briqueLigne0 = [3,4]
const colbriqueLigne0 = ligne[0].querySelectorAll(".col")
briqueLigne0.forEach((elem)=> {colbriqueLigne0[elem].style.backgroundColor = "orange";})
const briqueLigne1 = [1,2,6,7]
const colbriqueLigne1 = ligne[1].querySelectorAll(".col")
briqueLigne1.forEach((elem)=> {colbriqueLigne1[elem].style.backgroundColor = "orange";})
const briqueLigne2 = [1,4,5,9]
const colbriqueLigne2 = ligne[2].querySelectorAll(".col")
briqueLigne2.forEach((elem)=> {colbriqueLigne2[elem].style.backgroundColor = "orange";})
const briqueLigne3 = [3,7,8,9]
const colbriqueLigne3 = ligne[3].querySelectorAll(".col")
briqueLigne3.forEach((elem)=> {colbriqueLigne3[elem].style.backgroundColor = "orange";})
const briqueLigne4 = [0,2,6]
const colbriqueLigne4 = ligne[4].querySelectorAll(".col")
briqueLigne4.forEach((elem)=> {colbriqueLigne4[elem].style.backgroundColor = "orange";})
const briqueLigne5 = [0,3,5,6,8,9]
const colbriqueLigne5 = ligne[5].querySelectorAll(".col")
briqueLigne5.forEach((elem)=> {colbriqueLigne5[elem].style.backgroundColor = "orange";})
const briqueLigne6 = [1,4]
const colbriqueLigne6 = ligne[6].querySelectorAll(".col")
briqueLigne6.forEach((elem)=> {colbriqueLigne6[elem].style.backgroundColor = "orange";})
const briqueLigne7 = [3,7,9]
const colbriqueLigne7 = ligne[7].querySelectorAll(".col")
briqueLigne7.forEach((elem)=> {colbriqueLigne7[elem].style.backgroundColor = "orange";})
const briqueLigne8 = [0,2,3,6,7,9]
const colbriqueLigne8 = ligne[8].querySelectorAll(".col")
briqueLigne8.forEach((elem)=> {colbriqueLigne8[elem].style.backgroundColor = "orange";})
const briqueLigne9 = [5]
const colbriqueLigne9 = ligne[9].querySelectorAll(".col")
briqueLigne9.forEach((elem)=> {colbriqueLigne9[elem].style.backgroundColor = "orange";})

const chrono = setInterval(timer, 1000);

i = 0; //placement initial joueur
j = 0; //placement initial joueur

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "38") {
    // up arrow
    const colLigneActuel = ligne[i].querySelectorAll(".col");
    const colLigneDessus = ligne[i - 1].querySelectorAll(".col");
    if (colLigneDessus[j].style.backgroundColor !== "orange") {
      colLigneDessus[j].style.backgroundImage = "url('./image/marioplat.gif')";
      colLigneDessus[j].style.backgroundSize = "60px";
      colLigneActuel[j].style.backgroundImage = "none";
      i--;
    }
  } else if (e.keyCode == "40") {
    // down arrow
    const colLigneActuel = ligne[i].querySelectorAll(".col");
    const colLigneDessous = ligne[i + 1].querySelectorAll(".col");
    if (colLigneDessous[j].style.backgroundColor !== "orange") {
      colLigneDessous[j].style.backgroundImage = "url('./image/marioplat.gif')";
      colLigneDessous[j].style.backgroundSize = "60px";
      colLigneActuel[j].style.backgroundImage = "none";
      i++;
    }
  } else if (e.keyCode == "37") {
    const colLigneActuel = ligne[i].querySelectorAll(".col");
    if (colLigneActuel[j - 1].style.backgroundColor !== "orange") {
      colLigneActuel[j - 1].style.backgroundImage =
        "url('./image/marioplat.gif')";
      colLigneActuel[j - 1].style.backgroundSize = "60px";
      colLigneActuel[j].style.backgroundImage = "none";
      j--;
    }
  } else if (e.keyCode == "39") {
    // right arrow
    const colLigneActuel = ligne[i].querySelectorAll(".col");
    if (colLigneActuel[j + 1].style.backgroundColor !== "orange") {
      colLigneActuel[j + 1].style.backgroundImage =
        "url('./image/marioplat.gif')";
      colLigneActuel[j + 1].style.backgroundSize = "60px";
      colLigneActuel[j].style.backgroundImage = "none";
      j++;
    }
  }

  const colLigneActuel = ligne[i].querySelectorAll(".col");

  if (colLigneActuel[j] == placementInitialChateau) {
    clearTimeout(chrono)
    musiqueStart.pause()
    let template = `
        <div class="start">

        <img class="luigiHelp" src="./image/LuigiHelp.png" width="40%">

        <section class="choix">
        <h1>Bravo, Luigi viens vous apportez de l'aide!</h1>
        <p>Quel bonus souhaite tu pour la partie suivante?</p>
        <div class="buttonChoix">
        <button class="vie"><img src="./image/gif_Tod.gif" width ="30px">Vie ?</button>
        <button class="temps"><img src="./image/gif-horloge-2.gif" width="30px">Temps ?</button>
        </div>
        </section>
        </div>
        `;
    const div = document.createElement("div");
    div.className = "win";
    document.body.querySelector(".jeu").appendChild(div);
    document.querySelector(".win").innerHTML = template;

    const buttonVie = document.querySelector(".vie");
    const buttonTemps = document.querySelector(".temps");

    buttonVie.addEventListener("click", function () {
      localStorage.setItem("newVie", true);
      window.location = "index.html";
    });

    buttonTemps.addEventListener("click", function () {
      localStorage.setItem("newTime", true);
      window.location = "index.html";
    });
  }
}

function timer() {
  const temps = document.querySelector(".compteur p");
  let time = temps.innerHTML;
  time--;
  temps.innerHTML = time;
  if (time == 0) {
    let template = `
        <div class="end">

        <img class="luigiNoHelp" src="./image/LuigiNoHelp.png" width="40%">

        <section class="choix">
        <h1>Dommage, Luigi etait venu vous apportez de l'aide!</h1>
        <p>Un bonus pour la prochaine manche peut-etre?</p>
        <div class="buttonChoix">
        <button class="retourpendu">Continue</button>
        </div>
        </section>
        </div>
        `;
    const div = document.createElement("div");
    div.className = "lose";
    document.body.querySelector(".jeu").appendChild(div);
    document.querySelector(".lose").innerHTML = template;
  }
  const buttonRetour = document.querySelector(".retourpendu");
  buttonRetour.addEventListener("click", function () {
    window.location = "index.html";
  });
}

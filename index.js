const ListeMotFacile = [
  { mot: "CHEVAL", indice: "Animal a sabot" },
  { mot: "SABRE", indice: "Arme tranchante" },
  { mot: "CHIEN", indice: "Meilleur ami de l'homme" },
];
const btn = document.querySelectorAll(".boutons .btn");
let nbrEssai = 5;

function restartTouche(){
    btn.forEach((elem)=>{if(elem.className=="btnactif"){elem.className="btn inactif"}})
}

function restartMot(){
    let paragraphe = document.querySelectorAll('.mots p')
    paragraphe.forEach((elem) => elem.remove())
        ;}


btn.forEach((elem) => {
  elem.addEventListener("click", function () {
    statut = elem.className;
    if ((statut = "btn inactif")) {
      
      elem.className = "btnactif";
      
      const checkLettre = document.querySelectorAll(".mots p");
      let nbrLettreErreur = 0
      checkLettre.forEach((element) => {
        if (element.innerHTML == elem.innerHTML) {element.style.color = "Black";} 
        else {nbrLettreErreur++}
        });

    if(nbrLettreErreur==checkLettre.length){nbrEssai--}
      }
    else {elem.className = "btn inactif"}
   
    if(nbrEssai==0){alert("Perdu");demarrageJeuNiveau1()}
    }); 
});

const btnStart = document.querySelector(".begin");
btnStart.addEventListener("click", function () {
  const sectionStart = document.querySelector(".start");
  sectionStart.remove();
  demarrageJeuNiveau1();
});

function demarrageJeuNiveau1() {
    restartTouche()
    restartMot()
  let nbreAleatoire = Math.floor(Math.random() * ListeMotFacile.length);
  let indice = document.querySelector(".indice p");
  indice.innerHTML = `"${ListeMotFacile[nbreAleatoire].indice}"`;
  let lettreDuMot = ListeMotFacile[nbreAleatoire].mot.split("");
  lettreDuMot.forEach((elem) => {
    const lettre = document.createElement("p");
    document.querySelector(".mots").appendChild(lettre);
    lettre.innerHTML = elem;
    lettre.style.color = "White";
  });
}

  const ListeMotFacile = [
    {mot : "Cheval",
    indice : "Animal a sabot"},
    {mot : "Sabre",
    indice : "Arme tranchante"}
  ]


  
  const btn = document.querySelectorAll(".boutons .btn")
  btn.forEach((elem)=>{
    elem.addEventListener('click',function (){
        console.log(elem.className)
     test = elem.className  
     if(test = "btn inactif"){elem.className = "btnactif"}
     else{elem.className = "btn inactif"}
    })
  })

  const btnStart = document.querySelector(".begin")
  btnStart.addEventListener('click',function (){
   const sectionStart = document.querySelector(".start")
   sectionStart.remove()
   demarrageJeuNiveau1()
  })

  function demarrageJeuNiveau1 (){
    let nbreAleatoire = Math.floor(Math.random()*ListeMotFacile.length) 
    let indice = document.querySelector(".indice p")
    indice.innerHTML = `"${ListeMotFacile[nbreAleatoire].indice}"`
    
  }
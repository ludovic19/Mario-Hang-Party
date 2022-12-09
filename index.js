  const butn = document.querySelectorAll(".boutons .btn")
  butn.forEach((elem)=>{
    elem.addEventListener('click',function (){
        console.log(elem.className)
     test = elem.className  
     if(test = "btn inactif"){elem.className = "btnactif"}
     else{elem.className = "btn inactif"}
    })
  })

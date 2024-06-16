'use strict'

/* DETECCION DEL VIEWPORT*/

const boxes=document.querySelectorAll('.box')
/* console.log(boxes[0].getBoundingClientRect().top) */
window.addEventListener('scroll',checkBoxes)
checkBoxes()
function checkBoxes(){
  /* Para calcular un punto en la pantalla */
  const triggerBottom=window.innerHeight / 5 * 4
  console.log(triggerBottom)


/* Arrow function */
boxes.forEach((box,i)=> {
  const boxTop=box.getBoundingClientRect().top
  /* console.log(boxTop) */
  if(boxTop<triggerBottom){
    box.classList.add('show')
  }else{
    box.classList.remove('show')
  }
})
}


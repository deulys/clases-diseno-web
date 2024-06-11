'use strict'

/* LIGHTBOX */

/* 

Pseudo código
Cuando hago CLICK en .Grid-img
    .Lightbox display flex


CERRAR
Cuando hago click en .Lightbox-btn
    .Lightbox display none

*/


/* Practicar selectores, forEach y el cambio de Clases,  menu responsive*/



/* const grdImg=document.querySelector('.Grid-img')
const lightbox=document.querySelector('.Lightbox') */
/* Se puede usar tambien de la siguiente manera el querySek¡lector */
/* const lightboxBtn=lightbox.querySelector('.Lightbox-btn') */
/* const lightboxBtn=document.querySelector('.Lightbox-btn')
console.log(lightboxBtn)

grdImg.addEventListener('click',function(){
    lightbox.style.display="flex"
})
lightbox.addEventListener('click',function(){
    lightbox.style.display='none'
})
 */

const gridImgs=document.querySelectorAll('.Grid-img')

const lightbox=document.querySelector('.Lightbox')
const lightboxBtn=lightbox.querySelector('.Lightbox-btn')
const lightboxImg=lightbox.querySelector('.Lightbox-img')

gridImgs.forEach(function(eachImg,index){
    gridImgs[index].addEventListener('click',function(){
        lightbox.style.display="flex"
        lightboxImg.src=gridImgs[index].src
        /* lightboxImg.src=this.src */
    })
    lightboxBtn.addEventListener('click',function(){
        lightbox.style.display='none'
    })
})


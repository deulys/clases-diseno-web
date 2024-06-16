'use strict'

/* EFECTO PARALLAX */

const banner=document.querySelector('.banner')
const bannerTexto=document.querySelector('.banner-texto')


/* Formas de capturas el scroll  */
/* console.log(document.documentElement.scrollTop)
console.log(window.scrollY) */

function Parallax(){
    /* let scrollPos=document.documentElement.scrollTop */
  let scrollPos=window.scrollY
  console.log(scrollPos)
  banner.style.backgroundPosition='center ' + (-scrollPos / 4) + 'px' 
  bannerTexto.style.marginTop=(scrollPos / 4) + 'px'
  bannerTexto.style.opacity = 1 - (scrollPos / 500)

}

window.addEventListener('scroll',function(){
  Parallax()
})
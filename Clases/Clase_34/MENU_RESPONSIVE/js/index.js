'use strict'

/* MENU RESPONSIVE */

const headerBtn=document.querySelector('.Header-btn')
const headerNav=document.querySelector('.Header-nav')
/* console.log(headerNav)
console.log(headerBtn) */

headerBtn.addEventListener('click',function(){
    headerNav.classList.toggle('isActive')
})
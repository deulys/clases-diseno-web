'use strict'

/* TABS */
/* Cuando hago CLICK en -Tabs-btn
    .Tabs-p le add .isActive
*/

const tabsBtns=document.querySelectorAll('.Tabs-btn')
const tabsPs=document.querySelectorAll('.Tabs-p')
tabsBtns.forEach(function(eachBtn,index){
    tabsBtns[index].addEventListener('click',function(){
        tabsPs.forEach(function(eachP,index){
            tabsPs[index].classList.remove('isActive')
            tabsBtns[index].classList.remove('isActive')
        })
        tabsPs[index].classList.add('isActive')
        tabsBtns[index].classList.add('isActive')
        
    })
})

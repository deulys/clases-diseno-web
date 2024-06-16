'use strict'

/* FONDOS ALEATORIOS */

const colors = [
    "#DE4F31",
    "#D1DE31",
    "#2E9D67",
    "#2E369D",
    "#C352DC",
    "#DA4E74",
    "#4CCF5A"
  ];

  function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
  }

  console.log(getRandomNumber())

  const btn=document.getElementById('flip-btn')
  const color=document.querySelector('color')

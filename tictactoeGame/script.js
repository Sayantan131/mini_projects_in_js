console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X";


//Function to change the turn***************************************45.+-*/*****99*/ */
const changeTurn = ()=>{
   return turn === "X"?"O":"X";
}


//Function to check the win
const checkWin = ()=>{
    
}

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element=>{
   let boxtext = element.querySelector('.boxtext');
   element.addEventListener('click',()=>{
      
   })   
})
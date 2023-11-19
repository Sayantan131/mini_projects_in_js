console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X";


//Function to change the turn***************************************45.+-*/*****99*/ */
const changeTurn = ()=>{
   return turn === "X"?"O":"X";
}
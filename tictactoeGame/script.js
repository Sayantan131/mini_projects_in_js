console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let isgameover = false;

let turn = "X";


//Function to change the turn***************************************45.+-*/*****99*/ */
const changeTurn = ()=>{
   return turn === "X"?"0":"X";
}


//Function to check the win
const checkWin = ()=>{
   let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
      [0, 1, 2, 5, 5, 0],
      [3, 4, 5, 5, 15, 0],
      [6, 7, 8, 5, 25, 0],
      [0, 3, 6, -5, 15, 90],
      [1, 4, 7, 5, 15, 90],
      [2, 5, 8, 15, 15, 90],
      [0, 4, 8, 5, 15, 45],
      [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText ) && (boxtext[e[0]].innerText !=='')){
         document.querySelector('.info').innerText = boxtext[e[0]].innerText + "   player has won the match";
         isgameover = true;
         gameover.play();
         music.play();
         document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "200px";
         document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
         document.querySelector(".line").style.width ="20vw"; 
         }
         
    })
}


//
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element=>{
   let boxtext = element.querySelector('.boxtext');
   element.addEventListener('click',()=>{
      if(boxtext.innerText === ''){
         audioTurn.play();
         boxtext.innerText = turn;
         turn = changeTurn();
         
         checkWin();
         if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
         }
       
      //   console.log(document.getElementsByClassName("info")[0]);

      }
   })   
})

//add onclick listener to reset button

reset.addEventListener('click',()=>{
   let boxtext = document.getElementsByClassName('boxtext');
   Array.from(boxtext).forEach(e=>{
      e.innerText = "";
   });
   turn = "X";
   isgameover = false;
   document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
   document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "0px";
   music.pause();
   document.querySelector(".line").style.width = 0;
   
})
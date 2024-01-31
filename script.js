'use strict';

const number = document.querySelector(".number");
const message = document.querySelector(".message");
let score_label = document.querySelector(".score");
const body = document.querySelector("body");
const again = document.querySelector(".again");
const highscore = document.querySelector(".highscore");


var secretNumber = Math.floor(Math.random() * 20)+1;
console.log(secretNumber);
var highscore_value =0;
let score = 20;
score_label.textContent = score;

const check = document.querySelector(".check");
check.addEventListener('click', function () {
    const guess = Number(document.querySelector(".guess").value);
    if(!guess){
       message.textContent = "🤔No number";
    }

    else if(guess === secretNumber)
    {
        message.textContent = "🎈Correct Number";
        body.style.backgroundColor = "green";
        number.textContent = secretNumber;
       if (highscore_value<score) 
       {
         highscore_value = score;
         highscore.textContent = score;
       }
    }
    else if (guess !== secretNumber) {
      if (score > 1) {
         message.textContent = guess>secretNumber?"Too High": "Too Low";
         score--;
         score_label.textContent = score;
      }
      else{
         message.textContent = "You lost the Game";
         score_label.textContent = " ";
         body.style.backgroundColor = "red";
      }
    
    }
})
again.addEventListener('click', function () {
   secretNumber = Math.floor(Math.random() * 20)+1;
   console.log(secretNumber);
   score = 20;
   body.style.backgroundColor = "#222";
   message.textContent = "Start Guessing.......";
   score_label.textContent = score;
   number.textContent = "?";
   const guess = document.querySelector(".guess").value = "0";
})
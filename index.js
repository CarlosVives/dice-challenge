let randomNumber1 = Math.round(Math.random() * 5) + 1;

let randomNumber2 = Math.round(Math.random() * 5) + 1;

/*let imagen1 = document.querySelector("body > div > div:nth-child(2)");

console.log(imagen1);*/

let imagen1 = document.querySelector("body > div > div:nth-child(2) > img");

imagen1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

let imagen2 = document.querySelector("body > div > div:nth-child(3) > img");

imagen2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

//if (randomNumber1 === randomNumber2) {
//document.querySelector("body > div > h1").innerText=("Draw");}

randomNumber1 === randomNumber2
  ? (document.querySelector("body > div > h1").innerText = "Draw")
  : randomNumber1 > randomNumber2
  ? (document.querySelector("body > div > h1").innerText = "Player 1 Wins!")
  : (document.querySelector("body > div > h1").innerText = "Player 2 Wins!");

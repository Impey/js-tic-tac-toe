const squares = document.getElementsByTagName("td")
let turnText = document.getElementsByClassName("playerTurn")
let reset = document.getElementById("reset")
//All win conditions
const winCon = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 6],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];






var playersTurn = true;
//
for (let i = 0; i < squares.length; i++) {
  squares[i].getAttribute("data-num")
  squares[i].setAttribute("class", "");
  squares[i].addEventListener("click", () => {
    console.log("Tile clicked" + i);
    onSquareClick(i)
  });
}
//for (let j = 0; j < squares.length; j++) {
//squares[j].getAttribute("data-num")
//squares[j].addEventListener("click", () => {
//console.log("Click on Tile" + j);
//squares[j].setAttribute("class", "O")
//squares[j].innerHTML = "O"
//});
//}


//on Square click sets the x or o and changes whos turn it is
function onSquareClick(i) {
  if (playersTurn == true) {
    squares[i].setAttribute("class", "X");
    squares[i].innerHTML = "X";
    playersTurn = false;
    turnText[0].innerText = "It's Os turn";
  } else {
    squares[i].setAttribute("class", "O");
    squares[i].innerHTML = "O";
    playersTurn = true;
    turnText[0].innerText = "It's Xs turn";
  }
  // would check win condition here i think
}
reset.addEventListener("click", () => {
  resetGame();
})


function restGame() {
  document.reload();
}





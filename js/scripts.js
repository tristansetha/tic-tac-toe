function GameBoard(){
  this.myBoard = [];
  for(var i = 0; i <= 8; i++){
    this.myBoard.push(new GameBox(i));
  }
}

GameBoard.prototype.assessWin = function(){
  if(this.myBoard[0].myValue === this.myBoard[1].myValue && this.myBoard[1].myValue === this.myBoard[2].myValue){
    return true;
  }
  else if(this.myBoard[3].myValue === this.myBoard[4].myValue && this.myBoard[4].myValue === this.myBoard[5].myValue){
    return true;
  }
  else if(this.myBoard[6].myValue === this.myBoard[7].myValue && this.myBoard[7].myValue === this.myBoard[8].myValue){
    return true;
  }
  else if(this.myBoard[0].myValue === this.myBoard[3].myValue && this.myBoard[3].myValue === this.myBoard[6].myValue){
    return true;
  }
  else if(this.myBoard[1].myValue === this.myBoard[4].myValue && this.myBoard[4].myValue === this.myBoard[7].myValue){
    return true;
  }
  else if(this.myBoard[2].myValue === this.myBoard[5].myValue && this.myBoard[5].myValue === this.myBoard[8].myValue){
    return true;
  }
  else if(this.myBoard[0].myValue === this.myBoard[4].myValue && this.myBoard[4].myValue === this.myBoard[8].myValue){
    return true;
  }
  else if(this.myBoard[2].myValue === this.myBoard[4].myValue && this.myBoard[4].myValue === this.myBoard[6].myValue){
    return true;
  }
  else {
    return false;
  }
}

function GameBox(position){
  this.myValue = position;
}

var gameResult = function(){
  if(gameState % 2 === 0){
    $("#results").text("X has won!");
  }
  else{
    $("#results").text("O has won!");
  }
}

var attachGameListeners = function(){
  $("#box0").click(function(){
    if(ticTacToe.myBoard[0].myValue === "x" || ticTacToe.myBoard[0].myValue === "o" ){
      alert("That spot has already been taken!");
    }
    else{
      if(gameState % 2 === 0){
        ticTacToe.myBoard[0].myValue = "x";
        $("#box0Content").text("x");
        $("#results").text("It is O's turn.");
      }
      else{
        ticTacToe.myBoard[0].myValue = "o";
        $("#box0Content").text("o");
        $("#results").text("It is X's turn.");
      }
      if(ticTacToe.assessWin()){
        gameResult();
      }
      else if(gameState === 8){
        $("#results").text("The game has ended in a draw.");
      }
      gameState++;
    }
  });
  $("#box1").click(function(){
    if(ticTacToe.myBoard[1].myValue === "x" || ticTacToe.myBoard[1].myValue === "o" ){
      alert("That spot has already been taken!");
    }
    else{
      if(gameState % 2 === 0){
        ticTacToe.myBoard[1].myValue = "x";
        $("#box1Content").text("x");
        $("#results").text("It is O's turn.");
      }
      else{
        ticTacToe.myBoard[1].myValue = "o";
        $("#box1Content").text("o");
        $("#results").text("It is X's turn.");
      }
      if(ticTacToe.assessWin()){
        gameResult();
      }
      else if(gameState === 8){
        $("#results").text("The game has ended in a draw.");
      }
      gameState++;
    }
  });
  $("#box2").click(function(){
    if(ticTacToe.myBoard[2].myValue === "x" || ticTacToe.myBoard[2].myValue === "o" ){
      alert("That spot has already been taken!");
    }
    else{
      if(gameState % 2 === 0){
        ticTacToe.myBoard[2].myValue = "x";
        $("#box2Content").text("x");
        $("#results").text("It is O's turn.");
      }
      else{
        ticTacToe.myBoard[2].myValue = "o";
        $("#box2Content").text("o");
        $("#results").text("It is X's turn.");
      }
      if(ticTacToe.assessWin()){
        gameResult();
      }
      else if(gameState === 8){
        $("#results").text("The game has ended in a draw.");
      }
      gameState++;
    }
  });
  $("#box3").click(function(){
    if(ticTacToe.myBoard[3].myValue === "x" || ticTacToe.myBoard[3].myValue === "o" ){
      alert("That spot has already been taken!");
    }
    else{
      if(gameState % 2 === 0){
        ticTacToe.myBoard[3].myValue = "x";
        $("#box3Content").text("x");
        $("#results").text("It is O's turn.");
      }
      else{
        ticTacToe.myBoard[3].myValue = "o";
        $("#box3Content").text("o");
        $("#results").text("It is X's turn.");
      }
      if(ticTacToe.assessWin()){
        gameResult();
      }
      else if(gameState === 8){
        $("#results").text("The game has ended in a draw.");
      }
      gameState++;
    }
  });
  $("#box4").click(function(){
    if(ticTacToe.myBoard[4].myValue === "x" || ticTacToe.myBoard[4].myValue === "o" ){
      alert("That spot has already been taken!");
    }
    else{
      if(gameState % 2 === 0){
        ticTacToe.myBoard[4].myValue = "x";
        $("#box4Content").text("x");
        $("#results").text("It is O's turn.");
      }
      else{
        ticTacToe.myBoard[4].myValue = "o";
        $("#box4Content").text("o");
        $("#results").text("It is X's turn.");
      }
      if(ticTacToe.assessWin()){
        gameResult();
      }
      else if(gameState === 8){
        $("#results").text("The game has ended in a draw.");
      }
      gameState++;
    }
  });
  $("#box5").click(function(){
    if(ticTacToe.myBoard[5].myValue === "x" || ticTacToe.myBoard[5].myValue === "o" ){
      alert("That spot has already been taken!");
    }
    else{
      if(gameState % 2 === 0){
        ticTacToe.myBoard[5].myValue = "x";
        $("#box5Content").text("x");
        $("#results").text("It is O's turn.");
      }
      else{
        ticTacToe.myBoard[5].myValue = "o";
        $("#box5Content").text("o");
        $("#results").text("It is X's turn.");
      }
      if(ticTacToe.assessWin()){
        gameResult();
      }
      else if(gameState === 8){
        $("#results").text("The game has ended in a draw.");
      }
      gameState++;
    }
  });
  $("#box6").click(function(){
    if(ticTacToe.myBoard[6].myValue === "x" || ticTacToe.myBoard[6].myValue === "o" ){
      alert("That spot has already been taken!");
    }
    else{
      if(gameState % 2 === 0){
        ticTacToe.myBoard[6].myValue = "x";
        $("#box6Content").text("x");
        $("#results").text("It is O's turn.");
      }
      else{
        ticTacToe.myBoard[6].myValue = "o";
        $("#box6Content").text("o");
        $("#results").text("It is X's turn.");
      }
      if(ticTacToe.assessWin()){
        gameResult();
      }
      else if(gameState === 8){
        $("#results").text("The game has ended in a draw.");
      }
      gameState++;
    }
  });
  $("#box7").click(function(){
    if(ticTacToe.myBoard[6].myValue === "x" || ticTacToe.myBoard[6].myValue === "o" ){
      alert("That spot has already been taken!");
    }
    else{
      if(gameState % 2 === 0){
        ticTacToe.myBoard[7].myValue = "x";
        $("#box7Content").text("x");
        $("#results").text("It is O's turn.");
      }
      else{
        ticTacToe.myBoard[7].myValue = "o";
        $("#box7Content").text("o");
        $("#results").text("It is X's turn.");
      }
      if(ticTacToe.assessWin()){
        gameResult();
      }
      else if(gameState === 8){
        $("#results").text("The game has ended in a draw.");
      }
      gameState++;
    }
  });
  $("#box8").click(function(){
    if(ticTacToe.myBoard[6].myValue === "x" || ticTacToe.myBoard[6].myValue === "o" ){
      alert("That spot has already been taken!");
    }
    else{
      if(gameState % 2 === 0){
        ticTacToe.myBoard[8].myValue = "x";
        $("#box8Content").text("x");
        $("#results").text("It is O's turn.");
      }
      else{
        ticTacToe.myBoard[8].myValue = "o";
        $("#box8Content").text("o");
        $("#results").text("It is X's turn.");
      }
      if(ticTacToe.assessWin()){
        gameResult();
      }
      else if(gameState === 8){
        $("#results").text("The game has ended in a draw.");
      }
      gameState++;
    }
  });
}

var gameState = 0;
var ticTacToe = new GameBoard();

$(document).ready(function() {
  attachGameListeners();
});

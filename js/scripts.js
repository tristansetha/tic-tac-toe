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
  $("#results").append("<br><button class='btn btn-info' id='resetButton'>Play again?</button>");
  $("#resetButton").click(function(){
    location.reload();
  });
}

var clickEvent = function(boxNumber){
  if(ticTacToe.myBoard[boxNumber].myValue === "x" || ticTacToe.myBoard[boxNumber].myValue === "o" ){
    alert("That spot has already been taken!");
  }
  else{
    if(gameState % 2 === 0){
      ticTacToe.myBoard[boxNumber].myValue = "x";
      $("#box" + boxNumber + "Content").text("x");
      $("#results").text("It is O's turn.");
    }
    else{
      ticTacToe.myBoard[boxNumber].myValue = "o";
      $("#box" + boxNumber + "Content").text("o");
      $("#results").text("It is X's turn.");
    }
    if(ticTacToe.assessWin()){
      gameResult();
    }
    else if(gameState === 8){
      $("#results").text("The game has ended in a draw.");
      $("#results").append("<br><button class='btn btn-info' id='resetButton'>Play again?</button>");
      $("#resetButton").click(function(){
        location.reload();
      });
    }
    gameState++;
  }
}

var attachGameListeners = function(){
  $("#box0").click(function(){
    clickEvent(0);
  });
  $("#box1").click(function(){
    clickEvent(1);
  });
  $("#box2").click(function(){
    clickEvent(2);
  });
  $("#box3").click(function(){
    clickEvent(3);
  });
  $("#box4").click(function(){
    clickEvent(4);
  });
  $("#box5").click(function(){
    clickEvent(5);
  });
  $("#box6").click(function(){
    clickEvent(6);
  });
  $("#box7").click(function(){
    clickEvent(7);
  });
  $("#box8").click(function(){
    clickEvent(8);
  });
}

var gameState = 0;
var ticTacToe = new GameBoard();

$(document).ready(function() {
  attachGameListeners();
});

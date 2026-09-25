let currentPlayer = 1 // 1 red, 2 blue
let gameState = 'playing'
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0] // 0 = not clicked, 1 = red, 2 = blue
let winPlayer = 0;


function drawSquare(x, y, index) {
  if (board[index] === 1) {
    fill('red');
  } else if (board[index] === 2) {
    fill('blue');
  } else {
    fill('grey');
  }
  square(x, y, 120, 20);
} // new function for squares to make it less cluttered

function mousePressed() {
  if (gameState !== 'playing') return;
  // mouse locations === square locations checks and curentplayer swaps // 
  if (mouseX > 200 && mouseX < 320 && mouseY > 200 && mouseY < 320 && board[0] === 0) {
    board[0] = currentPlayer;
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else {
      currentPlayer = 1;
    }
  } else if (mouseX > 200 && mouseX < 320 && mouseY > 350 && mouseY < 470 && board[1] === 0) {
    board[1] = currentPlayer;
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else {
      currentPlayer = 1;
    }
  } else if (mouseX > 350 && mouseX < 470 && mouseY > 350 && mouseY < 470 && board[2] === 0) {
    board[2] = currentPlayer;
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else {
      currentPlayer = 1;
    }
  } else if (mouseX > 350 && mouseX < 470 && mouseY > 200 && mouseY < 320 && board[3] === 0) {
    board[3] = currentPlayer;
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else {
      currentPlayer = 1;
    }
  } else if (mouseX > 500 && mouseX < 620 && mouseY > 350 && mouseY < 470 && board[4] === 0) {
    board[4] = currentPlayer;
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else {
      currentPlayer = 1;
    }
  } else if (mouseX > 350 && mouseX < 470 && mouseY > 500 && mouseY < 620 && board[5] === 0) {
    board[5] = currentPlayer;
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else {
      currentPlayer = 1;
    }
  } else if (mouseX > 500 && mouseX < 620 && mouseY > 200 && mouseY < 320 && board[6] === 0) {
    board[6] = currentPlayer;
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else {
      currentPlayer = 1;
    }
  } else if (mouseX > 200 && mouseX < 320 && mouseY > 500 && mouseY < 620 && board[7] === 0) {
    board[7] = currentPlayer;
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else {
      currentPlayer = 1;
    }
  } else if (mouseX > 500 && mouseX < 620 && mouseY > 500 && mouseY < 620 && board[8] === 0) {
    board[8] = currentPlayer;
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else {
      currentPlayer = 1;
    }
  }

  // Checks all winning lines, and then changes gameState to won or a draw. //
  if (board[0] == board[3] && board[3] == board[6] && board[0] !== 0) {
    gameState = 'won'
    winPlayer = board[0]
  }
  if (board[1] == board[2] && board[2] == board[4] && board[1] !== 0) {
    gameState = 'won'
    winPlayer = board[1]
  }
  if (board[5] == board[7] && board[7] == board[8] && board[5] !== 0) {
    winPlayer = board[5]
    gameState = 'won'
  }
  if (board[0] == board[1] && board[1] == board[7] && board[0] !== 0) {
    gameState = 'won'
    winPlayer = board[0]
  }
  if (board[2] == board[3] && board[3] == board[5] && board[2] !== 0) {
    gameState = 'won'
    winPlayer = board[2]
  }
  if (board[4] == board[6] && board[6] == board[8] && board[4] !== 0) {
    gameState = 'won'
    winPlayer = board[4]
  }
  if (board[0] == board[2] && board[2] == board[8] && board[0] !== 0) {
    gameState = 'won'
    winPlayer = board[0]
  }
  if (board[2] == board[6] && board[6] == board[7] && board[2] !== 0) {
    gameState = 'won'
    winPlayer = board[2]
  }
console.log(board)
   // checks for a draw//
  if (board[0] !== 0 && board[1] !== 0 && board[2] !== 0 && board[3] !== 0 && board[4] !== 0 && board[5] !== 0 && board[6] !== 0 && board[7] !== 0 && board[8] !== 0 && winPlayer === 0) {
    gameState = 'draw'
    winPlayer = 'draw'
  }
}
// restarts the game iff function is triggered, setting all of them original states. // 
function restartGame() {
  currentPlayer = 1;
  gameState = 'playing';
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  winPlayer = 0;
  winner = 0;
}

function setup() {
  createCanvas(900, 900); // canvas. // 
  let button = createButton('click to restart'); // makes a button that lets u restart the game.
  button.position(225, 650); // button pos
  button.size(400, 100); // button size
  button.mousePressed(restartGame); // the buttons function
}

function draw() {
  if (currentPlayer == 1) {
    background(255, 0, 0, 20)
  } else if (currentPlayer == 2) {
    background(0, 0, 255, 20)
  }



  strokeWeight(20)

  fill('darkgrey')
  square(195, 190, 430, 5); //outline of the tictactoe board
  strokeWeight(15);




  //squares

  drawSquare(200, 200, 0); // linksboven 
  drawSquare(200, 350, 1); // linksmidden
  drawSquare(350, 350, 2); // midden
  drawSquare(350, 200, 3); // middenboven
  drawSquare(500, 350, 4); // middenrechts
  drawSquare(350, 500, 5); // middenlinks
  drawSquare(500, 200, 6); // rechtsboven
  drawSquare(200, 500, 7); // linksonder
  drawSquare(500, 500, 8); // rechtsonder


  // checks iff gamestate is won or drawn. //
  textFont('Brush Script MT'); // self-explanitory.
  if (gameState === 'won') {
    textSize(60)
    if (winPlayer === 1) {
      fill('red')
    }
    if (winPlayer === 2) {
      fill('blue')
    }
    text('player ' + winPlayer + ' has won!', 250, 150)
  }
  if (winPlayer === 'draw') {
    textSize(90)
    fill('black')
    text('Its a draw', 250, 150)
  }
}


let currentPlayer = 1 // 1 red, 2 blue
let gamestate = 'playing'
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0] // 0 = not clicked, 1 = red, 2 = blue
let game_over = false

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
  if (gamestate !== 'playing') return;
 // mouse locations === square locations checks // 
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
}

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(220);
  stroke('black');
  strokeWeight(20);
  fill('darkgrey');
  square(195, 190, 430, 5);
  strokeWeight(10);

 //squares

  drawSquare(200, 200, 0);
  drawSquare(200, 350, 1);
  drawSquare(350, 350, 2);
  drawSquare(350, 200, 3);
  drawSquare(500, 350, 4);
  drawSquare(350, 500, 5);
  drawSquare(500, 200, 6);
  drawSquare(200, 500, 7);
  drawSquare(500, 500, 8);

  if(board != 0) {
board = 0
  }
}



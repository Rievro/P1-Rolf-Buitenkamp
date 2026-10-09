let questions = [
  {
    options: ['Click', 'me', 'to', 'begin'],
    correctOption: 3
  }
];



let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let buttoncolor1 = '#ff0000';
let buttoncolor2 = '#2bff00';
let buttoncolor3 = 'transparent';
let score = 10;
let button1pressed = false;
let button2pressed = false;
let button3pressed = false;
let button4pressed = false;
let button6pressed = false;
let questionAnswered = false;
let resetTimer = 0;
let resetter = false;
let questioncount = 0;
let correctOption = questions[0].correctOption;
let HK;
let correctSound;
let incorrectSound;
let correct = false;
let incorrect = false;
 // loads image and sound // 
function preload() {
  HK = loadImage('HK.PNG');
  correctSound = loadSound('correct.mp3');
  incorrectSound = loadSound('incorrect.mp3');
}
 // function to check iff its correct or incorrect//
function playAnswerFeedback() {
  if (correct === true) {
    correctSound.stop();
    correctSound.setVolume(1);
    correctSound.play();
  }

  if (incorrect === true) {
    incorrectSound.stop();
    incorrectSound.setVolume(0.1);
    incorrectSound.play();
  }

  correct = false;
  incorrect = false;
}

function setup() {
  createCanvas(1600, 1000);
 // checks iff button6 is pressed // 
  remakeButtons();
  button6.mousePressed(() => {
    button6pressed = true;
  });

  frameRate(60);
}
// if (question count === 0/1/2/3/4/5/6/7/8/9/10) {
// do [question text 4 times for A B C  and D]
//do [show current score/question]






function draw() {
  image(HK, 0, 0, 1600, 1000) // puts the image//
  textSize(50)

  if (questioncount === 0) { // hides all buttons except 6 // 
    button1.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    button5.hide()
    textSize(50)
    button6.html('Click here to begin')
    return;
  }
  textSize(20)
 // questions down below // 
  if (questioncount === 1) {
    button1.show()
    button2.show()
    button3.show()
    button4.show()
    button5.show()
    button6.hide()
    button5.html('Which Item do you need to access The Whiteward in silksong')
    button1.html('architects key');
    button2.html('key of apostacy');
    button3.html('white key');
    button4.html('simple key');
    correctOption = 3;
  } else if (questioncount === 2) {
    button5.html('What item drops from The False Knight in Hollow Knight?')
    button1.html('city crest');
    button2.html('key of knights');
    button3.html('Descending Dark');
    button4.html('knight crest');
    correctOption = 1;
  } else if (questioncount === 3) {
    button5.html('What Amount of damage does GrandMothersSilk Do Primarily in silksong?')
    button1.html('1+1');
    button2.html('2');
    button3.html('1+1+1');
    button4.html('3');
    correctOption = 2;
  }
  else if (questioncount === 4) {
    button5.html('How Many Fleas are required for act 3 in silksong?')
    button1.html('28');
    button2.html('25');
    button3.html('22');
    button4.html('20');
    correctOption = 3;
  }
  else if (questioncount === 5) {
    button5.html('How many bosses are in pantheon 5 in hollow knight?')
    button1.html('46');
    button2.html('42');
    button3.html('38');
    button4.html('33');
    correctOption = 2;
  } else if (questioncount === 6) {
    button5.html('What is the lowest percentile u can beat silksong with [without major glitches]?')
    button1.html('5%');
    button2.html('8%');
    button3.html('13%');
    button4.html('17%');
    correctOption = 1;
  } else if (questioncount === 7) {
    button5.html('What is the minimum amount of Dream Essence needed to get the Awoken Dream Nail?')
    button1.html('2700');
    button2.html('1900');
    button3.html('1400');
    button4.html('2400');
    correctOption = 4;
  } else if (questioncount === 8) {
    button5.html('How many gauntlets are there in silksong?')
    button1.html('59');
    button2.html('54');
    button3.html('49');
    button4.html('44');
    correctOption = 3;
  }
  else if (questioncount === 9) {
    button5.html('And how many are there in hollow knight?')
    button1.html('30');
    button2.html('33');
    button3.html('40');
    button4.html('26');
    correctOption = 1;
  } else if (questioncount === 10) {
    button5.html('Why is every hollow knight player afraid of Primal Aspids')
    button1.html('Because they are annoying');
    button2.html('because they have aimbot');
    button3.html('because they are tanky');
    button4.html('all three');
    correctOption = 2;
  } else if (questioncount >= 11) {
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
    button5.html('You scored ' + score + '/ 10')
    button6.show()
    button6.html('click here to restart')
    textSize(50)

  }

 // timer of 2000 milliseconds ( 2 seconds), that changes the buttons back to their original states.
  if (button1pressed || button2pressed || button3pressed || button4pressed) {
    if (resetTimer === 0) {
      resetTimer = setTimeout(() => {
        button1.style('background-color', buttoncolor3);
        button2.style('background-color', buttoncolor3);
        button3.style('background-color', buttoncolor3);
        button4.style('background-color', buttoncolor3);
        button1pressed = false;
        button2pressed = false;
        button3pressed = false;
        button4pressed = false;
        questionAnswered = false;
        resetTimer = 0;
        resetter = true;
      }, 2000);
    }
    return;
  }
 // questioncounter
  if (resetter === true && resetTimer === 0) {
    resetter = false;
    questioncount++;
  }
}

function mousePressed() {
  if (questionAnswered) {
    return;
  }

 // a million checks down below //
  if (button6pressed && questioncount === 0) {
    button6pressed = false;
    questioncount = 1;
    return;
  }

  if (button6pressed && questioncount >= 11 && mouseX > 400 && mouseX < 1200 && mouseY > 800 && mouseY < 1000) {
    score = 10;
    questioncount = 0;
    button1pressed = false;
    button2pressed = false;
    button3pressed = false;
    button4pressed = false;
    button6pressed = false;
    questionAnswered = false;
    resetTimer = 0;
    resetter = false;
    button1.style('background-color', buttoncolor3);
    button2.style('background-color', buttoncolor3);
    button3.style('background-color', buttoncolor3);
    button4.style('background-color', buttoncolor3);
    return;
  }

  if (questioncount === 0 || questioncount >= 11) {
    return;
  }
  if (questioncount === 0) {
    questioncount = 1;
    return;
  }
  if (questioncount === 11) {
    button6.show();
    return;
  }

  if (mouseX > 500 && mouseX < 750 && mouseY > 300 && mouseY < 550) {
    if (correctOption === 4) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor2);
      score -= 1;
      incorrect = true
    } else if (correctOption === 3) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor2);
      button4.style('background-color', buttoncolor1);
      score -= 1;
      incorrect = true
    } else if (correctOption === 2) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor2);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);
      score -= 1;
      incorrect = true
    } else if (correctOption === 1) {
      button1.style('background-color', buttoncolor2);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);
      correct = true
    }
    button1pressed = true;
    questionAnswered = true;
  } else if (mouseX > 800 && mouseX < 1050 && mouseY > 300 && mouseY < 550) {
    if (correctOption === 4) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor2);
      score -= 1;
      incorrect = true
    } else if (correctOption === 3) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor2);
      button4.style('background-color', buttoncolor1);
      score -= 1;
      incorrect = true
    } else if (correctOption === 2) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor2);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);
      correct = true
    } else if (correctOption === 1) {
      button1.style('background-color', buttoncolor2);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);
      score -= 1;
      incorrect = true
    }
    button2pressed = true;
    questionAnswered = true;
  } else if (mouseX > 500 && mouseX < 750 && mouseY > 600 && mouseY < 850) {
    if (correctOption === 4) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor2);
      score -= 1;
      incorrect = true
    } else if (correctOption === 3) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor2);
      button4.style('background-color', buttoncolor1);
      correct = true
    } else if (correctOption === 2) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor2);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);
      score -= 1;
      incorrect = true
    } else if (correctOption === 1) {
      button1.style('background-color', buttoncolor2);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);
      score -= 1;
      incorrect = true
    }
    button3pressed = true;
    questionAnswered = true;
  } else if (mouseX > 800 && mouseX < 1050 && mouseY > 600 && mouseY < 850) {
    if (correctOption === 4) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor2);
      correct = true
    } else if (correctOption === 3) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor2);
      button4.style('background-color', buttoncolor1);
      score -= 1;
      incorrect = true
    } else if (correctOption === 2) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor2);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);
      score -= 1;
      incorrect = true
    } else if (correctOption === 1) {
      button1.style('background-color', buttoncolor2);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);
      score -= 1;
      incorrect = true
    }
    button4pressed = true;
    questionAnswered = true;
  }
 // plays the sound according to iff its correct or incorrect after a mousepress // 
  if (correct || incorrect) {
    playAnswerFeedback();
  }
}



 // function that makes *All* buttons at once, and defined their text size, position, size, color, bordersize, bordercolor. //
function remakeButtons() {
  let currentOptions = questions[0].options;

  button1 = createButton(currentOptions[0]);
  button2 = createButton(currentOptions[1]);
  button3 = createButton(currentOptions[2]);
  button4 = createButton(currentOptions[3]);
  button5 = createButton()
  button6 = createButton()
  button1.style('font-size', '40px');
  button2.style('font-size', '40px');
  button3.style('font-size', '40px');
  button4.style('font-size', '40px');
  button5.style('font-size', '50px');
  button6.style('font-size', '50px');
  button1.size(250, 250);
  button1.position(500, 300); // defining the variables of 'createButton' //
  button2.size(250, 250);
  button2.position(800, 300);
  button3.size(250, 250);
  button3.position(500, 600);
  button4.size(250, 250);
  button4.position(800, 600);
  button5.size(800, 200)
  button5.position(400, 75)
  button6.size(800, 200)
  button6.position(400, 800)
  button1.style('background-color', 'transparent');
  button1.style('border', '5px solid');
  button1.style('border-color', 'black');
  button1.style('color', 'white');
  button2.style('background-color', 'transparent');
  button2.style('border', '5px solid');
  button2.style('border-color', 'black');
  button2.style('color', 'white');
  button3.style('background-color', 'transparent');
  button3.style('border', '5px solid');
  button3.style('border-color', 'black');
  button3.style('color', 'white');
  button4.style('background-color', 'transparent');
  button4.style('border', '5px solid');
  button4.style('border-color', 'black');
  button4.style('color', 'white');
  button5.style('background-color', 'transparent');
  button5.style('border', '5px solid');
  button5.style('border-color', 'black');
  button5.style('color', '#172ed7');
  button6.style('background-color', 'transparent');
  button6.style('border', '5px solid');
  button6.style('border-color', 'black');
  button6.style('color', 'black');
}

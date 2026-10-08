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
let buttoncolor1 = '#ff0000';
let buttoncolor2 = '#2bff00';
let buttoncolor3 = '#ffffff';
let score = 10;
let button1pressed = false;
let button2pressed = false;
let button3pressed = false;
let button4pressed = false;
let questionAnswered = false;
let resetTimer = 0;
let resetter = false;
let questioncount = 0;
let correctOption = questions[0].correctOption;

function setup() {
  createCanvas(1000, 1000);

  remakeButtons()

  frameRate(60)


}
// if (question count === 0/1/2/3/4/5/6/7/8/9/10) {
// do [question text 4 times for A B C and D]
//do [show current score/question]







function draw() {
  background(100);
  textSize(30)

  if (questioncount === 0 ) {
    button1.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    textSize(50)
    text('Click anywhere to begin', 300, 300)
    return;
  }
textSize (20)
  if (questioncount === 1) {
    button1.show()
    button2.show()
    button3.show()
    button4.show()
textSize (20)
    text('Which Item do you need to access The Whiteward in silksong', 50, 50)
    button1.html('architects key');
    button2.html('key of apostacy');
    button3.html('white key');
    button4.html('simple key');
    correctOption = 3;
  } else if (questioncount === 2) {
    text('What item drops from The False Knight in silksong?', 50, 50)
    button1.html('city crest');
    button2.html('key of knights');
    button3.html('Descending Dark');
    button4.html('knight crest');
    correctOption = 1;
  } else if (questioncount === 3) {
    text('What Amount of damage does GrandMothersSilk Do Primarily in silksong?', 50, 50)
    button1.html('1+1');
    button2.html('2');
    button3.html('1+1+1');
    button4.html('3');
    correctOption = 2;
  }
  else if (questioncount === 4) {
    text('How Many Fleas are required for act 3 in silksong?', 50, 50)
    button1.html('28');
    button2.html('25');
    button3.html('22');
    button4.html('20');
    correctOption = 3;  
  }
  else if (questioncount === 5) {
    text('How many bosses are in pantheon 5 in hollow knight?', 50, 50)
    button1.html('46');
    button2.html('42');
    button3.html('38');
    button4.html('33');
    correctOption = 2;
  } else if (questioncount === 6) {
    text('What is the lowest percentile u can beat silksong with [without major glitches]?', 50, 50)
    button1.html('5%');
    button2.html('8%');
    button3.html('13%');
    button4.html('17%');
    correctOption = 1;
  } else if (questioncount === 7) {
    text('What is the minimum amount of Dream Essence needed to get the Awoken Dream Nail?', 50, 50)
    button1.html('2700');
    button2.html('1900');
    button3.html('1400');
    button4.html('2400');
    correctOption = 4;
  } else if (questioncount === 8) {
    text('How many gauntlets are there in silksong?', 50, 50)
    button1.html('59');
    button2.html('54');
    button3.html('49');
    button4.html('44');
    correctOption = 3;
  }
  else if (questioncount === 9) {
    text('And how many are there in hollow knight?', 50, 50)
    button1.html('30');
    button2.html('33');
    button3.html('40');
    button4.html('26');
    correctOption = 1;
  } else if (questioncount === 10) {
 text('Why is every hollow knight player afraid of Primal Aspids', 50, 50)
    button1.html('Because they are annoying');
    button2.html('because they have aimbot');
    button3.html('because they are tanky');
    button4.html('all three');
    correctOption = 2;
  } else if (questioncount === 11) {
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
textSize(50)
    text('You scored ' + score + ' / 10', 250, 250)
  }


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
    console.log(' button pressed  reset');
    return;
  }

  if (resetter === true && resetTimer === 0) {
    console.log('next question');
    resetter = false;
    questioncount++;
    console.log(questioncount);
  }
}

function mousePressed() {
  if (questioncount === 0) {
    questioncount = 1;
    return;
  }

  if (questionAnswered) {
    return;
  }

  if (mouseX > 100 && mouseX < 350 && mouseY > 200 && mouseY < 450) {
    if (correctOption === 4) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor2);
      score -= 1
    } else if (correctOption === 3) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor2);
      button4.style('background-color', buttoncolor1);
      score -= 1
    } else if (correctOption === 2) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor2);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);
      score -= 1
    } else if (correctOption === 1) {
      button1.style('background-color', buttoncolor2);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);

    }
    button1pressed = true;
    questionAnswered = true;
    console.log('button1 clicked');
    console.log(score);
    console.log(button1pressed + '1');
  } else if (mouseX > 400 && mouseX < 650 && mouseY > 200 && mouseY < 450) {
    if (correctOption === 4) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor2);
      score -= 1
    } else if (correctOption === 3) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor2);
      button4.style('background-color', buttoncolor1);
      score -= 1
    } else if (correctOption === 2) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor2);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);

    } else if (correctOption === 1) {
      button1.style('background-color', buttoncolor2);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);
      score -= 1
    }
    button2pressed = true;
    questionAnswered = true;
    console.log('button2 clicked');
    console.log(score);
    console.log(button2pressed + '2');
  } else if (mouseX > 100 && mouseX < 350 && mouseY > 500 && mouseY < 750) {
    if (correctOption === 4) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor2);
      score -= 1
    } else if (correctOption === 3) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor2);
      button4.style('background-color', buttoncolor1);
    } else if (correctOption === 2) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor2);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);
      score -= 1
    } else if (correctOption === 1) {
      button1.style('background-color', buttoncolor2);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);
      score -= 1
    }
    button3pressed = true;
    questionAnswered = true;
    console.log('button3 clicked');
    console.log(score);
    console.log(button3pressed + '3');
  } else if (mouseX > 400 && mouseX < 650 && mouseY > 500 && mouseY < 750) {
    if (correctOption === 4) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor2);
    } else if (correctOption === 3) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor2);
      button4.style('background-color', buttoncolor1);
      score -= 1
    } else if (correctOption === 2) {
      button1.style('background-color', buttoncolor1);
      button2.style('background-color', buttoncolor2);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);
      score -= 1
    } else if (correctOption === 1) {
      button1.style('background-color', buttoncolor2);
      button2.style('background-color', buttoncolor1);
      button3.style('background-color', buttoncolor1);
      button4.style('background-color', buttoncolor1);
      score -= 1
    }
    button4pressed = true;
    questionAnswered = true;
    console.log(score);
    console.log(button4pressed + '4');
  }

}




function remakeButtons() {
  let currentOptions = questions[0].options;

  button1 = createButton(currentOptions[0]);
  button2 = createButton(currentOptions[1]);
  button3 = createButton(currentOptions[2]);
  button4 = createButton(currentOptions[3]);
  button1.size(250, 250);
  button1.position(100, 200); // defining the variables of 'createButton' //
  button2.size(250, 250);
  button2.position(400, 200);
  button3.size(250, 250);
  button3.position(100, 500);
  button4.size(250, 250);
  button4.position(400, 500);
}

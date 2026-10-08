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




  if (questioncount === 1) {
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
    text('How many bosses are in pantheon 5 in hollow knight?')
    button1.html('46');
    button2.html('42');
    button3.html('38');
    button4.html('33');
    correctOption = 2;
  } else if (questioncount === 6) {
    text('What is the lowest percentile u can beat silksong with [without major glitches]?')
    button1.html('5%');
    button2.html('8%');
    button3.html('13%');
    button4.html('17%');
    correctOption = 1;
  } else if (questioncount === 7) {
    text('What is the minimum amount of Dream Essence needed to get the Awoken Dream Nail??')
    button1.html('2700');
    button2.html('1900');
    button3.html('1400');
    button4.html('2200');
    correctOption = 4;
  } else if (questioncount === 8) {
    
    button1.html('test1');
    button2.html('test2');
    button3.html('test3');
    button4.html('test4');
    correctOption = 2;
  }
  else if (questioncount === 9) {
    button1.html('test1');
    button2.html('test2');
    button3.html('test3');
    button4.html('test4');
    correctOption = 2;
  } else if (questioncount === 10) {

    button1.html('test1');
    button2.html('test2');
    button3.html('test3');
    button4.html('test4');
    correctOption = 2;
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
  if (mouseX > 50 && mouseX < 150 && mouseY > 100 && mouseY < 150) {
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
    console.log('button1 clicked');
    console.log(score);
    console.log(button1pressed + '1');
  } else if (mouseX > 175 && mouseX < 275 && mouseY > 100 && mouseY < 150) {
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
    console.log('button2 clicked');
    console.log(score);
    console.log(button2pressed + '2');
  } else if (mouseX > 300 && mouseX < 400 && mouseY > 100 && mouseY < 150) {
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
    console.log('button3 clicked');
    console.log(score);
    console.log(button3pressed + '3');
  } else if (mouseX > 425 && mouseX < 525 && mouseY > 100 && mouseY < 150) {
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
  button1.size(100, 50);
  button1.position(50, 100); // defining the variables of 'createButton' //
  button2.size(100, 50);
  button2.position(175, 100);
  button3.size(100, 50);
  button3.position(300, 100);
  button4.size(100, 50);
  button4.position(425, 100);
}

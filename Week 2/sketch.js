let cloudX = 0;
let cloud1 = 0;
let sun1 = 0;
let car1= 0;
let carspeed = 2.2;
let lightstate = 'green'
function setup() {
  createCanvas(1000, 900);
}

function draw() {
   
  background('lightblue');
  fill('grey');
  strokeWeight(0)
  triangle(450, 250, 200, 700, 700, 700);

  fill('lightgrey');
  triangle(750, 400, 1100, 700, 500, 700);
  triangle(275, 450, 100, 700, 400, 700);
  
  fill('grey');
  rect(0, 700, 1000, 300);
  fill('brown');
  rect(115, 500, 25, 200);
  fill('green');

  ellipse(125, 500, 150, 150);
  fill('brown');
  rect(215, 400, 25, 300);
  fill('green');
  ellipse(225, 350, 150, 133);
  strokeWeight(0);
  fill('darkgreen')
    rect(0, 700, 1000, 25);
  fill('green');
  rect(0, 700, 1000, 10);
  //clouds//
  cloudX -= 2.4;
  if (cloudX < -700) {
    cloudX = 1000;
  }
    cloud1 -= 2.1;
  if (cloud1 < -900) {
    cloud1 = 800;
  }

   //sun//
  sun1  += 1.3;
  if (sun1 > 1000) {
    sun1 = -250
  }
 // sunpulse//
   let pulse = 1 + sin(frameCount * 0.1) * 1;
  fill(255, 165, 0, 128)
   ellipse(sun1 + 50, 75, 80 * pulse);
  pulse1 = 1 + sin(frameCount * 0.2) * 1;

   pulse1 = 1 + sin(frameCount * 0.15) * 1;
   pulse1 = 1 + sin(frameCount / 111.25) * 1;
    
  ellipse(sun1 + 50, 75, 80 * pulse1);

   fill('yellow')
   ellipse(sun1 + 50, 75, 100);

  
//clouds
    fill(195, 195, 195, 150)
   ellipse(cloudX + 200, 112, 110, 90);
  ellipse(cloudX + 250, 120, 130, 100);
  ellipse(cloudX + 300, 101, 110, 90);

 ellipse(cloud1 + 750, 167, 110, 90);
  ellipse(cloud1 + 800, 170, 130, 100);
  ellipse(cloud1 + 850, 190, 110, 90);
  fill(255, 255, 255, 150);
  ellipse(cloudX + 200, 122, 100, 80);
  ellipse(cloudX + 250, 130, 120, 90);
  ellipse(cloudX + 300, 111, 100, 80);

 ellipse(cloud1 + 750, 177, 100, 80);
  ellipse(cloud1 + 800, 180, 120, 90);
  ellipse(cloud1 + 850, 200, 100, 80);

  // road part 2
  fill('lightgrey');
  rect(400, 800, 100, 10, 5)
   rect(200, 800, 100, 10, 5)
    rect(0, 800, 100, 10, 5)
  rect(600, 800, 100, 10, 5)
 
 rect(800, 800, 100, 10, 5)

 // cars
fill('red')
rect(car1 +85, 710, 130, 50, 5)
rect(car1 + 85, 690, 120, 50, 5)
fill('black')
ellipse(car1 + 110, 760, 25, 25)
ellipse(car1 + 190, 760, 25, 25)
fill('blue')
rect(car1 +85, 810, 130, 50, 5)
rect(car1 + 85, 790, 120, 50, 5)
fill('black')
ellipse(car1 + 110, 860, 25, 25)
ellipse(car1 + 190, 860, 25, 25)
 car1 += carspeed;
  if (car1 > 1000) {
    car1 = -200;
  }

   fill('brown');
  rect(415, 775, 25, 250);
  fill('green');
  ellipse(425, 775, 122, 122);
  
strokeWeight(1)
fill('grey');
  rect(650, 640, 10, 60);
  rect(642.5, 570, 25, 100)
  fill('red');
  ellipse(655, 650, 20, 20);
  fill('green');
  ellipse(655, 590, 20, 20);
  fill('orange');
  ellipse(655, 620, 20, 20);
   //moet nog:  stoplight,//



}

function keyPressed() {
  if (keyCode === ENTER) {
    carspeed *= 0.5;
  }
}

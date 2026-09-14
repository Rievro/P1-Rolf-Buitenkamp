let cloudX = 0;
let cloud1 = 0;
let sun1 = 0;
let car1= 0;
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

   let pulse = 1 + sin(frameCount * 0.05) * 1;
   fill('orange')
   ellipse(sun1 + 50, 75, 80 * pulse);
  let pulse1 = 1 - sin(frameCount * 0.05) * 1;
    
  ellipse(sun1 + 50, 75, 80 * pulse1);

   fill('yellow')
   ellipse(sun1 + 50, 75, 100);

  
//clouds
    fill('lightgrey')
   ellipse(cloudX + 200, 112, 110, 90);
  ellipse(cloudX + 250, 120, 130, 100);
  ellipse(cloudX + 300, 101, 110, 90);

 ellipse(cloud1 + 750, 167, 110, 90);
  ellipse(cloud1 + 800, 170, 130, 100);
  ellipse(cloud1 + 850, 190, 110, 90);
  fill('white');
  ellipse(cloudX + 200, 122, 100, 80);
  ellipse(cloudX + 250, 130, 120, 90);
  ellipse(cloudX + 300, 111, 100, 80);

 ellipse(cloud1 + 750, 177, 100, 80);
  ellipse(cloud1 + 800, 180, 120, 90);
  ellipse(cloud1 + 850, 200, 100, 80);


  
  fill('lightgrey');
  rect(400, 800, 100, 10, 5)
   rect(200, 800, 100, 10, 5)
    rect(0, 800, 100, 10, 5)
  rect(600, 800, 100, 10, 5)
 
 rect(800, 800, 100, 10, 5)

fill('red')
rect(car1 +85, 750, 130, 50, 5)
rect(car1 + 100, 725, 100, 50, 5)
fill('black')
ellipse(car1 + 110, 800, 25, 25)
ellipse(car1 + 190, 800, 25, 25)

 car1 += 55.55;
  if (car1 > 1000) {
    car1 = -200;
  }
}

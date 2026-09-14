let cloudX = 0;
let cloudSpeed = 3;

function setup() {
  createCanvas(1000, 1000);
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
  
  cloudX += cloudSpeed;
  if (cloudX > 800) {
    cloudX = -400;
  }
  
  fill('white');
  ellipse(cloudX + 200, 150, 100, 80);
  ellipse(cloudX + 250, 130, 120, 90);
  ellipse(cloudX + 300, 150, 100, 80);

  ellipse()
}

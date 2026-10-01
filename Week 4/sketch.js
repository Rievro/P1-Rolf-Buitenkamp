


function setup() {
  createCanvas(800, 800);
 frameRate(6)
}

function draw() {
  background(155);
  for (let i = 0; i < 500; i++) {
      let randomizer = imrandom();
      fill(randomizer.color);

      if (randomizer.shape === "square") {
        square(randomizer.x, randomizer.y, randomizer.size);
      } else if (randomizer.shape === "triangle") {
        triangle(
          randomizer.x, randomizer.y,
          randomizer.x + randomizer.size, randomizer.y,
          randomizer.x + randomizer.size / 2, randomizer.y - randomizer.size
        );
      } else {
        circle(randomizer.x, randomizer.y, randomizer.size);
      }
  }
} 

function imrandom() {
  let randomizer = {
    x: random(20, 800),
    y: random(20, 780),
    size: random(20, 100),
    color: color(random(255), random(255), random(255)),
    shape: random(["square", "triangle", "circle"])
  };
  return randomizer;
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(32)
  text(x, 20, 20)
 text(greeting, 20, 60)
 text(aftrekken, 100, 100)
 text(optellen, 100, 150) 
 text(vermenigvuldigen, 100, 200)
 text(delen, 100, 250)
}
let x = 1
let greeting = 'Hello World'
let a = 20
let b = 10
let optellen
let aftrekken
let vermenigvuldigen
let delen
aftrekken = a - b 
optellen = a + b
vermenigvuldigen = a * b
delen = a / b 
let y = 80

y+=20;

// TODO: global state variables

let clickCounter;
let md;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  clickCounter = 0;
  md = 200;
}

function draw() {
  // if (clickCounter> 50) {
  //   fill(200, 0, 200);
  // }
  
  ellipse(width / 2, height / 2, md);
}

function mouseReleased() {
  clickCounter += 1;
  md = map(clickCounter, 0, 10, 200, 10);
  print(clickCounter, md);
}

// TODO: time with map() and mod

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
background(20);

// period of motion 
  let P = 3000;
  let counter = millis() % P;
  let md = map(counter, 0, P, 20, 500);
  let mr = map (counter, 0, P, 100, 255);
  let ms = map (counter, 0, P, 255, 100);
  let msw = map (counter, 0, P, 1, 20);


  fill(mr, 50, 50);
  stroke(ms, 20,30);
  strokeWeight(msw);

  ellipse(width / 2, height / 2, md);
  
}

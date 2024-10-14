function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 102, 102);
  
  
  let hourValue = map(hour(), 0, 24, 0, width);
  let minValue = map(minute(), 0, 60, 0, width);
  let secValue = map(second(), 0, 60, 0, width);
  let millisValue = map(millis() % 1000, 0, 1000, 0,   width);  
   
  push();
  noStroke();
  fill (255,150,50);
  ellipse(width / 2, height / 2, millisValue,     millisValue);
  pop();
    
  push();
  noStroke();
  fill(255,215,0);
  ellipse(width / 2, height / 2, hourValue, hourValue);
  pop();
  
  push();
  noStroke();
  fill(150,200,50);
  ellipse(width / 2, height / 2, minValue, minValue);
  pop();
  
  push();
  noStroke();
  fill (0,200,255);
  ellipse(width / 2, height / 2, secValue, secValue);
  pop();
 
}


  
  
  



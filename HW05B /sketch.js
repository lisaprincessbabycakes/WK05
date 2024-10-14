let circles = [];
let rectX = 200;
let rectY = 100;
let rectWidth = 100;
let rectHeight = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220,0,200);
 
  
  for (let circle of circles) {
    fill(0, 255, 0);
    ellipse(circle.x, circle.y, 10, 10); 
    
   rect(mouseX - rectWidth / 2, mouseY - rectHeight / 2, rectWidth, rectHeight);
  }
}

function mousePressed() {
  circles.push(createVector(mouseX, mouseY));

 
  
}





  
  
  



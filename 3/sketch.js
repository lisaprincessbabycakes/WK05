// TODO: animation across the screen
//       wrap around
//       bounce


let x;


function setup() {
  createCanvas(windowWidth, windowHeight);
  // for (let x = 0; x < width; x += 2) {
  // }
  x = 0 ;
 
}

function draw() {
 background(20);

// draw stuff
let xpos = 10 * frameCount;
ellipse(xpos % width, height / 2, 100);

// update some parameter 

  // x = x + 10;

  //check if need ot reset x

  // if(x>width){
  //   x=0;
  // }

  

}
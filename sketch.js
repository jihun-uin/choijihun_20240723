let px, py;          
let pd = 30;          
let x = 50;
let y = 200;
let wallX = 300;
let wx = 200, wy = 150, ww = 50, wh = 100;

let dx = [100, 200, 300, 400, 500]; 
let dy = [150, 250, 100, 300, 200]; 
let dSize = 15;              
let dActive = [true, true, true, true, true]; 

let score = 0;

/*
function setup() {
  createCanvas(600, 400);
  px = width / 2;
  py = height / 2;
}

function draw() {
  background(30);
  stroke(255,0,0);
  strokeWeight(4);
  line(wallX,0,wallX,height);
  fill(255, 255, 255);
  textSize(20);
  text("점수: " + score, 20, 20);

  if (keyIsDown(LEFT_ARROW)) px -= 3;
  if (keyIsDown(RIGHT_ARROW)) px += 3;
  if (keyIsDown(UP_ARROW)) py -= 3;
  if (keyIsDown(DOWN_ARROW)) py += 3;

  fill(255, 255, 0);
  ellipse(px, py, pd); 
  
  for (let i = 0; i < 5; i++) {
    if (dActive[i] === true) {
      fill(255, 100, 100);
      ellipse(dx[i], dy[i], dSize);

      let distance = dist(px, py, dx[i], dy[i]);

      
      if (distance < (pd / 2) + (dSize / 2)) {
        dActive[i] = false;
        score = score + 1;
      }
    }
  }
}
*/


function movePlayer(nx, ny) {
 if (!(nx > wx && nx < wx + ww && ny > wy && ny < wy + wh))
  {
     x = nx;
     y = ny;
  }
}

function setup(){
  createCanvas(600,400);
}

function draw(){
  background(220);
  color(2);
  stroke(255,0,0);
  strokeWeight(4);
  line(wallX, 0, wallX, height);
  if (keyIsDown(RIGHT_ARROW)) {
    if (x + 25 < wallX) {
      noStroke();
      fill(255, 255, 0);
      ellipse(x, y, 50, 50);
      x += 5;
    }
  }

  if (keyIsDown(LEFT_ARROW)) {
     if (x > 0) {
      noStroke();
      fill(255, 255, 0);
      ellipse(x, y, 50, 50);
      x -= 5;
    }
  }

  if (keyIsDown(UP_ARROW)) {
     if (y > 0) {
      noStroke();
      fill(255, 255, 0);
      ellipse(x, y, 50, 50);
      y -= 5;
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
     if (y < 360) {
      noStroke();
      fill(255, 255, 0);
      ellipse(x, y, 50, 50);
      y += 5;
    }
  }
  
  noStroke();
  fill(255, 255, 0);
  arc(x,y,45,45,PI/4,1.7*PI);


}

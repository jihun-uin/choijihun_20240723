let px, py;          
let pd = 30;          
let x = 50;
let y = 350;
let wx = 200, wy = 150, ww = 50, wh = 100;
let map;
let score = 0;
let energy = 3;

let walls =[
  {x: 0, y: 0, w: 150, h: 300},
  {x: 150, y: 250, w: 40, h: 50},
  {x: 0, y: 400, w: 200, h: 50},
  {x: 0, y: 400, w: 130, h: 300},

  {x: 870, y: 0, w: 150, h: 300},
  {x: 800, y: 250, w: 40, h: 50},
  {x: 800, y: 400, w: 200, h: 50},
  {x: 870, y: 400, w: 130, h: 300},
]

let dots = [];

function movePlayer(nx, ny) {
 if (!(nx > wx && nx < wx + ww && ny > wy && ny < wy + wh))
  {
     x = nx;
     y = ny;
  }
}

function preload()
{
  map = loadImage("Map.png");
}

function setup(){
  createCanvas(1000,700);
}

function canMove(nx, ny) {
  if(ny>320 && ny<380){
    return true;
  }

  if(nx<0||nx>1000||ny<50||ny>650)
  {
    return false;
  }
  for(let w of walls){
    if(
      nx +15>w.x &&
      nx -15<w.x + w.w &&
      ny +15>w.y &&
      ny -15<w.y + w.h
    ){
      return false;
    }
  }
  
  return true;
}


function movePacman()
{
  let nx = x;
  let ny = y;
  if (keyIsDown(RIGHT_ARROW)) {
    if(canMove(x + 5, y))
    {
      noStroke();
      fill(255, 255, 0);
      ellipse(x, y, 50, 50);
      x += 5;
    }

  }

  if (keyIsDown(LEFT_ARROW)) {
    if(canMove(x - 5, y))
    {
      noStroke();
      fill(255, 255, 0);
      ellipse(x, y, 50, 50);
      x -= 5;
    }
  }
  
  if (keyIsDown(UP_ARROW)) {
    if(canMove(x, y - 5))
    {
      noStroke();
      fill(255, 255, 0);
      ellipse(x, y, 50, 50);
      y -= 5;
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    if(canMove(x, y + 5))
    {
      noStroke();
      fill(255, 255, 0);
      ellipse(x, y, 50, 50);
      y += 5;
    }
  }

  if (ny>320 && ny<380 && nx <-20)
  {
    x = 1000;
    y = ny;
    return;
  }
  
  if (ny>320 && ny<380 && nx >1050)
  {
    x = 0;
    y = ny;
    return;
  }

  noStroke();
  fill(255, 255, 0);
  arc(x,y,45,45,PI/4,1.7*PI);
}

function drawDot()
{
  for(let i=80; i<250; i+=40)
  {
    dots.push({x: i, y: 350});
  }
  for(let i=50; i<600; i+=40)
  {
    dots.push({x: 230, y:i});
  }

  fill(255);
  noStroke();

  for(let d of dots)
  {
    ellipse(d.x, d.y, 10, 10);
  }
}

function scoreCount()
{
  
}

function draw(){
  background(map);
  movePacman();
  drawDot();
  text("Score: " + score, 880,20);
  text("Energy: "+ energy,940,20);
}
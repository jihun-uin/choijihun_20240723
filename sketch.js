let px, py;          
let pd = 30;          
let x = 50;
let y = 350;
let wx = 200, wy = 150, ww = 50, wh = 100;
let map;

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

  if(nx<0||nx>1000||ny<0||ny>700)
  {
    return false;
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

function draw(){
  background(map);
  movePacman();
}
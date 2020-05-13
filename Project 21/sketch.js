var wall, thickness;
var bullet, speed, weight;

function setup() 
{
  createCanvas(1600,400);

  thickness = random(22, 83);
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = "aqua";

  speed = random(223, 321);
  weight = random(30, 52);
}

function draw() {
  background("black"); 
  bullet.velocityX = speed;
if(wall.x-bullet.x < (bullet.width + wall.width)/2)
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
}  
if(damage < 33) 
  {
    wall.shapeColor = color(0, 225, 0);
  } 
if(damage > 33) 
  {
    wall.shapeColor = color(225, 0, 0);
  }

drawSprites();
}
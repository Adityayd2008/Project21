var bullet;
var wall;
var speed;
var weight;
var thickness ; 



function setup() 
{
  speed= random(223,321);
  weight = random(30,53);
  thickness = random (22,83)
  createCanvas(1600,400);

   bullet = createSprite(50,200,50,10);
   bullet . shapeColor = (255);
  

   bullet.velocityX=speed;
   
   wall = createSprite (1500,200,thickness,height/2);
   wall.shapeColor = color(80,80,80);
 
  


}

function draw() 

{

  background(0);  

  if(wall.x - bullet.x < bullet.width/2 + bullet.width/2)

  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
   
    if (damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }

  }
  drawSprites();
}
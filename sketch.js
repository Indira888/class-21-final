var fixedRect, movingRect;

var gameObject1,gameObject2,gameObject3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 5;
  
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;

  /*gameObject1 = createSprite(900, 500, 50, 80);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;
  gameObject1.velocityY = -5;

  gameObject2 = createSprite(800,700,80,30);
  gameObject2.shapeColor = "green";
  gameObject2.debug = true;

  gameObject3 = createSprite(500,400,80,30);
  gameObject3.shapeColor = "green";
  gameObject3.debug = true;
  gameObject3.velocityY = 5;
*/
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
bounceOff(movingRect,fixedRect);
  
  drawSprites();
}


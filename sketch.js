var fixedRect, movingRect;
var cardboard, boxcap;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  cardboard = createSprite (200,500,60,60);


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;



  if (isTouching(cardboard,movingRect)){
    fixedRect.velocityX = 3;
    fixedRect.shapeColor = "grey";

    
  }
  
  if (isTouching(fixedRect,movingRect)){
    fixedRect.velocityX = -3;
    fixedRect.shapeColor = "yellow";
  }
  drawSprites();
}

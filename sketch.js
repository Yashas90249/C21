var fixedRect,movingRect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 60,70);
  movingRect= createSprite(400, 200, 80, 30);
gameObject1= createSprite(400,200,60,70);
gameObject2= createSprite(600, 200,60,70);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(sensor(movingRect,gameObject2))

{
  movingRect.shapeColor="red";
  gameObject2.shapeColor="red";

}
else if (sensor(movingRect,gameObject1)){
  movingRect.shapeColor="red";
  gameObject1.shapeColor="red";
}
else if(sensor(movingRect,fixedRect)){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{
  
  movingRect.shapeColor="green";
gameObject2.shapeColor="green";
gameObject1.shapeColor = "green";
fixedRect.shapeColor = "green";

}
  drawSprites();
}


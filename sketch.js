var wall, car;

var speed,weight;




function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

speed=random(55,90);
weight=random(400,1500);

car=createSprite(100,200,50,50);
car.velocityX=speed;
car.shapeColor='grey';

wall=createSprite(700,200,60,height/2);
wall.shapeColor='grey';
}

function draw() {
background("black"); 

if(wall.x-car.x<(car.width+wall.width)/2){


car.velocityX=0;
var deformation=0.5 * weight * speed * speed / 22500;

if (deformation>180){
car.shapeColor='red';
wall.shapeColor='red';
}

if(deformation < 180 && deformation>100){
car.shapeColor='yellow';
wall.shapeColor='yellow';
}

if(deformation<100){
  car.shapeColor='green';
  wall.shapeColor='green';
}








}






  drawSprites();
}
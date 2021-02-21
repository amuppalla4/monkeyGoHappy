var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 600);
  monkey = createSprite(150, 500, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.3

  ground = createSprite(300, 580, 1000, 20)
  ground.velocityX = -3
  foodGroup=new Group()
  obstacleGroup=new Group()
  
}


function draw() {
  background("green");
  textSize(22)
  strokeWeight(4)
  stroke("yellow")
  text("survivalTime"+survivalTime,200,50)
  
  survivalTime=Math.round(frameCount/30)
  
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8
  
  if (ground.x < 0) {
ground.x=ground.width/2
  }
  if(monkey.isTouching(obstacleGroup)){
    ground.velocityX=0
    obstacleGroup.setVelocityXEach(0)
    foodGroup.setVelocityXEach(0)
    
  }
  monkey.collide(ground);
  SpawnObstacle();
  SpawnFood();
  drawSprites();
}

function SpawnFood(){
  if(frameCount%80===0){
    var banana=createSprite(600,random(120,200))
    banana.addImage("banana",bananaImage)
    banana.scale=0.3
    banana.velocityX=-3
    banana.lifetime=180
    foodGroup.add(banana)
  }
  
}
function SpawnObstacle(){
  if(frameCount%80===0){
    var obstacle=createSprite(600,530)
    obstacle.addImage("obstacle",obstaceImage)
    obstacle.scale=0.3
    obstacle.velocityX=-3
    obstacle.lifetime=180
    obstacleGroup.add(obstacle)
  }
}
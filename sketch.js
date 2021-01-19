const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world
var cam
var platforms=[]
var manStick


function setup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)

  createCanvas(1000,800);

  var x=0
  var y=0
  var w=0
  while(x<3000){
    y=random(400,750)
    w=random(200,400)
    platforms.push(new Plat(x,y,w,100))
    x+=random(400,700)
  }
  manStick=new Man(0,10,30,60)
  cam=createSprite(500, 400, 25, 25);
}

function draw() {
  background("lightblue");  

  for(var l=0;l<platforms.length;l++){
    platforms[l].display()
  }
  camera.x=cam.x
  if(keyDown(RIGHT_ARROW)){
    cam.x+=5
  }
  if(keyDown(LEFT_ARROW)){
    cam.x-=5
  }
  manStick.display()
  drawSprites();
}
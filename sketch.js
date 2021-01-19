const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world
var platforms=[]
var manStick
var finnish

function preload() {
  finnish=loadImage("Images/Finnish Line.png")
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)

  createCanvas(windowWidth,800);

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
  tramp=new Trampo(0,10,80,30)
}

function draw() {
  background("lightblue");  

  for(var l=0;l<platforms.length;l++){
    platforms[l].display()
  }
  camera.x=manStick.body.position.x
  if(keyDown(RIGHT_ARROW)){
    manStick.man.mirrorX(1)
    manStick.body.position.x+=1
  }
  if(keyDown(LEFT_ARROW)){
    manStick.man.mirrorX(-1)
    manStick.body.position.x-=1
  }
  if(keyWentUp("space")){
    Matter.Body.applyForce(manStick.body, manStick.body.position, {
      x: 0,
      y: -50
      });
  }
  image(finnish,3200,0,60,800)
  manStick.display()
  tramp.display
  drawSprites();
}
// adding sounds
// make the end state better - press R to play new level,
// add a background 
// home state - to explain the gameplay 
// hearts/ counter for fails
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine,world
var platforms=[],platsGroup
var manStick
var finnish
var Howek=null
var check=1
var trampsGroup,crc=[]

function preload() {
  finnish=loadImage("Images/Finnish Line.png")
  ci = loadImage("Images/the circle thing.png")
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)

  createCanvas(windowWidth,800);

  platsGroup = createGroup();
  trampsGroup = createGroup();

  var x=0
  var y=0
  var w=0
  var rand=0
  while(x<3000){
    rand=random(400,700)
    y=random(400,750)
    w=random(200,400)
    platforms.push(new Plat(x,y,w,100))
    if(rand>600){
      crc.push(createSprite(x+rand/2,50,10,10))
    }else if(rand<=600 && rand>500){
      tramp=new Trampo(x,y-50,80,30)
    }
    x+=rand
  }
  for(var i in crc){
    crc[i].addImage(ci)
    crc[i].scale=0.1
  }
  console.log(platsGroup)
  manStick=new Man(0,10,30,60)
    
}

function draw() {
  background("lightblue");  

  for(var l=0;l<platforms.length;l++){
    platforms[l].display()
  }
  camera.x=manStick.body.position.x
  camera.y=manStick.body.position.y
  if(keyDown(RIGHT_ARROW)){
    manStick.man.mirrorX(1)
    check=1
    Matter.Body.translate(manStick.body,{x:5,y:0})
  }
  if(keyDown(LEFT_ARROW)){
    check=-1
    manStick.man.mirrorX(-1)
    Matter.Body.translate(manStick.body,{x:-5,y:0})
  }
  if(keyWentDown(UP_ARROW)&&manStick.man.isTouching(platsGroup)){
    Matter.Body.applyForce(manStick.body, manStick.body.position, {
      x: 0,
      y: -100
      });
  }
  image(finnish,3200,0,60,800)
  if(manStick.body.position.x>3230){
    textSize(100)
    stroke("purple")
    text("You Win 😄",200,400)
    camera.x=windowWidth/2
    camera.y=400
    manStick.man.destroy()
    World.remove(world,manStick.body)
  }
  manStick.display()
  tramp.display()
  if (Howek!==null){
    Howek.display()
  }
  if(manStick.body.position.y>800){
    Matter.Body.setAngle(manStick.body,0)
    Matter.Body.setAngularVelocity(manStick.body,0)
    Matter.Body.setPosition(manStick.body,{x:0,y:0})
  }
  drawSprites();
  if(manStick.man.isTouching(trampsGroup)){
    Matter.Body.applyForce(manStick.body, manStick.body.position, {
      x: 50,
      y: -100
      });
  }
}
function keyPressed(){
  if (keyCode===32){
    if(Howek=== null){
      //man at x pos .. for loop ... crc[i].x - man.x < 300 ... then shoot the hook
      for(var i in crc){
      console.log(crc[i].x - manStick.body.position.x)
        if(crc[i].x - manStick.body.position.x < 400){
          Howek=new Ho0k(manStick.body,{x:crc[i].x,y:50})
        }
      }
      //min(5,3) .. return 3 to you
      //3 circle points .. 
      Howek.shoot()
    }else{
      World.remove(world,Howek.sling)
      Howek=null
    }
  }
}
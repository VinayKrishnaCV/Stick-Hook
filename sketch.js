// Make platform and trampoline display as Sprites
// Make groups for the tramps and plats Sprites
// So in the constructor you will add sprite to group .. just like adding body to world.
// Make the man ani play only when he is touching platsGroup
// Starting towards making states - end state ->When the man falls below the canvas or like some y pos ... reset his position to the first platform
//by mistake i pasted it sorry i can hear you i muted yes mam i will search for images for dots to grapple


// So when we make dots - we ll probably make small circular static bodies .. and just modify our sling to connect to two bodies-yes mam yes mam
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine,world
var platforms=[]
var manStick
var finnish
var Howek=null
var check=1

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
    check=1
    Matter.Body.translate(manStick.body,{x:5,y:0})
  }
  if(keyDown(LEFT_ARROW)){
    check=-1
    manStick.man.mirrorX(-1)
    Matter.Body.translate(manStick.body,{x:-5,y:0})
  }
  if(keyWentUp(UP_ARROW)){
    Matter.Body.applyForce(manStick.body, manStick.body.position, {
      x: 0,
      y: -50
      });
  }
  image(finnish,3200,0,60,800)
  manStick.display()
  //tramp.display()
  if (Howek!==null){
    Howek.display()
  }
  drawSprites();
}
function keyPressed(){
  if (keyCode===32){
    if(Howek=== null){
      var Posx
      if(check===1){
        Posx=manStick.body.position.x+300
      }else if(check===-1){
        Posx=manStick.body.position.x-300
      }
      Howek=new Ho0k(manStick.body,{x:Posx,y:0})
      Howek.shoot()
      console.log("it was your  fault")
    }else{
      World.remove(world,Howek.sling)
      Howek=null
    }
  }
}
// So when we make dots - display circle image at the points .. and just modify our sling to connect to two bodies
// spawn random points, attach the man to nearest point.
//when finish line is crossed, display message and reload window.
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
var trampsGroup

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
  while(x<3000){
    y=random(400,750)
    w=random(200,400)
    platforms.push(new Plat(x,y,w,100))
    x+=random(400,700)
  }
  console.log(platsGroup)
  manStick=new Man(0,10,30,60)
  var rondam = Math.round(random(1,3))
  console.log(rondam)
  var ypos = platforms[rondam].body.position.y - platforms[rondam].height/2
  tramp=new Trampo(platforms[rondam].body.position.x,ypos,80,30)

  var rodman = Math.round(random(rondam+2,platforms.length))
  console.log(rodman)
  var ypos = platforms[rodman].body.position.y - platforms[rodman].height/2
  tramp=new Trampo(platforms[rodman].body.position.x,ypos,80,30)

  //platforms.length -- 6,7 .. first tramp generate random(2,4) - r .. second(r+2,platfroms.length)

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
  if(keyWentUp(UP_ARROW)&&manStick.man.isTouching(platsGroup)){
    Matter.Body.applyForce(manStick.body, manStick.body.position, {
      x: 0,
      y: -50
      });
  }
  image(finnish,3200,0,60,800)
  //image(ci,3200,0,60,800)
  manStick.display()
  tramp.display()
  if (Howek!==null){
    Howek.display()
  }
  if(manStick.body.position.y>800){
    Matter.Body.setPosition(manStick.body,{x:0,y:0})
  }
  drawSprites();
  if(manStick.man.isTouching(trampsGroup)){
    Matter.Body.applyForce(manStick.body, manStick.body.position, {
      x: 0,
      y: -100
      });
  }
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
      //min(5,3) .. return 3 to you
      //3 circle points .. 
      Howek.shoot()
    }else{
      World.remove(world,Howek.sling)
      Howek=null
    }
  }
}
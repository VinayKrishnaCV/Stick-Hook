class Man{
  constructor(x, y, width, height) {
    var options = {
      'isStatic':false,
      'restitution':0.1,
      'friction':1.0,
      'density':1.0
    }
    this.visiblity=255
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.man=createSprite(x,y,width,height)
    this.ani=loadAnimation("Images/Running Man/BreakDown/1.png","Images/Running Man/BreakDown/2.png",
    "Images/Running Man/BreakDown/3.png","Images/Running Man/BreakDown/4.png","Images/Running Man/BreakDown/5.png",
    "Images/Running Man/BreakDown/6.png","Images/Running Man/BreakDown/7.png","Images/Running Man/BreakDown/8.png",
    "Images/Running Man/BreakDown/9.png","Images/Running Man/BreakDown/10.png","Images/Running Man/BreakDown/11.png",
    "Images/Running Man/BreakDown/12.png","Images/Running Man/BreakDown/13.png")
    //this.man.addAnimation("Runn",this.ani)
    this.colour=color(random(1,255),random(1,255),random(1,255))
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position
    this.man.x=pos.x
    this.man.y=pos.y
    rectMode(CENTER)
    //rect(pos.x,pos.y,this.width,this.height)
  }
}


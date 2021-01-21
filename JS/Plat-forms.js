class Plat {
    constructor(x,y,width,height) {
      var options = {
       isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Plat=loadImage("Images/PlatForm.png")
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      rectMode(CENTER)
      rect(pos.x,pos.y,this.width,this.height)
      imageMode(CENTER);
      image(this.Plat,pos.x, pos.y, this.width, this.height);
      pop();
    }
  }
class Trampo {
    constructor(x,y,width,height) {
      var options = {
       isStatic: false,
       restitution: 2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //this.Trampo=loadImage("Images/.png")
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      imageMode(CENTER);
      //image(this.Plat,pos.x, pos.y, this.width, this.height);
      pop();
    }
  }
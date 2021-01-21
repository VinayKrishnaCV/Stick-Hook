class Trampo {
    constructor(x,y,width,height) {
      var options = {
       isStatic: true,
       restitution: 2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Trampo=loadImage("Images/trampoline e.png")
      World.add(world, this.body);
    }
    display(){t
      push();
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.Trampo,pos.x, pos.y, this.width, this.height);
      pop();
    }
  }
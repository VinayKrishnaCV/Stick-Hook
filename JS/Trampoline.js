class Trampo {
    constructor(x,y,width,height) {
      var options = {
       isStatic: true,
       restitution: 2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.trampo=createSprite(x,y,width,height)
      this.TrampoImg=loadImage("Images/tampoline e.png")
      this.trampo.addImage(this.TrampoImg);
      this.trampo.scale=0.2
      this.trampo.debug=true
      this.trampo.setCollider("rectangle",0,-150,width/0.2-100,height/0.2)
      trampsGroup.add(this.trampo)
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position
      push();
      rectMode(CENTER)
      rect(pos.x,pos.y,this.width,this.height)
      var pos =this.body.position;
      pop();
    }
  }
class Plat {
    constructor(x,y,width,height) {
      var options = {
       isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Plat = createSprite(x,y,width,height)
      this.Plat.visible = false;
      this.Plat.debug = true;
      this.PlatImg=loadImage("Images/PlatForm.png")
      //this.Plat.addImage(this.PlatImg);
      //this.Plat.scale=1
      platsGroup.add(this.Plat)
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      rectMode(CENTER)
      rect(pos.x,pos.y,this.width,this.height)
      imageMode(CENTER)
      image(this.PlatImg,pos.x,pos.y-20,this.width,this.height)
      pop();
    }
  }
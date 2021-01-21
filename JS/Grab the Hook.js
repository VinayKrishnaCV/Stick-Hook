class Ho0k{
    constructor(b1,point){
        var options={
            bodyA:b1,
            pointB:point,
            stiffness:1,
            length:300
        }
        this.sling=Constraint.create(options);
        
    }
    display(){
        push()
        var p1 = this.sling.bodyA.position
        var p2 = this.sling.pointB
        stroke(255);
        strokeWeight(5);
        line(p1.x,p1.y,p2.x,p2.y)
        pop()
    }
    shoot(){
        World.add(world,this.sling);
    }
}
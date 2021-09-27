class Plinko{
        constructor(x,y,r){
            var options={
                restitution:0.4
            }
            this.r=r;
            this.body=Bodies.circle(x,y,this.r,options);
            World.add(world,this.body);
        }
    display(){
    
        var pos=this.body.position;
    
      push();
      ellipseMode(RADIUS);
      ellipse(this.x,this.y,this.r,this.r);
      pop();
    }
    
};
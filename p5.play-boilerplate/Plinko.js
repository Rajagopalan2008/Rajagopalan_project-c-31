class Plinko{
        constructor(x,y,r){
            var options={
                restitution:0.4
            }
            this.r=r;
            this.body=bodies.circle(x,y,this.r,options);
            world.add(world,this.body);
        }
    display(){
    
        var pos=this.body.position;
    
      push();
      tanslate(pos.x,pos.y);
      noStroke();
      ellipseMode(RADIUS);
      ellipse(this.x,this.y,this.r,this.r);
      pop();
    }
    
};
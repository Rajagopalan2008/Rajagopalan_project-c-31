//to create the constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//to create the variables
var ground1,engine,world;
var divisionHeight=300;

function setup() {

     engine=Engine.create();
      world=engine.world;

  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

//to create the objects
ground1=new Ground(0,795,1000,20);
}

//Arrays
var particles=[];
var plinkos=[];
var divisions=[];

function draw() {

  background("black");  
  drawSprites();
  Engine.update(engine)
  
  //to display the bodies
  ground1.display();

if(frameCount % 90 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}
//to loop the creations of divisions
for(var c=0;c<=this.width; c=c+80){
    divisions.push(new divisions(c,height-divisionHeight/2,10,divisionHeight));
}

for(var i = 40;i <= this.width;i += 50){
    plinkos.push(new Plinko(i,75));
}
for(var i = 15;i<=this.width-10;i += 50){
plinkos.push(new Plinko(i,175));
}
for(var i=-10;i<=this.width-10;i+=50){
    plinkos.push(new Plinko(i,275));  
}
for(var i=-35;i<=this.width-10;i+=50){
    plinkos.push(new Plinko(i,375));  
      
}

for(var j = 0 ;j < particles.length; j++){
    particles[j].display();
}
for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
}
for(var l = 0; l < divisions.length; l++){
    divisions[l].display();
}
}

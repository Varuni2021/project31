var Particles = [];
var Plinkos = [];
var Divisions = [];
var divisionHeight = 300;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  createCanvas(480,800);
  

  if(frameCount%60===0){
    Particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  for(var j = 40; j<=width; j=j+50)
      {
          plinko.push(new Plinko(j,75));
      }
      for(var j = 15; j<=width-10; j=j+50)
      {
          plinko.push(new Plinko(j,175));
      }
      for(var j = 40; j<=width; j=j+50)
      {
          plinko.push(new Plinko(j,275));
      }
      for(var j = 15; j<=width-10; j=j+50)
      {
          plinko.push(new Plinko(j,375));
      }


  ground = new Ground(600,height,1200,20);
  division = new Division(600,height,120,20);
  plinko = new Plinko(50,680,10,10);

}

function draw() {
    Engine.update(engine);
  background(255,255,255);  

  ground.display();
  division.display();
  plinko.display();
    

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
}

for(var k = 0; k < divisions.length; k++){
  divisions[k].display();

}


 for (var k = 0; k<=width; k = k+80) {
  division.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}

}
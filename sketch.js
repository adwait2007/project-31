const Engine = Matter.Engine;
  const  World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var plinkos2=[];
var plinkos3=[];
var plinkos4=[];

var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var e= 50; e <=width-10; e=e+50) 
    {
    
       plinkos2.push(new Plinko(e,175));
    }

     for (var f = 75; f <=width; f=f+50) 
    {
    
       plinkos3.push(new Plinko(f,275));
    }

     for (var g = 50; g <=width-10; g=g+50) 
    {
    
       plinkos4.push(new Plinko(g,375));
    }

    

    
}
 


function draw() {
  background("black");
 
  Engine.update(engine);
 
  
  for (var j = 0; j < plinkos.length; j++) {
     
    plinkos[j].display();
    
  }

  for (var e = 0; e < plinkos.length; e++) {
     
    plinkos2[e].display();
    
  }

  for (var f = 0; f < plinkos.length; f++) {
     
    plinkos3[f].display();
    
  }

  for (var g = 0; g < plinkos.length; g++) {
     
    plinkos4[g].display();
    
  }

   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
   
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
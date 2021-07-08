var drops=[]

function preload(){
    
}

function setup(){
   engine=Matter.Engine.create()
   world=engine.world
   createCanvas(400,700);
   if(frameCount%150===0){
for(var i=0; i<150; i++){
drops.push(new Drops(random(0,400),random(0,400)))
}
   }
    
}

function draw(){
    background("lightblue")
  Matter.Engine.update(engine)
  for(var i=0;i<150;i++){
drops[i].showDrop();
drops[i].update();

  }
}   


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;
 
 
}

function draw(){
    background("black");
    Engine.update(engine);
    
    
    
}

function mouseDragged(){
    
}

    function mouseReleased(){
       
    }

    function keyPressed(){
       
      }


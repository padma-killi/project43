var hr, min, sec;
var scAngle, mnAngle, hrAngle;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
  createCanvas(800, 800);
  
	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(5,5,55);

  hr = hour();
  min = minute();
  sc = second();

  console.log(hr);
  
  angleMode(DEGREES);

  translate(400,400);
  rotate(-90);

  scAngle = map(sc, 0, 60, 0, 360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,200,0); 
  pop();
  strokeWeight(7)
  stroke(255,0,0)
  noFill();
  arc(0,0,500,500,0,scAngle);
  

  mnAngle = map(min,0,60,0,360);
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(5);
  line(0,0,100,0);
  pop();
  strokeWeight(5);
  stroke(0,255,0);
  noFill();
  arc(0,0,400,400,0,mnAngle);

  hrAngle = map(hr%12,0,12,0,360);
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(6);
  line(0,0,50,0);
  pop();
  

  drawSprites();
 
}
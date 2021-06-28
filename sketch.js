
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

var wedge;
var angle = 60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

var wedge_option = {
isStatic: true

}
wedge = Bodies.rectangle(300,150,70,10,wedge_option);
World.add(world,wedge);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("white");
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
push();
  fill("blue");
  translate(wedge.position.x,wedge.position.y);
  rotate(angle);
  rect(0,0,20,20);

pop();
angle+= 1;
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var object , ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world= engine.world;

var object_options ={
isStatic : true
}

  object = Bodies.rectangle(200,100,50,50,object_options);
  World.add(world ,object )
  

  var ball_options = {
restitution : 1.0
  }
  ball= Bodies.circle(400,100,20, ball_options)
  World.add(world, ball)
}

function draw() {
  background("red");  
 rectMode(CENTER);
 Engine.update(engine);
 rect(400, 200, 50, 50);
 rect(object.position.x, object.position.y,50,50);
ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
  //drawSprites();
}
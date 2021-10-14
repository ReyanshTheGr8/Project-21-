const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body  = Matter.Body;

var ball,ground_Obj,left_Side,right_Side;
var world;
var radius = 40;

function setup()
{
createCanvas(1600,700);
rectMode(CENTER);

engine = Engine.create();
world = engine.world;

var ball_options=
{
isStactic:true,
restitution:0.3,
friction:0,
density:1.2	
}

ball = Bodies.circle(260,100,radius/2,ball_options);
World.add(world,ball);

ground_Obj = new ground(width/2,670,width,20);
left_Side = new ground(1100,600,20,120);
right_Side = new ground(1350,600,20,120);

Engine.run(engine);
}

function draw()
{
rectMode(CENTER);
background(0);

ellipse(ball.position.x,ball.position.y,radius,radius);

ground_Obj.display();
left_Side.display();
right_Side.display();
}

function keyPressed()
{
if(keyDown === UP_ARROW)
{
Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});	
}	
}
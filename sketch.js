
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var engine, world;
var ground, wallL, wallR;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:0.5,
	}

	ball = Bodies.circle (100,350,25,ball_options)
	World.add(world, ball);

	ground = new Ground (0,650,800,10);
	wallL = new Ground (600,620,10,30);
	wallR = new Ground (700,620,10,30);

 //	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(35);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 25);
  ground.show();
  wallL.show();
  wallR.show();

  Engine.update(engine);
  
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		Body.applyForce (ball,{x:0, y:0},{x:45, y:-30})
	}
}


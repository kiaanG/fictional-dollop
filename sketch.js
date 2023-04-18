var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options={
		isStatic :false,
		restitution :8,
		friction:8,
		density:1.2
		
		

	engine = Engine.create(),
	world = engine.world,

	//Create the Bodies Here.
	ball=Bodies.circle(200,100,20,ballOptions),


	Engine,run(engine);
  
}
function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05, y:0})
	}
}
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  groundlObj=new ground(widh/2,680,width,28);
  leftSide = new ground(1100,600,20,120);


  drawSprites();
 
}




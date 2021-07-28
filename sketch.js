
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var left;
var right;


function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground =new Ground(width/2,400,width,20);
    right = new Ground(750,360,10,70);
    left = new Ground(600,360,10,70);

	var ball_options = {
		isStatic:false,
		restitution:0,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(100,100,20,ball_options);
	
    World.add(world,ball);

	fill("white");
	

  rectMode(CENTER);
  ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 

  ellipse(ball.position.x,ball.position.y,20);

	ground.show();
	left.show();
	right.show();
	Engine.update(engine);
  drawSprites();
  
  keyPressed();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-5});
	}

	if(keyDown(RIGHT_ARROW)){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:0});

	}

	if(keyDown(LEFT_ARROW)){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:-2,y:0});

	}
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinImg, dustbin;
var engine, world;

var paper 

function preload(){
 dustbinImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   paper = new Paper(100, 650, 80);
   paper.scale = 1;

    ground = new Ground(400, 680, 800, 20);

    dustbin = createSprite(610,600,20,20);
    dustbin.addImage(dustbinImg);
    dustbin.scale = 0.4;
  
    leftSide = new Dustbin(550, 620, 20, 100);
    bottom = new Dustbin(610, 660, 100, 20);
    rightSide = new Dustbin(670, 620, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("lightblue");
  
  Engine.update(engine);

  paper.display();

  ground.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:60, y: -60})
  }
}
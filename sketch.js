var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ground1,ground2,ground3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	/*ground1=createSprite(width/2,height-50,200,20)
	ground1.shapeColor=color("red")
	
	ground2=createSprite(300,585,20,150)
	ground2.shapeColor=color("red")
	
	ground3=createSprite(500,585,20,150)
	ground3.shapeColor=color("red")
	*/

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,isStatic:true});
	
	

	//Create a Ground
	ground1= Bodies.rectangle(width/2,height-40, 200,20, {isStatic:true} );
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground2 = Bodies.rectangle(300, 585, 20, 150 , {isStatic:true} );
	ground3 = Bodies.rectangle(500, 585, 20, 150 , {isStatic:true} );
 	World.add(world, ground);
	World.add(world,packageBody)
	World.add(world, ground1)
	World.add(world,ground2)
	World.add(world,ground3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  //keyPressed();
  //console.log(sleep.x)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.setStatic(packageBody,false);
	   packageBody.restitution = 0.4;
	 }
   }
   




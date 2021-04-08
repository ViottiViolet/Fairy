var starImg,bgImg;
var star, starBody;
var fairy, fairyimg1, fairyimg2, fairyimg3;
var music, mp3;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyimg1 = loadImage("images/fairy.png");
	fairyimg2 = loadImage("images/fairyImage1.png");
	fairyimg3 = loadImage("images/fairyImage2.png");
	mp3 = loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy = createSprite(400, 350, 20, 20);
	fairy.addAnimation("fairy", fairyimg2, fairyimg3);
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  Engine.update(engine);

  star.x= starBody.position.x 
  star.y= starBody.position.y 


  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.x > 470 && star.y > 470) {
	Matter.Body.setStatic(starBody,true);
  }

  keyPressed();
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
    else if (keyCode === LEFT_ARROW) {
		fairy.velocityX = -3;
	  } 
	else if (keyCode === RIGHT_ARROW) {
		fairy.velocityX = 3;
	  }
}

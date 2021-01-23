var PLAY = 1;
var END = 0;
var spaceship, spaceshipImg;
var obstacle;
var obstacleImg1, obstacleImg2,obstacleImg3,obstacleImg4,obstacleImg5 ;
var background12, backgroundImg;
var gameState = PLAY ;
var obstaclesGroup;
var bullet;
var bulletImg;
var bulletGroup;
var score = 0;
var gameOver, gameOverImg;
var button;
var bioDegradable;
var bioDegradableImg;





function preload() {
  
  
  
  spaceshipImg = loadImage("images/spaceship.png");
  //backgroundImg = loadImage("background2.jpeg");
  obstacleImg1 = loadImage("images/spacejunk.png");
  obstacleImg5 = loadImage("images/waste.png");
  obstacleImg3 = loadImage("images/plasticBottle.png");
  obstacleImg4 = loadImage("images/milkBottle.png");
  obstacleImg2 = loadImage("images/mask.png");
  bulletImg = loadImage("images/bullet.png");
  //gameOverImg =loadImage("gameOver.png")
  //restartImg =loadImage("restart.png")
  bioDegradableImg = loadImage("images/waste.png")
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //background12 = createSprite(300,300,600,600);
  //background12.addImage("background1", backgroundImg);
  //background12.scale = 4;
 
  
  spaceship = createSprite(windowWidth/2,windowHeight-150,50,50);
  
  
  spaceship.addImage("plane1", spaceshipImg);
  
  spaceship.scale = 0.3;

  //button = createButton('PLAY')
  //button.position(windowWidth/2,windowHeight-300)
  //button.size(125,90)
  //button.mousePressed()



  
  //title = createElement('h2','Space Ship Game')
  //title.position(windowWidth/2,100)
  //title.style("blue",color)
  

  

  
  
 
  
  obstaclesGroup = new Group();
  bulletGroup = new Group();
  
  //gameOver = createSprite(300,100);
  //gameOver.addImage(gameOverImg);
  //gameOver.scale = 0.5;
  
  //restart = createSprite(300,200);
  //estart.addImage(restartImg);
  //restart.scale = 0.5;
  
  
  
}

function draw() {
  background("black");
  
  
  createEdgeSprites();
  
  spaceship.velocityX = 0;
  
  
  if (gameState === PLAY) {
    
    //gameOver.visible = false;
    //restart.visible = false;

    //spaceship.visible = true;
  
    
    
   if(keyDown("right_arrow")){
     
    spaceship.velocityX = 10;
     
    }
    
     if(keyDown("left_arrow")){
     
      spaceship.velocityX = -10
    }
    
    spawnObstacle();
    spawnBio();
    
    
    
    
    //if (obstaclesGroup.isTouching(plane)) {
      
      //gameState = END;
    //}
    

    
    if (bulletGroup.isTouching(obstaclesGroup)) {
      
      for (var i = 0;i < obstaclesGroup.length; i++) {
        obstaclesGroup.get(i).destroy();
      }
    
      score=score+50
    }
    
       if (keyDown("space")) {
  
   createBullet();
  
}
    
      
    
  }
  
  
  //if (gameState == END) {
    
   // gameOver.visible = true;
    //restart.visible = true;
    
    //obstaclesGroup.setVelocityYEach(0);
    //bulletGroup.setVelocityYEach(0);
    //obstaclesGroup.setLifetimeEach(-1);
    
    
//if(mousePressedOver(restart)) {
     // reset();
    //}
  //}
    
    
    
  
  
  
  
  drawSprites();

  textSize(20)
  fill("red")
  text("Score: "+ score, 100,100);
}


function spawnObstacle() {
  if(frameCount % 60 === 0) {
    obstacle = createSprite(random(50,width-50),0,10,40);
    
    obstacle.velocityY = 5;

    var rand = Math.round(random(1,4))
      switch(rand) {
        case 1:obstacle.addImage(obstacleImg1)
        break;
        case 2:obstacle.addImage(obstacleImg2)
        break;
        case 3:obstacle.addImage(obstacleImg3)
        break;
        case 4:obstacle.addImage(obstacleImg4)
        default: break;
      }
    
    
    
    obstacle.scale = 0.2;
    
  
    obstaclesGroup.add(obstacle)
             
    
    obstacle.lifetime = 500;
    
    
    
  
    
   
  }
}

function spawnBio() {
  if (frameCount % 70 == 0) {
    bioDegradable = createSprite(random(50,width-50),0,10,40)

    bioDegradable.velocityY = 4;

    bioDegradable.addImage(bioDegradableImg)

    bioDegradable.scale = 0.2

    bioDegradable.lifetime = 300;
  }
}


function createBullet() {
  bullet= createSprite(windowWidth/2,windowHeight-195,5,10);
  console.log(bullet.y);
  
  bullet.addImage("bullet2",  bulletImg);
  bullet.velocityY = -6;
  bullet.scale = 0.3;
  bullet.x=spaceship.x
  bullet.lifetime =300;
  bulletGroup.add(bullet)
  return bullet;  
}

//function reset(){
  //gameState = "play";
  //gameOver.visible = false;
 // restart.visible = false;
  
  //obstaclesGroup.destroyEach();
  
 
  //score = 0;
  
//}

//function mousePressed() {

//}

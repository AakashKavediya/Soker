var player, target, obs1, obs2,obs3,obs4,obs5,obs6,obs7,obs8, edge,worm,score,wormgroup, background,wormImage,swampImage,playerImage,backImage;

function preload() {

  wormImage = loadImage("image/m1.png");
  swampImage = loadImage("image/m2.png");
  playerImage = loadImage("image/m3.png");
  backImage = loadImage("image/pngegg.png")
}

function setup() {
  createCanvas(600, 600);
  swamp = createSprite(300, 300);
  swamp.scale = 2.5;
  swamp.addImage(backImage);

  edge = createEdgeSprites();
  player = createSprite(50, 550, 30, 30);
  player.addImage(swampImage);
  player.scale=.03
  target = createSprite(550, 50, 30, 30);
  target.shapeColor = "blue";
  obs1 = createSprite(250, 200, 100, 30);
  obs1.shapeColor = "red";
  obs2 = createSprite(350, 400, 100, 30);
  obs2.shapeColor = "red";
  obs3 = createSprite(450, 200, 100, 30);
  obs3.shapeColor = "red";
  obs4 = createSprite(550, 400, 100, 30);
  obs4.shapeColor = "red";
  obs5 = createSprite(650, 200, 100, 30);
  obs5.shapeColor = "red";
  obs6 = createSprite(750, 400, 100, 30);
  obs6.shapeColor = "red";
  obs7 = createSprite(850, 200, 100, 30);
  obs7.shapeColor = "red";
  obs8 = createSprite(950, 400, 100, 30);
  obs8.shapeColor = "red";


  
    wormGroup= new Group();
  
  obs1.velocityX = -20;
  obs2.velocityX = -20;
  obs3.velocityX = -20;
  obs4.velocityX = -20;
  obs5.velocityX = 20;
  obs6.velocityX = 20;
  obs7.velocityX = 20;
  obs8.velocityX = 20;
}

function draw() {
  background("black");
  drawSprites();

  if (keyDown("up")) {
    player.y = player.y - 20;
  }
  if (keyDown("down")) {
    player.y = player.y + 20;
  }
  if (keyDown("left")) {
    player.x = player.x - 20;
  }
  if (keyDown("right")) {
    player.x = player.x + 20;
  }
  player.bounceOff(edge[0]);
  player.bounceOff(edge[1]);
  player.bounceOff(edge[2]);
  player.bounceOff(edge[3]);
  obs1.bounceOff(edge[0]);
  obs1.bounceOff(edge[1]);
  obs2.bounceOff(edge[0]);
  obs2.bounceOff(edge[1]);
  obs3.bounceOff(edge[0]);
  obs3.bounceOff(edge[1]);
  obs4.bounceOff(edge[0]);
  obs4.bounceOff(edge[1]);
  obs5.bounceOff(edge[0]);
  obs5.bounceOff(edge[1]);
  obs6.bounceOff(edge[0]);
  obs6.bounceOff(edge[1]);
  obs7.bounceOff(edge[0]);
  obs7.bounceOff(edge[1]);
  obs8.bounceOff(edge[0]);
  obs8.bounceOff(edge[1]);

  if(player.isTouching(obs1)) {
    obs1.velocityX = 0;
    textSize(30);
    text("You Loss",580,260);}
    // text("You loose", 200, 300);
    
  if(player.isTouching(obs1)) {
    obs1.velocityX = 0;
    textSize(30);
    text("You Loss",580,260);}

  if(player.isTouching(obs2)) {
    obs2.velocityX = 0;
    textSize(30);
    text("You Loss",580,260);}

  if(player.isTouching(obs3)) {
    obs3.velocityX = 0;
    textSize(30);
    text("You Loss",580,260);}

  if(player.isTouching(obs4)) {
    obs4.velocityX = 0;
    textSize(30);
    text("You Loss",580,260);}

  if(player.isTouching(obs5)) {
    obs5.velocityX = 0;
    textSize(30);
    text("You Loss",580,260);}

  if(player.isTouching(obs6)) {
    obs6.velocityX = 0;
    textSize(30);
    text("You Loss",580,260);}

  if(player.isTouching(obs7)) {
    obs7.velocityX = 0;
    textSize(30);
    text("You Loss",580,260);}

  if(player.isTouching(obs8)) {
    obs8.velocityX = 0;
    textSize(30);
    text("You Loss",580,260);
    }
    
  if(player.isTouching(target)){
    obs1.velocityX = 0;
    obs2.velocityX = 0;
    obs3.velocityX = 0;
    obs4.velocityX = 0;
    obs5.velocityX = 0;
    obs6.velocityX = 0;
    obs7.velocityX = 0;
    obs8.velocityX = 0;
    textSize(40)
    text("You Win",580,260)
    stroke("transparent")
  }


    // stroke("black")
    // noFill();
    // ellipse(600,280,40,30);
    player.x= mouseX;
    player.y= mouseY;

if(player.x<640 && player.x>570 && player.y<300 && player.y>250 ){
  text("NO CHEATING!!",230,150);
  player.x=50;
  player.y=550;
}

generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  // drawSprites();
  // textSize(30);
  // text("Worms destroyed:"+score,350,50);
}

function generateWorms(){
if(frameCount % 50===0){
  console.log(frameCount);
  var worm = createSprite(220,280,60,8);
  // worm.shapeColor="skyblue"
  worm.addImage("wormImage")
  worm.scale = 0.5;
  worm.velocityX=random(-10,10);
  worm.velocityY=random(-10,10);
  wormGroup.add(worm);
  }
}
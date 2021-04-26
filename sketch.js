
var enemy=[]

var missile;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var space_img

var count = 0;

var damage = 0;

function preload(){
  space_img=loadImage("Images/Space.png");
  rocket_img=loadImage("Images/Rocket.png");
  bullet_img=loadImage("Images/bullet.png");
  asteroid_img=loadImage("Images/Asteroid.png");
}
function setup(){

  var space = createSprite(windowWidth,windowHeight);
  space.addImage("space_img",space_img);
  space.scale = 2;
  console.log(space);
  space.velocityX = -2;
  space.x = space.width / 2;
  
  createCanvas(windowWidth,windowHeight);
  rocket=new Rocket(200,200,windowWidth-2,windowHeight-5);

  /*var rocket = createSprite(200,270);
  rocket.setAnimation("rocket_img");
  rocket.scale = 0.4;
  rocket.debug = false;
  rocket.setCollider("circle",0,230,120);
  var asteroid; 

  
var asteroidGroup = createGroup();
var missileGroup = createGroup();
*/
  
  for(var i=0; i<10; i++){
    enemy.push(new Enemy());
  }
}
function draw() {
  background(255);
  for(var i=0; i<enemy.length; i++){
    enemy[i].display();
    enemy[i].update();
    enemy[i].edges();
  }
 // rocket.display();
/*if(gameState === PLAY) {
  
    if (space.x < 0) {
      space.x = space.width / 2;
      }

  if(keyDown("left")) {
    rocket.x = rocket.x - 10;
  }
  if(keyDown("right")) {
    rocket.x = rocket.x + 10;
  }
  
 // spawnAsteroids();
  if(keyDown("up")){
    spawnMissiles();
  }
  
  if(damage === 10) {
    gameState = END;
    playSound("sound://category_female_voiceover/game_over_female.mp3");
  }
}*/
//destroy();

//drawSprites();
    
 /* if(gameState === END) {
  space.velocityX = 0;
  
  asteroidGroup.setVelocityXEach(0);
  missileGroup.setVelocityXEach(0);
  
  asteroidGroup.setLifetimeEach(-1);
  missileGroup.setLifetimeEach(-1);
  
  asteroidGroup.destroyEach();
  missileGroup.destroyEach();
  
  rocket.x = 200;
  rocket.y = 270;
  
  textSize(30);
  fill("purple");
  stroke("yellow");
  strokeWeight(1);
  text("GAME OVER",100,150);
  
  textSize(25);
  fill("yellow");
  noStroke();
  text("Press 'R' to restart",100,250);
}*/

textSize(20);
fill("red");
noStroke();
text("Asteroids destroyed : " + count,100,50);
text("Damage : " + damage,100,100);

/*  if(keyDown("r") && gameState === END) {
  gameState = PLAY;
  count = 0;
  damage = 0;
}*/

}

/*function spawnAsteroids() {
  if(World.frameCount % 80 === 0) {
    enemy.push(new Enemy());
  }
}*/

function spawnMissiles() {
    missile = createSprite(rocket.x,rocket.y,10,10);
    missile.setAnimation("bullet_img");
    missile.debug = false;
    missile.setCollider("circle",0,0,20);
    missile.scale = 0.1;
    missile.velocityY = -3;
    missile.lifetime = 400;
    missileGroup.add(missile);
}

function destroy() {
    if(missileGroup.isTouching(asteroidGroup)) {
    missileGroup.destroyEach();
    asteroidGroup.destroyEach();
    playSound("sound://category_explosion/air_explode_bonus_5.mp3");
    count = count + 1;
  }
  if(asteroidGroup.isTouching(rocket)) {
    asteroidGroup.destroyEach();
    playSound("sound://category_explosion/8bit_explosion.mp3");
    damage = damage + 2;
  }
}
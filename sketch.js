
var backgroundImg,canvas,playerImg,groundImg;
function preload(){
    backgroundImg = loadImage("bg.png");
    playerImg = loadAnimation("mario2.png","mario1.png");
    //playerdeadImg = loadImage("mario_dead.png");
    groundImg = loadImage("ground.png");

}



function setup(){
    playerImg1 = createSprite(50,displayHeight-200,50,50);
groundImg1 = createSprite(displayWidth/2-30,displayHeight - 150,displayWidth,20);
canvas = createCanvas(displayWidth-60,displayHeight-115);
playerImg1.addAnimation("mario",playerImg);
playerImg1.scale = 0.4;
groundImg1.addImage(groundImg);
}
function draw(){
    background(backgroundImg);
    drawSprites();
}
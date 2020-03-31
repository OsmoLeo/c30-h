const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    bird = new Bird(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    bird2 = new Bird(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(920,160,70,70);
    box6 = new Box(700,160,70,70);
    log4 = new Log(810,120,300,PI/2);
    bird3 = new Bird(810,150)
    log5 = new Log(810,80,300,PI/2);
    box7 = new Box(920,90,70,70);
    box8 = new Box(700,90,70,70);
   pig = new Pig(200,50);
   bird4= new Bird(810,85)
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(pig.body,{x:200, y:50});
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    log1.display();

    box3.display();
    box4.display();
    box5.display();
    box6.display();
    bird2.display();
    log3.display();
    bird3.display();

    box5.display();
    log4.display();
    box7.display();
    box8.display();
    log5.display();
    bird4.display();
    pig.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(pig.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
     slingshot.attach(pig.body)   
    }   
   }
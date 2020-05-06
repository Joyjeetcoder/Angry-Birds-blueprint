const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

     ground = new Ground(200,height,400,20)
    box1 = new Box(200,350,50,50);
    pig1 = new Pig(250,350);
    box2 = new Box(300,350,50,50);      
    log1 = new Log(250,320,160,PI);

    box3 = new Box(200,310,50,50);
    pig2 = new Pig(250,310);
    box4 = new Box(300,310,50,50);
    log2 = new Log(250,270,160,PI);

    log3 = new Log(220,230,80,PI-45);
    box5 = new Box(250,230,50,50);
    log4 = new Log(280,230,80,PI/4);

    bird1 = new Bird(130,200);


}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    bird1.display();
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    pig2.display();
    box4.display();
    log2.display();

    log3.display();
    box5.display();
    log4.display();

}
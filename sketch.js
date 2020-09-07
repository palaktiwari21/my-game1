var doctor1,police1;
var man1,man2,man3,man4,man5,man6,man7,man8,man9,man10,man11,man12;
var corona1,corona2, corona3, corona4, corona5; 
var gameState="serve";
var Play;
var doctor;
varbg;
var police;
var bg1,bg2,bg3;

function preload(){

  doctor1img=loadImage("image/doctor1.png");
  police1img=loadImage("image/police1.png");
  person1=loadImage("image/person1.png");
  person2=loadImage("image/person2.png");
  doctorimg=loadImage("image/doctor.png");
  coronavirus=loadImage("image/coronavirus.png");
  policeimg=loadImage("image/police2.png");
  bg1img=loadImage("image/bg1.jpg");
  bg2img=loadImage("image/bg2.png");
  bg3img=loadImage("image/bg3.jpg");
}



function setup() {
  createCanvas(displayWidth-10,displayHeight-10);


bg3=createSprite(600,300);
bg3.addImage("bg3",bg3img);
bg3.scale=3;

bg1=createSprite(750,420);
bg1.addImage("bg1",bg1img);
bg1.scale=1.3;
bg1.visible=false;


bg2=createSprite(750,425);
bg2.addImage("bg2",bg2img);
bg2.scale=2;
bg2.visible=false;


doctor1=createSprite(500,600,10,10);
doctor1.addImage("doctor1",doctor1img);
doctor1.scale=0.2;

police1=createSprite(1000,600,20,20);
police1.addImage("police1",police1img);
police1.scale=0.8;

doctor= createSprite(displayWidth-200,displayHeight-120,10,10);
doctor.addImage("doctor",doctorimg);
doctor.scale=0.5;
doctor.visible=false;
man1=createSprite(100,100,2,2);
man1.addImage("man1",person1);
man1.visible=false;


man2=createSprite(300,200,2,2);
man2.addImage("man2",person1);
man2.visible=false;

man3=createSprite(400,300,2,2);
man3.addImage("man3",person1);
man3.visible=false;

man4=createSprite(500,400,2,2);
man4.addImage("man4",person1);
man4.visible=false;

man5=createSprite(600,500,2,2);
man5.addImage("man5",person1);
man5.visible=false;

man6=createSprite(700,600,2,2);
man6.addImage("man6",person1);
man6.visible=false;

man7=createSprite(800,700,2,2);
man7.addImage("man7",person2);
man7.scale=0.1;
man7.visible=false;

man8=createSprite(900,800,2,2);
man8.addImage("man8",person2);
man8.scale=0.1;
man8.visible=false;

man9=createSprite(1000,900,2,2);
man9.addImage("man9",person2);
man9.scale=0.1;
man9.visible=false;

man10=createSprite(150,150,2,2);
man10.addImage("man10",person2);
man10.scale=0.1;
man10.visible=false;

man11=createSprite(250,250,2,2);
man11.addImage("man11",person2);
man11.scale=0.1;
man11.visible=false;

man12=createSprite(350,350,2,2);
man12.addImage("man12",person2);
man12.scale=0.1;
man12.visible=false;

corona1=createSprite(50,50,20,20);
corona1.addImage("corona1",coronavirus);
corona1.scale=0.2;
corona1.visible=false;
corona2=createSprite(130,100,20,20);
corona2.addImage("corona2",coronavirus);
corona2.scale=0.2;
corona2.visible=false;
corona3=createSprite(230,230,20,20);
corona3.addImage("corona3",coronavirus);
corona3.scale=0.2;
corona3.visible=false;
corona4=createSprite(330,330,20,20);
corona4.addImage("corona4",coronavirus);
corona4.scale=0.2;
corona4.visible=false;
corona5=createSprite(430,430,20,20);
corona5.addImage("corona5",coronavirus);
corona5.scale=0.2;
corona5.visible=false;

police=createSprite(1200,600,20,20);
police.addImage("police",policeimg);
police.visible=false;

man1.velocityX=random(3,8);
man1.velocityY=random(4,8);
man2.velocityX=random(3,8);
man2.velocityY=random(4,8);
man3.velocityX=random(3,8);
man3.velocityY=random(4,8);
man4.velocityX=random(3,8);
man4.velocityY=random(4,8);
man5.velocityX=random(3,8);
man5.velocityY=random(4,8);
man6.velocityX=random(3,8);
man6.velocityY=random(4,8);
man7.velocityX=random(3,8);
man7.velocityY=random(4,8);
man8.velocityX=random(3,8);
man8.velocityY=random(4,8);
man9.velocityX=random(3,8);
man9.velocityY=random(4,8);
man10.velocityX=random(3,8);
man10.velocityY=random(4,8);
man11.velocityX=random(3,8);
man11.velocityY=random(4,8);
man12.velocityX=random(3,8);


corona1.velocityX=random(2,5);
corona1.velocityY=random(2,6);;
corona2.velocityX=random(2,5);
corona2.velocityY=random(2,6);;
corona3.velocityX=random(2,5);
corona3.velocityY=random(2,6);;
corona4.velocityX=random(2,5);
corona4.velocityY=random(2,6);;
corona5.velocityX=random(2,5);
corona5.velocityY=random(2,6);

















fill("red");
textSize(40);
}

function draw() {
  background(0);
  if (gameState==="serve"){
    doctor1.display();
    police1.display();
    text(" WHICH CORONA WARRIOR DO YOU WANT TO BECOME ?",200,100);
  }
  if (mousePressedOver(doctor1)){
    doctor1.visible=false;

    police1.visible=false;
     bg3.visible=false;
 bg1.visible=true;

    doctor.visible=true;

    man1.visible=true;
    man2.visible=true;
    man3.visible=true;
    man4.visible=true;
    man5.visible=true;
    man6.visible=true;
    man7.visible=true;
    man8.visible=true;
    man9.visible=true;
    man10.visible=true;
    man11.visible=true;
    man12.visible=true;

    corona1.visible=true;
    corona2.visible=true;
    corona3.visible=true;
    corona4.visible=true;
    corona5.visible=true;

  }

if( mousePressedOver(police1)){

  doctor1.visible=false;

  police1.visible=false;
  bg3.visible=false;
  bg2.visible=true;
  police.visible=true;
}




  if (keyDown(UP_ARROW)){

    doctor.velocityY=-2;
    
    }
    if (keyDown(DOWN_ARROW)){
    
      doctor.velocityY=2;
      
      }
    
      if (keyDown(LEFT_ARROW)){
    
        doctor.velocityX=-2;
        
        }
    
        if (keyDown(RIGHT_ARROW)){
    
          doctor.velocityX=2;
          
          }

























  edges=createEdgeSprites();


  man1.bounceOff(edges);
  man2.bounceOff(edges);
  man3.bounceOff(edges);
  man4.bounceOff(edges);
  man5.bounceOff(edges);
  man6.bounceOff(edges);
  man7.bounceOff(edges);
  man8.bounceOff(edges);
  man9.bounceOff(edges);
  man10.bounceOff(edges);
  man11.bounceOff(edges);
  man12.bounceOff(edges);
  

  corona1.bounceOff(edges);
  corona2.bounceOff(edges);
  corona3.bounceOff(edges);
  corona4.bounceOff(edges);
  corona5.bounceOff(edges);





  drawSprites();

}
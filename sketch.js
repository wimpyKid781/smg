var P1,P2,P3,P4,P5,
P6,P7,P8,P9,P10,
P11,P12,P13,P14,P15,
P16,P17,P18,P19;

var P1I,P2I,P3I,P4I,P5I,
P6I,P7I,P8I,P9I,P10I,
P11I,P12I,P13I,P14I,P15I,
P16I,P17I,P18I,P19I;

var A1I,A2I,A3I,A4I,A5I,A6I,A7I,A8I,A9I;

var C1;
var edges;
var ground;
var C1I,C2I;
function preload(){
P1I = loadImage("Pictures/manWalking.png");
P2I = loadImage("Pictures/womanWalking.png");
P3I = loadImage("Pictures/manWalking2.png");
P4I = loadImage("Pictures/womanWalking2.png");
P5I = loadImage("Pictures/manWalking3.png");
P6I = loadImage("Pictures/womanWalking3.png");
P7I = loadImage("Pictures/manWalking4.png");
P8I = loadImage("Pictures/womanWalking4.png");
P9I = loadImage("Pictures/manWalking5.png");
P10I = loadImage("Pictures/womanWalking5.png");
P11I = loadImage("Pictures/manWalking6.png");
P12I = loadImage("Pictures/womanWalking6.png");
P13I = loadImage("Pictures/manWalking7.png");
P14I = loadImage("Pictures/womanWalking7.png");
P15I = loadImage("Pictures/manWalking8.png");
P16I = loadImage("Pictures/womanWalking8.png");
P17I = loadImage("Pictures/manWalking9.png");
P18I = loadImage("Pictures/womanWalking9.png");
P19I = loadImage("Pictures/manWalking10.png");
A1I = loadImage("Pictures/aisle1.png");
A2I = loadImage("Pictures/aisle2.jpg");
A3I = loadImage("Pictures/aisle3.jpg");
A4I = loadImage("Pictures/aisle4.jpg");
A5I = loadImage("Pictures/aisle5.png");
A6I = loadImage("Pictures/aisle6.png");
A7I = loadImage("Pictures/aisle7.jpg");
A8I = loadImage("Pictures/aisle8.jpg");
A9I = loadImage("Pictures/aisle9.jpg");
C1I = loadImage("Pictures/cashierPicture1.jpg");

}
//mW, mW7, mW9;
//wW5,wW7, wW8;
function setup() {
createCanvas(1300,800);
P1 =  createSprite(680, 210, 50, 50);
P1.addImage(P1I);
P1.scale = (0.2);
P1.velocityY = 5
P2 = createSprite(270,200,50,50);
P2.addImage(P2I);
P2.scale = (0.2);
P3 = createSprite(100,190,50,50);
P3.addImage(P3I);
P3.scale = (0.2);
P4 = createSprite(700,180,50,50);
P4.addImage(P4I);
P4.scale = (0.3);
P5 = createSprite(440,170,50,50);
P5.addImage(P5I);
P5.scale = (0.2);
P6 = createSprite(430,160,50,50);
P6.addImage(P6I);
P6.scale = (0.2);
P7 = createSprite(420,150,50,50);
P7.addImage(P7I);
P7.scale = (0.2);
P8 = createSprite(410,140,50,50);
P8.addImage(P8I);
P8.scale = (0.2);
P9 = createSprite(400,130,50,50);
P9.addImage(P9I);
P9.scale = (0.2);
P10 = createSprite(390,120,50,50);
P10.addImage(P10I);
P10.scale = (0.2);
P10.velocityY = 5.
P11 = createSprite(380,110,50,50);
P11.addImage(P11I);
P11.scale = (0.2);
P12 = createSprite(370,100,50,50);
P12.addImage(P12I);
P12.scale = (0.2);
P13 = createSprite(360,90.50,50);
P13.addImage(P13I);
P13.scale = (0.2);
P13.velocityY = 5;
P14 = createSprite(350,80,50,50);
P14.addImage(P14I);
P14.scale = (0.2);
P13.velocityY = 5;
P15 = createSprite(340,70,50,50);
P15.addImage(P15I);
P15.scale = (0.2);
P15.velocityY = 5;
P16 = createSprite(330,60,50,50);
P16.addImage(P16I);
P16.scale = (0.2);
P16.velocityY = 5;
P17 = createSprite(320,50,50,50);
P17.addImage(P17I);
P17.scale = (0.2);
P18 = createSprite(310,40,50,50);
P18.addImage(P18I);
P18.scale = (0.2);
P19 = createSprite(300,30,50,50);
P19.addImage(P19I);
P19.scale = (0.2);


C1= createSprite(20,1000,50,50);
C1.addImage(C1I);
C1.scale = (0.5);


function draw() {
  background(255,255,255);  
  edges = createEdgeSprites();
  //P1,P10,P13,P15,P16;
  //P1.bounceOff(edges);
  P10.bounceOff(edges);
  P13.bounceOff(edges);
  P15.bounceOff(edges);
  P16.bounceOff(edges);
  if (P1.isTouching(edges)){
    P1.velocityX = 5;
    P1.velocityY = 0;
  }
  //if(keyWentDown(RIGHT_ARROW)){
    spawnAislesForPlayerGoingRight();
  //}
  //if(keyWentDown(LEFT_ARROW)){
    spawnAislesForPlayerGoingLeft();
  //}
  //if(keyWentDown(UP_ARROW)){
    spawnAislesForPlayerGoingUp();
  //}
  //if(keyWentDown(DOWN_ARROW)){
    spawnAislesForPlayerGoingDown();
  //}
  drawSprites();
}
function spawnAislesForPlayerGoingRight(){
  if(frameCount%70 === 0){
    var AISLE = createSprite(600,165,10,140);
    AISLE.velocityX = -6
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: AISLE.addImage(A1I);
      AISLE.scale = (0.75);
      break;
      case 2: AISLE.addImage(A2I);
      AISLE.scale = (0.53);
      break;
      case 3: AISLE.addImage(A3I);
      AISLE.scale = (0.37);
      break;
      case 4: AISLE.addImage(A4I);
      AISLE.scale = (0.5);
      break;
      case 5: AISLE.addImage(A5I);
      AISLE.scale = (0.5);
      break;
      case 6: AISLE.addImage(A6I);
      AISLE.scale = (0.60);
      break;
      case 7: AISLE.addImage(A7I);
      AISLE.scale = (1.26);
      break;
      case 8: AISLE.addImage(A8I);
      AISLE.addImage(A8I);
      break;
      case 9: AISLE.addImage(A9I);
      AISLE.scale = (0.6);
      break;
      default:break;
    }
    //AISLE.lifetime = 300;
  }
}
function spawnAislesForPlayerGoingLeft(){
  if(frameCount%70 === 0){
    var AISLE = createSprite(600,165,10,140);
    AISLE.velocityX = +6
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: AISLE.addImage(A1I);
      AISLE.scale = (0.75);
      break;
      case 2: AISLE.addImage(A2I);
      AISLE.scale = (0.53);
      break;
      case 3: AISLE.addImage(A3I);
      AISLE.scale = (0.37);
      break;
      case 4: AISLE.addImage(A4I);
      AISLE.scale = (0.5);
      break;
      case 5: AISLE.addImage(A5I);
      AISLE.scale = (0.5);
      break;
      case 6: AISLE.addImage(A6I);
      AISLE.scale = (0.60);
      break;
      case 7: AISLE.addImage(A7I);
      AISLE.scale = (1.26);
      break;
      case 8: AISLE.addImage(A8I);
      AISLE.scale = (1.07);
      break;
      case 9: AISLE.addImage(A9I);
      AISLE.scale = (0.6);
      break;
      default:break;
    }
    //AISLE.lifetime = 300;
  }
}
function spawnAislesForPlayerGoingUp(){
  if(frameCount%70 === 0){
    var AISLE = createSprite(600,165,10,140);
    AISLE.velocityY = 6
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: AISLE.addImage(A1I);
      AISLE.scale = (0.75);
      break;
      case 2: AISLE.addImage(A2I);
      AISLE.scale = (0.53);
      break;
      case 3: AISLE.addImage(A3I);
      AISLE.scale = (0.37);
      break;
      case 4: AISLE.addImage(A4I);
      AISLE.scale = (0.5);
      break;
      case 5: AISLE.addImage(A5I);
      AISLE.scale = (0.5);
      break;
      case 6: AISLE.addImage(A6I);
      AISLE.scale = (0.60);
      break;
      case 7: AISLE.addImage(A7I);
      AISLE.scale = (1.26);
      break;
      case 8: AISLE.addImage(A8I);
      AISLE.scale = (1.07);
      break;
      case 9: AISLE.addImage(A9I);
      AISLE.scale = (0.6);
      break;
      default:break;
    }
    //AISLE.lifetime = 300;
  }
}
function spawnAislesForPlayerGoingDown(){
  if(frameCount%70 === 0){
    var AISLE = createSprite(600,165,10,140);
    AISLE.velocityY = -6
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: AISLE.addImage(A1I);
      AISLE.scale = (0.75);
      break;
      case 2: AISLE.addImage(A2I);
      AISLE.scale = (0.53);
      break;
      case 3: AISLE.addImage(A3I);
      AISLE.scale = (0.37);
      break;
      case 4: AISLE.addImage(A4I);
      AISLE.scale = (0.5);
      break;        
      case 5: AISLE.addImage(A5I);
      AISLE.scale = (0.5);
      break;
      case 6: AISLE.addImage(A6I);
      AISLE.scale = (0.60);
      break;
      case 7: AISLE.addImage(A7I);
      AISLE.scale = (1.26);
      break;
      case 8: AISLE.addImage(A8I);
      AISLE.scale = (1.07);
      break;
      case 9: AISLE.addImage(A9I);
      AISLE.scale = (0.6);
      break;
      default:break;
    }
    // AISLE.lifetime = 300000000;
  }
}
}
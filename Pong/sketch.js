let ball;
let paddle;
let pointLeft;
let pointRight;
let cap;


function setup(){
  createCanvas(innerWidth,innerHeight);
  ball = new Ball();
  paddle1 = new PaddleLeft();
  paddle2 = new PaddleRight();
  pointLeft = 0;
  pointRight = 0;
  cap = 10;
  setInterval(function(){
    ball.speed++;
  },7000);
}
function draw(){
  background(66,152,181);
  ball.show();
  ball.update();
  ball.reflect();
  paddle1.show();
  paddle1.update();
  paddle2.show();
  paddle2.update();
  paddle1.reflect(ball);
  paddle2.reflect(ball);

  if(ball.winLose2()){
    pointLeft++;
    ball.speed = 3;
    if(pointRight==cap){
      alert('Player1 is winner');
      pointRight=0;
      pointLeft=0;
    }
  }
  if(ball.winLose1()){
    pointRight++;
    ball.speed = 3;
    if(pointRight==cap){
      alert('Player2 is winner');
      pointRight=0;
      pointLeft=0;
    }
  }
  
  
  fill(0);
  textSize(40);
  text(pointLeft,20,40);
  text(pointRight,width-40,40);
}


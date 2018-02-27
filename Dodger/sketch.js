let mobs = [];
let player;
let terrain;
let clouds = [];
let bonus = [];
let bonus2 = [];
let score;

let gfood;
let bfood;
let gfood1;
let bfood1;

function setup() {
  createCanvas(innerWidth, innerHeight);

  gfood = loadImage('./img/goodfood.png');  
  bfood = loadImage('./img/badfood.png');  
  gfood1 = loadImage('./img/goodfood1.png');  
  bfood1 = loadImage('./img/badfood1.png');  

  mobs.push(new Mob());

  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      clouds.push(new Cloud());
    }, i * random(4000, 6000));
  }

  player = new Player();
  terrain = new Terrain();
  score = 0;
  randomSeed(11);
}

function draw() {
  background(0);
  score++;
  for (let i = 0; i < mobs.length; i++) {
    mobs[i].show();
    mobs[i].update();
    mobs[i].crash(player);
    if (mobs[mobs.length - 1].fallen == 2) {
      mobs.push(new Mob());
    }
    if (player.crash == 1) {
      noLoop();
      fill(255);
      textSize(30);
      text('Score: ' + floor(score/10), width / 2 - 100, height / 2 - 100);
    }
  }
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].show();
    clouds[i].update();
  }

  player.show();
  player.update();
  
  for (let i = 0; i < bonus.length; i++) {
    bonus[i].show();
    bonus[i].update();
    if (bonus[i].getUp(player)) {
      bonus.splice(0,1);
      score += 300;
    }
  }
  for (let i = 0; i < bonus2.length; i++) {
    bonus2[i].show();
    bonus2[i].update();
    if (bonus2[i].getUp(player)) {
      bonus2.splice(0,1);
      for(let i=0; i<mobs.length;i++){
        mobs[i].gravity = 0.7;
      }
    }else if(bonus2[i].y>=height-100){
      bonus2.splice(0,1);
    }
  }
  fill(0,255,0);
  textSize(16);
  text('Score: ' + floor(score/10), 10, 15);
  terrain.show();
}

setInterval(function () {
  let r = floor(random(0,2));
  if((r==1)||(r==2)){
  bonus.push(new PowerUp());
}else{
  bonus2.push(new SlowDown());
}
}, 5000);
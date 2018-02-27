function PaddleLeft(){
   this.x = 40;
   this.y = height/2-120;
   this.speed = 3;
   this.show = function(){
      stroke(51);
      fill(221,95,50);
      rect(this.x,this.y,20,150);
   }
   this.update = function(){
      if (keyIsDown(87)) {
         this.y-=this.speed;
      }else if(keyIsDown(83)){
         this.y+=this.speed;
      }
      if(this.y<=0){
         this.y=0;
      }
      if(this.y>=height-150){
         this.y=height-150;
      }
   }
   this.reflect = function(ball){
      if((this.x+20 >= ball.x-ball.r/2)&&(this.x<=ball.x-ball.r/2)&&(ball.y>=this.y-ball.r)&&(ball.y<=this.y+150+ball.r)){
         ball.moveX = -ball.moveX;
      }
   }  
}
function PaddleRight(){
   this.x = width-60;
   this.y = height/2-120;
   this.speed = 3;
   this.show = function(){
      stroke(51);
      fill(221,95,50);
      rect(this.x,this.y,20,150);
   }
   this.update = function(){
      if (keyIsDown(UP_ARROW)) {
         this.y-=this.speed;
      }else if(keyIsDown(DOWN_ARROW)){
         this.y+=this.speed;
      }
      if(this.y<=0){
         this.y=0;
      }
      if(this.y>=height-150){
         this.y=height-150;
      }
   }
   this.reflect = function(ball){
      if((this.x <= ball.x+ball.r/2)&&(this.x>=ball.x)&&(ball.y>=this.y)&&(ball.y<=this.y+150)){
         ball.moveX = -ball.moveX;
      }
   }    
}
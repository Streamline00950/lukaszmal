function Ball(){
   this.x = width/2;
   this.y = height/2;
   this.r = 24;
   this.moveX = floor(random([-1,1]));
   this.moveY = random(-2,2);
   this.speed = 3;

   this.show = function(){
      fill(255,0,0);
      ellipse(this.x,this.y,this.r,this.r);
   }
   this.update = function(){
      this.y = this.y+this.moveY*this.speed;
      this.x = this.x+this.moveX*this.speed;
   }
   this.reflect = function(){
      if(this.y > height-this.r/2){
         this.moveY = -this.moveY;
      }
      if(this.y<0+this.r/2){
         this.moveY = -this.moveY;
      }
   }
   this.winLose1 = function(){
      if(this.x <= 0){
         this.x = width/2;
         this.y = height/2;
         this.moveX = -this.moveX;
         return true;
      }
   }
   this.winLose2 = function(){
      if(this.x >= width){
         this.x = width/2;
         this.y = height/2;
         this.moveX = -this.moveX;
         return true;
      }
   }
}
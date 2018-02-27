console.log(bfood);
function Cloud(){
   this.w = random(80,200);
   this.h = random(20,80);
   this.x = width;
   this.y = random(-10,30);
   this.show = function(){
      fill(200);
      rect(this.x-10,this.y,this.w,this.h);
   }
   this.update = function(){
      this.x = this.x-1;
      if(this.x+this.w <=0){
         this.w = random(80,200);
         this.h = random(20,80);
         this.x = width;
         this.y = random(-10,30);
      }
   }
}
function Terrain(){
   this.x=0;
   this.y = height-100;
   this.show = function(){
      fill(63,47,24);
      rect(this.x,this.y,width,100);
   }
}
function PowerUp(){
   this.r = 26;
   this.x=random(width)-this.r;
   this.y=0;
   
   this.show = function(){
      fill(0,255,0);
      rect(this.x,this.y,this.r,this.r);
   }
   this.update = function(){
      this.y++;
      if(this.y>=width-100){
         return true;
      }
   }
   this.getUp = function(player){
      if((this.y+this.r >= player.y) &&(this.x<=player.x+player.r)&&(this.x+this.r>=player.x)){
         return true;
      }
   }
}
function SlowDown(){
   this.r = 26;
   this.x=random(width)-this.r;
   this.y=0;
   
   this.show = function(){
      fill(0,255,0);
      ellipse(this.x,this.y,this.r,this.r);
   }
   this.update = function(){
      this.y++;
   }
   this.getUp = function(player){
      if((this.y+this.r >= player.y) &&(this.x<=player.x+player.r)&&(this.x+this.r>=player.x)){
         return true;
      }
   }
}

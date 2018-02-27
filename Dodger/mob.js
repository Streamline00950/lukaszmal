function Mob(){
   this.r = random(10,80);
   this.x = random(this.r,width-this.r);
   this.y = random(-200,-10);
   this.fallen = 0;
   this.gravity = random(2,4);
   
   this.img = function (){if(random(0,1)<0.5){return bfood}else{return bfood1};}

   this.show = function(){
      fill(255);
      image(this.img(),this.x,this.y,this.r,this.r);
   }
   this.update = function(){
      this.y = this.y+this.gravity;
      if(this.y >= height-100-this.r){
         this.r = random(10,80);
         this.x = random(this.r,width-this.r);
         this.y = random(-100,-50);
         this.gravity = random(2,4);
         this.fallen++;
      }
   }
   this.crash = function(player){
      if((this.y+this.r >= player.y) &&(this.x<=player.x+player.r)&&(this.x+this.r>=player.x)){
         return player.crash=1;
      }
   }
}
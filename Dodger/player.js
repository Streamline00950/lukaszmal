function Player(){
   this.r = 20;
   this.x = width/2-this.r;
   this.y = height-100-this.r;
   this.crash = 0;
   this.show = function(){
      fill(0,0,220);
      rect(this.x,this.y,this.r,this.r);
   }
   this.update = function(){
      if (this.x<=0){
         this.x=0;
      }else if(this.x>=width-this.r){
         this.x=width-this.r;
      }
      if (keyIsDown(LEFT_ARROW)) {
         this.x-=5;
      }else if(keyIsDown(RIGHT_ARROW)){
         this.x+=5;
      }
   }
}
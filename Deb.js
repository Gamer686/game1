class Deb{
  constructor(){
      this.r = 5;
      this.reset();
  }
  reset(){
      this.y = random(height - 70);
      let spawnLS = random(1)<0.5;
      if(spawnLS){
          this.x = random(-width,0);
          this.isGoingLeft = false;
      }else {
          this.x = random(width,width*2);
          this.isGoingLeft = true;
      }
  }

  update(){
      if(this.isGoingLeft){
          this.x --;
      }else{
          this.x ++;
      }
      if(this.isOffScreen()){
          this.reset();
      }
  }

  isOffScreen(){
      if(this.isGoingLeft && this.x < -5){
          return true;
      } else if(!this.isGoingLeft && this.x > width +5){
          return true;
      }
      return false;
  }

  display(){
      ellipse(this.x,this.y,this.r*2,this.r*2);
  }

  hitShip(ship){
      if(dist(this.x,this.y,ship.x, ship.y)<this.r+ship.r){
          return true;
      }
        return false;
  }
}

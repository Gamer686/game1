class Ship{
    constructor(x, Simage){
        this.x = x;
        this.score = 0;
        this.respwan();
        this.r = 10;
        this.Simage = Simage;
    }
    respwan(){
        this.y = height -20;
        this.isUp = false;
        this.isDown = false ;
    }
    update(){
        if(this.isUp && this.y >0){
            this.up();
       } else if(this.isDown && this.y < height -20){
           this.down();
       }
       if(this.PlayerScoredPoint()){
       this.score ++;
       this.respwan();
       }
    }
 display(){
     imageMode(CENTER);
     image(this.Simage,this.x,this.y,this.r*2,this.r*2);
     
}

up(){
    this.y--;
}

down(){
    this.y++;
}
PlayerScoredPoint(){
    if(this.y<= 0){
        return true ;
    }
    return false;
}
}  

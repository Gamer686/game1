var space1;
var space2;
var bg;
allDeb =[];
 var S1Score;
 var S2Score;
 var Simage;
 const Num_DEB = 20;
function preload(){
  
  Simage = loadImage('ship.jpg');
}

function setup(){
  createCanvas(400,400)
  space1 = new Ship(width*0.33, Simage);
  space2 = new Ship(width*0.66, Simage);
  for(let i = 0; i< Num_DEB; i++){
    allDeb.push(new Deb());
    }
  S1Score = new Score(width*0.33 - 40);
  S2Score = new Score(width*0.66 + 40);
}

  function draw(){
    background(0)
    space1.update();
    space2.update();

    space1.display();
    space2.display();

    updateDebAndCheckCollisions();
    S1Score.display(S1Score.score);
    S2Score.display(S2Score.score);
  }

  function updateDebAndCheckCollisions(){
    for(let i = 0; i< allDeb.length; i++){
      allDeb[i].update();
      allDeb[i].display();

      if(allDeb[i].hitShip(space1)){
        space1.respawn();
      }else if(allDeb[i].hitShip(space2)){
      space2.respawn();
    }
    }
  }

  function keyPressed(){
    if(keyCode == UP_ARROW){
      space2.isUp = true;
      space1.isDown = false;
  }else if(keyCode == DOWN_ARROW){
    space2.isDown = true;
    space1.isUp = false;
  }
  if(keyCode == 87){
    //keycode is 'w'
    space1.isUp = true;
    space1.isDown = false;
  }else if(keyCode == 83){
    //keycode is 's'
    space1.isDown = true;
    space1.isUp = false;
  }
}

function keyReleased(){
  if(keyCode == UP_ARROW){
    space2.isUp = false;
  }else if(keyCode == DOWN_ARROW){
    space2.isDown = false;
  }
  if(keyCode == 87){
    space1.isUp = false;
 }else if(keyCode == 83){
  space1.isDown = false;
 }
}


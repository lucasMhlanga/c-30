var balloon ,balloonImg,backgroundImg,ground;

var database;
var position;



function preload(){

balloonImg = loadImage("pro-C35+images/Hot Air Ballon-03.png");
backgroundImg = loadImage("pro-C35+images/Hot Air Ballon-01.png");
}

function setup() {

database = firebase.database();

var ballonPosition = database.ref('balon/position');

ballonPosition.on("value",readPosition,showError);


  createCanvas(800,400);

  balloon = createSprite(400,100,10,10);
  balloon.addImage("a",balloonImg);
  balloon.scale = 0.5;

 
}

function draw() {
  background(backgroundImg); 
  
 if(position!=undefined){


  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
}
else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
    balloon.scale = balloon.scale -0.001;


}
else if(keyDown(DOWN_ARROW)){
    writePosition(0,+1);
    balloon.scale = balloon.scale +0.001;

}


  drawSprites();

  text("Press Arrow Keys to Start the ride",)
}
}

function writePosition (x,y){

database.ref('balon/position').set({
'x': position.x + x,
'y': position.y + y
})

}

function readPosition(data){


  position = data.val();

  balloon.x = position.x;
  balloon.y = position.y;

}

function showError (){

console.log("error writing to the database");

}
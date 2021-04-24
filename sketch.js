var dog,dogIMG, happyDog, database, foodStock, foodS;

function preload(){
dogIMG = loadImage("images/Dog.png");
happyDog = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(width/2,height/2,70, 30);
  dog.addImage(dogIMG);
  dog.scale = 0.3;
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
//Images are not working
//what is writeStock and readStock
  
  
  
  drawSprites();
  //add styles here
  fill("white")
  text( "Remaining Food : "+ foodS,200,100)
  textSize(15);


}

//Function to read values for Database
function readStock(data){
  foodS = data.val();
}
//Function to write values from Database
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x = x-1
  }
  database.ref('/').update({
    food:x
  })
}

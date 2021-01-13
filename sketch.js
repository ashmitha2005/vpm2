//Create variables here
var dog, happyDog, database, foodS, foodStock;
var d1img, dhappy;
var feedpetbutton, addfoodbutton;
var fedtime, lastfed;
var foodobj;

function preload()
{
  //load images here
  d1img = loadImage("dogImg.png");
  dhappy = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();

  createCanvas(600, 500);
  
  dog = createSprite(300,250,20,20);
  dog.addImage(d1img);
  dog.scale=0.2;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  foodobj = new Food()

  
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dhappy);
}
  drawSprites();
  //add styles here
textSize(20);
fill("white");
noStroke();
text("Note: Press UP_ARROW Key to Feed Drago The Milk!", 50,100);
text("Food Remaining : " + foodS , 200, 170);
}

function readStock(data){
foodS= data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x = x -1;
  }
database.ref('/').update({
  Food:x
})
}
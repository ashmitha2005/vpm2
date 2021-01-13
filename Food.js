 class Food {
    constructor(foodStock, lastFed){
        this.image = loadImage("milk.png");
       
    }
    
    getFoodStock(){
        var foodCountRef = database.ref('foodCount');
        foodCountRef.on("value",(data)=>{
          foodCount = data.val();
        })
    }
    
    updateFoodStock(count){
        database.ref('/').update({
            foodCount: count
          })
    }
     
    deductFood(){
        var foodIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
        })
    }


    display(){
        imageMode(CENTRE);
        image(this.image, 50,50,0,0);

        if(){

        }else{

        }
    }
}
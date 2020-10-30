class Game{
    constructor(){

    }
    getState(){
       var dbref= db.ref('gameState')
       dbref.on('value',(data)=>{
           gameState=data.val()

       })
       
        

    }
    updateState(state){
        db.ref('/').update({
            'gameState':state
        })

    }
   async start(){
        if (gameState==0) {
            player=new Player();
            var playerCountref = await db.ref('playerCount').once("value");
            if (playerCountref.exists()) {
              playerCount=playerCountref.val();
              player.getPlayerCount();
            }
            form=new Form();
            form.display();


        }
        car1=createSprite(100,300);
        car2=createSprite(300,300);
        car3=createSprite(500,300);
        car4=createSprite(700,300);
        cars=[car1,car2,car3,car4];
    }
    play (){
        form.hide();
        Player.getInfo();
        if(allPlayers!==undefined){
            var x=175;
            var y;
            var index=0;
            for (var plr in allPlayers) {
                index=index+1
                x=x+200
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index==player.index){
                    cars[index-1].shapeColor="blue"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y;
                }
            }

        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=10;
            player.update();
        }
        drawSprites();
        }
}
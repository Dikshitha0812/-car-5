
var form;
var player;
var playerCount=0;
var gameState =0;
var game;
var allPlayers;
var car1,car2, car3,car4,cars;

function setup(){
    createCanvas(windowWidth,windowHeight);
    db=firebase.database();
    game=new Game();
    game.getState();
    game.start();
   
    

}

function draw(){
    background("white");
    if(playerCount===4){
     game.updateState(1);

    }
    if (gameState===1) {
        game.play();
        
    }
    if (gameState==2) {
        game.end();
        
    }
}


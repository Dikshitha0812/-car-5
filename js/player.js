class Player{
    constructor (){
     this.name =null;
     this.index=null;
     this.distance=0;
     this.rank=null;
     

    }
    getPlayerCount(){
        var dbref=db.ref('playerCount');
        dbref.on("value",(data)=>{
            playerCount=data.val()
        })
    }
  update(){
      var playerindex="players/player"+this.index;
      db.ref(playerindex).set({
          name:this.name,
          distance:this.distance

      })
  }
  updateCount(Count){
      db.ref('/').update({
           playerCount:Count
      })
  }
  static  getInfo(){
   var dbref=db.ref('players');
   dbref.on("value",(data)=>{
 allPlayers=data.val();
   })
   }
}
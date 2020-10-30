class Form {
    constructor(){
      this.title=createElement('h2');
      this.input=createInput("Name:");
      this.submit=createButton('sumbit my name');
      this.greeting=createElement('h2');

    }
    display(){
      this.title.html("Multiplayer Car Racing Game");
      this.title.position(400,100);
      this.input.position(500,300);
      this.submit.position(500,350);
      this.submit.mousePressed(()=>{
          this.input.hide();
          this.submit.hide();
          player=new Player();
          player.name=this.input.value();
          playerCount=playerCount+1;
          player.index=playerCount;
          player.update();
          player.updateCount(playerCount);
          this.greeting.html("Hello!"+player.name+"welcome to the game!!,please wait.")
          this.greeting.position(300,300);




          console.log(name);
      })

    }
    hide(){
      this.greeting.hide();
      this.title.hide();
    }
}
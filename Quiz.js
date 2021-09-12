class Quiz {
  constructor(){
    this.title2 = createElement('h1');
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
    contestant = new Contestant();
    var contestantCountRef = await database.ref('contestantCount').once("value");

    if(contestantCountRef.exists()){
    contestantCount = contestantCountRef.val();
    contestant.getCount();
 }
      question = new Question();
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background(bg);

    //write code to show a heading for showing the result of Quiz
    this.title2.html("Result of Quiz");
    this.title2.position(350,0);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      var contestantAns = 230;
      fill("red");
      stroke("black");
      textSize(20); 

    //write code to add a note here
      text("NOTE : Contestant who answered correct are highlighted in green color",130,230);
      for(var plr in allContestants){
        var correctAns = "2";  
        contestantAns+=30;

    //write code to highlight contest who answered correctly
      if(correctAns===allContestants[plr].answer){
        fill("green");
       }else{
        fill("red");
  }
        textSize(20);
        text(allContestants[plr].name+" : "+allContestants[plr].answer,250,contestantAns);

        }
      }
   }
}
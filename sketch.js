
let count;
let games = [];
let step = 0;
let text = [];
let buttons = [];

function setup() {
  database = firebase.database();
  getCount();
  

}

function draw(){
  if(step == 0 && count){
    for(let i = 0 ; i < count ; i++){
      getGame(i);
    }
    step += 1;
  }

  if(games[count - 1] && step == 1){
    for(let i of games){
      buttons.push(createA(i.link, i.name));
      createElement('h1');
    }
    step += 1;
  }
}

function getCount(){
  var reference=database.ref("count");
  reference.on("value", data => {
    count = data.val();
  });
}

function getGame(x){
  var reference = database.ref("games/game" + (x + 1));
  reference.on("value", function(data){
    games[x] = data.val();
  })
}
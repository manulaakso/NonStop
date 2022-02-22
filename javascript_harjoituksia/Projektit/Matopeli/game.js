const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

class SnakePart{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

let speed = 7; //madon nopeus

let tileCount = 20; // märitetään laatat canvan sisälle.
let tileSize = canvas.width / tileCount -2; // määritetään laatan koko

let headX = 10; //määrittää madon pään paikan horisontaalisesti.
let headY = 10; //-"- vertikaalisesti
const snakeParts = [];
let tailLength = 0;

let appleX = 5;
let appleY = 5;

let xVelocity = 0;
let yVelocity = 0;

let score = 0;
const sound = new Audio("hungry-man.wav");
const sound1 = new Audio("boing.mp3");
//game loop, tällä pyöritetään peliä
function drawGame(){
  changeSnakePosition();
  let result = isGameOver();
  if(result){
    return;
  }

  clearScreen();

  checkAppleCollision();
  drawApple();
  drawSnake();

  drawScore();

  setTimeout(drawGame, 1000/ speed);
}

function isGameOver(){
  let gameOver = false;

if(yVelocity===0 && xVelocity===0){
  return false;
}
  //seinään törmäys
  if(headX <0){
    gameOver = true;
  }
  else if(headX === tileCount){
    gameOver = true;
  }
  else if(headY < 0){
    gameOver = true;
  }
  else if(headY === tileCount){
    gameOver = true;
  }
//kroppaan törmäys
for(let i=0; i<snakeParts.length; i++){
  let part = snakeParts[i];
  if (part.x === headX && part.y === headY){
    gameOver= true;
    break;
  }
}


  if (gameOver){
    ctx.fillStyle = "white";
    ctx.font = "50px verdana";
    ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2)
    sound1.play();
  }
  return gameOver;
}

function drawScore(){
  ctx.fillStyle = "white";
  ctx.font = "10px verdana"
  ctx.fillText("Score: " + score, canvas.width -50, 10);
}

function clearScreen(){
  ctx.fillStyle = "black"; //valitaan väri canvaan
  ctx.fillRect(0,0,canvas.width,canvas.height); //täytetään canva värillä
}

//piirretään mato
function drawSnake(){
  ctx.fillStyle = "orange";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize,tileSize);

  //kasvatetaan madon häntää aina kun se syö omenan
  ctx.fillStyle = "green"; //määritetään hännän väri
  for(let i=0; i<snakeParts.length; i++){
    let part = snakeParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  snakeParts.push(new SnakePart(headX, headY)); //laitetaan kohde luettelon loppuun, pään viereen
  while(snakeParts.length > tailLength){
      snakeParts.shift();
  }

  ctx.fillStyle = "orange";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize,tileSize);
}

//Ohjaus
function changeSnakePosition(){
  headX = headX + xVelocity;
  headY = headY + yVelocity;
}

function drawApple(){
  ctx.fillStyle ="red";
  ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}

//Omenan paikka muuttuu aina kun madon pää on samassa paikassa kun omena.
function checkAppleCollision(){
  if (appleX === headX && appleY == headY){
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLength++;
    score++;
    speed++;
    sound.play();
  }
}

document.body.addEventListener("keydown", keyDown);

//näppäinten määritys
function keyDown(event){
  //ylös
  if(event.keyCode == 38){
    if(yVelocity == 1)
      return;
    yVelocity = -1;
    xVelocity = 0;
  }
  //alas
  if(event.keyCode == 40){
    if(yVelocity == -1)
      return;
    yVelocity = 1;
    xVelocity = 0;
  }
    //vasen
  if(event.keyCode == 37){
    if(xVelocity == 1)
      return;
    yVelocity = 0;
    xVelocity = -1;
  }
  //oikea
  if(event.keyCode == 39){
    if(xVelocity == -1)
      return;
    yVelocity = 0;
    xVelocity = 1;
  }
}


drawGame();

var startGamebackground
var gameState
var startGamebutton, textbutton
var currentObjects = []
function preload(){
    startGamebackground = loadImage("images/startgameback.png", 1000, 1000)
    startGamebimg = loadAnimation("images/start.png","images/start.png", "images/blank.png","images/blank.png", "images/blank.png" )
    choosebimg = loadAnimation("images/start.png","images/start.png", "images/blank.png","images/blank.png", "images/blank.png" )
    starttextimg = loadImage("images/startext.png", 1000, 1000)
}
function setup(){
    canvas = createCanvas(1000, 1000);
    gameState = "start"
    startflag = 0
    textflag = 0

    //startGamebutton.scale = 2
    
}
function draw(){
    if(gameState === "start" ){
    background(startGamebackground);
    if(startflag === 0){
    startDisplay();
    }
    drawSprites();
    if(mousePressedOver(startGamebutton)){
        clear();
        gameState = "starttext"
        startGamebutton = null;
    }
    }
    if(gameState === "starttext"){
        background(starttextimg);
        if(textflag === 0){
            textDisplay();
        }
        drawSprites();
        if(mousePressedOver(textbutton)){
            clear();
            gameState = "firstchoose"
            textbutton = null;
        }
    }
    if(gameState === "firstchoose"){
        console.log("works")
        
    }
}
//function startDisplay(){
//    if(gameState === "start" && startflag === 0 ){
//    startGamebutton = createSprite(500,600,1,1);
//    startGamebutton.addAnimation("startbutton", startGamebimg)
//    startflag = 1
//    }
//    else if(gameState !== "start"){
//    startGamebutton = null
//    }
//}

//function textDisplay(){
//    if(gameState === "text" && textflag === 0){
//    textbutton = createSprite(500,600,1,1);
//    textbutton.addAnimation("textbutton", choosebimg)
//    textflag = 1
//    }
//    else if{
//    textbutton = null
//    }
//}
function startDisplay(){
    startGamebutton = createSprite(500,600,1,1);

    startGamebutton.addAnimation("startbutton", startGamebimg)
    startflag = 1 

}
function textDisplay(){
   textbutton = createSprite(500,600,1,1);
   textbutton.addAnimation("textbutton", startGamebimg)
   textflag = 1
}
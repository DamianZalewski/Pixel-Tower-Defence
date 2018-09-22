// main menu stage -------------------------------
let mainMenuButtonWidth = 300;
let mainMenuButtonHeight = 50;
let mainMenuButtonX = cw/2 - mainMenuButtonWidth/2;
let mainMenuButtonY = 300;

function drawMainMenu() {
    ctx.drawImage(mainMenuImage,0,0,cw,ch);
    ctx.fillStyle = 'black';
    ctx.fillRect(mainMenuButtonX,mainMenuButtonY,mainMenuButtonWidth,mainMenuButtonHeight);
}

function handleMainMenuClick(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    if(
        posX >= mainMenuButtonX && posX <= mainMenuButtonX + mainMenuButtonWidth &&
        posY >= mainMenuButtonY && posY <= mainMenuButtonY + mainMenuButtonHeight
        ) 
    {
         setGameStage('game');
    }
}   
// ----------------------------------------------

// game stage ----------------------------------
let gameBorder = new Image();
gameBorder.src = "assets/gameBorder.png";
let mainMenuImage = new Image();
mainMenuImage.src = "assets/mainMenu.png";

function drawSideMenu() {
    towerChoice == 'archerTower' ? ctx.fillStyle = "red" : ctx.fillStyle = "white";
    ctx.fillRect(cw-200,100,54,54);
    ctx.drawImage(archerTower,cw-200,100,54,54);
    ctx.fillStyle = "black";
    ctx.fillRect(cw-200,150,54,20);
    ctx.drawImage(goldCoinImage, cw-210,145,30,30);
    ctx.fillStyle = 'white';
    ctx.font = "16px Arial";
    ctx.fillText('15',cw-175,166);
    
    towerChoice == 'mageTower' ? ctx.fillStyle = "red" : ctx.fillStyle = "white";
    ctx.fillRect(cw-100,100,54,54);
    ctx.drawImage(mageTower,cw-100,100,54,54);
    ctx.fillStyle = "black";
    ctx.fillRect(cw-100,150,54,20);
    ctx.drawImage(goldCoinImage, cw-110,145,30,30);
    ctx.fillStyle = 'white';
    ctx.font = "16px Arial";
    ctx.fillText('40',cw-75,166);
    
    drawGold();
    drawLife();
    drawEnemyInfo();
    drawStage();
    drawCogIcon();
}

function drawStage() {
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('stage '+(levelRounds+1)+'/2',cw-160, 60);
}

function handleSideMenuClick(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
   if(
       posX >= cw-200 && posX <= cw - 146 &&
       posY >= 100 && posY <= 154
   ) {
       towerChoice = 'archerTower';
   }
   else    if(
       posX >= cw-100 && posX <= cw - 46 &&
       posY >= 100 && posY <= 154
   ) {
       towerChoice = 'mageTower';
   }
    
}


function handleCogClick(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    if(
       posX >= cw-64 && posX <= cw -32 &&
       posY >= 30 && posY <= 62
    ) {
        setGameStage('stopMenu');
    }
}

function drawGameBorder() {
    ctx.drawImage(gameBorder,0,0,cw,ch);
}


// ---------------------------------------
// stop menu
let cogImage = new Image();
cogImage.src = 'assets/cog.png';
let stopMenuY = -300;

function drawCogIcon() {
    ctx.drawImage(cogImage,cw-64,30,32,32);
}

function animateStopMenu(){
    if(stopMenuY < 100) stopMenuY +=15;
}

function handleStopMenuClick (ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    if(
       posX >= cw/2-100 && posX <= cw/2+100 &&
       posY >= 250 && posY <= 300
    ) {
        setGameStage('game');
    }else if(
       posX >= cw/2-100 && posX <= cw/2+100 &&
       posY >= 320 && posY <= 370
    ) {
        setGameStage('mainMenu');
    }
}

function drawStopMenu() {
    drawLogic();
    ctx.fillStyle = 'blue';
    ctx.fillRect(cw/2-250,stopMenuY,500,300);
    
    ctx.fillStyle = 'black';
    ctx.fillRect(cw/2-100,stopMenuY+150,200,50);
    ctx.fillRect(cw/2-100,stopMenuY+220,200,50);
}
//----------------
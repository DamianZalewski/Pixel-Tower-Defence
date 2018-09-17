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
        stage = 'game';
        initFlag = true;
    }
}   
// ----------------------------------------------

// gamee stage ----------------------------------
let gameBorder = new Image();
gameBorder.src = "assets/gameBorder.png";
let mainMenuImage = new Image();
mainMenuImage.src = "assets/mainMenu.png";


function drawSideMenu() {
    towerChoice == 1 ? ctx.fillStyle = "red" : ctx.fillStyle = "white";
    ctx.fillRect(cw-200,100,54,54);
    ctx.drawImage(archerTower,cw-200,100,54,54);
    ctx.fillStyle = "black";
    ctx.fillRect(cw-200,150,54,20);
    ctx.drawImage(goldCoinImage, cw-210,145,30,30);
    ctx.fillStyle = 'white';
    ctx.font = "16px Arial";
    ctx.fillText('15',cw-175,166);
    
    towerChoice == 2 ? ctx.fillStyle = "red" : ctx.fillStyle = "white";
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
}

function handleSideMenuClick(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
   if(
       posX >= cw-200 && posX <= cw - 146 &&
       posY >= 100 && posY <= 154
   ) {
       towerChoice = 1;
   }
   else    if(
       posX >= cw-100 && posX <= cw - 46 &&
       posY >= 100 && posY <= 154
   ) {
       towerChoice = 2;
   }
    
}

function drawGameBorder() {
    ctx.drawImage(gameBorder,0,0,cw,ch);
}

// ---------------------------------------

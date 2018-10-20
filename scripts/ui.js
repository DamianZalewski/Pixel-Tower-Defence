// main menu stage -------------------------------
let mainMenuButtonWidth = 300;
let mainMenuButtonHeight = 50;
let mainMenuButtonX = cw/2 - mainMenuButtonWidth/2;
let mainMenuButtonY = 320;
let playButton = new Image();
playButton.src = 'assets/playButton.png'

function drawMainMenu() {
    ctx.drawImage(mainMenuImage,0,0,cw,ch);
    ctx.fillStyle = 'black';
    ctx.drawImage(playButton,mainMenuButtonX,mainMenuButtonY,mainMenuButtonWidth,mainMenuButtonHeight);
}

function handleMainMenuClick(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    if(
        posX >= mainMenuButtonX && posX <= mainMenuButtonX + mainMenuButtonWidth &&
        posY >= mainMenuButtonY && posY <= mainMenuButtonY + mainMenuButtonHeight
        ) 
    {
         setGameStage('adventureMapMenu');
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

let stopMenuImage = new Image();
stopMenuImage.src = "assets/stop-menu.png";

//let stopMenuButtonImage = new Image();
//stopMenuButtonImage.src = "assets/stop-menu-button.png";

function drawStopMenu() {
    drawLogic();
    ctx.drawImage(stopMenuImage,cw/2-250,stopMenuY,500,300);
    
    ctx.fillStyle = 'black';
    ctx.fillRect(cw/2-100,stopMenuY+150,200,50);
    ctx.fillRect(cw/2-100,stopMenuY+220,200,50);
}
//----------------
// game over stage

function drawGameOver() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,cw,ch);
    ctx.font = '36px arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over!',cw/2,150);
    ctx.fillRect(cw/2-100,400,200,50);
}

function handleGameOverClick (ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    if(
       posX >= cw/2-100 && posX <= cw/2+100 &&
       posY >= 400 && posY <= 450
    ) {
        setGameStage('mainMenu');
    }
}

//----------------------------
// adventure map stage
let adventureMapImage = new Image();
adventureMapImage.src = 'assets/adventureMap.png';
let backButton = new Image();
backButton.src = 'assets/backButton.png';
let townImage = new Image();
townImage.src = 'assets/town.png';
let questionButton = new Image();
questionButton.src = 'assets/questionButton.png';
function drawAdventureMap() {
    let size = 40;
    let x1 = 60;  let y1 = 140;
    let x2 = 150; let y2 = 200;
    let x3 = 20;  let y3 = 450;
    let x4 = 200; let y4 = 420;
    let x5 = 300; let y5 = 450;
    let x6 = 500; let y6 = 520;
    let x7 = 600; let y7 = 450;
    let x8 = 450; let y8 = 340;
    let x9 = 500; let y9 = 140;
    let x10 = 700; let y10 = 100;
    ctx.drawImage(adventureMapImage,0,0,cw,ch);
    ctx.fillStyle = 'black';
    ctx.drawImage(backButton,30,30,150,25); // back to main menu

    ctx.drawImage(townImage,x1,y1,size,size); // level 1
    if(mapLevel >= 2) ctx.drawImage(townImage,x2,y2,size,size); else  ctx.drawImage(questionButton,x2,y2,size,size);
    if(mapLevel >= 3) ctx.drawImage(townImage,x3,y3,size,size); else  ctx.drawImage(questionButton,x3,y3,size,size);
    if(mapLevel >= 4) ctx.drawImage(townImage,x4,y4,size,size); else  ctx.drawImage(questionButton,x4,y4,size,size);
    if(mapLevel >= 5) ctx.drawImage(townImage,x5,y5,size,size); else  ctx.drawImage(questionButton,x5,y5,size,size);
    if(mapLevel >= 6) ctx.drawImage(townImage,x6,y6,size,size); else  ctx.drawImage(questionButton,x6,y6,size,size);
    if(mapLevel >= 7) ctx.drawImage(townImage,x7,y7,size,size); else  ctx.drawImage(questionButton,x7,y7,size,size);
    if(mapLevel >= 8) ctx.drawImage(townImage,x8,y8,size,size); else  ctx.drawImage(questionButton,x8,y8,size,size);
    if(mapLevel >= 9) ctx.drawImage(townImage,x9,y9,size,size); else  ctx.drawImage(questionButton,x9,y9,size,size);
    if(mapLevel >= 10) ctx.drawImage(townImage,x10,y10,size,size); else  ctx.drawImage(questionButton,x10,y10,size,size);
    
    drawStarsAdventureMap();
}

function handleAdventureMapClick(ev) {
    let size = 40;
    let x1 = 60;  let y1 = 140;
    let x2 = 150; let y2 = 200;
    let x3 = 20;  let y3 = 450;
    let x4 = 200; let y4 = 420;
    let x5 = 300; let y5 = 450;
    let x6 = 500; let y6 = 520;
    let x7 = 600; let y7 = 450;
    let x8 = 450; let y8 = 340;
    let x9 = 500; let y9 = 140;
    let x10 = 700; let y10 = 100;
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    
    if(
       posX >= 30 && posX <= 180 &&
       posY >= 30 && posY <= 55
    ) {
        setGameStage('mainMenu');
    }else 
    if(mapLevel >= 1 &&
       posX >= x1 && posX <= x1+size &&
       posY >= y1 && posY <= y1+size
    ) {
        level = 1;
        setGameStage('game');
    }else     if( mapLevel >= 2 &&
       posX >= x2 && posX <= x2+size &&
       posY >= y2 && posY <= y2+size
    ) {
        level = 2;
        setGameStage('game');
    }else    if(
       posX >= x3 && posX <= x3+size &&
       posY >= y3 && posY <= y3+size
    ) {
        console.log('level 3');
    }else    if(
       posX >= x4 && posX <= x4+size &&
       posY >= y4 && posY <= y4+size
    ) {
        console.log('level 4');
    }else    if(
       posX >= x5 && posX <= x5+size &&
       posY >= y5 && posY <= y5+size
    ) {
        console.log('level 5');
    }else    if(
       posX >= x6 && posX <= x6+size &&
       posY >= y6 && posY <= y6+size
    ) {
        console.log('level 6');
    }else    if(
       posX >= x7 && posX <= x7+size &&
       posY >= y7 && posY <= y7+size
    ) {
        console.log('level 7');
    }else    if(
       posX >= x8 && posX <= x8+size &&
       posY >= y8 && posY <= y8+size
    ) {
        console.log('level 8');
    }else    if(
       posX >= x9 && posX <= x9+size &&
       posY >= y9 && posY <= y9+size
    ) {
        console.log('level 9');
    }else    if(
       posX >= x10 && posX <= x10+size &&
       posY >= y10 && posY <= y10+size
    ) {
        console.log('level 10');
    }

}

//-----------------------------
//--- win stage menu
function drawWinMenu() {
    ctx.fillStyle = 'gold';
    ctx.fillRect(cw/2-300,100,600,400);
    ctx.font = '36px arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText('You won!',cw/2,200);
    ctx.fillRect(cw/2-100,400,200,50);
}

function handleWinMenuClick(ev) {
        let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    if(
       posX >= cw/2-100 && posX <= cw/2+100 &&
       posY >= 400 && posY <= 450
    ) {
        setGameStage('adventureMapMenu');
    }

}

//---------------------
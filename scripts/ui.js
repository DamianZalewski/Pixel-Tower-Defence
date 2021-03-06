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
         setGameStage('profileMenu');
    }
}   
// ----------------------------------------------

// game stage ----------------------------------
let gameBorder = new Image();
gameBorder.src = "assets/gameBorder.png";
let mainMenuImage = new Image();
mainMenuImage.src = "assets/mainMenu.png";
let towerBackgroundImage = new Image();
towerBackgroundImage.src = "assets/tower-background.png";
let towerGoldBackgroundImage = new Image();
towerGoldBackgroundImage.src = "assets/tower-gold-background.png";
function drawSideMenu() {
    // first row
    towerChoice == 'archerTower' ? ctx.fillStyle = "gray" : ctx.fillStyle = "white";
    ctx.fillRect(cw-181,100,46,54);
    ctx.drawImage(archerTower,cw-185,100,54,54);
    ctx.drawImage(towerBackgroundImage,cw-185, 100, 54, 54);
    ctx.drawImage(towerGoldBackgroundImage,cw-185,150,54,20);
    ctx.drawImage(goldCoinImage, cw-195,145,30,30);
    ctx.fillStyle = 'white';
    ctx.font = "16px Arial";
    ctx.fillText('15',cw-155,166);
    
    towerChoice == 'mageTower' ? ctx.fillStyle = "gray" : ctx.fillStyle = "white";
    ctx.fillRect(cw-91,100,46,54);
    ctx.drawImage(mageTower,cw-95,100,54,54);
    ctx.drawImage(towerBackgroundImage,cw-95, 100, 54, 54);
    ctx.drawImage(towerGoldBackgroundImage,cw-95,150,54,20);
    ctx.drawImage(goldCoinImage, cw-105,145,30,30);
    ctx.fillStyle = 'white';
    ctx.font = "16px Arial";
    ctx.fillText('40',cw-65,166);
    
//    // second row
//    towerChoice == 'archerTower' ? ctx.fillStyle = "gray" : ctx.fillStyle = "white";
//    ctx.fillRect(cw-181,100,46,54);
//    ctx.drawImage(archerTower,cw-185,100,54,54);
//    ctx.drawImage(towerBackgroundImage,cw-185, 100, 54, 54);
//    ctx.drawImage(towerGoldBackgroundImage,cw-185,150,54,20);
//    ctx.drawImage(goldCoinImage, cw-195,145,30,30);
//    ctx.fillStyle = 'white';
//    ctx.font = "16px Arial";
//    ctx.fillText('15',cw-155,166);
//    
//    towerChoice == 'mageTower' ? ctx.fillStyle = "gray" : ctx.fillStyle = "white";
//    ctx.fillRect(cw-91,100,46,54);
//    ctx.drawImage(mageTower,cw-95,100,54,54);
//    ctx.drawImage(towerBackgroundImage,cw-95, 100, 54, 54);
//    ctx.drawImage(towerGoldBackgroundImage,cw-95,150,54,20);
//    ctx.drawImage(goldCoinImage, cw-105,145,30,30);
//    ctx.fillStyle = 'white';
//    ctx.font = "16px Arial";
//    ctx.fillText('40',cw-65,166);
//    
//    // third row
//    towerChoice == 'archerTower' ? ctx.fillStyle = "gray" : ctx.fillStyle = "white";
//    ctx.fillRect(cw-181,100,46,54);
//    ctx.drawImage(archerTower,cw-185,100,54,54);
//    ctx.drawImage(towerBackgroundImage,cw-185, 100, 54, 54);
//    ctx.drawImage(towerGoldBackgroundImage,cw-185,150,54,20);
//    ctx.drawImage(goldCoinImage, cw-195,145,30,30);
//    ctx.fillStyle = 'white';
//    ctx.font = "16px Arial";
//    ctx.fillText('15',cw-155,166);
//    
//    towerChoice == 'mageTower' ? ctx.fillStyle = "gray" : ctx.fillStyle = "white";
//    ctx.fillRect(cw-91,100,46,54);
//    ctx.drawImage(mageTower,cw-95,100,54,54);
//    ctx.drawImage(towerBackgroundImage,cw-95, 100, 54, 54);
//    ctx.drawImage(towerGoldBackgroundImage,cw-95,150,54,20);
//    ctx.drawImage(goldCoinImage, cw-105,145,30,30);
//    ctx.fillStyle = 'white';
//    ctx.font = "16px Arial";
//    ctx.fillText('40',cw-65,166);
    
    drawGold();
    drawLife();
    drawEnemyInfo();
    drawStage();
    drawCogIcon();
}


let monsterStageImage = new Image();
monsterStageImage.src = "assets/monster-stage.png";

function drawStage() {
    ctx.drawImage(monsterStageImage, cw-190,35,40,40);
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText((levelRounds+1)+'/2',cw-130, 65);
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
        setGameStage('adventureMapMenu');
    }
}

let stopMenuImage = new Image();
stopMenuImage.src = "assets/stop-menu.png";

let stopMenuButtonImage = new Image();
stopMenuButtonImage.src = "assets/stop-menu-button.png";

function drawStopMenu() {
    drawLogic();
    ctx.drawImage(stopMenuImage,cw/2-250,stopMenuY,500,300);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.drawImage(stopMenuButtonImage,cw/2-100,stopMenuY+150,200,50);
    ctx.fillText('BACK',cw/2,stopMenuY+185,200);
    ctx.drawImage(stopMenuButtonImage,cw/2-100,stopMenuY+220,200,50);
    ctx.fillText('EXIT',cw/2,stopMenuY+255,200);
}
//----------------
// game over stage

let ripImage = new Image();
ripImage.src = "assets/rip.png";

function drawGameOver() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,cw,ch);
    ctx.font = '28px arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.drawImage(ripImage,cw/2-64,200,128,128);
    ctx.drawImage(stopMenuButtonImage,cw/2-100,400,200,50);
    ctx.fillText('CONTINUE',cw/2,435,200,50);
     ctx.font = '38px arial';
    ctx.fillText('Game Over!',cw/2,150);
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
let isAchievementMenuActive = false;
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
    
    ctx.drawImage(questionButton,cw-50,10,size,size);
    
    if(isAchievementMenuActive) drawAchievementMenu();
}

function drawAchievementMenu() {
    ctx.fillStyle = 'brown';
    ctx.fillRect(100,100,600,400);
    
    ctx.fillStyle = 'black';
    ctx.fillRect(650,110,40,40);
    
    ctx.fillStyle = 'white';
    ctx.font = '32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Achievements',cw/2,140);
    
    let firstX = 135;
    let firstY = 220;
    let achivSize = 50;
    let margin = 30;
    
    let recordProfile = {};
    activeProfile = 1; // TEST REMOVE ME ~!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    switch(activeProfile) {
        case 1: recordProfile = record1;
            break;
        case 2: recordProfile = record2;
            break;
        case 3: recordProfile = record3;
            break;
            
    }
//        this.AchivFirstStep = false;
//    this.AchivFinish1map = false;
//    this.AchivFinish5map = false;
//    this.AchivFinish10map = false;
//    this.AchivKill10Enemies = false;
//    this.AchivKill100Enemies = false;
//    this.AchivKill1000Enemies = false;
//    this.AchivSpend100Gold = false;
//    this.AchivSpend1000Gold = false;
//    this.AchivSpend10000Gold = false;
//    this.AchivBarelyLived = false;
//    this.AchivGet1tripleStars = false;
//    this.AchivGet5tripleStars = false;
//    this.AchivGet10tripleStars = false;
    
    ctx.drawImage(recordProfile.AchivFirstStep ? townImage : questionButton,firstX,firstY,achivSize,achivSize);
    ctx.drawImage(recordProfile.AchivFinish1map ? townImage : questionButton,firstX+margin*1+achivSize*1,firstY,achivSize,achivSize);
    ctx.drawImage(recordProfile.AchivFinish5map ? townImage : questionButton,firstX+margin*2+achivSize*2,firstY,achivSize,achivSize);
    ctx.drawImage(recordProfile.AchivFinish10map ? townImage : questionButton,firstX+margin*3+achivSize*3,firstY,achivSize,achivSize);
    ctx.drawImage(recordProfile.AchivKill10Enemies ? townImage : questionButton,firstX+margin*4+achivSize*4,firstY,achivSize,achivSize);
    ctx.drawImage(recordProfile.AchivKill100Enemies ? townImage : questionButton,firstX+margin*5+achivSize*5,firstY,achivSize,achivSize);
    ctx.drawImage(recordProfile.AchivKill1000Enemies ? townImage : questionButton,firstX+margin*6+achivSize*6,firstY,achivSize,achivSize);

    let secondY = 340;
    ctx.drawImage(recordProfile.AchivSpend100Gold ? townImage : questionButton,firstX,secondY,achivSize,achivSize);
    ctx.drawImage(recordProfile.AchivSpend1000Gold ? townImage : questionButton,firstX+margin*1+achivSize*1,secondY,achivSize,achivSize);
    ctx.drawImage(recordProfile.AchivSpend10000Gold ? townImage : questionButton,firstX+margin*2+achivSize*2,secondY,achivSize,achivSize);
    ctx.drawImage(recordProfile.AchivBarelyLived ? townImage : questionButton,firstX+margin*3+achivSize*3,secondY,achivSize,achivSize);
    ctx.drawImage(recordProfile.AchivGet1tripleStars ? townImage : questionButton,firstX+margin*4+achivSize*4,secondY,achivSize,achivSize);
    ctx.drawImage(recordProfile.AchivGet5tripleStars ? townImage : questionButton,firstX+margin*5+achivSize*5,secondY,achivSize,achivSize);
    ctx.drawImage(recordProfile.AchivGet10tripleStars ? townImage : questionButton,firstX+margin*6+achivSize*6,secondY,achivSize,achivSize);
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
    if( isAchievementMenuActive &&
       posX >= 650 && posX <= 690 &&
       posY >= 110 && posY <= 150
    ) {
        isAchievementMenuActive = false;
    } else if (isAchievementMenuActive) {
        return 0;
    }
    else if(
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
        level = 3;
        setGameStage('game');
    }else    if(
       posX >= x4 && posX <= x4+size &&
       posY >= y4 && posY <= y4+size
    ) {
        level = 4;
        setGameStage('game');
    }else    if(
       posX >= x5 && posX <= x5+size &&
       posY >= y5 && posY <= y5+size
    ) {
        level = 5;
        setGameStage('game');
    }else    if(
       posX >= x6 && posX <= x6+size &&
       posY >= y6 && posY <= y6+size
    ) {
        level = 6;
        setGameStage('game');
    }else    if(
       posX >= x7 && posX <= x7+size &&
       posY >= y7 && posY <= y7+size
    ) {
        level = 7;
        setGameStage('game');
    }else    if(
       posX >= x8 && posX <= x8+size &&
       posY >= y8 && posY <= y8+size
    ) {
        level = 8;
        setGameStage('game');
    }else    if(
       posX >= x9 && posX <= x9+size &&
       posY >= y9 && posY <= y9+size
    ) {
        level = 9;
        setGameStage('game');
    }else    if(
       posX >= x10 && posX <= x10+size &&
       posY >= y10 && posY <= y10+size
    ) {
        level = 10;
        setGameStage('game');
    } else    if(
       posX >= cw-50 && posX <= cw-10 &&
       posY >= 10 && posY <= 50
    ) {
        isAchievementMenuActive = true;
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


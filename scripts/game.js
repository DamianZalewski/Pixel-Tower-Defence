let initFlag = true;
let stage = 'mainMenu';
let animateStopMenuInterval;
let enemyAnimationInternal;
let addEnemyInterval;
    
function game() {
    switch(stage) {
        case 'mainMenu':
            if(initFlag) mainMenuInit();
            drawMainMenu();
            break;
        case 'adventureMapMenu':
            if(initFlag) adventureMapInit();
            drawAdventureMap();
            break;
        case 'game':
            if(initFlag) gameInit();
            drawLogic();
            updateLogic();
            break;
        case 'stopMenu':
            if(initFlag) stopMenuInit();
            drawStopMenu();
            break;
        case 'gameOver':
            if(initFlag) gameOverInit();
            drawGameOver();
            break;
        case 'winMenu':
            if(initFlag) winMenuInit();
            drawWinMenu();
            break;
    }
}

function gameInit() {
    createFields();
    enemyAnimation();
    addEnemy();
    enemyAnimationInternal = setInterval(enemyAnimation,150);
    addEnemyInterval = setInterval(addEnemy,3000);
    gameEventInit();
    initFlag = false;
}

function winMenuInit() {
    clearGameVariables();
    canvas.addEventListener('click',handleWinMenuClick);
    initFlag = false
}

function gameOverInit() {
    clearGameVariables();
    canvas.addEventListener('click',handleGameOverClick);
    initFlag = false;
}

function mainMenuInit() {
    clearGameVariables();
    level = 1;
    canvas.addEventListener('click',handleMainMenuClick);
    if(starsInitFlag) {
        initStars();
        starsInitFlag = false;
    }
    initFlag = false;
}

function stopMenuInit() {
    stopMenuY = -300;
    animateStopMenuInterval = setInterval(animateStopMenu,1);
    canvas.addEventListener('click',handleStopMenuClick);
    initFlag = false;
}

function adventureMapInit() {
    canvas.addEventListener('click',handleAdventureMapClick);
    initFlag = false;
}

function drawLogic() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0,0,800,600);
    pathArray = [];
    drawGameBorder();
    drawFields();
    drawSideMenu();
    drawEnemy();
    drawShot();
}

function updateLogic() {
    updateEnemy();
    updateShot();
}

function gameEventInit() {
    canvas.addEventListener('mousemove',handleFieldHover);
    canvas.addEventListener('click',handleFieldClick);
    canvas.addEventListener('click',handleSideMenuClick);
    canvas.addEventListener('click',handleCogClick);
}

function removeAllEvenListeners() {
    canvas.removeEventListener('mousemove',handleFieldHover);
    canvas.removeEventListener('click',handleFieldClick);
    canvas.removeEventListener('click',handleSideMenuClick);
    canvas.removeEventListener('click',handleCogClick);
    canvas.removeEventListener('click',handleMainMenuClick);
    canvas.removeEventListener('click',handleStopMenuClick);
    canvas.removeEventListener('click',handleGameOverClick);
    canvas.removeEventListener('click',handleAdventureMapClick);
}

function clearAllIntervals() {
    clearInterval(enemyAnimationInternal);
    clearInterval(addEnemyInterval);
    clearInterval(animateStopMenuInterval);
}

function setGameStage(newStage) {
    stage = newStage;
    clearAllIntervals();
    removeAllEvenListeners();
    initFlag = true;
}

function clearGameVariables() {
    fields = [];
    enemiesMax = 10;
    enemiesCounter = 0;
    enemiesArray = [];
    enemiesTypeCounter = 0;
    killedEnemy = 0;
    towerChoice = 'none';
    gold = 100;
    life = 10;
    levelRounds = 0;
}

setInterval(game,1000/60);









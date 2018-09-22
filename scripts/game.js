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
        case 'game':
            if(initFlag) gameInit();
            drawLogic();
            updateLogic();
            break;
        case 'stopMenu':
            if(initFlag) stopMenuInit();
            drawStopMenu();
            break;
    }
}

function gameInit() {
    createFields();
    enemyAnimationInternal = setInterval(enemyAnimation,150);
    addEnemyInterval = setInterval(addEnemy,3000);
    gameEventInit();
    initFlag = false;
}

function mainMenuInit() {
    canvas.addEventListener('click',handleMainMenuClick);
    initFlag = false;
}

function stopMenuInit() {
    stopMenuY = -300;
    animateStopMenuInterval = setInterval(animateStopMenu,1);
    canvas.addEventListener('click',handleStopMenuClick);
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


setInterval(game,1000/60);









let initFlag = true;
let stage = 'mainMenu';

function game() {
    switch(stage) {
        case 'mainMenu':
            if(initFlag) mainMenuInit();
            drawMainMenu();
            break;
        case 'game':
            if(initFlag) init();
            drawLogic();
            updateLogic();
            eventHandler();
            break;
    }

}

function init() {
    createFields();
    setInterval(enemyAnimation,150);
    setInterval(addEnemy,3000);
    initFlag = false;
}

function mainMenuInit() {
    canvas.addEventListener('click',handleMainMenuClick);
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

function eventHandler() {
    canvas.addEventListener('mousemove',handleFieldHover);
    canvas.addEventListener('click',handleFieldClick);
    canvas.addEventListener('click',handleSideMenuClick);
}


setInterval(game,1000/60);









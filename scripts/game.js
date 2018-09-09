let initFlag = true;

function game() {
    if(initFlag) init();
    drawLogic();
    updateLogic();
    eventHandler();
}

function init() {
    createFields();
    setInterval(enemyAnimation,150);
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









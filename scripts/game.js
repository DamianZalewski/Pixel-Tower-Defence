let initFlag = true;

function game() {

    
    if(initFlag) init();
    drawLogic();
    updateLogic();
    eventHandler();
}

function init() {
    createFields();
    
    initFlag = false;
}

function drawLogic() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0,0,800,600);
    
    drawFields();
    drawSideMenu();
    drawEnemy();
}

function updateLogic() {
    updateEnemy();
}

function eventHandler() {
    canvas.addEventListener('mousemove',handleFieldHover);
    canvas.addEventListener('click',handleFieldClick);
    canvas.addEventListener('click',handleSideMenuClick);
}


setInterval(game,1000/60);









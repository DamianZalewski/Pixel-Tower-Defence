let initFlag = true;

function game() {

    
    if(initFlag) init();
    drawLogic();
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
}

function eventHandler() {
    canvas.addEventListener('mousemove',handleFieldHover);
    canvas.addEventListener('click',handleFieldClick);
}


setInterval(game,1000/60);









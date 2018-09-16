let gameBorder = new Image();
gameBorder.src = "assets/gameBorder.png";
let mainMenuImage = new Image();
mainMenuImage.src = "assets/mainMenu.png";

function drawGameBorder() {
    ctx.drawImage(gameBorder,0,0,cw,ch);
}

function drawMainMenu() {
    ctx.drawImage(mainMenuImage,0,0,cw,ch);
    ctx.fillStyle = 'black';
    ctx.fillRect(250,300,300,50);
    ctx.fillRect(250,400,300,50);
}

function handleMainMenuClick(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    if(
        posX >= 250 && posX <= 550 &&
        posY >= 300 && posY <= 350
        ) 
    {
        stage = 'game';
        initFlag = true;
    }
}   
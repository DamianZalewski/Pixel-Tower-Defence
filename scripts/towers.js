let archerTower = new Image();
archerTower.src = "assets/archer-tower.png";

function drawTower(x, y, width, height) {
    ctx.drawImage(archerTower,x,y,width,height);
}
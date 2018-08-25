let life = 10;

let lifeImage = new Image();
lifeImage.src = "assets/life-heart.png";


function drawLife() {
    ctx.fillStyle = 'gray';
    ctx.fillRect(cw-190,ch-130,150,40);
    ctx.drawImage(lifeImage,cw-220,ch-138,54,54);
    ctx.fillStyle = 'white';
    ctx.font = "30px Arial";
    ctx.fillText(life,cw-165,ch-100);
}
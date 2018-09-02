let goldCoinImage = new Image();
goldCoinImage.src = "assets/gold-coin.png"
let gold = 100;


function drawGold() {
    ctx.fillStyle = 'gray';
    ctx.fillRect(cw-190,ch-70,150,40);
    ctx.drawImage(goldCoinImage,cw-220,ch-78,54,54);
    ctx.fillStyle = 'white';
    ctx.font = "30px Arial";
    ctx.fillText(gold,cw-165,ch-40);
}
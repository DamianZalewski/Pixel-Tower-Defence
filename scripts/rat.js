let rat = function(){
    this.width = 54;
    this.height = 54;
    this.x = 54*5 - 24;
    this.y = 10;
    this.ratImage1 = new Image();
    this.ratImage1.src = "assets/rat1.png";
    this.ratImage2 = new Image();
    this.ratImage2.src = "assets/rat2.png";
    this.ratImage3 = new Image();
    this.ratImage3.src = "assets/rat3.png";
    this.ratImage4 = new Image();
    this.ratImage4.src = "assets/rat4.png";
    this.ratAnimationStage = 0;
    this.ratHp = 10;
    this.ratMaxHp = 10;
}

let ratObject = new rat();

function drawEnemy() {
    switch(ratObject.ratAnimationStage) {
        case 0:
            ctx.drawImage(ratObject.ratImage1, ratObject.x, ratObject.y, ratObject.width, ratObject.height);
            break;
        case 1:
            ctx.drawImage(ratObject.ratImage2, ratObject.x, ratObject.y, ratObject.width, ratObject.height);
            break;
        case 2:
            ctx.drawImage(ratObject.ratImage3, ratObject.x, ratObject.y, ratObject.width, ratObject.height);
            break;
        case 3:
            ctx.drawImage(ratObject.ratImage4, ratObject.x, ratObject.y, ratObject.width, ratObject.height);
            break;
    }
    
    //hp bar
    ctx.fillStyle = 'green';
    if(ratObject.ratHp < 7) ctx.fillStyle = 'yellow'
    if(ratObject.ratHp < 4) ctx.fillStyle = 'red';
    ctx.fillRect(ratObject.x+ (ratObject.width - ratObject.ratHp * 5)/2, ratObject.y-5,ratObject.ratHp * 5,5);
}

function updateEnemy() {
    moveEnemy();

}

function moveEnemy() {
    ratObject.y += 1;
    if (ratObject.y > 54*10) {
        ratObject.y = 10;
        life --;
        ratObject.ratHp = ratObject.ratMaxHp;
    }
}

function enemyAnimation() {
    ratObject.ratAnimationStage++;
    if(ratObject.ratAnimationStage == 4) ratObject.ratAnimationStage = 0;
}

 function drawEnemyInfo() {
        ctx.fillStyle = 'black';
        ctx.fillRect(cw-190,ch-250,150,100);
        switch(ratObject.ratAnimationStage) {
            case 0:
                ctx.drawImage(ratObject.ratImage1,cw-140,ch-210,54,54);
                break;
            case 1:
                ctx.drawImage(ratObject.ratImage2,cw-140,ch-210,54,54);
                break;
            case 2:
                ctx.drawImage(ratObject.ratImage3,cw-140,ch-210,54,54);
                break;
            case 3:
                ctx.drawImage(ratObject.ratImage4,cw-140,ch-210,54,54);
                break;
        }
        ctx.fillStyle = "white";
        ctx.fillText('Rat', cw-140,ch-220);
}
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
    this.pathIndex = 0;
    this.pathCounter = 0;
}

let enemiesArray = [];
enemiesArray[0] = new rat();
enemiesArray[1] = new rat();
enemiesArray[0].y = 200;


function drawEnemy() {
    for(let i = 0; i<enemiesArray.length;i++){
        switch(enemiesArray[i].ratAnimationStage) {
        case 0:
            ctx.drawImage(enemiesArray[i].ratImage1, enemiesArray[i].x, enemiesArray[i].y, enemiesArray[i].width, enemiesArray[i].height);
            break;
        case 1:
            ctx.drawImage(enemiesArray[i].ratImage2, enemiesArray[i].x, enemiesArray[i].y, enemiesArray[i].width, enemiesArray[i].height);
            break;
        case 2:
            ctx.drawImage(enemiesArray[i].ratImage3, enemiesArray[i].x, enemiesArray[i].y, enemiesArray[i].width, enemiesArray[i].height);
            break;
        case 3:
            ctx.drawImage(enemiesArray[i].ratImage4, enemiesArray[i].x, enemiesArray[i].y, enemiesArray[i].width, enemiesArray[i].height);
            break;
    }
    //hp bar
    ctx.fillStyle = 'green';
    if(enemiesArray[i].ratHp < 7) ctx.fillStyle = 'yellow'
    if(enemiesArray[i].ratHp < 4) ctx.fillStyle = 'red';
    ctx.fillRect(enemiesArray[i].x+ (enemiesArray[i].width - enemiesArray[i].ratHp * 5)/2, enemiesArray[i].y-5,enemiesArray[i].ratHp * 5,5);
        }
}

function updateEnemy() {
    for(let i = 0; i<enemiesArray.length;i++){
        enemiesArray[i].y = fields[pathArray[enemiesArray[i].pathIndex]].posY + enemiesArray[i].pathCounter;
        if(enemiesArray[i].pathCounter == 53) {
            if(pathArray.length-1 == enemiesArray[i].pathIndex) {
                enemiesArray[i].pathIndex = 0;
                life--;
                enemiesArray[i].ratHp = enemiesArray[i].ratMaxHp; 
            } 
            else {
                enemiesArray[i].pathIndex++;
            }       
            enemiesArray[i].pathCounter = 0;
        }
        else {
            enemiesArray[i].pathCounter++;
        }
    }
    
}

function enemyAnimation() {
    for(let i = 0; i<enemiesArray.length;i++){
        enemiesArray[i].ratAnimationStage++;
        if(enemiesArray[i].ratAnimationStage == 4) enemiesArray[i].ratAnimationStage = 0;
    }
}

 function drawEnemyInfo() {
        ctx.fillStyle = 'black';
        ctx.fillRect(cw-190,ch-250,150,100);
        switch(enemiesArray[0].ratAnimationStage) {
            case 0:
                ctx.drawImage(enemiesArray[0].ratImage1,cw-140,ch-210,54,54);
                break;
            case 1:
                ctx.drawImage(enemiesArray[0].ratImage2,cw-140,ch-210,54,54);
                break;
            case 2:
                ctx.drawImage(enemiesArray[0].ratImage3,cw-140,ch-210,54,54);
                break;
            case 3:
                ctx.drawImage(enemiesArray[0].ratImage4,cw-140,ch-210,54,54);
                break;
        }
        ctx.fillStyle = "white";
        ctx.fillText('Rat', cw-140,ch-220);
}
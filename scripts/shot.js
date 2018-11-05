let shotImage = new Image();
shotImage.src = "assets/mage-shot.png";

function drawShot() {
    for(let i = 0; i < fields.length; i++) {
        if(fields[i].shotBool) ctx.drawImage(shotImage, fields[i].shotX, fields[i].shotY, 16, 16);
    }
}

function updateShot() {
    for(let i = 0; i < fields.length; i++) {
        if(fields[i].type !== 'building') continue;
        if(fields[i].shotBool && !isEnemyInRange(fields[i])) {
            fields[i].shotBool = false;
            fields[i].shotX = -1;
            fields[i].shotX = -1;
        }
        else 
        if (!fields[i].shotBool && isEnemyInRange(fields[i])) {
        {
                fields[i].shotBool = true;
                fields[i].shotX = fields[i].posX+22;
                fields[i].shotY = fields[i].posY;
            }
        }
        else {
            for(let j = 0;j < enemiesArray.length; j++) {
                if(!enemiesArray[j].alive) continue;
                fields[i].shotX > enemiesArray[j].x+enemiesArray[j].width/2 ? fields[i].shotX -=1 : fields[i].shotX += 1;
                fields[i].shotY > enemiesArray[j].y+enemiesArray[j].height/2 ? fields[i].shotY -=1 : fields[i].shotY += 1;
            
                if((fields[i].shotX >= enemiesArray[j].x -40  && fields[i].shotX <= enemiesArray[j].x +40 ) && 
                   (fields[i].shotY >= enemiesArray[j].y - 40 && fields[i].shotY <= enemiesArray[j].y +40)) {
                        fields[i].shotBool = false;
                        enemiesArray[j].ratHp --; 
                        if(enemiesArray[j].ratHp === 0) {
                            gold += 20;
                            killEnemy(j);
                        }
                } 
            }
        }
    }
}

function isEnemyInRange(field) {
    let x = field.posX;
    let y = field.posY;
    let size = field.size;
    let range = field.range;
    range = 1;
    for(let j = 0; j<enemiesArray.length; j++) {
        if(!enemiesArray[j].alive) continue;
        let enemyX = enemiesArray[j].x;
        let enemyY = enemiesArray[j].y;
        let enemyW = enemiesArray[j].width;
        let enemyH = enemiesArray[j].height;
        if(
            enemyY + enemyW >=  x - (range * size)  &&
            enemyX <=  x + size + (range * size) &&
            enemyY + enemyH >=  y - (range * size) &&
            enemyY <=  y + size + (range * size) 
        ) return true;
    }
    
    return false;
}
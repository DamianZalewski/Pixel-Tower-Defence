let shotImage = new Image();
shotImage.src = "assets/mage-shot.png";

function drawShot() {
    for(let i = 0; i < fields.length; i++) {
        if(fields[i].shotBool) ctx.drawImage(shotImage, fields[i].shotX, fields[i].shotY, 16, 16);
    }
}

function updateShot() {
    for(let i = 0; i < fields.length; i++) {
        if (!fields[i].shotBool && fields[i].type === 'building') {
            if(isEnemyInRange(fields[i])) {
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
    for(let j = 0; j<enemiesArray.length; j++) {
        if(!enemiesArray[j].alive) continue;
        if(
            enemiesArray[j].x + enemiesArray[j].width >=  field.x - (field.range * field.size)  &&
            enemiesArray[j].x <=  field.x + field.size + (field.range * field.size) &&
            enemiesArray[j].y + enemiesArray[j].height >=  field.y - (field.range * field.size) &&
            enemiesArray[j].y <=  field.y + field.size + (field.range * field.size) 
        ) return true;
    }
    
    return false;
}
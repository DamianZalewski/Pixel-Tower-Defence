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
            fields[i].shotBool = true;
            fields[i].shotX = fields[i].posX;
            fields[i].shotY = fields[i].posY;
        }
        else {
            fields[i].shotX > EnemyX+EnemyWidth/2 ? fields[i].shotX -=1 : fields[i].shotX += 1;
            fields[i].shotY > EnemyY+EnemyHeight/2 ? fields[i].shotY -=1 : fields[i].shotY += 1;
            
            if((fields[i].shotX >= EnemyX -40  && fields[i].shotX <= EnemyX +40 ) && 
               (fields[i].shotY >= EnemyY - 40 && fields[i].shotY <= EnemyY +40)) {
                fields[i].shotBool = false;
                ratHp --; 
                if(ratHp === 0) {
                    gold += 20;
                    ratHp = 10;
                    EnemyY = 10;
                }
            } 
        }
    }
}

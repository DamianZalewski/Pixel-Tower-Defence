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
            fields[i].shotX > EnemyX+EnemyWidth/2 ? fields[i].shotX -=2 : fields[i].shotX += 2;
            fields[i].shotY > EnemyY+EnemyHeight/2 ? fields[i].shotY -=2 : fields[i].shotY += 2;
            if(fields[i].shotX === EnemyX || fields[i].shotY === EnemyY) fields[i].shotBool = false;
        }
    }
}

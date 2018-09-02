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
            fields[i].shotX > ratObject.x+ratObject.width/2 ? fields[i].shotX -=1 : fields[i].shotX += 1;
            fields[i].shotY > ratObject.y+ratObject.height/2 ? fields[i].shotY -=1 : fields[i].shotY += 1;
            
            if((fields[i].shotX >= ratObject.x -40  && fields[i].shotX <= ratObject.x +40 ) && 
               (fields[i].shotY >= ratObject.y - 40 && fields[i].shotY <= ratObject.y +40)) {
                fields[i].shotBool = false;
                ratObject.ratHp --; 
                if(ratObject.ratHp === 0) {
                    gold += 20;
                    ratObject.ratHp = ratObject.ratMaxHp;
                    ratObject.y = 10;
                    ratObject.pathIndex = 0;
                    ratObject.pathCounter = 0;
                }
            } 
        }
    }
}

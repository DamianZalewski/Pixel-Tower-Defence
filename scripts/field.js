var rect = canvas.getBoundingClientRect();
let fields = [];

function field()  {
    this.id;
    this.backgroundColor = "";
    this.width = 54;
    this.height = 54;
    this.posX = 0;
    this.posY = 0;
    this.type = 'none';
    this.tower = '';
    this.shotBool = false;
    this.shootX = this.posX;
    this.shootY = this.posY;
}

function createFields() {
    let index = 0;
    for(let i = 0;i<10;i++) {
        let k = 0;
        for(let j = 0; j<10;j++) {
            let newField = new field();
            newField.backgroundColor = "black";
            if(i%10 == 4) newField.backgroundColor = "gray";
            newField.posX = 30+i*54;
            newField.posY = 30+j*54;
            newField.id = index;
            index++;
            fields.push(newField);
        }
    }
}

function drawFields() {
    for(let i = 0;i<fields.length;i++) {
                    ctx.fillStyle = fields[i].backgroundColor;
        ctx.fillRect(fields[i].posX,fields[i].posY,fields[i].width,fields[i].height);
            
        if(fields[i].type == 'building') {
                    drawTower(fields[i].tower,fields[i].posX, fields[i].posY, fields[i].width, fields[i].height);
            }
        }
   
}

function handleFieldHover(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    for(let i = 0;i<fields.length;i++) {
        if(
            posX >= fields[i].posX && posX <= fields[i].posX + fields[i].width &&
            posY >= fields[i].posY && posY <= fields[i].posY + fields[i].height
        ) {
             if(fields[i].backgroundColor != "gray") fields[i].backgroundColor = "yellow";
        }
        else {
            if(fields[i].backgroundColor != "gray")  fields[i].backgroundColor = "black";
        }
    }
}

function handleFieldClick(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    for(let i = 0;i<fields.length;i++) {
        if(
            posX >= fields[i].posX && posX <= fields[i].posX + fields[i].width &&
            posY >= fields[i].posY && posY <= fields[i].posY + fields[i].height
        ) {
            fields[i].type = 'building';
            switch(towerChoice) {
                case 1 : 
                    fields[i].tower = 'archerTower';
                    break;
                case 2 : 
                    fields[i].tower = 'mageTower';
                    break;
            }
        }

    }
}

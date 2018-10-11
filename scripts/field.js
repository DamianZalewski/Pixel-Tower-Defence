var rect = canvas.getBoundingClientRect();
let fields = [];


function field()  {
    this.id;
    this.size = 54;
    this.posX = 0;
    this.posY = 0;
    this.type = 'none';
    this.tower = '';
    this.range = 0;
    this.damage = 0;
    this.shotBool = false;
    this.shootX = this.posX;
    this.shootY = this.posY;
    this.hover = false;
}

function createFields() {
    let index = 0;
    let rowCount = 10;
    let columnCount = rowCount;
    let leftPadding = 30;
    let topPadding = 30;
    let fieldSize = 54;
    for(let i = 0;i<rowCount;i++) {
        for(let j = 0; j<10;j++) {
            let newField = new field();
            newField.posX = leftPadding+j*fieldSize;
            newField.posY = topPadding+i*fieldSize;
            newField.id = index;
            index++;
            fields.push(newField);
        }
    }
}

function drawFields() {
    for(let i = 0;i<fields.length;i++) { 
        drawLevel1(fields[i].posX, fields[i].posY, i);
        
        if(fields[i].hover == true) {
            ctx.fillStyle = 'yellow';
            ctx.fillRect(fields[i].posX, fields[i].posY, fields[i].size, fields[i].size);
        }
        
        if(fields[i].type === 'building') {
                    drawTower(fields[i].tower,fields[i].posX, fields[i].posY, fields[i].size, fields[i].size);
            }
        }
   
}

function handleFieldHover(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    for(let i = 0;i<fields.length;i++) {
        if(
            posX >= fields[i].posX && posX <= fields[i].posX + fields[i].size &&
            posY >= fields[i].posY && posY <= fields[i].posY + fields[i].size
        ) {
              fields[i].hover = true;

        }
        else {
              fields[i].hover = false;
        }
    }
}

function handleFieldClick(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    for(let i = 0;i<fields.length;i++) {
        if(
            posX >= fields[i].posX && posX <= fields[i].posX + fields[i].size &&
            posY >= fields[i].posY && posY <= fields[i].posY + fields[i].size
        ) {
            if( fields[i].type === 'building' ||
                fields[i].type === 'path' ||
                fields[i].type === 'obstacle') continue;
            buildTower(i);
        }

    }
}

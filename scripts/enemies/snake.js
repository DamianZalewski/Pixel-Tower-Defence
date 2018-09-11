let snake = function(){
    this.width = 54;
    this.height = 54;
    this.x = 54*5 - 24;
    this.y = 10;
    // left
    this.ratImageLeft1 = new Image();
    this.ratImageLeft1.src = "assets/snake-left-1.png";
    this.ratImageLeft2 = new Image();
    this.ratImageLeft2.src = "assets/snake-left-2.png";
    this.ratImageLeft3 = new Image();
    this.ratImageLeft3.src = "assets/snake-left-1.png";
    this.ratImageLeft4 = new Image();
    this.ratImageLeft4.src = "assets/snake-left-2.png";
    // top
    this.ratImageTop1 = new Image();
    this.ratImageTop1.src = "assets/snake-top-1.png";
    this.ratImageTop2 = new Image();
    this.ratImageTop2.src = "assets/snake-top-2.png";
    this.ratImageTop3 = new Image();
    this.ratImageTop3.src = "assets/snake-top-1.png";
    this.ratImageTop4 = new Image();
    this.ratImageTop4.src = "assets/snake-top-2.png";
    // right
    this.ratImageRight1 = new Image();
    this.ratImageRight1.src = "assets/snake-right-1.png";
    this.ratImageRight2 = new Image();
    this.ratImageRight2.src = "assets/snake-right-2.png";
    this.ratImageRight3 = new Image();
    this.ratImageRight3.src = "assets/snake-right-1.png";
    this.ratImageRight4 = new Image();
    this.ratImageRight4.src = "assets/snake-right-2.png";
    // bottom
    this.ratImageBottom1 = new Image();
    this.ratImageBottom1.src = "assets/snake-bottom-1.png";
    this.ratImageBottom2 = new Image();
    this.ratImageBottom2.src = "assets/snake-bottom-2.png";
    this.ratImageBottom3 = new Image();
    this.ratImageBottom3.src = "assets/snake-bottom-1.png";
    this.ratImageBottom4 = new Image();
    this.ratImageBottom4.src = "assets/snake-bottom-2.png";
    //---
    this.ratAnimationStage = 0;
    this.ratHp = 10;
    this.ratMaxHp = 10;
    this.pathIndex = -1;
    this.pathCounter = 0;
    this.direction = '';
    this.alive = true;
}

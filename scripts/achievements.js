function achieventRecord()  {
    this.AchivFirstStep = false;
    this.AchivFinish1map = false;
    this.AchivFinish5map = false;
    this.AchivFinish10map = false;
    this.AchivKill10Enemies = false;
    this.AchivKill100Enemies = false;
    this.AchivKill1000Enemies = false;
    this.AchivSpend100Gold = false;
    this.AchivSpend1000Gold = false;
    this.AchivSpend10000Gold = false;
    this.AchivBarelyLived = false;
    this.AchivGet1tripleStars = false;
    this.AchivGet5tripleStars = false;
    this.AchivGet10tripleStars = false;
    
    this.killedEnemiesCounter = 0;
    this.goldUsedCounter = 0;
}

var record1 = new achieventRecord();
var record2 = new achieventRecord();
var record3 = new achieventRecord();


record1.AchivFirstStep = true;
record1.AchivBarelyLived = true;
record1.AchivFinish10map = true;
record1.AchivKill1000Enemies = true;
record1.AchivGet10tripleStars = true;


//1. First step
//2. Finish First Map - first blood
//3. Finish 5 map
//4. Finish Game
//5. Kill 10 enemies
//6. Kill 100 Eenemies
//7. Kill 1000 Enemies
//8. Spend 100 gold
//9. Spend 1000 gold
//10. Spend 10000 gold
//11. Barely lived – 1 live left
//12. Get first triple star
//13. Get 5 triple star
//14. Get 10 triple star
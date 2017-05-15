
var GameLayer = cc.Layer.extend({
    grandma: null,
    zombiesLayer: null,
    score:0,
    scoreLabel:null,
    ctor:function () {
        this._super();




        var background = new BackgroundLayer();
        this.addChild(background);
        
        this.grandma = new Grandma();
        this.addChild(this.grandma);

        this.zombiesLayer = new ZombiesLayer();
        this.addChild(this.zombiesLayer);

        this.scheduleUpdate();

        this.scoreLabel = new cc.LabelTTF("SCORE:0","Arial",34 );
        this.scoreLabel.x = cc.winSize.width/2;
        this.scoreLabel.y = cc.winSize.height - this.scoreLabel.height;
        this.addChild(this.scoreLabel);
        this.scoreLabel.enableStroke(cc.color(0, 0, 0), 2);

        return true;


    },
    update: function (dt) {

        if (this.zombiesLayer.zombie!= null) {
            var zombox = this.zombiesLayer.zombie.getBoundingBox();
            if (zombox.x + zombox.width <= 100){
                this.removeZomb();
            }

        }



        if (this.grandma != null && this.zombiesLayer.zombie!= null) {
            var box = this.grandma.getBoundingBox();
            var box1 = this.zombiesLayer.zombie.getBoundingBox();
            if (cc.rectIntersectsRect(box, box1)) {
                cc.log(
                    "cc"
                );
                this.grandma.removeFromParent();
                this.grandma = null;
                var helloLabel = new cc.LabelTTF("Game over!", "Calibi", 38);

                helloLabel.x = cc.winSize.width / 2;
                helloLabel.y = cc.winSize.height / 2;
                helloLabel.color = cc.color(000, 0, 0);

                this.addChild(helloLabel, 5);
            }
        }
    },
    removeZomb: function(){
        this.zombiesLayer.zombie.removeFromParent();
        if(this.grandma = null) {
            this.zombiesLayer.zombie = null;
            this.score++;
        }
        this.scoreLabel.string = "SCORE:"+this.score;
    }











});



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

                this.ShowGameOver();


            }
        }
    },

    ShowGameOver: function(){
        this.grandma.removeFromParent();
        this.grandma = null;
        var panel = new ccui.Scale9Sprite(res.CardImage);
        //var helloLabel = new cc.LabelTTF("Game over!", "Calibi", 38);

        panel.x = cc.winSize.width / 2;
        panel.y = cc.winSize.height / 2;
        panel.height = cc.winSize.height * 0.8;
        panel.width =  cc.winSize.width * 0.5;
        //helloLabel.color = cc.color(000, 0, 0);
        var lbl = new cc.LabelTTF("GAME OVER!", "Calibi", 52);
        lbl.x = panel.width / 2;
        lbl.y = panel.height / 2 + 100;
        panel.addChild(lbl);

        var button = new ccui.Button(res.CardImage, res.CardImageSelected, res.CardImageDisabled);
        button.setScale9Enabled(true);
        button.width *= 2;
        button.height /= 2;

        button.setTitleText("RETRY");
        button.setTitleFontSize(38);

        button.x = panel.width / 2;
        button.y = panel.height / 2 - 200;
        panel.addChild(button);
        var score = new cc.LabelTTF("Score:"+this.score, "Calibi", 38);
        score.x = panel.width / 2;
        score.y = panel.height / 2 - 100;
        panel.addChild(score);


        this.addChild(panel, 5);
        button.addClickEventListener(this.onButtonClick.bind(this));
    },

    onButtonClick: function(button){
        cc.director.runScene(new GameScene());
    },
    removeZomb: function(){
        this.zombiesLayer.zombie.removeFromParent();
        if(this.grandma != null) {
            this.zombiesLayer.zombie = null;
            this.score++;
        }
        this.scoreLabel.string = "SCORE:"+this.score;
    }











});


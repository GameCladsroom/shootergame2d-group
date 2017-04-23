
var GameLayer = cc.Layer.extend({
    grandma: null,
    zombiesLayer: null,
    ctor:function () {
        this._super();

        var background = new BackgroundLayer();
        this.addChild(background);
        
        this.grandma = new Grandma();
        this.addChild(this.grandma);

        this.zombiesLayer = new ZombiesLayer();
        this.addChild(this.zombiesLayer);

        return true;
    }
});


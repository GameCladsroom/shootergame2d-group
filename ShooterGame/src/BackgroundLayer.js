
var BackgroundLayer = cc.Layer.extend({
    
    ctor: function ()
    {
        this._super();
        var sprite = new cc.Sprite(res.BackgroundImage);
        sprite.x = sprite.width / 2;
        sprite.y = sprite.height / 2;
        this.addChild(sprite);
    }
});
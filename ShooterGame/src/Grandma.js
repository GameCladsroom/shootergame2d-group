
var Grandma = cc.Sprite.extend({
    direction:0,
    ctor: function () {
        this._super(res.GrandmaImage);

        this.y = cc.winSize.height /2;

        var me = this;
        var keyboard_listener = cc.EventListener.create({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (keyCode, event) {
                if (keyCode == cc.KEY.up) {
                    me.direction = 1;
                }
                if (keyCode == cc.KEY.down) {
                    me.direction = -1;
                }
            },
            onKeyReleased: function (keyCode, event) {
                me.direction = 0;
            }
        });
        cc.eventManager.addListener(keyboard_listener, this);

        this.scheduleUpdate();
        return true;

    },

    update:function (dt) {

        this.y+=this.direction;

    },

});
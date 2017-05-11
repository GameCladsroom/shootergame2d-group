
var ZombiesLayer = cc.Layer.extend({
    zombie: null,
    ctor: function ()
    {
        this._super();
        this.schedule(this.addzombie, 7);
        cc.log('string');
    },
    getRandomY: function () {
        return cc.winSize.height * Math.random();
    },
    addzombie: function (){
        this.zombie = new Zombie();

        this.zombie.x = cc.winSize.width + this.zombie.width/2;
        this.zombie.y = cc.winSize.height * Math.random();
        this.addChild(this.zombie);
        var action1 = cc.moveTo(4,0 - this.zombie.width, this.getRandomY() );
        this.zombie.runAction(action1);
    } 
});
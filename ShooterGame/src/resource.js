var res = {
    HelloWorld_png : "res/HelloWorld.png",
    GrandmaImage : "res/player.png",
    ZombieImage : "res/zombie.png",
    BackgroundImage : "res/background.png",
    CardImage : "res/card_back_disabled.png",
    CardImageSelected : "res/card_back_pressed.png",
    CardImageDisabled : "res/card_disabled.png",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

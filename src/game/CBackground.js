(function() {
    ("use strict");

    var Game = beablib.Game,
        Renderer = beablib.Renderer;

    var TheStage = null;

    //-----------------------------------------------------------------------------------------------

    var CBackground = function(stage) {
        TheStage = stage;

        this.Background = Renderer.CreateSprite(Game.BackgroundSheet, "Background");
        this.GUIDE = Renderer.CreateSprite(Game.BackgroundSheet, "ActiveGUIDE");
        this.GUIDE.alpha = 0;

        TheStage.addChild(this.Background);
        TheStage.addChild(this.GUIDE);

        beablib.SetRepositionable(this);
    };

    //-----------------------------------------------------------------------------------------------

    CBackground.prototype.Reposition = function(scale) {
        this.Background.SetPosition(
            TheStage.View.HalfWidth,
            TheStage.View.HalfHeight
        );
        this.Background.SetScale(scale);

        this.GUIDE.SetPosition(TheStage.View.HalfWidth, TheStage.View.HalfHeight);
        this.GUIDE.SetScale(scale);

        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------

    Game.CBackground = CBackground;
})();
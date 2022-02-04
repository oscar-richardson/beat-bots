//-----------------------------------------------------------------------------------------------

(function()
{
    "use strict";

    //-----------------------------------------------------------------------------------------------
    //	Const-ish.
    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------
    //	Private statics.
    //-----------------------------------------------------------------------------------------------

    //	Beablib object aliases.
    var	Game		=	beablib.Game,
        Renderer	=	beablib.Renderer;

    //	Data.
    var	TheStage	=	null;

    //  Game data.

    //	Functions.
    var	UpdateStage	=	function()
    {
        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------
    //	Object definition.
    //-----------------------------------------------------------------------------------------------

    var CTwistTest	=	function( stage )
    {
        //	Make a note of the stage.
        TheStage		=	stage;

        this.DemoContainer			 =	Renderer.CreateContainer( );

        this.RollerBG                = Renderer.CreateSprite( Game.TwisterSheet, "Rollers",  { alpha:1,  scaleX:1, scaleY:1, position:{X:0, Y:-0}, parent:this.DemoContainer});




        this.LeftContainer1          =	Renderer.CreateContainer( { alpha:1, position:{X:0,Y:232}, parent:this.DemoContainer});

        this.LeftContainer2          =	Renderer.CreateContainer( {position:{X:0,Y:-232}, parent:this.DemoContainer});
        this.LeftContainer2.scaleY = 0;

        this.LeftContainer3          =	Renderer.CreateContainer( {position:{X:0,Y:-232}, parent:this.DemoContainer});
        this.LeftContainer3.scaleY = 0;
        //this.LeftContainer2.scaleY = 0;

        this.CentreContainer         =	Renderer.CreateContainer( {parent:this.DemoContainer});
        this.RightContainer          =	Renderer.CreateContainer( {parent:this.DemoContainer});

        this.LeftBG1        = Renderer.CreateSprite( Game.TwisterSheet, "Panel_Left",  { alpha:1,  scaleX:1, scaleY:1, position:{X:0, Y:-232}, parent:this.LeftContainer1});
        this.CW_Left       = Renderer.CreateSprite( Game.TwisterSheet, "CW_Left",  { alpha:1,  scaleX:1, scaleY:1, position:{X:0, Y:-232}, parent:this.LeftContainer1});
        this.CW_Shadow1       = Renderer.CreateSprite( Game.TwisterSheet, "shadow1",  { alpha:0,  scaleX:1, scaleY:1, position:{X:-343, Y:-272}, parent:this.LeftContainer1});

        this.LeftBG2        = Renderer.CreateSprite( Game.TwisterSheet, "Panel_Left",  { alpha:1,  scaleX:1, scaleY:1, position:{X:0, Y:232}, parent:this.LeftContainer2});
        this.LL_Left       = Renderer.CreateSprite( Game.TwisterSheet, "LL_Left",  { alpha:1,  scaleX:1, scaleY:1, position:{X:0, Y:232}, parent:this.LeftContainer2});
        this.CW_Shadow2       = Renderer.CreateSprite( Game.TwisterSheet, "shadow1",  { alpha:0,  scaleX:1, scaleY:1, position:{X:-343, Y:-272}, parent:this.LeftContainer2});

        this.LeftBG3        = Renderer.CreateSprite( Game.TwisterSheet, "Panel_Left",  { alpha:1,  scaleX:1, scaleY:1, position:{X:0, Y:232}, parent:this.LeftContainer3});
        this.Bingo_Left       = Renderer.CreateSprite( Game.TwisterSheet, "Bingo_Left",  { alpha:1,  scaleX:1, scaleY:1, position:{X:0, Y:232}, parent:this.LeftContainer3});
        this.CW_Shadow3       = Renderer.CreateSprite( Game.TwisterSheet, "shadow1",  { alpha:0,  scaleX:1, scaleY:1, position:{X:-343, Y:-272}, parent:this.LeftContainer3});



        this.CC_Logo       = Renderer.CreateSprite( Game.TwisterSheet, "CC_Logo",  { alpha:1,  scaleX:1, scaleY:1, position:{X:-10, Y:0}, parent:this.RightContainer});
        this.LL_Right       = Renderer.CreateSprite( Game.TwisterSheet, "LL_Right",  { alpha:1,  scaleX:1, scaleY:0, position:{X:0, Y:-225}, parent:this.RightContainer});
        this.Bingo_Right    = Renderer.CreateSprite( Game.TwisterSheet, "Bingo_Right",  { alpha:1,  scaleX:1, scaleY:0, position:{X:-20, Y:-240}, parent:this.RightContainer});
        this.CW_Right       = Renderer.CreateSprite( Game.TwisterSheet, "CW_Right",  { alpha:1,  scaleX:1, scaleY:0, position:{X:-20, Y:-240}, parent:this.RightContainer});

        this.RightShadow    = Renderer.CreateSprite( Game.TwisterSheet, "shadow1",  { alpha:0.5,  scaleX:0.88, scaleY:-0.3, position:{X:318, Y:146}, parent:this.DemoContainer});


        // Draw a rectangle
        this.TwistMask = new PIXI.Graphics();
        this.TwistMask.drawRect(174, -225, 300, 428);
        this.TwistMask.endFill();
        this.TwistMask.beginFill(0x2c3e50);
        this.TwistMask.alpha = 0.4;

        this.DemoContainer.addChild( this.TwistMask);

        this.RightContainer.mask = this.TwistMask;

        //this.CentreBG      = Renderer.CreateSprite( Game.TwisterSheet, "Panel_Centre",  { alpha:1,  scaleX:1, scaleY:1, position:{X:0, Y:0}, parent:this.CentreContainer});
        //this.RightBG       = Renderer.CreateSprite( Game.TwisterSheet, "Panel_Right",  { alpha:1,  scaleX:1, scaleY:1, position:{X:0, Y:0}, parent:this.RightContainer});

        /* V1
        var rollLength = 0.3;
        var roll1 = gsap.timeline({ delay:2, onUpdate:UpdateStage, repeat:-1 });
        roll1.to(this.CC_Logo, {scaleY:0, y:225, duration:0.15, ease:"none"});
        roll1.set(this.CC_Logo, {scaleY:0.2, y:-225});
        roll1.to(this.LL_Right, {scaleY:1, y:0, duration:rollLength, ease:"none"}, "-=0.15");
        roll1.to(this.LL_Right, {scaleY:0, y:225, duration:rollLength, ease:"none"});
        roll1.to(this.Bingo_Right, {scaleY:1, y:0, duration:rollLength, ease:"none"}, "-=0.3");
        roll1.to(this.Bingo_Right, {scaleY:0, y:225, duration:rollLength, ease:"none"});
        roll1.to(this.CW_Right, {scaleY:1, y:0, duration:rollLength, ease:"none"}, "-=0.3");
        roll1.to(this.CW_Right, {scaleY:0, y:225, duration:rollLength, ease:"none"});
        roll1.to(this.CC_Logo, {scaleY:1, y:0, duration:0.15, ease:"none"}, "-=0.15");
        */

        var rollLength = 0.5;
        var roll1 = gsap.timeline({ delay:2, onUpdate:UpdateStage, repeat:-1 });
        roll1.to(this.CC_Logo, {scaleY:0, y:225, duration:0.25, ease:"sine.out"});
        roll1.set(this.CC_Logo, {scaleY:0.2, y:-225});
        roll1.to(this.LL_Right, {scaleY:1, y:0, duration:rollLength, ease:"sine.in"}, "-=0.25");
        roll1.to(this.LL_Right, {scaleY:0, y:225, duration:rollLength, ease:"sine.out"});
        roll1.to(this.Bingo_Right, {scaleY:1, y:0, duration:rollLength, ease:"sine.in"}, "-=0.5");
        roll1.to(this.Bingo_Right, {scaleY:0, y:225, duration:rollLength, ease:"sine.out"});
        roll1.to(this.CW_Right, {scaleY:1, y:0, duration:rollLength, ease:"sine.in"}, "-=0.5");
        roll1.to(this.CW_Right, {scaleY:0, y:225, duration:rollLength, ease:"sine.out"});
        roll1.to(this.CC_Logo, {scaleY:1, y:0, duration:0.25, ease:"sine.in"}, "-=0.25");


        // TEMP
        var twistLength = 0.5;

        var tl1x = gsap.timeline({ delay:2, onUpdate:UpdateStage });
        tl1x.to(this.LeftContainer1, {scaleY:0, y:222, duration:twistLength, ease:"none"});
        tl1x.to(this.CW_Shadow1, {alpha:1, duration:twistLength, ease:"none"}, "-=0.5");

        var tl1 = gsap.timeline({ delay:4, onUpdate:UpdateStage, repeat:-1, repeatDelay:twistLength});
        tl1.set(this.LeftContainer1, {y:-232});
        tl1.set([this.LeftBG1,this.CW_Left], {y:232});
        tl1.set(this.CW_Shadow1, {alpha:0});
        tl1.to(this.LeftContainer1, {scaleY:1, duration:twistLength, ease:"none"});
        tl1.set(this.LeftContainer1, {y:232});
        tl1.set([this.LeftBG1,this.CW_Left], {y:-232});
        tl1.to(this.LeftContainer1, {scaleY:0, y:222, duration:twistLength, ease:"none"});
        tl1.to(this.CW_Shadow1, {alpha:1, duration:twistLength, ease:"none"}, "-=0.5");


        var tl2 = gsap.timeline({ delay:2, onUpdate:UpdateStage, repeat:-1, repeatDelay:twistLength });
        tl2.set(this.CW_Shadow2, {alpha:0});
        tl2.to(this.LeftContainer2, {scaleY:1, duration:twistLength, ease:"none"});
        tl2.set(this.LeftContainer2, {y:232});
        tl2.set([this.LeftBG2,this.LL_Left], {y:-232});
        tl2.to(this.LeftContainer2, {scaleY:0, y:222, duration:twistLength, ease:"none"});
        tl2.to(this.CW_Shadow2, {alpha:1, duration:twistLength, ease:"none"}, "-=0.5");

        var tl3 = gsap.timeline({ delay:3, onUpdate:UpdateStage, repeat:-1, repeatDelay:twistLength});
        tl2.set(this.CW_Shadow2, {alpha:0});
        tl3.to(this.LeftContainer3, {scaleY:1, duration:twistLength, ease:"none"});
        tl3.set(this.LeftContainer3, {y:232});
        tl3.set([this.LeftBG3,this.Bingo_Left], {y:-232});
        tl3.to(this.LeftContainer3, {scaleY:0, y:222, duration:twistLength, ease:"none"});
        tl3.to(this.CW_Shadow3, {alpha:1, duration:twistLength, ease:"none"}, "-=0.5");





        console.log("CTWISTER");

        TheStage.addChild( this.DemoContainer );


        //	Make sure we're repositionable.
        beablib.SetRepositionable( this );
    };

    //-----------------------------------------------------------------------------------------------
    //	Public members.
    //-----------------------------------------------------------------------------------------------



    CTwistTest.prototype.Reposition		=	function( scale )
    {

        this.DemoContainer.SetPosition( TheStage.View.HalfWidth, TheStage.View.HalfHeight );
        this.DemoContainer.SetScale( scale );

        UpdateStage();
    };



    //--------------------------------------------------------------------------------

    CTwistTest.prototype.DegreesToRadians			=	function( degree ) {

        var rads = degree * 0.0174533;

        console.log( "degree :: " + rads );

        return rads;

    };


















    //-----------------------------------------------------------------------------------------------
    //	Public statics.
    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.CTwistTest	=	CTwistTest;

    //-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------
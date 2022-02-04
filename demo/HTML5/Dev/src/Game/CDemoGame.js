//-----------------------------------------------------------------------------------------------

(function()
{
    "use strict";

    //-----------------------------------------------------------------------------------------------
    //	const-ish.
    //-----------------------------------------------------------------------------------------------

    var Game			=	ProjectX.Game;		//	Game object shortcut.

    var	TheStage		=	null;

    var GRAPHICS_SCALE          = 0.93,
        BlockArray              = new Array(),
        BlockXposArray          = new Array(),
        BlockYposArray          = new Array(),
        BlockColourArray        = new Array(),
        IsFirstPlay             = true;



    //-----------------------------------------------------------------------------------------------

    //	Set local paths to external objects.
    var CDemoGame	=	function( stage )
        {

            TheStage = stage;

            //ParentContainer = parent_container;

            //	Let's start with a container...
            this.DemoGameContainer = new createjs.Container();
            this.DemoGameContainer.alpha = 1;

            BlockXposArray      = [-335, -223, -335, -223, -111, -335, -223, -111, 1, -335, -223, -111, 1];
            BlockYposArray      = [-115, -115, 1, 1, 1, 113, 113, 113, 113, 225, 225, 225, 225];
            BlockColourArray    = ["y", "w", "p", "p", "p", "w", "p", "g", "p", "y", "y", "p", "g"];

            //	Add the beehive to the stage...
            TheStage.addChild( this.DemoGameContainer );

            this.GameTitle = new createjs.Sprite(Game.PanelsTextSheet, "Game2Title");
            this.GameTitle.SetPosition(0, -288);

            this.DemoPanel = new createjs.Sprite(Game.PanelsTextSheet, "Game2_Instructions");
            this.DemoPanel.SetPosition(171, -100);
            this.DemoPanel.SetScale( 0.9 );

            //this.DemoPanel.alpha    = 0.4;

            this.StopWatch = new createjs.Sprite(Game.DeleteGameSheet, "Timer");
            this.StopWatch.SetPosition(292, 190 );
            this.StopWatch.scaleX	= GRAPHICS_SCALE;
            this.StopWatch.scaleY	= GRAPHICS_SCALE;

            this.ClickBtnContainer = new createjs.Container();
            this.ClickBtnContainer.SetPosition(0,0);
            this.ClickBtnContainer.alpha = 1;

            this.ClickBtn = new createjs.Sprite(Game.PrizesBtnsSheet, "ClickToStart");
            this.ClickBtn.SetPosition(232, 194 );
            this.ClickBtn.scaleX	= GRAPHICS_SCALE;
            this.ClickBtn.scaleY	= GRAPHICS_SCALE;
            this.ClickBtn.alpha    = 0;


            this.ClickBtnContainer.addChild( this.ClickBtn );


            for( var i=0; i<13; i++ )
            {

                var Block =  new createjs.Sprite(Game.DeleteGameSheet, "SqDemo_" + BlockColourArray[i]);
                Block.x = BlockXposArray[i];
                Block.y = BlockYposArray[i];
                BlockArray.push(Block);

                this.DemoGameContainer.addChild( Block );

            }

            this.TapIcon = new createjs.Sprite(Game.PrizesBtnsSheet, "TapIcon");
            this.TapIcon.SetPosition(-228, 136);
            this.TapIcon.alpha    = 0;


            this.DemoGameContainer.addChild( this.GameTitle, this.DemoPanel, this.StopWatch, this.ClickBtnContainer, this.TapIcon );

            TweenMax.delayedCall(1, this.StartDemo, null, this );


            //	...& make sure we're repositionable.
            ProjectX.SetRepositionable( this );


        };

    CDemoGame.prototype.Reposition		=	function()
    {

        var scale	=	ProjectX.MainView.ScaleFactor;

        this.DemoGameContainer.SetPosition( TheStage.View.HalfWidth, TheStage.View.HalfHeight );
        this.DemoGameContainer.SetScale( scale );


        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------

    CDemoGame.prototype.StartDemo			=	function(   )
    {

        var update		=	function(){ TheStage.SetDirty(); }.bind(this);

        this.TapIcon.alpha    = 1;
        TweenLite.to(this.TapIcon, 0.3, { scaleX:1.3, scaleY:1.3, ease:Quad.easeOut, onUpdate:update } );
        TweenMax.delayedCall(0.3, this.ShrinkTapIcon1, null, this );

        this.ClickBtnGlow	=	this.ClickBtn.clone( true );
        this.ClickBtnGlow.filters = [ new createjs.GlowFilter( 0XFFFFFF, 1, 10, 10, 4, 2, false, true ) ];

        //	...cache it...
        var	bounds	=	this.ClickBtnGlow.getBounds();
        this.ClickBtnGlow.cache( bounds.x - 10,bounds.y- 10,bounds.width+10,bounds.height+10 );
        this.ClickBtnGlow.alpha = 0;

        this.DemoGameContainer.addChild( this.ClickBtnGlow );

        //// PROMPTS ////
        if( IsFirstPlay ){

            for( var j=0; j<200; j++ ) {
                TweenMax.delayedCall( 3 + (j*6), this.TapPrompts, [], this );
            }

        }


    };

    //-----------------------------------------------------------------------------------------------

    CDemoGame.prototype.TapPrompts		=	function()
    {

        var update		=	function(){ TheStage.SetDirty(); }.bind(this);

        console.log("Hello Folks");

        var glow_seq1 = new TimelineMax( {paused:false, onUpdate:update } );
        glow_seq1.append( TweenLite.to( this.ClickBtnGlow, 0.4, {alpha:1} ) );
        glow_seq1.append( TweenLite.to( this.ClickBtnGlow, 0.4, {alpha:0} ) );
        glow_seq1.append( TweenLite.to( this.ClickBtnGlow, 0.4, {alpha:1} ) );
        glow_seq1.append( TweenLite.to( this.ClickBtnGlow, 0.4, {alpha:0} ) );
        glow_seq1.append( TweenLite.to( this.ClickBtnGlow, 0.4, {alpha:1} ) );
        glow_seq1.append( TweenLite.to( this.ClickBtnGlow, 0.4, {alpha:0} ) );

    };

    //-----------------------------------------------------------------------------------------------

    CDemoGame.prototype.ShrinkTapIcon1			=	function(   )
    {

        var update		=	function(){ TheStage.SetDirty(); }.bind(this);

        TweenLite.to(this.TapIcon, 0.3, { scaleX:0, scaleY:0, ease:Quad.easeOut, onUpdate:update } );
        BlockArray[2].alpha = 0;
        BlockArray[3].alpha = 0;
        BlockArray[4].alpha = 0;
        BlockArray[6].alpha = 0;

        TweenLite.to(BlockArray[0], 0.4, { y:1, delay:0.1, ease:Quad.easeOut, onUpdate:update } );
        TweenLite.to(BlockArray[1], 0.4, { y:113, delay:0.1, ease:Quad.easeOut, onUpdate:update } );

        TweenMax.delayedCall(2, this.Stage2Tap, null, this );

    };

    //-----------------------------------------------------------------------------------------------

    CDemoGame.prototype.Stage2Tap			=	function(   ) {

        var update		=	function(){ TheStage.SetDirty(); }.bind(this);

        this.TapIcon.alpha = 1;
        TweenLite.to(this.TapIcon, 0.3, {
            scaleX: 1.3,
            scaleY: 1.3,
            ease: Quad.easeOut, onUpdate:update
        });
        TweenMax.delayedCall(0.3, this.ShrinkTapIcon2, null, this);

    };

    //-----------------------------------------------------------------------------------------------

    CDemoGame.prototype.ShrinkTapIcon2			=	function(   )
    {

        var update		=	function(){ TheStage.SetDirty(); }.bind(this);

        TweenLite.to(this.TapIcon, 0.3, { scaleX:0, scaleY:0, ease:Quad.easeOut, onUpdate:update } );
        BlockArray[1].alpha = 0;
        BlockArray[5].alpha = 0;

        TweenLite.to(BlockArray[0], 0.4, { y:113, delay:0.1, ease:Quad.easeOut, onUpdate:update } );

        if(IsFirstPlay){

            IsFirstPlay = false;

            this.InitClickBtn();

        }

        TweenMax.delayedCall(1, this.ResetBlocks, null, this );
        TweenMax.delayedCall(2, this.StartDemo, null, this );

    };

    //-----------------------------------------------------------------------------------------------
    CDemoGame.prototype.ResetBlocks	=	function( )
    {

        var update		=	function(){ TheStage.SetDirty(); }.bind(this);

        this.TapIcon.alpha    = 0;


        for( var i=0; i<13; i++ )
        {
            BlockArray[i].x = BlockXposArray[i];
            BlockArray[i].y = BlockYposArray[i];
            BlockArray[i].alpha = 1;
        }

    };

    //-----------------------------------------------------------------------------------------------
    CDemoGame.prototype.InitClickBtn	=	function( )
    {

        var update		=	function(){ TheStage.SetDirty(); }.bind(this);

        TweenLite.to(this.ClickBtn, 0.3, { alpha:1, ease:Quad.easeOut, onUpdate:update } );

        /*
        this.PrizeHL = new Game.Prompt(this.ClickBtn, 0.1, 3, {colour:0xFFFFFF}  );
        this.ClickBtnContainer.addChild( this.PrizeHL.GlowSprite );

        TweenMax.delayedCall(2, function(){
            this.PrizeHL.Start();
        }, null, this );
        */



        this.ClickBtn.on ("click", this.ClickClicked, this, false, this.ClickBtn);

    };

    //-----------------------------------------------------------------------------------------------
    CDemoGame.prototype.ClickClicked	=	function( event, data )
    {

        console.log("Click Clicked");

        this.ClickBtn.off("click", this.ContinueClicked);
        this.ClickBtn.mouseEnabled = false;

        Game.DemoComplete();

        TweenMax.killDelayedCallsTo( this.TapPrompts );

        TheStage.removeChild( this.DemoGameContainer );



    };

    //-----------------------------------------------------------------------------------------------
    //	Static variables.
    //-----------------------------------------------------------------------------------------------

    CDemoGame.VERSION			=	'0_0_1';

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.CDemoGame		=	CDemoGame;
}());

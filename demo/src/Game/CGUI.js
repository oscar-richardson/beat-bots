//-----------------------------------------------------------------------------------------------

(function()
{
    "use strict";

    //-----------------------------------------------------------------------------------------------
    //	const-ish.
    //-----------------------------------------------------------------------------------------------

    var Game			=	ProjectX.Game;		//	Game object shortcut.

    var	TheStage		=	null;


    var LOGO_XPOS               = 0,
        LOGO_YPOS               = 0,
        LOGO_SCALE              = 1.22,
        RobotBtnArray           = [];



    //-----------------------------------------------------------------------------------------------

    //	Set local paths to external objects.
    var CGUI	=	function( stage )
    {

        TheStage = stage;



        //	Let's start with a container...
        this.LogoContainer = new createjs.Container();
        this.LogoContainer.alpha = 1;

        this.RobotBtnContainer = new createjs.Container();
        this.RobotBtnContainer.alpha = 1;

        //	Add the beehive to the stage...
        TheStage.addChild( this.LogoContainer, this.RobotBtnContainer );

        this.StartBtn			=	new	createjs.Sprite( Game.BackgroundSheet, "Background" );
        this.StartBtn.SetScale( 0.5 );
        this.StartBtn.alpha = 0.01;

        //// Logo ////


        var logo_anim_ss 		=   ProjectX.SpriteSheets.BB_LogoSS,
            logo_anim	        =	logo_anim_ss.spriteSheet.animations;


        logo_anim.static = [logo_anim["logoMC0001"][0], logo_anim["logoMC0001"][0], false, 0.7];
        logo_anim.loop = [logo_anim["logoMC0001"][0], logo_anim["logoMC0080"][0], false, 0.7];

        this.LogoSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.BB_LogoSS );

        this.Logo = new createjs.Sprite(this.LogoSpriteSheet, "loop");
        this.Logo.SetPosition(0, 0);
        this.Logo.stop();

        this.LogoContainer.addChild( this.Logo, this.StartBtn );




        var update		=	function(){ TheStage.SetDirty(); }.bind(this);

        TweenLite.to(CGUI, 500, { onUpdate:update } );

        for( var i=0; i<200; i++ ) {

            TweenMax.delayedCall(1 + (i*5), this.PlayLogoAnim , [], this );

        };

        this.StartBtn.on ("click", this.StartClicked, this, true );
        this.StartBtn.cursor = "pointer";

        //	...& make sure we're repositionable.
        ProjectX.SetRepositionable( this );


    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.Reposition		=	function()
    {

        var half_width              =   TheStage.View.HalfWidth,
            half_height             =   TheStage.View.HalfHeight,
            scale                   =   ProjectX.MainView.ScaleFactor;

        this.LogoContainer.SetPosition(( LOGO_XPOS * scale) + half_width, (LOGO_YPOS * scale) + half_height);
        this.LogoContainer.SetScale( LOGO_SCALE * scale );

        this.RobotBtnContainer.SetPosition( half_width,  half_height);
        this.RobotBtnContainer.SetScale( scale );


        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.PlayLogoAnim		=	function()
    {

        console.log("PlayLogoAnim");



        this.Logo.gotoAndPlayDuration( "loop", {duration:2.3, stage:TheStage} );


    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.StartClicked		=	function()
    {

        var update		=	function(){ TheStage.SetDirty(); }.bind(this);

        this.LogoContainer.removeChild( this.StartBtn );

        //TweenMax.killDelayedCallsTo( this.PlayLogoAnim );

        var half_width              =   TheStage.View.HalfWidth,
            half_height             =   TheStage.View.HalfHeight,
            scale                   =   ProjectX.MainView.ScaleFactor;

        LOGO_XPOS = -280;
        LOGO_YPOS = -254;
        LOGO_SCALE = 0.72;

        TweenMax.to( this.LogoContainer, 1, {x:(LOGO_XPOS * scale) + half_width,
            y:(LOGO_YPOS * scale) + half_height,
            scaleX:LOGO_SCALE * scale,
            scaleY:LOGO_SCALE * scale,
            //rotation:-12,
            ease:Quad.easeOut,
            onUpdate:update});

        this.SetUpRobotBtns();

        Game.InitRobots();


        TweenMax.delayedCall(0.01, function(){createjs.Sound.play("intro");});
        TweenMax.delayedCall(0.03, function(){createjs.Sound.play("wakeUp2");});


        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.SetUpRobotBtns		=	function()
    {


        var BtnXposArray = [-320, 0 , 320, -320, 0 , 320];
        var BtnYposArray = [-160, -160, -160, 160, 160, 160];

        for( var i=0; i<6; i++ ){

            var btn =	new	createjs.Sprite( Game.BackgroundSheet, "RobotBtn" );
            btn.alpha = 0.01;
            btn.SetPosition( BtnXposArray[i], BtnYposArray[i] );
            btn.numId = i;

            RobotBtnArray.push( btn );

            this.RobotBtnContainer.addChild( btn );

            var dataObjSym = new Object();
            dataObjSym.numId = RobotBtnArray[i].numId;

            RobotBtnArray[i].on("click", this.RobotClicked, this, false, dataObjSym);
            RobotBtnArray[i].cursor = "pointer";
            RobotBtnArray[i].delayActive = false;

        }

        TheStage.SetDirty();

    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.RobotClicked		=	function(event, data ) {


        var numId       = data.numId;

        if( !RobotBtnArray[numId].delayActive){
            this.RobotAction(numId);
            RobotBtnArray[numId].delayActive = true;
        }


    };


    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.RobotAction		=	function( numId ) {

        console.log("I clicked Robot number :: " + numId );

        Game.RobotClicked( numId );

        TweenMax.delayedCall(1.2, this.ReActivateRobot, [numId], this );

    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.ReActivateRobot		=	function( numId ) {

        RobotBtnArray[numId].delayActive = false;

    };


    //-----------------------------------------------------------------------------------------------
    //	Static variables.
    //-----------------------------------------------------------------------------------------------

    CGUI.VERSION			=	'0_0_1';

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.CGUI		=	CGUI;
}());

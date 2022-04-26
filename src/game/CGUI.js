//-----------------------------------------------------------------------------------------------

(function() {
    "use strict";

    //-----------------------------------------------------------------------------------------------
    //	Const-ish.
    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------
    //	Private statics.
    //-----------------------------------------------------------------------------------------------

    //	Beablib object aliases.
    var	Audio		=	beablib.Audio,
        Game        = beablib.Game,
        Renderer    = beablib.Renderer;

    //	Data.
    var TheStage = null,
        LOGO_XPOS               = 0,
        LOGO_YPOS               = 0,
        LOGO_SCALE              = 1.22,
        RobotBtnArray           = [],
        exitBtn,
        revertBtn,
        recordBtn,
        recordModeOn            = false,
        robotSelected           = 0;


    //	Functions.
    var UpdateStage = function () {
        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------
    //	Object definition.
    //-----------------------------------------------------------------------------------------------

    var CGUI = function (stage) {
        //	Make a note of the stage.
        TheStage = stage;

        //	Let's start with a container...
        this.LogoContainer = Renderer.CreateContainer( { alpha:1 });

        this.RobotBtnContainer = Renderer.CreateContainer( { alpha:1 });

        this.ModeBtnContainer = Renderer.CreateContainer( { alpha:1 });

        this.RecordingBtnContainer = Renderer.CreateContainer( { alpha:1 });

        //	...& add it to the stage.
        TheStage.addChild( this.LogoContainer);
        TheStage.addChild( this.RobotBtnContainer );
        TheStage.addChild( this.ModeBtnContainer );
        TheStage.addChild( this.RecordingBtnContainer );

        this.StartBtn = Renderer.CreateSprite(Game.BackgroundSheet, "Background", {alpha: 0.01, scale:0.5, parent: this.LogoContainer});

        //// Logo ////

        var logo_anim_ss 		=   beablib.SpriteSheetPath.BB_LogoSS,
            logo_anim	        =	logo_anim_ss.spriteSheet.animations;

        logo_anim.static = [logo_anim["logoMC0001"][0], logo_anim["logoMC0001"][0], false, 0.7];
        logo_anim.loop = [logo_anim["logoMC0001"][0], logo_anim["logoMC0080"][0], false, 0.7];

        this.LogoAnimSpriteSheet = beablib.CreateSpriteSheet(logo_anim_ss);

        this.Logo = Renderer.CreateSprite(this.LogoAnimSpriteSheet, "loop", {alpha:1, scale:1, position: {X:0, Y:0}, parent: this.LogoContainer});

        gsap.to(CGUI, { duration:500, onUpdate:UpdateStage } );

        for( var i=0; i<200; i++ ) {

            gsap.delayedCall(1 + (i*5), this.PlayLogoAnim , [], this );

        };

        this.StartBtn.SetButtonMode(true, this.StartClicked, this, true);
        // this.StartBtn.cursor = "pointer"; // WORK OUT HOW TO DO!!!

        //	...& make sure we're repositionable.
        beablib.SetRepositionable(this);
    };

    //-----------------------------------------------------------------------------------------------
    //	Public members.
    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.Reposition = function (scale) {

        this.LogoContainer.SetPosition((LOGO_XPOS * scale) + TheStage.View.HalfWidth, (LOGO_YPOS * scale) + TheStage.View.HalfHeight);
        this.LogoContainer.SetScale(LOGO_SCALE * scale);

        this.RobotBtnContainer.SetPosition(TheStage.View.HalfWidth, TheStage.View.HalfHeight);
        this.RobotBtnContainer.SetScale(scale);

        this.ModeBtnContainer.SetPosition(TheStage.View.HalfWidth, TheStage.View.HalfHeight);
        this.ModeBtnContainer.SetScale(scale);

        this.RecordingBtnContainer.SetPosition(TheStage.View.HalfWidth, TheStage.View.HalfHeight);
        this.RecordingBtnContainer.SetScale(scale);


        UpdateStage();
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

        var half_width              =   TheStage.View.HalfWidth,
            half_height             =   TheStage.View.HalfHeight,
            scale = beablib.MainView.ScaleFactor;

        LOGO_XPOS = -280;
        LOGO_YPOS = -254;
        LOGO_SCALE = 0.72;

        gsap.to(this.LogoContainer, {duration: 1, x:(LOGO_XPOS * scale) + half_width, y:(LOGO_YPOS * scale) + half_height, scaleX:LOGO_SCALE * scale, scaleY:LOGO_SCALE * scale, ease:Quad.easeOut, onUpdate:update});

        this.SetUpRobotBtns();
        this.SetUpModeBtns();
        this.SetUpRecordingBtns();

        Game.InitRobots();

        gsap.delayedCall(0.01, function(){Audio.Play("intro");});
        gsap.delayedCall(0.03, function(){Audio.Play("wakeUp2");});

        UpdateStage();
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.SetUpRobotBtns		=	function()
    {


        var BtnXposArray = [-320, 0 , 320, -320, 0 , 320];
        var BtnYposArray = [-160, -160, -160, 160, 160, 160];

        for( var i=0; i<6; i++ ){

            var btn = Renderer.CreateSprite(Game.BackgroundSheet, "RobotBtn", {alpha: 0.01, position: {X:BtnXposArray[i], Y:BtnYposArray[i]}, parent: this.RobotBtnContainer});
            btn.numId = i;

            RobotBtnArray.push( btn );

            var dataObjSym = new Object();
            dataObjSym.numId = RobotBtnArray[i].numId;

            RobotBtnArray[i].SetButtonMode(true, this.RobotClicked, this, false, dataObjSym);
            // RobotBtnArray[i].cursor = "pointer"; // WORK OUT HOW TO DO!!!
            RobotBtnArray[i].delayActive = false;

        }

        UpdateStage();

    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.SetUpModeBtns		=	function()
    {


        exitBtn = Renderer.CreateSprite(beablib.CreateSpriteSheet(beablib.SpriteSheetPath["Robot4_AsleepSS"]), "Robot4_Asleep001", {alpha: 1, position: {X:-480, Y:0}, parent: this.ModeBtnContainer});
        var recordModeBtn = Renderer.CreateSprite(beablib.CreateSpriteSheet(beablib.SpriteSheetPath["Robot6_AsleepSS"]), "Robot6_Asleep001", {alpha: 1, position: {X:480, Y:0}, parent: this.ModeBtnContainer});

        exitBtn.SetButtonMode(true, this.ExitClicked, this, false);
        recordModeBtn.SetButtonMode(true, this.RecordModeClicked, this, false);


        UpdateStage();

    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.SetUpRecordingBtns		=	function()
    {


        revertBtn = Renderer.CreateSprite(beablib.CreateSpriteSheet(beablib.SpriteSheetPath["Robot4_AsleepSS"]), "Robot4_Asleep001", {alpha: 1, position: {X:0, Y:-275}, parent: this.RecordingBtnContainer});
        recordBtn = Renderer.CreateSprite(beablib.CreateSpriteSheet(beablib.SpriteSheetPath["Robot6_AsleepSS"]), "Robot6_Asleep001", {alpha: 1, position: {X:320, Y:-275}, parent: this.RecordingBtnContainer});

        revertBtn.SetButtonMode(true, this.RevertClicked, this, false);
        recordBtn.SetButtonMode(true, this.RecordClicked, this, false);


        UpdateStage();

    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.RobotClicked		=	function(event, data ) { // MAY NEED TO CHANGE NO. OF ARGS
        var numId       = data.numId;
        if (recordModeOn) {
            robotSelected = numId;
            console.log("The selected Robot is Robot number :: " + robotSelected);
        } else {
            if  ( !RobotBtnArray[numId].delayActive)    {
                this.RobotAction(numId);
                RobotBtnArray[numId].delayActive = true;
            }
        }
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.ExitClicked		=	function(event) {

        if (recordModeOn) {
            recordModeOn = false;
            console.log("Record Mode :: " + recordModeOn);
        }

    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.RecordModeClicked		=	function(event) {

        if (!recordModeOn) {
            recordModeOn = true;
            console.log("Record Mode :: " + recordModeOn);
        }

    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.RevertClicked		=	function(event) {

        if (recordModeOn) {
            Game.Revert(robotSelected);
        }

    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.RecordClicked		=	function(event) {

        if (recordModeOn) {
            Game.Record(robotSelected);
            for( var i=0; i<6; i++ ){

                RobotBtnArray[i].SetButtonMode(false, this.RobotClicked, this, false);

            }
            exitBtn.SetButtonMode(false, this.ExitClicked, this, false);
            revertBtn.SetButtonMode(false, this.RevertClicked, this, false);
            recordBtn.SetButtonMode(false, this.RecordClicked, this, false);
            console.log("Recording onto Robot number :: " + robotSelected);
        }

    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.ReActivateRecordButton		=	function(event) {
        for( var i=0; i<6; i++ ){

            var dataObjSym = new Object();
            dataObjSym.numId = i;

            RobotBtnArray[i].SetButtonMode(true, this.RobotClicked, this, false, dataObjSym);

        }
        exitBtn.SetButtonMode(true, this.ExitClicked, this, false);
        revertBtn.SetButtonMode(true, this.RevertClicked, this, false);
        recordBtn.SetButtonMode(true, this.RecordClicked, this, false);
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.RobotAction		=	function( numId ) {

        console.log("I clicked Robot number :: " + numId );

        Game.RobotClicked( numId );

        gsap.delayedCall(1.2, this.ReActivateRobot, [numId], this ); // 'THIS' ARG MIGHT NOT WORK (EASY FIX)

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
    //	Public statics.
    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.CGUI	=	CGUI;

    //-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------
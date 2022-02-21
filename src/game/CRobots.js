//-----------------------------------------------------------------------------------------------

(function()
{
    "use strict";

    //-----------------------------------------------------------------------------------------------
    //	const-ish.
    //-----------------------------------------------------------------------------------------------

    var Game			=	ProjectX.Game;		//	Game object shortcut.

    var	TheStage		=	null;

    var RobotAsleepArray           = [],
        RobotDanceArray            = [],
        RobotWakeUpArray           = [],
        RobotShadowArray           = [],
        RobotWakeUpAudioArray      = [ "wakeUp1", "wakeUp7", "wakeUp3", "wakeUp8", "wakeUp9", "wakeUp6" ],
        RobotSleepAudioArray       = [ "wakeUp2", "wakeUp4", "wakeUp2", "wakeUp5", "wakeUp2", "wakeUp4" ],

        LoopInstance1,
        LoopInstance2,
        LoopInstance3,
        LoopInstance4,
        LoopInstance5,
        LoopInstance6,
        LoopInstanceArray   =[];




    //-----------------------------------------------------------------------------------------------

    //	Set local paths to external objects.
    var CRobots	=	function( stage )
    {

        TheStage = stage;

        CRobots.RobotDancing1              =  false;
        CRobots.RobotDancing2              =  false;
        CRobots.RobotDancing3              =  false;
        CRobots.RobotDancing4              =  false;
        CRobots.RobotDancing5              =  false;
        CRobots.RobotDancing6              =  false;


        this.RobotContainer = new createjs.Container();
        this.RobotContainer.alpha = 0;

        //	Add the beehive to the stage...
        TheStage.addChild( this.RobotContainer );

        var shadowXposArray = [-244, 10 , 244, -250, 7, 250];
        var shadowYposArray = [-10, -10, -10, 268, 268, 268 ];

        ////////////
        for( var i=0; i<6; i++ ) {
            var shadow = new createjs.Sprite(Game.BackgroundSheet, "ShadowMC");
            shadow.SetPosition(shadowXposArray[i], shadowYposArray[i]);
            shadow.scaleX = 1.08;
            shadow.scaleY = 0.18;
            shadow.alpha = 0.66;

            RobotShadowArray.push(shadow);

            this.RobotContainer.addChild(shadow);
        }



        //// ROBOT 1 ////
        var robot1_asleep_ss 		=   ProjectX.SpriteSheets.Robot1_AsleepSS,
            robot1_asleep	        =	robot1_asleep_ss.spriteSheet.animations;

        robot1_asleep.loop = [robot1_asleep["Robot1_Asleep001"][0], robot1_asleep["Robot1_Asleep0051"][0], false, 0.7];

        this.Robot1AsleepSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot1_AsleepSS );

        this.Robot1Asleep = new createjs.Sprite(this.Robot1AsleepSpriteSheet, "loop");
        this.Robot1Asleep.SetPosition( -250, 178 );
        this.Robot1Asleep.stop();
        //this.Robot1Asleep.alpha = 0;

        var robot1_wakeup_ss 		=   ProjectX.SpriteSheets.Robot1_WakeUpSS,
            robot1_wakeup	        =	robot1_wakeup_ss.spriteSheet.animations;

        robot1_wakeup.loop = [robot1_wakeup["Robot1_WakeUp001"][0], robot1_wakeup["Robot1_WakeUp0026"][0], false, 0.7];

        this.Robot1WakeUpSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot1_WakeUpSS );

        this.Robot1WakeUp = new createjs.Sprite(this.Robot1WakeUpSpriteSheet, "loop");
        this.Robot1WakeUp.SetPosition( -253, 140 );
        this.Robot1WakeUp.stop();
        this.Robot1WakeUp.alpha = 0;

        var robot1_dance_ss 		=   ProjectX.SpriteSheets.Robot1_DanceSS,
            robot1_dance	        =	robot1_dance_ss.spriteSheet.animations;

        robot1_dance.loop = [robot1_dance["Robot1_Dance001"][0], robot1_dance["Robot1_Dance0051"][0], true, 0.7];

        this.Robot1DanceSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot1_DanceSS );

        this.Robot1Dance = new createjs.Sprite(this.Robot1DanceSpriteSheet, "loop");
        this.Robot1Dance.SetPosition( -247, 142 );
        this.Robot1Dance.stop();
        this.Robot1Dance.alpha = 0;

        this.RobotContainer.addChild( this.Robot1Asleep, this.Robot1WakeUp, this.Robot1Dance );

        //// ROBOT 2 ////
        var robot2_asleep_ss 		=   ProjectX.SpriteSheets.Robot2_AsleepSS,
            robot2_asleep	        =	robot2_asleep_ss.spriteSheet.animations;

        robot2_asleep.loop = [robot2_asleep["Robot2_Asleep001"][0], robot2_asleep["Robot2_Asleep0051"][0], false, 0.7];

        this.Robot2AsleepSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot2_AsleepSS );

        this.Robot2Asleep = new createjs.Sprite(this.Robot2AsleepSpriteSheet, "loop");
        this.Robot2Asleep.SetPosition( 0, -98 );
        this.Robot2Asleep.stop();
        //this.Robot2Asleep.alpha = 0;

        var robot2_wakeup_ss 		=   ProjectX.SpriteSheets.Robot2_WakeUpSS,
            robot2_wakeup	        =	robot2_wakeup_ss.spriteSheet.animations;

        robot2_wakeup.loop = [robot2_wakeup["Robot2_WakeUp001"][0], robot2_wakeup["Robot2_WakeUp0026"][0], false, 0.7];

        this.Robot2WakeUpSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot2_WakeUpSS );

        this.Robot2WakeUp = new createjs.Sprite(this.Robot2WakeUpSpriteSheet, "loop");
        this.Robot2WakeUp.SetPosition( -3, -136 );
        this.Robot2WakeUp.stop();
        this.Robot2WakeUp.alpha = 0;

        var robot2_dance_ss 		=   ProjectX.SpriteSheets.Robot2_DanceSS,
            robot2_dance	        =	robot2_dance_ss.spriteSheet.animations;

        robot2_dance.loop = [robot2_dance["Robot2_Dance001"][0], robot2_dance["Robot2_Dance0051"][0], true, 0.46];

        this.Robot2DanceSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot2_DanceSS );

        this.Robot2Dance = new createjs.Sprite(this.Robot2DanceSpriteSheet, "loop");
        this.Robot2Dance.SetPosition( 3, -134 );
        this.Robot2Dance.stop();
        this.Robot2Dance.alpha = 0;

        this.RobotContainer.addChild( this.Robot2Asleep, this.Robot2WakeUp, this.Robot2Dance );


        //// ROBOT 3 ////
        var robot3_asleep_ss 		=   ProjectX.SpriteSheets.Robot3_AsleepSS,
            robot3_asleep	        =	robot3_asleep_ss.spriteSheet.animations;

        robot3_asleep.loop = [robot3_asleep["Robot3_Asleep001"][0], robot3_asleep["Robot3_Asleep0051"][0], false, 0.7];

        this.Robot3AsleepSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot3_AsleepSS );

        this.Robot3Asleep = new createjs.Sprite(this.Robot3AsleepSpriteSheet, "loop");
        this.Robot3Asleep.SetPosition( 250, -114 );
        this.Robot3Asleep.stop();
        //this.Robot3Asleep.alpha = 0;

        var robot3_wakeup_ss 		=   ProjectX.SpriteSheets.Robot3_WakeUpSS,
            robot3_wakeup	        =	robot3_wakeup_ss.spriteSheet.animations;

        robot3_wakeup.loop = [robot3_wakeup["Robot3_WakeUp001"][0], robot3_wakeup["Robot3_WakeUp0051"][0], false, 0.7];

        this.Robot3WakeUpSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot3_WakeUpSS );

        this.Robot3WakeUp = new createjs.Sprite(this.Robot3WakeUpSpriteSheet, "loop");
        this.Robot3WakeUp.SetPosition( 253, -152 );
        this.Robot3WakeUp.stop();
        this.Robot3WakeUp.alpha = 0;

        var robot3_dance_ss 		=   ProjectX.SpriteSheets.Robot3_DanceSS,
            robot3_dance	        =	robot3_dance_ss.spriteSheet.animations;

        robot3_dance.loop = [robot3_dance["Robot3_Dance001"][0], robot3_dance["Robot3_Dance0026"][0], true, 0.5];

        this.Robot3DanceSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot3_DanceSS );

        this.Robot3Dance = new createjs.Sprite(this.Robot3DanceSpriteSheet, "loop");
        this.Robot3Dance.SetPosition( 233, -152 );
        this.Robot3Dance.stop();
        this.Robot3Dance.alpha = 0;

        this.RobotContainer.addChild( this.Robot3Asleep, this.Robot3WakeUp, this.Robot3Dance );

        //// ROBOT 4 ////
        var robot4_asleep_ss 		=   ProjectX.SpriteSheets.Robot4_AsleepSS,
            robot4_asleep	        =	robot4_asleep_ss.spriteSheet.animations;

        robot4_asleep.loop = [robot4_asleep["Robot4_Asleep001"][0], robot4_asleep["Robot4_Asleep0051"][0], false, 0.7];

        this.Robot4AsleepSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot4_AsleepSS );

        this.Robot4Asleep = new createjs.Sprite(this.Robot4AsleepSpriteSheet, "loop");
        this.Robot4Asleep.SetPosition( -250, -63 );
        this.Robot4Asleep.stop();
        //this.Robot4Asleep.alpha = 0;

        var robot4_wakeup_ss 		=   ProjectX.SpriteSheets.Robot4_WakeUpSS,
            robot4_wakeup	        =	robot4_wakeup_ss.spriteSheet.animations;

        robot4_wakeup.loop = [robot4_wakeup["Robot4_WakeUp001"][0], robot4_wakeup["Robot4_WakeUp0026"][0], false, 0.7];

        this.Robot4WakeUpSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot4_WakeUpSS );

        this.Robot4WakeUp = new createjs.Sprite(this.Robot4WakeUpSpriteSheet, "loop");
        this.Robot4WakeUp.SetPosition( -250, -93 );
        this.Robot4WakeUp.stop();
        this.Robot4WakeUp.alpha = 0;

        var robot4_dance_ss 		=   ProjectX.SpriteSheets.Robot4_DanceSS,
            robot4_dance	        =	robot4_dance_ss.spriteSheet.animations;

        robot4_dance.loop = [robot4_dance["Robot4_Dance001"][0], robot4_dance["Robot4_Dance0051"][0], true, 0.5];

        this.Robot4DanceSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot4_DanceSS );

        this.Robot4Dance = new createjs.Sprite(this.Robot4DanceSpriteSheet, "loop");
        this.Robot4Dance.SetPosition( -252, -95 );
        this.Robot4Dance.stop();
        this.Robot4Dance.alpha = 0;

        this.RobotContainer.addChild( this.Robot4Asleep, this.Robot4WakeUp, this.Robot4Dance );

        //// ROBOT 5 ////
        var robot5_asleep_ss 		=   ProjectX.SpriteSheets.Robot5_AsleepSS,
            robot5_asleep	        =	robot5_asleep_ss.spriteSheet.animations;

        robot5_asleep.loop = [robot5_asleep["Robot5_Asleep001"][0], robot5_asleep["Robot5_Asleep0051"][0], false, 0.7];

        this.Robot5AsleepSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot5_AsleepSS );

        this.Robot5Asleep = new createjs.Sprite(this.Robot5AsleepSpriteSheet, "loop");
        this.Robot5Asleep.SetPosition( 10, 170 );
        this.Robot5Asleep.stop();
        //this.Robot5Asleep.alpha = 0;

        var robot5_wakeup_ss 		=   ProjectX.SpriteSheets.Robot5_WakeUpSS,
            robot5_wakeup	        =	robot5_wakeup_ss.spriteSheet.animations;

        robot5_wakeup.loop = [robot5_wakeup["Robot5_WakeUp001"][0], robot5_wakeup["Robot5_WakeUp0026"][0], false, 0.7];

        this.Robot5WakeUpSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot5_WakeUpSS );

        this.Robot5WakeUp = new createjs.Sprite(this.Robot5WakeUpSpriteSheet, "loop");
        this.Robot5WakeUp.SetPosition( 3, 133 );
        this.Robot5WakeUp.stop();
        this.Robot5WakeUp.alpha = 0;

        var robot5_dance_ss 		=   ProjectX.SpriteSheets.Robot5_DanceSS,
            robot5_dance	        =	robot5_dance_ss.spriteSheet.animations;

        robot5_dance.loop = [robot5_dance["Robot5_Dance001"][0], robot5_dance["Robot5_Dance0026"][0], true, 0.5];

        this.Robot5DanceSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot5_DanceSS );

        this.Robot5Dance = new createjs.Sprite(this.Robot5DanceSpriteSheet, "loop");
        this.Robot5Dance.SetPosition( 1, 154 );
        this.Robot5Dance.stop();
        this.Robot5Dance.alpha = 0;

        this.RobotContainer.addChild( this.Robot5Asleep, this.Robot5WakeUp, this.Robot5Dance );

        //// ROBOT 6 ////
        var robot6_asleep_ss 		=   ProjectX.SpriteSheets.Robot6_AsleepSS,
            robot6_asleep	        =	robot6_asleep_ss.spriteSheet.animations;

        robot6_asleep.loop = [robot6_asleep["Robot6_Asleep001"][0], robot6_asleep["Robot6_Asleep0051"][0], false, 0.7];

        this.Robot6AsleepSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot6_AsleepSS );

        this.Robot6Asleep = new createjs.Sprite(this.Robot6AsleepSpriteSheet, "loop");
        this.Robot6Asleep.SetPosition( 250, 217 );
        this.Robot6Asleep.stop();
        //this.Robot6Asleep.alpha = 0;

        var robot6_wakeup_ss 		=   ProjectX.SpriteSheets.Robot6_WakeUpSS,
            robot6_wakeup	        =	robot6_wakeup_ss.spriteSheet.animations;

        robot6_wakeup.loop = [robot6_wakeup["Robot6_WakeUp001"][0], robot6_wakeup["Robot6_WakeUp0026"][0], false, 0.7];

        this.Robot6WakeUpSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot6_WakeUpSS );

        this.Robot6WakeUp = new createjs.Sprite(this.Robot6WakeUpSpriteSheet, "loop");
        this.Robot6WakeUp.SetPosition( 222.5, 138 );
        this.Robot6WakeUp.stop();
        this.Robot6WakeUp.alpha = 0;

        var robot6_dance_ss 		=   ProjectX.SpriteSheets.Robot6_DanceSS,
            robot6_dance	        =	robot6_dance_ss.spriteSheet.animations;

        robot6_dance.loop = [robot6_dance["Robot6_Dance001"][0], robot6_dance["Robot6_Dance0051"][0], true, 0.6];

        this.Robot6DanceSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot6_DanceSS );

        this.Robot6Dance = new createjs.Sprite(this.Robot6DanceSpriteSheet, "loop");
        this.Robot6Dance.SetPosition( 268, 144 );
        this.Robot6Dance.stop();
        this.Robot6Dance.alpha = 0;

        this.RobotContainer.addChild( this.Robot6Asleep, this.Robot6WakeUp, this.Robot6Dance );

        RobotAsleepArray           = [this.Robot4Asleep, this.Robot2Asleep, this.Robot3Asleep, this.Robot1Asleep, this.Robot5Asleep, this.Robot6Asleep ];
        RobotDanceArray            = [this.Robot4Dance, this.Robot2Dance, this.Robot3Dance, this.Robot1Dance, this.Robot5Dance, this.Robot6Dance];
        RobotWakeUpArray           = [this.Robot4WakeUp, this.Robot2WakeUp, this.Robot3WakeUp, this.Robot1WakeUp, this.Robot5WakeUp, this.Robot6WakeUp];



        /*
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
         */



        var update		=	function(){ TheStage.SetDirty(); }.bind(this);

        TweenLite.to(CRobots, 6000, { onUpdate:update } );




        //	...& make sure we're repositionable.
        ProjectX.SetRepositionable( this );


    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.Reposition		=	function()
    {

        var half_width              =   TheStage.View.HalfWidth,
            half_height             =   TheStage.View.HalfHeight,
            scale                   =   ProjectX.MainView.ScaleFactor;

        this.RobotContainer.SetPosition( half_width,  half_height);
        this.RobotContainer.SetScale( scale );


        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.InitRobots		=	function(  )
    {

        var update		=	function(){ TheStage.SetDirty(); }.bind(this);

        TweenMax.to( this.RobotContainer, 1, {alpha:1,
            ease:Quad.easeOut,
            onUpdate:update});

        for( var i=0; i<200; i++ ) {

            TweenMax.delayedCall(1 + (i*4), this.PlayRobot1Snooze , [], this );
            TweenMax.delayedCall(0.2 + (i*5), this.PlayRobot2Snooze , [], this );
            TweenMax.delayedCall(1.4 + (i*3.2), this.PlayRobot3Snooze , [], this );
            TweenMax.delayedCall(0.6 + (i*4.2), this.PlayRobot4Snooze , [], this );
            TweenMax.delayedCall(1.6 + (i*5), this.PlayRobot5Snooze , [], this );
            TweenMax.delayedCall(0.5 + (i*3.8), this.PlayRobot6Snooze , [], this );

        }

        LoopInstance1 = createjs.Sound.play( "Drumbox", {loop:9999});  // Arpegio
        LoopInstance2 = createjs.Sound.play( "Arpegio", {loop:9999});   /// Bass
        LoopInstance3 = createjs.Sound.play( "Strings", {loop:9999});  /// Disco
        LoopInstance4 = createjs.Sound.play( "Bass", {loop:9999}); /// Tinkle
        LoopInstance5 = createjs.Sound.play( "Tinkle", {loop:9999}); /// Strings
        LoopInstance6 = createjs.Sound.play( "Disco", {loop:9999}); /// Drumbox


        LoopInstance1.volume = 0;
        LoopInstance2.volume = 0;
        LoopInstance3.volume = 0;
        LoopInstance4.volume = 0;
        LoopInstance5.volume = 0;
        LoopInstance6.volume = 0;

        LoopInstanceArray= [LoopInstance1, LoopInstance2, LoopInstance3, LoopInstance4, LoopInstance5, LoopInstance6];

    };



    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.RobotClicked		=	function( number )
    {

        if( !CRobots["RobotDancing" + (number +1)] ) {

            var update = function () {
                TheStage.SetDirty();
            }.bind(this);

            createjs.Sound.play(RobotWakeUpAudioArray[number]);


            CRobots["RobotDancing" + (number + 1)] = true;

            console.log("CRobots number :: " + number);

            RobotAsleepArray[number].alpha = 0;
            RobotAsleepArray[number].y = RobotAsleepArray[number].y - 60;
            RobotWakeUpArray[number].alpha = 1;

            TweenMax.delayedCall(1, function(){LoopInstanceArray[number].volume = 70;});


            ///// set this duration as a variable /////
            RobotWakeUpArray[number].gotoAndPlayDuration("loop", {duration: 1, stage: TheStage});

            TweenMax.to(RobotWakeUpArray[number], 0.01, {alpha: 0, delay: 1, ease: Quad.easeOut, onUpdate: update});
            TweenMax.to(RobotDanceArray[number], 0.01, {alpha: 1, delay: 0.99, ease: Quad.easeOut, onUpdate: update});

            RobotDanceArray[number].play();

            TheStage.SetDirty();

            return;

        }

        if( CRobots["RobotDancing" + (number +1)] ) {

            var update = function () {
                TheStage.SetDirty();
            }.bind(this);

            TweenMax.delayedCall(0.3, function(){createjs.Sound.play("thudBounce");});

            TweenMax.delayedCall(0.01, function(){createjs.Sound.play(RobotSleepAudioArray[number]);});

            TweenMax.delayedCall(0.01, function(){LoopInstanceArray[number].volume = 0;});


            CRobots["RobotDancing" + (number + 1)] = false;

            console.log("CRobots number :: " + number);



            RobotAsleepArray[number].alpha = 1;
            RobotDanceArray[number].alpha = 0;

            TweenMax.to(RobotAsleepArray[number], 0.5, {y:RobotAsleepArray[number].y + 60, delay: 0.1, ease:Bounce.easeOut, onUpdate: update});



            TheStage.SetDirty();


            return;

        }
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot1Snooze		=	function()
    {

        this.Robot1Asleep.gotoAndPlayDuration( "loop", {duration:2, stage:TheStage} );

    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot2Snooze		=	function()
    {

        this.Robot2Asleep.gotoAndPlayDuration( "loop", {duration:2, stage:TheStage} );

    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot3Snooze		=	function()
    {

        this.Robot3Asleep.gotoAndPlayDuration( "loop", {duration:2, stage:TheStage} );

    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot4Snooze		=	function()
    {

        this.Robot4Asleep.gotoAndPlayDuration( "loop", {duration:2, stage:TheStage} );

    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot5Snooze		=	function()
    {

        this.Robot5Asleep.gotoAndPlayDuration( "loop", {duration:2, stage:TheStage} );

    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot6Snooze		=	function()
    {

        this.Robot6Asleep.gotoAndPlayDuration( "loop", {duration:2, stage:TheStage} );

    };



    //-----------------------------------------------------------------------------------------------
    //	Static variables.
    //-----------------------------------------------------------------------------------------------

    CRobots.VERSION			=	'0_0_1';

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.CRobots		=	CRobots;
}());

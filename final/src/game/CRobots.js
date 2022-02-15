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
        //Game		=	ProjectX.Game;
        Game        = beablib.Game,
        Renderer    = beablib.Renderer;

    //	Data.
    var TheStage = null;

    //  Game data.
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

    //	Functions.
    var UpdateStage = function () {
        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------
    //	Object definition.
    //-----------------------------------------------------------------------------------------------

    var CRobots	=	function( stage )
    {
        //	Make a note of the stage.
        TheStage = stage;

        CRobots.RobotDancing1              =  false;
        CRobots.RobotDancing2              =  false;
        CRobots.RobotDancing3              =  false;
        CRobots.RobotDancing4              =  false;
        CRobots.RobotDancing5              =  false;
        CRobots.RobotDancing6              =  false;

        // this.RobotContainer = new createjs.Container();
        // this.RobotContainer.alpha = 0;
        this.RobotContainer = Renderer.CreateContainer( { alpha:0 });

        //	Add the beehive to the stage...
        TheStage.addChild( this.RobotContainer );

        var shadowXposArray = [-244, 10 , 244, -250, 7, 250];
        var shadowYposArray = [-10, -10, -10, 268, 268, 268 ];
        var asleepXposArray = [-250, 0, 250, -250, 10, 250];
        var asleepYposArray = [178, -98, -114, -63, 170, 217];
        var wakeUpXposArray = [-253, -3, 253, -250, 3, 222.5];
        var wakeUpYposArray = [140, -136, -152, -93, 133, 138];
        var danceXposArray = [-247, 3, 233, -252, 1, 268];
        var danceYposArray = [142, -134, -152, -95, 154, 144];

        ////////////
        for( var i=0; i<6; i++ ) {
            // var shadow = new createjs.Sprite(Game.BackgroundSheet, "ShadowMC");
            // shadow.SetPosition(shadowXposArray[i], shadowYposArray[i]);
            // shadow.scaleX = 1.08;
            // shadow.scaleY = 0.18;
            // shadow.alpha = 0.66;
            // this.RobotContainer.addChild(shadow);
            var shadow = Renderer.CreateSprite(Game.BackgroundSheet, "ShadowMC", {alpha:0.66, scaleX: 1.08, scaleY: 0.18, position: {X:shadowXposArray[i], Y:shadowYposArray[i]}, parent: this.RobotContainer});

            RobotShadowArray.push(shadow);
        }

        var robotOrder = [3, 1, 2, 0, 4, 5];
        var self = this;

        robotOrder.forEach(function(i) {
            // var robot1_asleep_ss 		=   ProjectX.SpriteSheets.Robot1_AsleepSS,
                // robot1_asleep	        =	robot1_asleep_ss.spriteSheet.animations;
            var roboti_asleep	        =	beablib.SpriteSheetPath["Robot"+(i+1)+"_AsleepSS"].spriteSheet.animations;

            roboti_asleep.loop = [roboti_asleep["Robot"+(i+1)+"_Asleep001"][0], roboti_asleep["Robot"+(i+1)+"_Asleep0051"][0], false, 0.7];

            // this.Robot1AsleepSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot1_AsleepSS );
            // this.Robot1Asleep = new createjs.Sprite(this.Robot1AsleepSpriteSheet, "loop");
            // this.Robot1Asleep.SetPosition( -250, 178 );
            // this.Robot1Asleep.stop();
            // SHOULD LINE BELOW SAY "LOOP" INSTEAD OF "Robot"+(i+1)+"_Asleep"???
            RobotAsleepArray.push(Renderer.CreateSprite(Game["Robot"+(i+1)+"AsleepSheet"], "Robot"+(i+1)+"_Asleep", {alpha:1, scale:1, position: {X:asleepXposArray[i], Y:asleepYposArray[i]}, parent: self.RobotContainer}));

            // var robot1_wakeup_ss 		=   ProjectX.SpriteSheets.Robot1_WakeUpSS,
                // robot1_wakeup	        =	robot1_wakeup_ss.spriteSheet.animations;
            var roboti_wakeup	        =	beablib.SpriteSheetPath["Robot"+(i+1)+"_WakeUpSS"].spriteSheet.animations;

            if (i == 2) {
                roboti_wakeup.loop = [roboti_wakeup["Robot3_WakeUp001"][0], roboti_wakeup["Robot3_WakeUp0051"][0], false, 0.7];
            } else {
                roboti_wakeup.loop = [roboti_wakeup["Robot"+(i+1)+"_WakeUp001"][0], roboti_wakeup["Robot"+(i+1)+"_WakeUp0026"][0], false, 0.7];
            }

            // this.Robot1WakeUpSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot1_WakeUpSS );
            // this.Robot1WakeUp = new createjs.Sprite(this.Robot1WakeUpSpriteSheet, "loop");
            // this.Robot1WakeUp.SetPosition( -253, 140 );
            // this.Robot1WakeUp.stop();
            // this.Robot1WakeUp.alpha = 0;
            RobotWakeUpArray.push(Renderer.CreateSprite(Game["Robot"+(i+1)+"WakeUpSheet"], "Robot"+(i+1)+"_WakeUp", {alpha:0, scale:1, position: {X:wakeUpXposArray[i], Y:wakeUpYposArray[i]}, parent: self.RobotContainer}));

            // var robot1_dance_ss 		=   ProjectX.SpriteSheets.Robot1_DanceSS,
                // robot1_dance	        =	robot1_dance_ss.spriteSheet.animations;
            var roboti_dance	        =	beablib.SpriteSheetPath["Robot"+(i+1)+"_DanceSS"].spriteSheet.animations;

            if (i == 2 || i == 4) {
                roboti_dance.loop = [roboti_dance["Robot"+(i+1)+"_Dance001"][0], roboti_dance["Robot"+(i+1)+"_Dance0026"][0], false, 0.7];
            } else {
                roboti_dance.loop = [roboti_dance["Robot"+(i+1)+"_Dance001"][0], roboti_dance["Robot"+(i+1)+"_Dance0051"][0], false, 0.7];
            }

            // this.Robot1DanceSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot1_DanceSS );
            // this.Robot1Dance = new createjs.Sprite(this.Robot1DanceSpriteSheet, "loop");
            // this.Robot1Dance.SetPosition( -247, 142 );
            // this.Robot1Dance.stop();
            // this.Robot1Dance.alpha = 0;
            RobotDanceArray.push(Renderer.CreateSprite(Game["Robot"+(i+1)+"DanceSheet"], "Robot"+(i+1)+"_Dance", {alpha:0, scale:1, position: {X:danceXposArray[i], Y:danceYposArray[i]}, parent: self.RobotContainer}));
        });

        // var update		=	function(){ TheStage.SetDirty(); }.bind(this);

        // TweenLite.to(CRobots, 6000, { onUpdate:UpdateStage } );
        gsap.to(CRobots, { duration:6000, onUpdate:UpdateStage } );

        //	...& make sure we're repositionable.
        // ProjectX.SetRepositionable( this );
        beablib.SetRepositionable(this);
    };

    //-----------------------------------------------------------------------------------------------
    //	Public members.
    //-----------------------------------------------------------------------------------------------

    /* CRobots.prototype.Reposition		=	function()
    {

        var half_width              =   TheStage.View.HalfWidth,
            half_height             =   TheStage.View.HalfHeight,
            scale                   =   ProjectX.MainView.ScaleFactor;

        this.RobotContainer.SetPosition( half_width,  half_height);
        this.RobotContainer.SetScale( scale );


        TheStage.SetDirty();
    }; */

    CRobots.prototype.Reposition = function (scale) {

        this.RobotContainer.SetPosition(TheStage.View.HalfWidth, TheStage.View.HalfHeight);
        this.RobotContainer.SetScale(scale);

        UpdateStage();
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.InitRobots		=	function(  )
    {

        // var update		=	function(){ TheStage.SetDirty(); }.bind(this);
        /* TweenMax.to( this.RobotContainer, 1, {alpha:1,
            ease:Quad.easeOut,
            onUpdate:update}); */

        gsap.to( this.RobotContainer, {duration: 1, alpha:1,
            ease:Quad.easeOut, // Quad.easeOut probably deprecated!
            onUpdate:UpdateStage});

        for( var i=0; i<200; i++ ) {

            // TweenMax.delayedCall(1 + (i*4), this.PlayRobot1Snooze , [], this );
            // TweenMax.delayedCall(0.2 + (i*5), this.PlayRobot2Snooze , [], this );
            // TweenMax.delayedCall(1.4 + (i*3.2), this.PlayRobot3Snooze , [], this );
            // TweenMax.delayedCall(0.6 + (i*4.2), this.PlayRobot4Snooze , [], this );
            // TweenMax.delayedCall(1.6 + (i*5), this.PlayRobot5Snooze , [], this );
            // TweenMax.delayedCall(0.5 + (i*3.8), this.PlayRobot6Snooze , [], this );
            gsap.delayedCall(1 + (i*4), this.PlayRobot1Snooze , [], this );
            gsap.delayedCall(0.2 + (i*5), this.PlayRobot2Snooze , [], this );
            gsap.delayedCall(1.4 + (i*3.2), this.PlayRobot3Snooze , [], this );
            gsap.delayedCall(0.6 + (i*4.2), this.PlayRobot4Snooze , [], this );
            gsap.delayedCall(1.6 + (i*5), this.PlayRobot5Snooze , [], this );
            gsap.delayedCall(0.5 + (i*3.8), this.PlayRobot6Snooze , [], this );

        }

        /* LoopInstance1 = createjs.Sound.play( "Drumbox", {loop:9999});  // Arpegio
        LoopInstance2 = createjs.Sound.play( "Arpegio", {loop:9999});   /// Bass
        LoopInstance3 = createjs.Sound.play( "Strings", {loop:9999});  /// Disco
        LoopInstance4 = createjs.Sound.play( "Bass", {loop:9999}); /// Tinkle
        LoopInstance5 = createjs.Sound.play( "Tinkle", {loop:9999}); /// Strings
        LoopInstance6 = createjs.Sound.play( "Disco", {loop:9999}); /// Drumbox */
        LoopInstance1 = Audio.Play("Drumbox", {Loop: true});  // Arpeggio
        LoopInstance2 = Audio.Play("Arpegio", {Loop: true});   /// Bass
        LoopInstance3 = Audio.Play("Strings", {Loop: true});  /// Disco
        LoopInstance4 = Audio.Play("Bass", {Loop: true}); /// Tinkle
        LoopInstance5 = Audio.Play("Tinkle", {Loop: true}); /// Strings
        LoopInstance6 = Audio.Play("Disco", {Loop: true}); /// Drumbox

        // LoopInstance1.volume = 0;
        // LoopInstance2.volume = 0;
        // LoopInstance3.volume = 0;
        // LoopInstance4.volume = 0;
        // LoopInstance5.volume = 0;
        // LoopInstance6.volume = 0;
        LoopInstance1.setVolume(0);
        LoopInstance2.setVolume(0);
        LoopInstance3.setVolume(0);
        LoopInstance4.setVolume(0);
        LoopInstance5.setVolume(0);
        LoopInstance6.setVolume(0);

        LoopInstanceArray= [LoopInstance1, LoopInstance2, LoopInstance3, LoopInstance4, LoopInstance5, LoopInstance6];

    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.RobotClicked		=	function( number )
    {

        if( !CRobots["RobotDancing" + (number +1)] ) {

            /* var update = function () {
                TheStage.SetDirty();
            }.bind(this); */

            // createjs.Sound.play(RobotWakeUpAudioArray[number]);
            Audio.Play(RobotWakeUpAudioArray[number]);


            CRobots["RobotDancing" + (number + 1)] = true;

            console.log("CRobots number :: " + number);

            RobotAsleepArray[number].alpha = 0;
            // RobotAsleepArray[number].y = RobotAsleepArray[number].y - 60;
            RobotAsleepArray[number].position.y = RobotAsleepArray[number].position.y - 60;
            RobotWakeUpArray[number].alpha = 1;

            gsap.delayedCall(1, function(){LoopInstanceArray[number].setVolume(0.7);});


            ///// set this duration as a variable /////
            RobotWakeUpArray[number].gotoAndPlayDuration("loop", {duration: 1, stage: TheStage});

            // TweenMax.to(RobotWakeUpArray[number], 0.01, {alpha: 0, delay: 1, ease: Quad.easeOut, onUpdate: update});
            gsap.to(RobotWakeUpArray[number], {duration: 0.01, alpha: 0, delay: 1, ease: Quad.easeOut, onUpdate: UpdateStage});
            // TweenMax.to(RobotDanceArray[number], 0.01, {alpha: 1, delay: 0.99, ease: Quad.easeOut, onUpdate: update});
            gsap.to(RobotDanceArray[number], {duration: 0.01, alpha: 0, delay: 1, ease: Quad.easeOut, onUpdate: UpdateStage});

            RobotDanceArray[number].play();

            //TheStage.SetDirty();
            UpdateStage();

            return;

        }

        if( CRobots["RobotDancing" + (number +1)] ) {

            /* var update = function () {
                TheStage.SetDirty();
            }.bind(this); */

            // TweenMax.delayedCall(0.3, function(){createjs.Sound.play("thudBounce");});
            gsap.delayedCall(0.3, function(){Audio.Play("thudBounce");});

            // TweenMax.delayedCall(0.01, function(){createjs.Sound.play(RobotSleepAudioArray[number]);});
            gsap.delayedCall(0.01, function(){Audio.Play(RobotSleepAudioArray[number]);});

            // TweenMax.delayedCall(0.01, function(){LoopInstanceArray[number].volume = 0;});
            gsap.delayedCall(0.01, function(){LoopInstanceArray[number].setVolume(0);});

            CRobots["RobotDancing" + (number + 1)] = false;

            console.log("CRobots number :: " + number);



            RobotAsleepArray[number].alpha = 1;
            RobotDanceArray[number].alpha = 0;

            // TweenMax.to(RobotAsleepArray[number], 0.5, {y:RobotAsleepArray[number].y + 60, delay: 0.1, ease:Bounce.easeOut, onUpdate: update});
            gsap.to(RobotAsleepArray[number], {duration: 0.5, y:RobotAsleepArray[number].y + 60, delay: 0.1, ease:Bounce.easeOut, onUpdate: UpdateStage});



            // TheStage.SetDirty();
            UpdateStage();


            return;

        }
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot1Snooze		=	function()
    {

        RobotAsleepArray[robotOrder.indexOf(0)].gotoAndPlayDuration( "loop", {duration:2, stage:TheStage} );

    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot2Snooze		=	function()
    {

        RobotAsleepArray[robotOrder.indexOf(1)].gotoAndPlayDuration( "loop", {duration:2, stage:TheStage} );

    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot3Snooze		=	function()
    {

        RobotAsleepArray[robotOrder.indexOf(2)].gotoAndPlayDuration( "loop", {duration:2, stage:TheStage} );

    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot4Snooze		=	function()
    {

        RobotAsleepArray[robotOrder.indexOf(3)].gotoAndPlayDuration( "loop", {duration:2, stage:TheStage} );

    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot5Snooze		=	function()
    {

        RobotAsleepArray[robotOrder.indexOf(4)].gotoAndPlayDuration( "loop", {duration:2, stage:TheStage} );

    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot6Snooze		=	function()
    {

        RobotAsleepArray[robotOrder.indexOf(5)].gotoAndPlayDuration( "loop", {duration:2, stage:TheStage} );

    };



    //-----------------------------------------------------------------------------------------------
    //	Static variables.
    //-----------------------------------------------------------------------------------------------

    CRobots.VERSION			=	'0_0_1';

    //-----------------------------------------------------------------------------------------------
    //	Public statics.
    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.CRobots	=	CRobots;

    //-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------
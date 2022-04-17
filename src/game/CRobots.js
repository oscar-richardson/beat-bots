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
        LoopInstanceArray   =[],
        robotOrder = [3, 1, 2, 0, 4, 5];

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

        this.RobotContainer = Renderer.CreateContainer( { alpha:0 });

        TheStage.addChild( this.RobotContainer );

        var shadowXposArray = [-244, 10 , 244, -250, 7, 250];
        var shadowYposArray = [-10, -10, -10, 268, 268, 268 ];
        var asleepXposArray = [-250, 0, 250, -250, 10, 250];
        var asleepYposArray = [178, -98, -114, -63, 170, 217];
        var wakeUpXposArray = [-253, -3, 253, -250, 3, 222.5];
        var wakeUpYposArray = [140, -136, -152, -93, 133, 138];
        var danceXposArray = [-247, 3, 233, -252, 1, 268];
        var danceYposArray = [142, -134, -152, -95, 154, 144];
        var danceDurationArray = [0.7, 0.46, 0.5, 0.5, 0.5, 0.6];

        ////////////
        for( var i=0; i<6; i++ ) {
            var shadow = Renderer.CreateSprite(Game.BackgroundSheet, "ShadowMC", {alpha: 0.66, scaleX: 1.08, scaleY: 0.18, position: {X:shadowXposArray[i], Y:shadowYposArray[i]}, parent: this.RobotContainer});

            RobotShadowArray.push(shadow);
        }

        var self = this;

        robotOrder.forEach(function(i) {
            var robot_asleep_ss 		=   beablib.SpriteSheetPath["Robot"+(i+1)+"_AsleepSS"],
                robot_asleep	        =	robot_asleep_ss.spriteSheet.animations;

            robot_asleep.loop = [robot_asleep["Robot"+(i+1)+"_Asleep001"][0], robot_asleep["Robot"+(i+1)+"_Asleep0051"][0], false, 0.7];

            self.RobotAsleepSpriteSheet = beablib.CreateSpriteSheet(robot_asleep_ss);

            RobotAsleepArray.push(Renderer.CreateSprite(self.RobotAsleepSpriteSheet, "loop", {alpha:1, scale:1, position: {X:asleepXposArray[i], Y:asleepYposArray[i]}, parent: self.RobotContainer}));

            var robot_wakeup_ss 		=   beablib.SpriteSheetPath["Robot"+(i+1)+"_WakeUpSS"],
                robot_wakeup	        =	robot_wakeup_ss.spriteSheet.animations;

            if (i == 2) {
                robot_wakeup.loop = [robot_wakeup["Robot"+(i+1)+"_WakeUp001"][0], robot_wakeup["Robot"+(i+1)+"_WakeUp0051"][0], false, 0.7];
            } else {
                robot_wakeup.loop = [robot_wakeup["Robot"+(i+1)+"_WakeUp001"][0], robot_wakeup["Robot"+(i+1)+"_WakeUp0026"][0], false, 0.7];
            }

            self.RobotWakeUpSpriteSheet = beablib.CreateSpriteSheet(robot_wakeup_ss);

            RobotWakeUpArray.push(Renderer.CreateSprite(self.RobotWakeUpSpriteSheet, "loop", {alpha:0, scale:1, position: {X:wakeUpXposArray[i], Y:wakeUpYposArray[i]}, parent: self.RobotContainer}));

            var robot_dance_ss 		=   beablib.SpriteSheetPath["Robot"+(i+1)+"_DanceSS"],
                robot_dance	        =	robot_dance_ss.spriteSheet.animations;

            if (i == 2 || i == 4) {
                robot_dance.loop = [robot_dance["Robot"+(i+1)+"_Dance001"][0], robot_dance["Robot"+(i+1)+"_Dance0026"][0], "loop", danceDurationArray[i]];
            } else {
                robot_dance.loop = [robot_dance["Robot"+(i+1)+"_Dance001"][0], robot_dance["Robot"+(i+1)+"_Dance0051"][0], "loop", danceDurationArray[i]];
            }

            self.RobotDanceSpriteSheet = beablib.CreateSpriteSheet(robot_dance_ss);

            RobotDanceArray.push(Renderer.CreateSprite(self.RobotDanceSpriteSheet, "loop", {alpha:0, scale:1, position: {X:danceXposArray[i], Y:danceYposArray[i]}, parent: self.RobotContainer}));
        });

        var update		=	function(){ TheStage.SetDirty(); }.bind(this);

        gsap.to(CRobots, { duration:6000, onUpdate:update } );

        //	...& make sure we're repositionable.
        beablib.SetRepositionable(this);
    };

    //-----------------------------------------------------------------------------------------------
    //	Public members.
    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.Reposition = function (scale) {

        this.RobotContainer.SetPosition(TheStage.View.HalfWidth, TheStage.View.HalfHeight);
        this.RobotContainer.SetScale(scale);

        UpdateStage();
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.InitRobots		=	function(  )
    {

        var update		=	function(){ TheStage.SetDirty(); }.bind(this);

        gsap.to( this.RobotContainer, {duration: 1, alpha:1,
            ease:Quad.easeOut, // Quad.easeOut probably deprecated!
            onUpdate:update});

        for( var i=0; i<200; i++ ) {

            gsap.delayedCall(1 + (i*4), this.PlayRobot1Snooze , [], this );
            gsap.delayedCall(0.2 + (i*5), this.PlayRobot2Snooze , [], this );
            gsap.delayedCall(1.4 + (i*3.2), this.PlayRobot3Snooze , [], this );
            gsap.delayedCall(0.6 + (i*4.2), this.PlayRobot4Snooze , [], this );
            gsap.delayedCall(1.6 + (i*5), this.PlayRobot5Snooze , [], this );
            gsap.delayedCall(0.5 + (i*3.8), this.PlayRobot6Snooze , [], this );

        }

        LoopInstance1 = Audio.Play("Drumbox", {Loop: true});
        LoopInstance2 = Audio.Play("Arpegio", {Loop: true});
        LoopInstance3 = Audio.Play("Strings", {Loop: true});
        LoopInstance4 = Audio.Play("Bass", {Loop: true});
        LoopInstance5 = Audio.Play("Tinkle", {Loop: true});
        LoopInstance6 = Audio.Play("Disco", {Loop: true});

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

            var update = function () {
                TheStage.SetDirty();
            }.bind(this);

            Audio.Play(RobotWakeUpAudioArray[number]);

            CRobots["RobotDancing" + (number + 1)] = true;

            console.log("CRobots number :: " + number);

            RobotAsleepArray[number].alpha = 0;
            RobotAsleepArray[number].position.y = RobotAsleepArray[number].position.y - 60;
            RobotWakeUpArray[number].alpha = 1;

            gsap.delayedCall(1, function(){LoopInstanceArray[number].setVolume(0.7);});

            ///// set this duration as a variable /////
            RobotWakeUpArray[number].gotoAndPlayDuration("loop", {duration: 1, stage: TheStage});

            gsap.to(RobotWakeUpArray[number], {duration: 0.01, alpha: 0, delay: 1, ease: Quad.easeOut, onUpdate: update});
            gsap.to(RobotDanceArray[number], {duration: 0.01, alpha: 1, delay: 0.99, ease: Quad.easeOut, onUpdate: update});

            RobotDanceArray[number].play();

            UpdateStage();

            return;

        }

        if( CRobots["RobotDancing" + (number +1)] ) {

            var update = function () {
                TheStage.SetDirty();
            }.bind(this);

            gsap.delayedCall(0.3, function(){Audio.Play("thudBounce");});

            gsap.delayedCall(0.01, function(){Audio.Play(RobotSleepAudioArray[number]);});

            gsap.delayedCall(0.01, function(){LoopInstanceArray[number].setVolume(0);});

            CRobots["RobotDancing" + (number + 1)] = false;

            console.log("CRobots number :: " + number);

            RobotAsleepArray[number].alpha = 1;
            RobotDanceArray[number].alpha = 0;

            gsap.to(RobotAsleepArray[number], {duration: 0.5, y:RobotAsleepArray[number].y + 60, delay: 0.1, ease:Bounce.easeOut, onUpdate: update});

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

    if (navigator.mediaDevices.getUserMedia) {
        console.log('getUserMedia supported.');

        const constraints = { audio: true };
        let chunks = [];

        let onSuccess = function(stream) {
          const mediaRecorder = new MediaRecorder(stream);

          let recordingInProgress = false;

          var stopRecording = function() {
            recordingInProgress = false;
            mediaRecorder.stop();
            console.log(mediaRecorder.state);
            console.log("recorder stopped");
            }

            CRobots.prototype.Record	=	function( number )
            {
                if (recordingInProgress) {
                    stopRecording();
                    gsap.killTweensOf(stopRecording);
                } else {
                    recordingInProgress = true;
                    mediaRecorder.start();
                    console.log(mediaRecorder.state);
                    console.log("recorder started");
                    gsap.delayedCall(5, stopRecording);
                }
            };

            mediaRecorder.onstop = function(e) {
                console.log("data available after MediaRecorder.stop() called.");
                const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
                chunks = [];
                console.log(blob.type);
                const audioURL = window.URL.createObjectURL(blob);
                console.log("recorder stopped");
                console.log(audioURL);
                createjs.Sound.alternateExtensions = ["mp3", "ogg"];
                createjs.Sound.registerSound({ src: { ogg: audioURL }, type: "sound" }, "sound");
                createjs.Sound.play("sound");

            }

            mediaRecorder.ondataavailable = function(e) {
                chunks.push(e.data);
            }
        }

        let onError = function(err) {
          console.log('The following error occured: ' + err);
          CRobots.prototype.Record	=	function( number )
            {

            };
        }

        navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

    } else {
         console.log('getUserMedia not supported on your browser!');
         CRobots.prototype.Record	=	function( number )
            {

            };
    }

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
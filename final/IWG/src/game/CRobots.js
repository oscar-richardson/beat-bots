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

        [4, 2, 3, 1, 5, 6].forEach(function(i) {
            // var robot1_asleep_ss 		=   ProjectX.SpriteSheets.Robot1_AsleepSS,
                // robot1_asleep	        =	robot1_asleep_ss.spriteSheet.animations;
            let roboti_asleep	        =	beablib.SpriteSheetPath["Robot"+(i+1)+"_AsleepSS"].spriteSheet.animations;
            
            roboti_asleep.loop = [roboti_asleep["Robot"+(i+1)+"_Asleep001"][0], roboti_asleep["Robot"+(i+1)+"_Asleep0051"][0], false, 0.7];

            // this.Robot1AsleepSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot1_AsleepSS );
            // this.Robot1Asleep = new createjs.Sprite(this.Robot1AsleepSpriteSheet, "loop");
            // this.Robot1Asleep.SetPosition( -250, 178 );
            // this.Robot1Asleep.stop();
            RobotAsleepArray.push(Renderer.CreateSprite(beablib.CreateSpriteSheet(beablib.SpriteSheetPath["Robot1_AsleepSS"]), "Robot"+(i+1)+"_Asleep", {alpha:1, scale:1, position: {X:asleepXposArray[i], Y:asleepYposArray[i]}, parent: this.RobotContainer}));

            // var robot1_wakeup_ss 		=   ProjectX.SpriteSheets.Robot1_WakeUpSS,
                // robot1_wakeup	        =	robot1_wakeup_ss.spriteSheet.animations;
            let roboti_wakeup	        =	beablib.SpriteSheetPath["Robot"+(i+1)+"_WakeUp"];

            if (i == 2) {
                roboti_wakeup.loop = [robot3_wakeup["Robot3_WakeUp001"][0], robot3_wakeup["Robot3_WakeUp0051"][0], false, 0.7];
            } else {
                roboti_wakeup.loop = [roboti_wakeup["Robot"+(i+1)+"_WakeUp001"][0], roboti_wakeup["Robot"+(i+1)+"_WakeUp0026"][0], false, 0.7];
            }

            // this.Robot1WakeUpSpriteSheet  =	ProjectX.CreateSpriteSheet( ProjectX.SpriteSheets.Robot1_WakeUpSS );
            // this.Robot1WakeUp = new createjs.Sprite(this.Robot1WakeUpSpriteSheet, "loop");
            // this.Robot1WakeUp.SetPosition( -253, 140 );
            // this.Robot1WakeUp.stop();
            // this.Robot1WakeUp.alpha = 0;
            RobotWakeUpArray.push(Renderer.CreateSprite(beablib.CreateSpriteSheet(beablib.SpriteSheetPath["Robot"+(i+1)+"_WakeUp"]), "Robot"+(i+1)+"_WakeUp", {alpha:0, scale:1, position: {X:wakeUpXposArray[i], Y:wakeUpYposArray[i]}, parent: this.RobotContainer}));

            // var robot1_dance_ss 		=   ProjectX.SpriteSheets.Robot1_DanceSS,
                // robot1_dance	        =	robot1_dance_ss.spriteSheet.animations;
            let roboti_dance	        =	beablib.SpriteSheetPath["Robot"+(i+1)+"_Dance"];

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
            RobotDanceArray.push(Renderer.CreateSprite(beablib.CreateSpriteSheet(beablib.SpriteSheetPath["Robot"+(i+1)+"_Dance"]), "Robot"+(i+1)+"_Dance", {alpha:0, scale:1, position: {X:danceXposArray[i], Y:danceYposArray[i]}, parent: this.RobotContainer}));
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

        gsap.to( this.RobotContainer, {duration: 1, alpha:1,
            ease:Quad.easeOut, // Quad.easeOut probably deprecated!
            onUpdate:UpdateStage});

        for( var i=0; i<200; i++ ) {

            /* TweenMax.delayedCall(1 + (i*4), this.PlayRobot1Snooze , [], this );
            TweenMax.delayedCall(0.2 + (i*5), this.PlayRobot2Snooze , [], this );
            TweenMax.delayedCall(1.4 + (i*3.2), this.PlayRobot3Snooze , [], this );
            TweenMax.delayedCall(0.6 + (i*4.2), this.PlayRobot4Snooze , [], this );
            TweenMax.delayedCall(1.6 + (i*5), this.PlayRobot5Snooze , [], this );
            TweenMax.delayedCall(0.5 + (i*3.8), this.PlayRobot6Snooze , [], this ); */
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


        LoopInstance1.volume = 0; // ??????????????????????????????????
        LoopInstance2.volume = 0; // ??????????????????????????????????
        LoopInstance3.volume = 0; // ??????????????????????????????????
        LoopInstance4.volume = 0; // ??????????????????????????????????
        LoopInstance5.volume = 0; // ??????????????????????????????????
        LoopInstance6.volume = 0; // ??????????????????????????????????

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
            RobotAsleepArray[number].y = RobotAsleepArray[number].y - 60;
            RobotWakeUpArray[number].alpha = 1;

            gsap.delayedCall(1, function(){LoopInstanceArray[number].volume = 70;}); // ??????????????????????????????????


            ///// set this duration as a variable /////
            RobotWakeUpArray[number].gotoAndPlayDuration("loop", {duration: 1, stage: TheStage}); // ??????????????????????????????????

            // TweenMax.to(RobotWakeUpArray[number], 0.01, {alpha: 0, delay: 1, ease: Quad.easeOut, onUpdate: update});
            gsap.to(RobotWakeUpArray[number], {duration: 0.01, alpha: 0, delay: 1, ease: Quad.easeOut, onUpdate: update});
            // TweenMax.to(RobotDanceArray[number], 0.01, {alpha: 1, delay: 0.99, ease: Quad.easeOut, onUpdate: update});
            gsap.to(RobotDanceArray[number], {duration: 0.01, alpha: 0, delay: 1, ease: Quad.easeOut, onUpdate: update});

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

    CDeepSea.prototype.PlayBtnInit			=	function(  ) {

        var	activate_button	=	function()
        {
            this.PlayContainer.SetButtonMode( true, this.StartSeaLoop, this, true  );
        }.bind(this);

        this.PlayContainer.mouseover	=	function(){
            //for( var k=0; k < 4; k++ ) {
            gsap.to( this.PlayBtnGlow, { duration:0.2, alpha:0.78, onUpdate:UpdateStage } );
        }.bind(this);
        this.PlayContainer.mouseout	=	function(){
            //for( var j=0; j < 4; j++ ) {
            gsap.to( this.PlayBtnGlow, { duration:0.2, alpha:0, onUpdate:UpdateStage } );
        }.bind(this);

        this.PlayPrompt();

        //	Yep, so reveal the start button.
        gsap.to( this.PlayContainer, { duration:0.4, alpha:1, delay:0.3, onUpdate:UpdateStage, onComplete:activate_button} );

    };

    //--------------------------------------------------------------------------------

    CDeepSea.prototype.LightFlicker			=	function( array ) {

        for (var i = 0; i < 8; i++) {


            //Light1Array.push( light );
            //Light1Array[i].ScaleX1  = randScaleX1;
            //Light1Array[i].ScaleX2  = randScaleX2;
            //Light1Array[i].ScaleY1  = randScaleY;
            //Light1Array[i].Alpha1   = randAlpha1;
            //Light1Array[i].Alpha2   = randAlpha2;
            //Light1Array[i].FadeTime = randTime;

            var tl = gsap.timeline({onUpdate: UpdateStage, repeat: -1});
            tl.to(array[i], {
                scaleX: array[i].ScaleX2,
                alpha: array[i].Alpha1,
                duration: array[i].FadeTime,
                ease: "power2.inOut",
                onUpdate: UpdateStage
            });
            tl.to(array[i], {
                scaleX: array[i].ScaleX1,
                alpha: array[i].Alpha1,
                duration: array[i].FadeTime,
                ease: "power2.inOut",
                onUpdate: UpdateStage
            });
        }

    };

    //--------------------------------------------------------------------------------

    CDeepSea.prototype.PlayPrompt			=	function(  ) {

        this.PromptTL = gsap.timeline({ onUpdate:UpdateStage, repeat:-1, repeatDelay:5, delay:2 });
        this.PromptTL.to( this.PlayContainer, { scaleX:1.1, scaleY:1.1, y:-20, duration:0.3 });
        this.PromptTL.to( this.PlayContainer, { scaleX:1, scaleY:1, y:0, duration:0.3 });
        this.PromptTL.to( this.PlayContainer, { scaleX:1.1, scaleY:1.1, y:-20, duration:0.3 });
        this.PromptTL.to( this.PlayContainer, { scaleX:1, scaleY:1, y:0, duration:0.3 });
        this.PromptTL.to( this.PlayContainer, { scaleX:1.1, scaleY:1.1, y:-20, duration:0.3 });
        this.PromptTL.to( this.PlayContainer, { scaleX:1, scaleY:1, y:0, duration:0.3 });

    };


    //--------------------------------------------------------------------------------

    CDeepSea.prototype.PlayBtnClicked			=	function( array ) {


        //	Acknowledge the click...
        //Audio.Play( "ButtonClick" );
        //Audio.Play( "Intro" );

        this.PromptTL.kill();

        gsap.to( this.Logo, { y:-185, scaleX:0.725, scaleY:0.725, duration:1, onUpdate:UpdateStage });


        this.PrizeTL = gsap.timeline({ onUpdate:UpdateStage });
        this.PrizeTL.to( this.WinUpTo, { alpha:0, duration:0.6, onUpdate:UpdateStage });
        //this.PrizeTL.to( this.WinUpTo, { pixi:{blurX:60}, duration:0.5, onUpdate:UpdateStage }, "-=1");


        this.SelectTL = gsap.timeline({ onUpdate:UpdateStage, delay:0.7 });
        this.SelectTL.to( this.Panel1Container, { scaleX:0.94, scaleY:0.94, x:-320, duration:0.7, ease:"back.out(1)" });
        this.SelectTL.to( this.Panel1Container, { alpha:1, duration:0.3 }, "-=0.7");
        this.SelectTL.to( this.Panel2Container, { scaleX:0.94, scaleY:0.94, x:0, duration:0.7, ease:"back.out(1)" }, "-=0.5");
        this.SelectTL.to( this.Panel2Container, { alpha:1, duration:0.3 }, "-=0.7");
        this.SelectTL.to( this.Panel3Container, { scaleX:0.94, scaleY:0.94, x:320, duration:0.7, ease:"back.out(1)" }, "-=0.5");
        this.SelectTL.to( this.Panel3Container, { alpha:1, duration:0.3 }, "-=0.7");
        this.SelectTL.to( this.ChooseText, { alpha:1, duration:0.3, onComplete:this.ActivateSelectionBtns, callbackScope:this }, "-=0.3");


        this.PlayTL = gsap.timeline({ onUpdate:UpdateStage });
        this.PlayTL.to( this.PlayContainer, { scaleX:0.8, scaleY:0.8, duration:0.2, y:40 });
        this.PlayTL.to( this.PlayContainer, { scaleX:1.1, scaleY:1.1, duration:0.32, y:-20 });
        this.PlayTL.to( this.PlayContainer, { alpha:0, duration:0.2 }, "-=0.2");



        //Game.PlayClicked();


        /* REVIST WHEN GAME SELECTED
        var fadeIn = gsap.timeline({onUpdate: UpdateStage});
        fadeIn.to([this.PlayBtn, this.WinUpTo], { alpha:0, duration:0.4, ease: "power1.out"});
        fadeIn.to(this.Logo, { scaleX:0.3, scaleY:0.3, duration:1, y:-240, ease: "power2.out"}, "-=0.4");
        fadeIn.to(this.DemoContentContainer, { alpha:1, y:-240, scaleX:1, scaleY:1, duration:3, ease: "power1.inOut"}, "-=0.7");
        fadeIn.to(this.SeaFloorContainer, { y:350,  duration:3, ease: "power1.out"}, "-=3");
        fadeIn.to(this.OceanFloor, { y:144,  duration:3, ease: "power1.out"}, "-=3");
        fadeIn.to(this.Rocks, { y:-20,  duration:3, ease: "power1.out"}, "-=3");
        fadeIn.to(this.FrontRocks, { y:0,  duration:3, ease: "power1.out"}, "-=3");
        fadeIn.to(this.GameLayout, { alpha:1,  duration:0.75, ease: "power1.out"}, "+=1.5");



        this.SeaLoop1 = {
            stop: function () {
            }
        };
        this.SeaLoop1 = Audio.Play("UnderWater1", {Loop: true});
        */


    };

    //-----------------------------------------------------------------------------------------------

    CDeepSea.prototype.PanelClicked		=	function( event, data )
    {

        var numId       = data.numId;
        this.PanelChosen( numId );

    };

    //--------------------------------------------------------------------------------

    CDeepSea.prototype.PanelChosen			=	function( index ) {

        console.log("I clicked :: " + index);

        Audio.Play( "Reveal1" );
        Audio.Play( "WinBurn2" );


        //Game.FlameReveal();
        //gsap.delayedCall(0.3, function(){Audio.Play( "WinBurn2" )});
        //gsap.delayedCall(1.54, function(){Audio.Play( "spin1" )});

        this.PromptTL.kill();

        var pos = this.SelectionContainer.children.length - 1;
        this.SelectionContainer.setChildIndex( SelectionBtnArray[index], pos );

        this.ResetPromptTL = gsap.timeline({ onUpdate:UpdateStage });
        this.ResetPromptTL.to( [SelectionBtnArray[0], SelectionBtnArray[1], SelectionBtnArray[2]], { scaleX:0.94, scaleY:0.94, duration:0.1});

        SelectionBtnArray[0].SetButtonMode( false );
        SelectionBtnArray[1].SetButtonMode( false );
        SelectionBtnArray[2].SetButtonMode( false );
        //SelectionBtnArray[index].Glow.alpha = 0;

        var tempOrderArray = [];

        if( index === 0 ){ tempOrderArray = [{I:0, X:-175},{I:1, X:0},{I:2, X:175}]; };
        if( index === 1 ){ tempOrderArray = [{I:1, X:0},{I:0, X:-175},{I:2, X:175}]; };
        if( index === 2 ){ tempOrderArray = [{I:2, X:175},{I:0, X:-175},{I:1, X:0}]; };

        gsap.to( this.ChooseText, { alpha:0, duration:0.4, onUpdate:UpdateStage });

        this.SelectTL = gsap.timeline({ onUpdate:UpdateStage });
        this.SelectTL.to( SelectionBtnArray[tempOrderArray[0].I], { scaleX:1.1, scaleY:1.1,  duration:0.2});
        this.SelectTL.to( SelectionBtnArray[tempOrderArray[0].I], { scaleX:0.94, scaleY:0.94,  duration:0.2});
        this.SelectTL.to( SelectionBtnArray[tempOrderArray[0].I], { scaleX:1.1, scaleY:1.1,  duration:0.2});
        this.SelectTL.to( SelectionBtnArray[tempOrderArray[0].I], { scaleX:0.94, scaleY:0.94,  duration:0.2});
        this.SelectTL.to( SelectionBtnArray[tempOrderArray[0].I], { scaleX:1.1, scaleY:1.1,  duration:0.2});
        this.SelectTL.to( SelectionBtnArray[tempOrderArray[0].I], { scaleX:0, scaleY:0, alpha:0, x:tempOrderArray[0].X, pixi:{blur:30}, duration:0.34, onComplete:this.PanDownToSeaFloor, callbackScope:this });

        this.SelectTL2 = gsap.timeline({ onUpdate:UpdateStage });
        this.SelectTL2.to( [SelectionBtnArray[tempOrderArray[1].I], SelectionBtnArray[tempOrderArray[2].I]], { alpha:0.5, duration:0.2});
        this.SelectTL2.to( SelectionBtnArray[tempOrderArray[1].I], { scaleX:0, scaleY:0, alpha:0, x:tempOrderArray[1].X, pixi:{blur:30}, duration:0.4}, "+=0.4");
        this.SelectTL2.to( SelectionBtnArray[tempOrderArray[2].I], { scaleX:0, scaleY:0, alpha:0, x:tempOrderArray[2].X, pixi:{blur:30}, duration:0.4},"-=0.4");

        //gsap.to( this.Logo, { y:-258, scaleX:0.363, scaleY:0.363, duration:0.8, delay:1, onUpdate:UpdateStage });
        //gsap.to( this.Logo, { y:-450, duration:2, delay:1.4, ease: "power1.inOut", onUpdate:UpdateStage });
        //gsap.to( this.Logo, { alpha:0, duration:0.1, delay:1.8, onUpdate:UpdateStage });

        //Game.StartInit( index );

    };

    //--------------------------------------------------------------------------------

    CDeepSea.prototype.PanDownToSeaFloor			=	function(  ) {

        this.CircleLoop.kill();
        //this.SeaLoopX.kill();
        this.SeaLoopY.kill();

        gsap.to( this.Logo, { y:-620, duration:2, ease: "power1.inOut", onUpdate:UpdateStage });

        this.SquashTopLight = gsap.timeline({onUpdate: UpdateStage});
        this.SquashTopLight.to(this.SeaLight, {scaleY:0.6, y: -370, duration:3, ease: "power1.inOut"});
        this.SquashTopLight.to(this.SeaRefraction, {scaleY: 0.5, y: -630, duration:3, ease: "power1.inOut"}, "-=3");
        this.SquashTopLight.to(this.SurfaceLight, {scaleY: 0.7, y: -360, duration:3, ease: "power1.inOut"}, "-=3");
        this.SquashTopLight.to(this.AllLightsContainer, { y:-260, duration:3, ease: "power1.inOut"}, "-=3");


        this.ParallaxTL = gsap.timeline({onUpdate: UpdateStage});
        this.ParallaxTL.to(this.SandyBottomContainer, {scaleY:1, y:0, duration:3, ease: "power1.inOut"});
        this.ParallaxTL.to(this.SideRockContainer, {scaleY:1, y:0, duration:3, ease: "power1.inOut"}, "-=3");
        this.ParallaxTL.to([this.ConesRight, this.ConesLeft], {y:170, duration:3, ease: "power1.inOut"}, "-=3");
        this.ParallaxTL.to([this.PinkTubesRight, this.PinkTubesLeft], {y:130, duration:3, ease: "power1.inOut"}, "-=3");
        this.ParallaxTL.to([this.YellowRight, this.YellowLeft], {y:76, duration:3, ease: "power1.inOut"}, "-=3");
        this.ParallaxTL.to([this.PinkSlatesRight , this.PinkSlatesLeft ], {y:133, duration:3, ease: "power1.inOut"}, "-=3");
        this.ParallaxTL.to([this.BlueRight, this.BlueLeft], {y:258, duration:3, ease: "power1.inOut"}, "-=3");
        this.ParallaxTL.to(this.GameLayout, {y:-15, duration:3, ease: "power1.inOut"}, "-=3");


        //this.PinkSlatesRight    = Renderer.CreateSprite(Game.DeepSea2Sheet, "PinkSlates", {alpha:1, scale:1, position: {X:600, Y:133}, parent: this.SeaFloorContainer});
        //this.PinkSlatesLeft     = Renderer.CreateSprite(Game.DeepSea2Sheet, "PinkSlates", {alpha:1, scaleX:-1, scaleY:1, position: {X:-595, Y:133}, parent: this.SeaFloorContainer});

        //this.BlueRight    = Renderer.CreateSprite(Game.DeepSea2Sheet, "FrontBlue", {alpha:1, scale:1, position: {X:270, Y:258}, parent: this.SeaFloorContainer});
        //this.BlueLeft     = Renderer.CreateSprite(Game.DeepSea2Sheet, "FrontBlue", {alpha:1, scaleX:-1, scaleY:1, position: {X:-275, Y:258}, parent: this.SeaFloorContainer});





        this.CircleLoop2 = gsap.timeline({onUpdate: UpdateStage, repeat:-1, delay:3.1});
        this.CircleLoop2.to(this.SeaLight, {scaleX:0.9, scaleY:0.69, duration:1.2, ease: "power1.inOut"});
        this.CircleLoop2.to(this.SeaLight, {scaleX:1, scaleY:0.6, duration:1, ease: "power1.inOut"});

        /// SURFACE LIGHT LOOP ////
        //this.SeaLoopX = gsap.timeline({ paused:false, onUpdate: UpdateStage, repeat:-1});
        //this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.17, duration:1.7, ease: "power1.inOut"});
        //this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.11, duration:1.3, ease: "power1.inOut"});
        //this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.07, duration:2, ease: "power1.inOut"});
        //this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.2, duration:1.7, ease: "power1.inOut"});
        //this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.09, duration:1.5, ease: "power1.inOut"});
        //this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.12, duration:2.2, ease: "power1.inOut"});

        this.SeaLoopY = gsap.timeline({ paused:false, onUpdate: UpdateStage, repeat:-1, delay:3.1 });
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:0.83, duration:2, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:0.64, duration:1.1, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:0.9, duration:2.4, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:0.76, duration:1.4, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:0.8, duration:2.1, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:0.7, duration:1.2, ease: "power1.inOut"});

    };

    //--------------------------------------------------------------------------------

    CDeepSea.prototype.ActivateSelectionBtns			=	function(  ) {

        //// YOUR WADS AND PRIZES ////
        for (var i = 0; i < 3; i++) {

            //// PRIZES ////
            var dataObjPanel = new Object();
            dataObjPanel.numId = SelectionBtnArray[i].numId;

            var	panel_ref	=	SelectionBtnArray[i];

            panel_ref.SetButtonMode( true, this.PanelClicked, this, true, dataObjPanel);

            panel_ref.mouseover	=	function(){
                gsap.to( this.PanelGlow, { duration:0.2, alpha:0.7, onUpdate:UpdateStage });
                //gsap.to( this.Glow, { duration:0.2, alpha:1, onUpdate:UpdateStage });
            }.bind(panel_ref);
            panel_ref.mouseout	=	function(){
                gsap.to( this.PanelGlow, { duration:0.2, alpha:0, onUpdate:UpdateStage });
                //gsap.to( this.Glow, { duration:0.2, alpha:0, onUpdate:UpdateStage });
            }.bind(panel_ref);

        }

        this.SelectionPrompt();

    };

    //-----------------------------------------------------------------------------------------------

    CDeepSea.prototype.SelectionPrompt		=	function(  )
    {

        //gsap.delayedCall(0.2, function(){Audio.Play( "PromptSparkle2" )});

        this.PromptTL = gsap.timeline({ onUpdate:UpdateStage, repeat:-1, repeatDelay:5, delay:2 });
        this.PromptTL.to( SelectionBtnArray[0], { scaleX:0.98, scaleY:0.98, duration:0.22});
        this.PromptTL.to( SelectionBtnArray[0], { scaleX:0.94, scaleY:0.94, duration:0.22});
        this.PromptTL.to( SelectionBtnArray[1], { scaleX:0.98, scaleY:0.98, duration:0.22},"-=0.2");
        this.PromptTL.to( SelectionBtnArray[1], { scaleX:0.94, scaleY:0.94, duration:0.22});
        this.PromptTL.to( SelectionBtnArray[2], { scaleX:0.98, scaleY:0.98, duration:0.22},"-=0.2");
        this.PromptTL.to( SelectionBtnArray[2], { scaleX:0.94, scaleY:0.94, duration:0.22});


    };

    //-----------------------------------------------------------------------------------------------


    CDeepSea.prototype.Bubbles					=	function(  )
    {

        //var assetArray = [ "Ember1", "Ember1", "Ember3", "Ember3"];

        for (var i = 0; i < 100; i++) {

            var randAssetNum   = Math.floor(Math.random() * 4);

            var randColNum  = Math.floor(Math.random() * 4) + 1;

            var randStartX  = Math.floor(Math.random() * 1000) - 500;
            var randStartY  = Math.floor(Math.random() * 30) + 700;
            var randScale  = (Math.random() / 4 ) + 0.5;
            var randAlpha  = (Math.random() / 3 ) + 0.2;
            var randXMove   =  Math.floor(Math.random() * 24) + 10;

            var star = Renderer.CreateSprite(Game.DeepSeaSheet, "Bubble", {
                scaleX:randScale,
                scaleY:randScale,
                alpha:randAlpha,
                position: {X:randStartX , Y: 100 + randStartY},
                parent:this.DemoContentContainer
            });

            var randDrop   = (Math.floor(Math.random() * 40)) - 490;
            var randTime   = Math.random()  + 4.3;
            var randDelay  = (Math.random()  * 100);

            var tl = gsap.timeline({onUpdate: UpdateStage});
            tl.to(star, {

                y: randDrop,
                delay:randDelay,
                scaleX: randScale / 4,
                scaleY: randScale / 4,
                duration: randTime,
                ease: "none",
                onUpdate: UpdateStage
            });
            tl.to(star, {
                x:randStartX + randXMove,
                yoyo:true,
                repeat:5,
                ease: "none",
                duration: randTime/6,
                onUpdate: UpdateStage
            }, "-=4");
            //tl.to(confetti, {y: randYpos + randDrop, duration: 0.3, ease: "power.in", onUpdate: UpdateStage}, "-=0.7");
            tl.to(star, {alpha: 0, duration: 0.4, onUpdate: UpdateStage}, "-=1.4");

        }

    };


    //--------------------------------------------------------------------------------

    CDeepSea.prototype.DegreesToRadians			=	function( degree ) {

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

    Game.CDeepSea	=	CDeepSea;

    //-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------
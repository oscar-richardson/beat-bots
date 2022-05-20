(function() {
    ("use strict");

    var Audio = beablib.Audio,
        Game = beablib.Game,
        Renderer = beablib.Renderer;

    var ExitBtn,
        LOGO_SCALE = 1.22,
        LOGO_XPOS = 0,
        LOGO_YPOS = 0,
        RecordBtn,
        RecordModeOn = false,
        RevertBtn,
        RobotBtnArray = [],
        RobotSelected = 0,
        TheStage = null;

    //-----------------------------------------------------------------------------------------------

    var UpdateStage = function() {
        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------

    var CGUI = function(stage) {
        TheStage = stage;

        this.LogoContainer = Renderer.CreateContainer({ alpha: 1 });
        this.RobotBtnContainer = Renderer.CreateContainer({ alpha: 1 });
        this.ModeBtnContainer = Renderer.CreateContainer({ alpha: 1 });
        this.RecordingBtnContainer = Renderer.CreateContainer({ alpha: 1 });

        TheStage.addChild(this.LogoContainer);
        TheStage.addChild(this.RobotBtnContainer);
        TheStage.addChild(this.ModeBtnContainer);
        TheStage.addChild(this.RecordingBtnContainer);

        this.StartBtn = Renderer.CreateSprite(Game.BackgroundSheet, "Background", {
            alpha: 0.01,
            scale: 0.5,
            parent: this.LogoContainer,
        });

        var logo_anim_ss = beablib.SpriteSheetPath.BB_LogoSS,
            logo_anim = logo_anim_ss.spriteSheet.animations;

        logo_anim.static = [
            logo_anim["logoMC0001"][0],
            logo_anim["logoMC0001"][0],
            false,
            0.7,
        ];
        logo_anim.loop = [
            logo_anim["logoMC0001"][0],
            logo_anim["logoMC0080"][0],
            false,
            0.7,
        ];

        this.LogoAnimSpriteSheet = beablib.CreateSpriteSheet(logo_anim_ss);

        this.Logo = Renderer.CreateSprite(this.LogoAnimSpriteSheet, "loop", {
            alpha: 1,
            scale: 1,
            position: { X: 0, Y: 0 },
            parent: this.LogoContainer,
        });

        gsap.to(CGUI, { duration: 500, onUpdate: UpdateStage });

        for (var i = 0; i < 200; i++) {
            gsap.delayedCall(1 + i * 5, this.PlayLogoAnim, [], this);
        }

        this.StartBtn.SetButtonMode(true, this.StartClicked, this, true);

        beablib.SetRepositionable(this);
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.Reposition = function(scale) {
        this.LogoContainer.SetPosition(
            LOGO_XPOS * scale + TheStage.View.HalfWidth,
            LOGO_YPOS * scale + TheStage.View.HalfHeight
        );
        this.LogoContainer.SetScale(LOGO_SCALE * scale);

        this.RobotBtnContainer.SetPosition(
            TheStage.View.HalfWidth,
            TheStage.View.HalfHeight
        );
        this.RobotBtnContainer.SetScale(scale);

        this.ModeBtnContainer.SetPosition(
            TheStage.View.HalfWidth,
            TheStage.View.HalfHeight
        );
        this.ModeBtnContainer.SetScale(scale);

        this.RecordingBtnContainer.SetPosition(
            TheStage.View.HalfWidth,
            TheStage.View.HalfHeight
        );
        this.RecordingBtnContainer.SetScale(scale);

        UpdateStage();
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.PlayLogoAnim = function() {
        this.Logo.gotoAndPlayDuration("loop", { duration: 2.3, stage: TheStage });
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.StartClicked = function() {
        var update = function() {
            TheStage.SetDirty();
        }.bind(this);

        this.LogoContainer.removeChild(this.StartBtn);

        var half_width = TheStage.View.HalfWidth,
            half_height = TheStage.View.HalfHeight,
            scale = beablib.MainView.ScaleFactor;

        LOGO_XPOS = -280;
        LOGO_YPOS = -254;
        LOGO_SCALE = 0.72;

        gsap.to(this.LogoContainer, {
            duration: 1,
            x: LOGO_XPOS * scale + half_width,
            y: LOGO_YPOS * scale + half_height,
            scaleX: LOGO_SCALE * scale,
            scaleY: LOGO_SCALE * scale,
            ease: Quad.easeOut,
            onUpdate: update,
        });

        this.SetUpRobotBtns();
        this.SetUpModeBtns();
        this.SetUpRecordingBtns();

        Game.InitRobots();

        gsap.delayedCall(0.01, function() {
            Audio.Play("intro");
        });
        gsap.delayedCall(0.03, function() {
            Audio.Play("wakeUp2");
        });

        UpdateStage();
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.SetUpRobotBtns = function() {
        var BtnXposArray = [-225, 0, 225, -225, 0, 225];
        var BtnYposArray = [-120, -120, -140, 100, 100, 100];

        for (var i = 0; i < 6; i++) {
            var btn = Renderer.CreateSprite(Game.BackgroundSheet, "ShadowMC", {
                alpha: 0.01,
                position: { X: BtnXposArray[i], Y: BtnYposArray[i] },
                parent: this.RobotBtnContainer,
            });
            btn.numId = i;

            RobotBtnArray.push(btn);

            var dataObjSym = new Object();
            dataObjSym.numId = RobotBtnArray[i].numId;

            RobotBtnArray[i].SetButtonMode(
                true,
                this.RobotClicked,
                this,
                false,
                dataObjSym
            );
            RobotBtnArray[i].delayActive = false;
        }

        UpdateStage();
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.SetUpModeBtns = function() {
        ExitBtn = Renderer.CreateSprite(
            beablib.CreateSpriteSheet(beablib.SpriteSheetPath["Robot3_AsleepSS"]),
            "Robot3_Asleep001", {
                alpha: 1,
                position: { X: -480, Y: 0 },
                scale: 0.75,
                parent: this.ModeBtnContainer,
            }
        );
        var RecordModeBtn = Renderer.CreateSprite(
            beablib.CreateSpriteSheet(beablib.SpriteSheetPath["Robot5_AsleepSS"]),
            "Robot5_Asleep001", {
                alpha: 1,
                position: { X: 480, Y: 0 },
                scale: 0.75,
                parent: this.ModeBtnContainer,
            }
        );

        ExitBtn.SetButtonMode(true, this.ExitClicked, this, false);
        RecordModeBtn.SetButtonMode(true, this.RecordModeClicked, this, false);

        UpdateStage();
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.SetUpRecordingBtns = function() {
        RevertBtn = Renderer.CreateSprite(
            beablib.CreateSpriteSheet(beablib.SpriteSheetPath["Robot4_AsleepSS"]),
            "Robot4_Asleep001", {
                alpha: 1,
                position: { X: -350, Y: 225 },
                scale: 0.75,
                parent: this.RecordingBtnContainer,
            }
        );
        RecordBtn = Renderer.CreateSprite(
            beablib.CreateSpriteSheet(beablib.SpriteSheetPath["Robot6_AsleepSS"]),
            "Robot6_Asleep001", {
                alpha: 1,
                position: { X: 350, Y: 225 },
                scale: 0.75,
                parent: this.RecordingBtnContainer,
            }
        );

        RevertBtn.SetButtonMode(true, this.RevertClicked, this, false);
        RecordBtn.SetButtonMode(true, this.RecordClicked, this, false);

        UpdateStage();
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.RobotClicked = function(event, data) {
        var numId = data.numId;
        if (RecordModeOn) {
            RobotSelected = numId;
            Game.RobotShowWaveform(numId);
            console.log("Robot number " + (RobotSelected + 1) + " is selected");
        } else {
            if (!RobotBtnArray[numId].delayActive) {
                this.RobotAction(numId);
                RobotBtnArray[numId].delayActive = true;
            }
        }
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.RobotAction = function(numId) {
        Game.RobotClicked(numId);

        gsap.delayedCall(1.2, this.ReActivateRobot, [numId], this);
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.ReActivateRobot = function(numId) {
        RobotBtnArray[numId].delayActive = false;
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.ExitClicked = function(event) {
        if (RecordModeOn) {
            Game.RobotShowWaveform(false);
            RecordModeOn = false;
        }
        console.log("Record mode off");
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.RecordModeClicked = function(event) {
        if (!RecordModeOn) {
            Game.RobotShowWaveform(RobotSelected);
            RecordModeOn = true;
        }
        console.log("Record mode on");
        console.log("Robot number " + (RobotSelected + 1) + " is selected");
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.RevertClicked = function(event) {
        if (RecordModeOn) {
            Game.Revert(RobotSelected);
        }
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.RecordClicked = function(event) {
        if (RecordModeOn) {
            Game.Record(RobotSelected);
            for (var i = 0; i < 6; i++) {
                RobotBtnArray[i].SetButtonMode(false, this.RobotClicked, this, false);
            }
            ExitBtn.SetButtonMode(false, this.ExitClicked, this, false);
            RevertBtn.SetButtonMode(false, this.RevertClicked, this, false);
            RecordBtn.SetButtonMode(false, this.RecordClicked, this, false);
            console.log("Cued recording onto Robot number " + (RobotSelected + 1));
        }
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.prototype.ReActivateRecord = function(event) {
        for (var i = 0; i < 6; i++) {
            var dataObjSym = new Object();
            dataObjSym.numId = i;

            RobotBtnArray[i].SetButtonMode(
                true,
                this.RobotClicked,
                this,
                false,
                dataObjSym
            );
        }
        ExitBtn.SetButtonMode(true, this.ExitClicked, this, false);
        RevertBtn.SetButtonMode(true, this.RevertClicked, this, false);
        RecordBtn.SetButtonMode(true, this.RecordClicked, this, false);
    };

    //-----------------------------------------------------------------------------------------------

    CGUI.VERSION = "0_0_1";

    //-----------------------------------------------------------------------------------------------

    Game.CGUI = CGUI;
})();
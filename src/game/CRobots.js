var RobotWaveformArray;

(function() {
    ("use strict");

    var Game = beablib.Game,
        Renderer = beablib.Renderer;

    var TheStage = null;

    var AboutToRecord = false,
        Analyser,
        Arpeggio,
        Bass,
        Disco,
        Distort,
        Drumbox,
        DrumboxDuration,
        EffectsArray,
        FirstOffset = 0.2,
        Flang,
        FrequencyDataArray,
        HighPass,
        Limit = 0.05,
        LoopInstanceArray = [],
        LowPass,
        PingPong,
        Playhead,
        PositionArray = [],
        PreviousPosition = 0,
        Recorder,
        RecordingInProgress = false,
        Recordings = [false, false, false, false, false, false],
        Rectangle,
        RingMod,
        RobotAsleepArray = [],
        RobotDanceArray = [],
        RobotDancing = [false, false, false, false, false, false],
        RobotOrder = [3, 1, 2, 0, 4, 5],
        RobotSelected = 0,
        RobotShadowArray = [],
        RobotSleepAudioArray = [
            "wakeUp2",
            "wakeUp4",
            "wakeUp2",
            "wakeUp5",
            "wakeUp2",
            "wakeUp4",
        ],
        RobotWakeUpArray = [],
        RobotWakeUpAudioArray = [
            "wakeUp1",
            "wakeUp7",
            "wakeUp3",
            "wakeUp8",
            "wakeUp9",
            "wakeUp6",
        ],
        Strings,
        SubsequentOffset = 0.15,
        Tinkle;

    //-----------------------------------------------------------------------------------------------

    var UpdateStage = function() {
        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------

    var PlayRecordings = function() {
        for (var i = 0; i < 6; i++) {
            if (Recordings[i]) {
                LoopInstanceArray[i].play(
                    0,
                    Math.min(Drumbox.position / 1000, Limit) + RecordingInProgress &&
                    i == RobotSelected ?
                    FirstOffset :
                    SubsequentOffset
                );
            }
        }
    };

    //-----------------------------------------------------------------------------------------------

    var CRobots = function(stage) {
        TheStage = stage;

        this.RobotContainer = Renderer.CreateContainer({ alpha: 0 });
        this.WaveformContainer = Renderer.CreateContainer({ alpha: 0 });

        TheStage.addChild(this.RobotContainer);
        TheStage.addChild(this.WaveformContainer);

        var shadowXposArray = [-219, 10, 219, -225, 7, 225];
        var shadowYposArray = [-90, -90, -90, 128, 128, 128];
        var asleepXposArray = [-225, 0, 225, -225, 10, 225];
        var asleepYposArray = [68, -148, -164, -113, 60, 92];
        var wakeUpXposArray = [-228, -3, 228, -225, 3, 207.5];
        var wakeUpYposArray = [30, -186, -202, -143, 23, 28];
        var danceXposArray = [-222, 3, 208, -227, 1, 243];
        var danceYposArray = [32, -184, -202, -145, 44, 34];
        var danceDurationArray = [0.7, 0.46, 0.5, 0.5, 0.5, 0.6];

        for (var i = 0; i < 6; i++) {
            var shadow = Renderer.CreateSprite(Game.BackgroundSheet, "ShadowMC", {
                alpha: 0.66,
                scaleX: 0.81,
                scaleY: 0.18,
                position: { X: shadowXposArray[i], Y: shadowYposArray[i] },
                parent: this.RobotContainer,
            });

            RobotShadowArray.push(shadow);
        }

        var self = this;

        RobotOrder.forEach(function(i) {
            var robot_asleep_ss =
                beablib.SpriteSheetPath["Robot" + (i + 1) + "_AsleepSS"],
                robot_asleep = robot_asleep_ss.spriteSheet.animations;

            robot_asleep.loop = [
                robot_asleep["Robot" + (i + 1) + "_Asleep001"][0],
                robot_asleep["Robot" + (i + 1) + "_Asleep0051"][0],
                false,
                0.7,
            ];

            self.RobotAsleepSpriteSheet = beablib.CreateSpriteSheet(robot_asleep_ss);

            RobotAsleepArray.push(
                Renderer.CreateSprite(self.RobotAsleepSpriteSheet, "loop", {
                    alpha: 1,
                    scale: 0.75,
                    position: { X: asleepXposArray[i], Y: asleepYposArray[i] },
                    parent: self.RobotContainer,
                })
            );

            var robot_wakeup_ss =
                beablib.SpriteSheetPath["Robot" + (i + 1) + "_WakeUpSS"],
                robot_wakeup = robot_wakeup_ss.spriteSheet.animations;

            if (i == 2) {
                robot_wakeup.loop = [
                    robot_wakeup["Robot" + (i + 1) + "_WakeUp001"][0],
                    robot_wakeup["Robot" + (i + 1) + "_WakeUp0051"][0],
                    false,
                    0.7,
                ];
            } else {
                robot_wakeup.loop = [
                    robot_wakeup["Robot" + (i + 1) + "_WakeUp001"][0],
                    robot_wakeup["Robot" + (i + 1) + "_WakeUp0026"][0],
                    false,
                    0.7,
                ];
            }

            self.RobotWakeUpSpriteSheet = beablib.CreateSpriteSheet(robot_wakeup_ss);

            RobotWakeUpArray.push(
                Renderer.CreateSprite(self.RobotWakeUpSpriteSheet, "loop", {
                    alpha: 0,
                    scale: 0.75,
                    position: { X: wakeUpXposArray[i], Y: wakeUpYposArray[i] },
                    parent: self.RobotContainer,
                })
            );

            var robot_dance_ss =
                beablib.SpriteSheetPath["Robot" + (i + 1) + "_DanceSS"],
                robot_dance = robot_dance_ss.spriteSheet.animations;

            if (i == 2 || i == 4) {
                robot_dance.loop = [
                    robot_dance["Robot" + (i + 1) + "_Dance001"][0],
                    robot_dance["Robot" + (i + 1) + "_Dance0026"][0],
                    "loop",
                    danceDurationArray[i],
                ];
            } else {
                robot_dance.loop = [
                    robot_dance["Robot" + (i + 1) + "_Dance001"][0],
                    robot_dance["Robot" + (i + 1) + "_Dance0051"][0],
                    "loop",
                    danceDurationArray[i],
                ];
            }

            self.RobotDanceSpriteSheet = beablib.CreateSpriteSheet(robot_dance_ss);

            RobotDanceArray.push(
                Renderer.CreateSprite(self.RobotDanceSpriteSheet, "loop", {
                    alpha: 0,
                    scale: 0.75,
                    position: { X: danceXposArray[i], Y: danceYposArray[i] },
                    parent: self.RobotContainer,
                })
            );
        });

        Rectangle = new PIXI.Graphics();
        Rectangle.beginFill(404055);
        Rectangle.drawRect(-224, 200, 448, 75);
        Playhead = new PIXI.Graphics();
        RobotWaveformArray = [
            new PIXI.Graphics(),
            new PIXI.Graphics(),
            new PIXI.Graphics(),
            new PIXI.Graphics(),
            new PIXI.Graphics(),
            new PIXI.Graphics(),
        ];

        this.WaveformContainer.addChild(Rectangle);
        for (var i = 0; i < RobotWaveformArray.length; i++) {
            RobotWaveformArray[i].alpha = 0;
            this.WaveformContainer.addChild(RobotWaveformArray[i]);
        }
        this.WaveformContainer.addChild(Playhead);

        var update = function() {
            TheStage.SetDirty();
        }.bind(this);

        gsap.to(CRobots, { duration: 6000, onUpdate: update });

        beablib.SetRepositionable(this);
    };

    //-----------------------------------------------------------------------------------------------

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then(function(stream) {
                Recorder = new MediaRecorder(stream);
                let chunks = [];
                const Context = new AudioContext();
                Analyser = Context.createAnalyser();
                FrequencyDataArray = new Uint8Array(Analyser.frequencyBinCount);
                const Source = Context.createMediaStreamSource(stream);
                Source.connect(Analyser);
                Recorder.onstart = function(e) {
                    Drumbox.position = 0;
                    Arpeggio.position = 0;
                    Strings.position = 0;
                    Bass.position = 0;
                    Tinkle.position = 0;
                    Disco.position = 0;
                    PlayRecordings();
                    LoopInstanceArray[RobotSelected].volume = 0;
                    LoopInstanceArray[RobotSelected] = beablib.Audio.Play("");
                    RobotWaveformArray[RobotSelected].clear();
                    RecordingInProgress = true;
                    AboutToRecord = false;
                    console.log(
                        "Started recording onto Robot number " + (RobotSelected + 1)
                    );
                };
                Recorder.ondataavailable = function(e) {
                    chunks.push(e.data);
                };
                Recorder.onstop = function(e) {
                    LoopInstanceArray[RobotSelected] = new Pizzicato.Sound(
                        window.URL.createObjectURL(
                            new Blob(chunks, { type: "audio/ogg; codecs=opus" })
                        ),
                        function() {
                            LoopInstanceArray[RobotSelected].addEffect(
                                EffectsArray[RobotSelected]
                            );
                            if (!RobotDancing[RobotSelected]) {
                                LoopInstanceArray[RobotSelected].volume = 0;
                            }
                            Recordings[RobotSelected] = true;
                            PlayRecordings();
                            RecordingInProgress = false;
                            Game.ReActivateRecord();
                        }
                    );
                    chunks = [];
                    console.log(
                        "Finished recording onto Robot number " + (RobotSelected + 1)
                    );
                };
                CRobots.prototype.Record = function(number) {
                    RobotSelected = number;
                    AboutToRecord = true;
                };
            })
            .catch(function(err) {
                CRobots.prototype.Record = function(number) {};
                console.log("The following error occured: " + err);
            });
    } else {
        CRobots.prototype.Record = function(number) {};
        console.log("getUserMedia not supported on your browser!");
    }

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.OnLoop = function() {
        if (AboutToRecord) {
            Recorder.start();
        } else if (RecordingInProgress) {
            Recorder.stop();
        } else {
            PlayRecordings();
        }
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.Revert = function(number) {
        LoopInstanceArray[number].volume = 0;
        LoopInstanceArray[number] = [
            Drumbox,
            Arpeggio,
            Strings,
            Bass,
            Tinkle,
            Disco,
        ][number];
        if (RobotDancing[number]) {
            LoopInstanceArray[number].volume = 1;
        }
        RobotWaveformArray[number].clear();
        Recordings[number] = false;
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.RobotShowWaveform = function(number) {
        for (var i = 0; i < RobotWaveformArray.length; i++) {
            RobotWaveformArray[i].alpha = 0;
        }
        if (Number.isInteger(number)) {
            RobotWaveformArray[number].alpha = 1;
        }
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.Reposition = function(scale) {
        this.RobotContainer.SetPosition(
            TheStage.View.HalfWidth,
            TheStage.View.HalfHeight
        );
        this.RobotContainer.SetScale(scale);

        this.WaveformContainer.SetPosition(
            TheStage.View.HalfWidth,
            TheStage.View.HalfHeight
        );
        this.WaveformContainer.SetScale(scale);

        UpdateStage();
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.InitRobots = function() {
        var update = function() {
            TheStage.SetDirty();
        }.bind(this);

        gsap.to(this.RobotContainer, {
            duration: 1,
            alpha: 1,
            ease: Quad.easeOut,
            onUpdate: update,
        });

        gsap.to(this.WaveformContainer, {
            duration: 1,
            alpha: 1,
            ease: Quad.easeOut,
            onUpdate: update,
        });

        for (var i = 0; i < 200; i++) {
            gsap.delayedCall(1 + i * 4, this.PlayRobot1Snooze, [], this);
            gsap.delayedCall(0.2 + i * 5, this.PlayRobot2Snooze, [], this);
            gsap.delayedCall(1.4 + i * 3.2, this.PlayRobot3Snooze, [], this);
            gsap.delayedCall(0.6 + i * 4.2, this.PlayRobot4Snooze, [], this);
            gsap.delayedCall(1.6 + i * 5, this.PlayRobot5Snooze, [], this);
            gsap.delayedCall(0.5 + i * 3.8, this.PlayRobot6Snooze, [], this);
        }

        Drumbox = beablib.Audio.Play("Drumbox", { Loop: true });
        Arpeggio = beablib.Audio.Play("Arpeggio", { Loop: true });
        Strings = beablib.Audio.Play("Strings", { Loop: true });
        Bass = beablib.Audio.Play("Bass", { Loop: true });
        Tinkle = beablib.Audio.Play("Tinkle", { Loop: true });
        Disco = beablib.Audio.Play("Disco", { Loop: true });

        Drumbox.volume = 0;
        Arpeggio.volume = 0;
        Strings.volume = 0;
        Bass.volume = 0;
        Tinkle.volume = 0;
        Disco.volume = 0;

        LoopInstanceArray = [Drumbox, Arpeggio, Strings, Bass, Tinkle, Disco];

        Drumbox.on("loop", this.OnLoop);

        HighPass = new Pizzicato.Effects.HighPassFilter({
            frequency: 350,
            peak: 1,
        });
        RingMod = new Pizzicato.Effects.RingModulator({
            speed: 30,
            distortion: 1,
            mix: 0.5,
        });
        Flang = new Pizzicato.Effects.Flanger({
            time: 0.45,
            speed: 0.2,
            depth: 0.1,
            feedback: 0.1,
            mix: 0.5,
        });
        LowPass = new Pizzicato.Effects.LowPassFilter({
            frequency: 350,
            peak: 1,
        });
        PingPong = new Pizzicato.Effects.PingPongDelay({
            feedback: 0.5,
            time: 0.3,
            mix: 0.5,
        });
        Distort = new Pizzicato.Effects.Distortion({
            gain: 0.5,
        });

        EffectsArray = [HighPass, RingMod, Flang, LowPass, PingPong, Distort];

        DrumboxDuration = Drumbox.duration;

        for (var i = 1; i <= 224; i++) {
            PositionArray.push((i * DrumboxDuration) / 224);
        }

        function Tick() {
            function DrawPlayhead(color) {
                Playhead.clear();
                Playhead.beginFill(color);
                Playhead.drawRect(-224 + Position * 2, 200, 2, 75);
            }
            let DrumboxPosition = Drumbox.position;
            let Position;
            for (var i = 0; i < 224; i++) {
                if (DrumboxPosition <= PositionArray[i]) {
                    Position = i;
                    break;
                }
            }
            if (Position != PreviousPosition && !isNaN(Position)) {
                if (AboutToRecord) {
                    DrawPlayhead(0xffa500);
                } else if (RecordingInProgress) {
                    DrawPlayhead(0xff0000);
                    Analyser.getByteFrequencyData(FrequencyDataArray);
                    const BarHeight = gsap.utils.mapRange(
                        0,
                        255,
                        5,
                        75 * 0.8
                    )(Math.max(...FrequencyDataArray));
                    RobotWaveformArray[RobotSelected].beginFill(0xffffff);
                    RobotWaveformArray[RobotSelected].drawRect(-224 + Position * 2,
                        237.5 - BarHeight / 2,
                        1.5,
                        BarHeight
                    );
                } else {
                    DrawPlayhead(0x00ff00);
                }
                PreviousPosition = Position;
            }
        }

        gsap.ticker.add(Tick);
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.RobotClicked = function(number) {
        if (!RobotDancing[number]) {
            var update = function() {
                TheStage.SetDirty();
            }.bind(this);

            beablib.Audio.Play(RobotWakeUpAudioArray[number]);

            RobotDancing[number] = true;

            RobotAsleepArray[number].alpha = 0;
            RobotAsleepArray[number].position.y =
                RobotAsleepArray[number].position.y - 60;
            RobotWakeUpArray[number].alpha = 1;

            gsap.delayedCall(1, function() {
                LoopInstanceArray[number].volume = 1;
            });

            RobotWakeUpArray[number].gotoAndPlayDuration("loop", {
                duration: 1,
                stage: TheStage,
            });

            gsap.to(RobotWakeUpArray[number], {
                duration: 0.01,
                alpha: 0,
                delay: 1,
                ease: Quad.easeOut,
                onUpdate: update,
            });
            gsap.to(RobotDanceArray[number], {
                duration: 0.01,
                alpha: 1,
                delay: 0.99,
                ease: Quad.easeOut,
                onUpdate: update,
            });

            RobotDanceArray[number].play();

            UpdateStage();

            return;
        }

        if (RobotDancing[number]) {
            var update = function() {
                TheStage.SetDirty();
            }.bind(this);

            gsap.delayedCall(0.3, function() {
                beablib.Audio.Play("thudBounce");
            });

            gsap.delayedCall(0.01, function() {
                beablib.Audio.Play(RobotSleepAudioArray[number]);
            });

            gsap.delayedCall(0.01, function() {
                LoopInstanceArray[number].volume = 0;
            });

            RobotDancing[number] = false;

            RobotAsleepArray[number].alpha = 1;
            RobotDanceArray[number].alpha = 0;

            gsap.to(RobotAsleepArray[number], {
                duration: 0.5,
                y: RobotAsleepArray[number].y + 60,
                delay: 0.1,
                ease: Bounce.easeOut,
                onUpdate: update,
            });

            UpdateStage();

            return;
        }
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot1Snooze = function() {
        RobotAsleepArray[RobotOrder.indexOf(0)].gotoAndPlayDuration("loop", {
            duration: 2,
            stage: TheStage,
        });
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot2Snooze = function() {
        RobotAsleepArray[RobotOrder.indexOf(1)].gotoAndPlayDuration("loop", {
            duration: 2,
            stage: TheStage,
        });
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot3Snooze = function() {
        RobotAsleepArray[RobotOrder.indexOf(2)].gotoAndPlayDuration("loop", {
            duration: 2,
            stage: TheStage,
        });
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot4Snooze = function() {
        RobotAsleepArray[RobotOrder.indexOf(3)].gotoAndPlayDuration("loop", {
            duration: 2,
            stage: TheStage,
        });
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot5Snooze = function() {
        RobotAsleepArray[RobotOrder.indexOf(4)].gotoAndPlayDuration("loop", {
            duration: 2,
            stage: TheStage,
        });
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.prototype.PlayRobot6Snooze = function() {
        RobotAsleepArray[RobotOrder.indexOf(5)].gotoAndPlayDuration("loop", {
            duration: 2,
            stage: TheStage,
        });
    };

    //-----------------------------------------------------------------------------------------------

    CRobots.VERSION = "0_0_1";

    //-----------------------------------------------------------------------------------------------

    Game.CRobots = CRobots;
})();
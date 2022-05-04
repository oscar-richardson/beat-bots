//-----------------------------------------------------------------------------------------------

(function () {
  "use strict";

  //-----------------------------------------------------------------------------------------------
  //	Const-ish.
  //-----------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------
  //	Private statics.
  //-----------------------------------------------------------------------------------------------

  //	Beablib object aliases.
  var Game = beablib.Game,
    Renderer = beablib.Renderer;

  //	Data.
  var TheStage = null;

  //  Game data.
  var AboutToRecord = false,
    Arpegio,
    Bass,
    Disco,
    Drumbox,
    FirstOffset = 0,
    Limit = 0.05,
    LoopInstanceArray = [],
    Offset = 0,
    PreviousMinimPosition = 0,
    Rec,
    RecordingInProgress = false,
    Recordings = [false, false, false, false, false, false],
    RobotAsleepArray = [],
    RobotDanceArray = [],
    RobotDancing = [false, false, false, false, false, false],
    RobotOrder = [3, 1, 2, 0, 4, 5],
    RobotSelected,
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
    Tinkle;

  //	Functions.
  var UpdateStage = function () {
    TheStage.SetDirty();
  };

  var GetRecordings = function () {
    for (var i = 0; i < 6; i++) {
      if (Recordings[i]) {
        LoopInstanceArray[i] = new Howl({
          src: [Recordings[i]],
          format: ["wav"],
        });
        LoopInstanceArray[i].play();
        if (RecordingInProgress) {
          LoopInstanceArray[i].seek(
            Math.min(Drumbox.position / 1000, Limit) + FirstOffset
          );
        } else {
          LoopInstanceArray[i].seek(
            Math.min(Drumbox.position / 1000, Limit) + Offset
          );
        }
        if (!RobotDancing[i]) {
          LoopInstanceArray[i].volume(0);
        }
      }
    }
  };

  //-----------------------------------------------------------------------------------------------
  //	Object definition.
  //-----------------------------------------------------------------------------------------------

  var CRobots = function (stage) {
    //	Make a note of the stage.
    TheStage = stage;

    this.RobotContainer = Renderer.CreateContainer({ alpha: 0 });

    TheStage.addChild(this.RobotContainer);

    var shadowXposArray = [-244, 10, 244, -250, 7, 250];
    var shadowYposArray = [-10, -10, -10, 268, 268, 268];
    var asleepXposArray = [-250, 0, 250, -250, 10, 250];
    var asleepYposArray = [178, -98, -114, -63, 170, 217];
    var wakeUpXposArray = [-253, -3, 253, -250, 3, 222.5];
    var wakeUpYposArray = [140, -136, -152, -93, 133, 138];
    var danceXposArray = [-247, 3, 233, -252, 1, 268];
    var danceYposArray = [142, -134, -152, -95, 154, 144];
    var danceDurationArray = [0.7, 0.46, 0.5, 0.5, 0.5, 0.6];

    ////////////
    for (var i = 0; i < 6; i++) {
      var shadow = Renderer.CreateSprite(Game.BackgroundSheet, "ShadowMC", {
        alpha: 0.66,
        scaleX: 1.08,
        scaleY: 0.18,
        position: { X: shadowXposArray[i], Y: shadowYposArray[i] },
        parent: this.RobotContainer,
      });

      RobotShadowArray.push(shadow);
    }

    var self = this;

    RobotOrder.forEach(function (i) {
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
          scale: 1,
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
          scale: 1,
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
          scale: 1,
          position: { X: danceXposArray[i], Y: danceYposArray[i] },
          parent: self.RobotContainer,
        })
      );
    });

    var update = function () {
      TheStage.SetDirty();
    }.bind(this);

    gsap.to(CRobots, { duration: 6000, onUpdate: update });

    //	...& make sure we're repositionable.
    beablib.SetRepositionable(this);
  };

  //-----------------------------------------------------------------------------------------------
  //	Public members.
  //-----------------------------------------------------------------------------------------------

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        let chunks = [];
        Rec = new MediaRecorder(stream);
        Rec.onstart = function (e) {
          Drumbox.position = 0;
          Arpegio.position = 0;
          Strings.position = 0;
          Bass.position = 0;
          Tinkle.position = 0;
          Disco.position = 0;
          for (var i = 0; i < 6; i++) {
            if (Recordings[i]) {
              LoopInstanceArray[i].seek(0);
            }
          }
          console.log(
            "Started recording onto Robot number " + (RobotSelected + 1)
          );
        };
        Rec.ondataavailable = function (e) {
          chunks.push(e.data);
        };
        Rec.onstop = function (e) {
          const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
          chunks = [];
          const audioURL = window.URL.createObjectURL(blob);
          Recordings[RobotSelected] = audioURL;
          GetRecordings();
          RecordingInProgress = false;
          console.log("Stopped recording");
          // console.log(audioURL);
        };
        CRobots.prototype.Record = function (number) {
          RobotSelected = number;
          AboutToRecord = true;
        };
      })
      .catch(function (err) {
        CRobots.prototype.Record = function (number) {};
        console.log("The following error occured: " + err);
      });
  } else {
    CRobots.prototype.Record = function (number) {};
    console.log("getUserMedia not supported on your browser!");
  }

  //-----------------------------------------------------------------------------------------------

  CRobots.prototype.OnLoop = function () {
    if (RecordingInProgress) {
      Rec.stop();
      Game.ReActivateRecord();
    } else {
      GetRecordings();
      if (AboutToRecord) {
        Rec.start();
        Recordings[RobotSelected] = false;
        if (LoopInstanceArray[RobotSelected].hasOwnProperty("setVolume")) {
          LoopInstanceArray[RobotSelected].volume = 0;
        } else {
          LoopInstanceArray[RobotSelected].volume(0);
        }
        LoopInstanceArray[RobotSelected] = beablib.Audio.Play("");
        AboutToRecord = false;
        RecordingInProgress = true;
      }
    }

    console.log("Loop!");
  };

  //-----------------------------------------------------------------------------------------------

  CRobots.prototype.Revert = function (number) {
    if (LoopInstanceArray[number].hasOwnProperty("setVolume")) {
      LoopInstanceArray[number].volume = 0;
    } else {
      LoopInstanceArray[number].volume(0);
    }
    LoopInstanceArray[number] = [
      Drumbox,
      Arpegio,
      Strings,
      Bass,
      Tinkle,
      Disco,
    ][number];
    if (RobotDancing[number]) {
      LoopInstanceArray[number].volume = 1;
    }
    Recordings[number] = false;
  };

  //-----------------------------------------------------------------------------------------------

  CRobots.prototype.Reposition = function (scale) {
    this.RobotContainer.SetPosition(
      TheStage.View.HalfWidth,
      TheStage.View.HalfHeight
    );
    this.RobotContainer.SetScale(scale);

    UpdateStage();
  };

  //-----------------------------------------------------------------------------------------------

  CRobots.prototype.InitRobots = function () {
    var update = function () {
      TheStage.SetDirty();
    }.bind(this);

    gsap.to(this.RobotContainer, {
      duration: 1,
      alpha: 1,
      ease: Quad.easeOut, // Quad.easeOut probably deprecated!
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
    Arpegio = beablib.Audio.Play("Arpegio", { Loop: true });
    Strings = beablib.Audio.Play("Strings", { Loop: true });
    Bass = beablib.Audio.Play("Bass", { Loop: true });
    Tinkle = beablib.Audio.Play("Tinkle", { Loop: true });
    Disco = beablib.Audio.Play("Disco", { Loop: true });

    Drumbox.volume = 0;
    Arpegio.volume = 0;
    Strings.volume = 0;
    Bass.volume = 0;
    Tinkle.volume = 0;
    Disco.volume = 0;

    LoopInstanceArray = [Drumbox, Arpegio, Strings, Bass, Tinkle, Disco];

    Drumbox.on("loop", this.OnLoop);

    gsap.ticker.add(tick);

    let MinimDuration = Drumbox.duration / 16;
    let MinimArray = [];

    for (var i = 1; i <= 16; i++) {
      MinimArray.push(i * MinimDuration);
    }

    function tick() {
      let MinimPosition;
      if (AboutToRecord) {
        for (var i = 0; i < 16; i++) {
          if (Drumbox.position < MinimArray[i]) {
            MinimPosition = i;
            break;
          }
        }
        if (MinimPosition != PreviousMinimPosition && !isNaN(MinimPosition)) {
          console.log("Recording starting in: " + (16 - MinimPosition));
          PreviousMinimPosition = MinimPosition;
        }
      }
    }
  };

  //-----------------------------------------------------------------------------------------------

  CRobots.prototype.RobotClicked = function (number) {
    if (!RobotDancing[number]) {
      var update = function () {
        TheStage.SetDirty();
      }.bind(this);

      beablib.Audio.Play(RobotWakeUpAudioArray[number]);

      RobotDancing[number] = true;

      // console.log("CRobots number :: " + number);

      RobotAsleepArray[number].alpha = 0;
      RobotAsleepArray[number].position.y =
        RobotAsleepArray[number].position.y - 60;
      RobotWakeUpArray[number].alpha = 1;

      gsap.delayedCall(1, function () {
        if (LoopInstanceArray[number].hasOwnProperty("setVolume")) {
          LoopInstanceArray[number].volume = 1;
        } else {
          LoopInstanceArray[number].volume(1);
        }
      });

      ///// set this duration as a variable /////
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
      var update = function () {
        TheStage.SetDirty();
      }.bind(this);

      gsap.delayedCall(0.3, function () {
        beablib.Audio.Play("thudBounce");
      });

      gsap.delayedCall(0.01, function () {
        beablib.Audio.Play(RobotSleepAudioArray[number]);
      });

      gsap.delayedCall(0.01, function () {
        if (LoopInstanceArray[number].hasOwnProperty("setVolume")) {
          LoopInstanceArray[number].volume = 0;
        } else {
          LoopInstanceArray[number].volume(0);
        }
      });

      RobotDancing[number] = false;

      // console.log("CRobots number :: " + number);

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

  CRobots.prototype.PlayRobot1Snooze = function () {
    RobotAsleepArray[RobotOrder.indexOf(0)].gotoAndPlayDuration("loop", {
      duration: 2,
      stage: TheStage,
    });
  };

  //-----------------------------------------------------------------------------------------------

  CRobots.prototype.PlayRobot2Snooze = function () {
    RobotAsleepArray[RobotOrder.indexOf(1)].gotoAndPlayDuration("loop", {
      duration: 2,
      stage: TheStage,
    });
  };

  //-----------------------------------------------------------------------------------------------

  CRobots.prototype.PlayRobot3Snooze = function () {
    RobotAsleepArray[RobotOrder.indexOf(2)].gotoAndPlayDuration("loop", {
      duration: 2,
      stage: TheStage,
    });
  };

  //-----------------------------------------------------------------------------------------------

  CRobots.prototype.PlayRobot4Snooze = function () {
    RobotAsleepArray[RobotOrder.indexOf(3)].gotoAndPlayDuration("loop", {
      duration: 2,
      stage: TheStage,
    });
  };

  //-----------------------------------------------------------------------------------------------

  CRobots.prototype.PlayRobot5Snooze = function () {
    RobotAsleepArray[RobotOrder.indexOf(4)].gotoAndPlayDuration("loop", {
      duration: 2,
      stage: TheStage,
    });
  };

  //-----------------------------------------------------------------------------------------------

  CRobots.prototype.PlayRobot6Snooze = function () {
    RobotAsleepArray[RobotOrder.indexOf(5)].gotoAndPlayDuration("loop", {
      duration: 2,
      stage: TheStage,
    });
  };

  //-----------------------------------------------------------------------------------------------
  //	Static variables.
  //-----------------------------------------------------------------------------------------------

  CRobots.VERSION = "0_0_1";

  //-----------------------------------------------------------------------------------------------
  //	Public statics.
  //-----------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------
  //	Namespace path.
  //-----------------------------------------------------------------------------------------------

  Game.CRobots = CRobots;

  //-----------------------------------------------------------------------------------------------
})();

//-----------------------------------------------------------------------------------------------

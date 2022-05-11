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
    CONFIG = {
      duration: 0.1,
      fps: 50,
    },
    Disco,
    Distort,
    Drumbox,
    EffectsArray,
    FirstOffset = 0.2,
    Flang,
    graphics,
    HighPass,
    Limit = 0.05,
    LowPass,
    LoopInstanceArray = [],
    PingPong,
    Playhead,
    SubsequentOffset = 0.15,
    PreviousMinimPosition = 0,
    Rec,
    RecordingInProgress = false,
    Recordings = [false, false, false, false, false, false],
    RingMod,
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
    Tinkle,
    vis;

  //	Functions.
  var UpdateStage = function () {
    TheStage.SetDirty();
  };

  var PlayRecordings = function () {
    for (var i = 0; i < 6; i++) {
      if (Recordings[i]) {
        LoopInstanceArray[i].play(
          0,
          Math.min(Drumbox.position / 1000, Limit) + RecordingInProgress &&
            i == RobotSelected
            ? FirstOffset
            : SubsequentOffset
        );
      }
    }
  };

  var ANALYSE = (stream) => {
    const CONTEXT = new AudioContext();
    const ANALYSER = CONTEXT.createAnalyser();
    const SOURCE = CONTEXT.createMediaStreamSource(stream);
    const DATA_ARR = new Uint8Array(ANALYSER.frequencyBinCount);
    SOURCE.connect(ANALYSER);
    let timeline = gsap.timeline();
    const BARS = [];
    const BAR_WIDTH = 2;
    const PIXELS_PER_SECOND = 100;
    const VIZ_CONFIG = {
      bar: {
        width: 2,
        min_height: 0.04,
        max_height: 0.8,
        gap: 1,
      },
      pixelsPerSecond: PIXELS_PER_SECOND,
      barDelay: 1 / CONFIG.fps,
    };
    const drawBar = ({ x, size }) => {
      const POINT_X = x - BAR_WIDTH / 2;
      const POINT_Y = 237.5 - size / 2;
      vis.beginFill(0xffffff);
      vis.drawRect(POINT_X, POINT_Y, BAR_WIDTH, size);
    };
    const drawBars = () => {
      vis.clear();
      for (const BAR of BARS) {
        drawBar(BAR);
      }
    };
    const REPORT = () => {
      if (false) {
        ANALYSER.getByteFrequencyData(DATA_ARR);
        const VOLUME = Math.floor((Math.max(...DATA_ARR) / 255) * 100);

        const BAR = {
          x: 225 + VIZ_CONFIG.bar.width / 2,
          size: gsap.utils.mapRange(0, 100, 5, 75 * 0.8)(VOLUME),
        };
        BARS.push(BAR);
        timeline.to(
          BAR,
          {
            x: `-=${455 + VIZ_CONFIG.bar.width}`,
            ease: "none",
            duration:
              (455 + VIZ_CONFIG.bar.width) /
              ((VIZ_CONFIG.bar.width + VIZ_CONFIG.bar.gap) * CONFIG.fps),
          },
          BARS.length * VIZ_CONFIG.barDelay
        );
        drawBars();
      }
    };
    gsap.ticker.add(REPORT);
  };

  //-----------------------------------------------------------------------------------------------
  //	Object definition.
  //-----------------------------------------------------------------------------------------------

  var CRobots = function (stage) {
    //	Make a note of the stage.
    TheStage = stage;

    this.RobotContainer = Renderer.CreateContainer({ alpha: 0 });

    this.WaveformContainer = Renderer.CreateContainer({ alpha: 0 });

    TheStage.addChild(this.RobotContainer);
    TheStage.addChild(this.WaveformContainer);

    let x = 0.75;
    let a = 50;
    let b = 30;
    let c = 60;
    let d = 15;
    let e = 10;
    let f = 25;

    var shadowXposArray = [-244 + f, 10, 244 - f, -250 + f, 7, 250 - f];
    var shadowYposArray = [
      -10 - a - b,
      -10 - a - b,
      -10 - a - b,
      268 - a - b - c,
      268 - a - b - c,
      268 - a - b - c,
    ];
    var asleepXposArray = [-250 + f, 0, 250 - f, -250 + f, 10, 250 - f];
    var asleepYposArray = [
      178 - a - c,
      -98 - a,
      -114 - a,
      -63 - a,
      170 - a - c,
      217 - a - c - d,
    ];
    var wakeUpXposArray = [-253 + f, -3, 253 - f, -250 + f, 3, 222.5 + e - f];
    var wakeUpYposArray = [
      140 - a - c,
      -136 - a,
      -152 - a,
      -93 - a,
      133 - a - c,
      138 - a - c,
    ];
    var danceXposArray = [-247 + f, 3, 233 - f, -252 + f, 1, 268 - f];
    var danceYposArray = [
      142 - a - c,
      -134 - a,
      -152 - a,
      -95 - a,
      154 - a - c,
      144 - a - c,
    ];
    var danceDurationArray = [0.7, 0.46, 0.5, 0.5, 0.5, 0.6];

    ////////////
    for (var i = 0; i < 6; i++) {
      var shadow = Renderer.CreateSprite(Game.BackgroundSheet, "ShadowMC", {
        alpha: 0.66,
        scaleX: 1.08 * x,
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
          scale: x,
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
          scale: x,
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
          scale: x,
          position: { X: danceXposArray[i], Y: danceYposArray[i] },
          parent: self.RobotContainer,
        })
      );
    });

    graphics = new PIXI.Graphics();
    graphics.beginFill(404055);
    graphics.drawRect(-225, 200, 450, 75);

    vis = new PIXI.Graphics();
    Playhead = new PIXI.Graphics();

    this.WaveformContainer.addChild(graphics);
    this.WaveformContainer.addChild(vis);
    this.WaveformContainer.addChild(Playhead);

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
          PlayRecordings();
          LoopInstanceArray[RobotSelected].volume = 0;
          LoopInstanceArray[RobotSelected] = beablib.Audio.Play("");
          RecordingInProgress = true;
          const STREAM = Rec.stream;
          ANALYSE(STREAM);
          console.log(
            "Started recording onto Robot number " + (RobotSelected + 1)
          );
        };
        Rec.ondataavailable = function (e) {
          chunks.push(e.data);
        };
        Rec.onstop = function (e) {
          LoopInstanceArray[RobotSelected] = new Pizzicato.Sound(
            window.URL.createObjectURL(
              new Blob(chunks, { type: "audio/ogg; codecs=opus" })
            ),
            function () {
              LoopInstanceArray[RobotSelected].addEffect(
                EffectsArray[RobotSelected]
              );
              if (!RobotDancing[RobotSelected]) {
                LoopInstanceArray[RobotSelected].volume = 0;
              }
              Recordings[RobotSelected] = true;
              PlayRecordings();
              RecordingInProgress = false;
            }
          );
          chunks = [];
          console.log("Stopped recording");
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
    } else if (AboutToRecord) {
      Rec.start();
      AboutToRecord = false;
    } else {
      PlayRecordings();
    }

    console.warn("LOOP");
  };

  //-----------------------------------------------------------------------------------------------

  CRobots.prototype.Revert = function (number) {
    LoopInstanceArray[number].volume = 0;
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

    this.WaveformContainer.SetPosition(
      TheStage.View.HalfWidth,
      TheStage.View.HalfHeight
    );
    this.WaveformContainer.SetScale(scale);

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

    gsap.to(this.WaveformContainer, {
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

    gsap.ticker.fps(CONFIG.fps);
    gsap.ticker.add(tick);

    let DrumboxDuration = Drumbox.duration;
    let MinimDuration = DrumboxDuration / 16;
    let MinimArray = [];

    for (var i = 1; i <= 16; i++) {
      MinimArray.push(i * MinimDuration);
    }

    function tick() {
      Playhead.clear();
      Playhead.beginFill(0xffffff);
      let DrumboxPosition = Drumbox.position;
      Playhead.drawRect(
        -225 + (450 * DrumboxPosition) / DrumboxDuration,
        200,
        2,
        75
      );
      let MinimPosition;
      if (AboutToRecord) {
        for (var i = 0; i < 16; i++) {
          if (DrumboxPosition < MinimArray[i]) {
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
        LoopInstanceArray[number].volume = 1;
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
        LoopInstanceArray[number].volume = 0;
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

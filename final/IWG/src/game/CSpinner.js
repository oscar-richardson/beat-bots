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
    var Game = beablib.Game,
        Renderer = beablib.Renderer;

    //	Data.
    var TheStage = null;

    //  Game data.
    var LetterArray = [],
        OffSetCount = 0,
        SegTime = 0.02;

    //	Functions.
    var UpdateStage = function () {
        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------
    //	Object definition.
    //-----------------------------------------------------------------------------------------------

    var CSpinner = function (stage) {
        //	Make a note of the stage.
        TheStage = stage;

        this.DemoContainer = Renderer.CreateContainer();
        this.NeonContainer = Renderer.CreateContainer( {scale:0.66, parent:this.DemoContainer});

        //////////////////////////////////////////////////



        //////////////////////////////////////////////////



        this.SpinnerContainer = Renderer.CreateContainer({
            scale: 0.8,
            position: {X: -150, Y: 70},
            parent: this.DemoContainer
        });

        this.SpinnerBase = Renderer.CreateSprite(Game.GUISheet, "SpinnerBase", {
            alpha: 1,
            scaleX: 0.864,
            scaleY: 0.864,
            position: {X: -8, Y: -20},
            parent: this.SpinnerContainer
        });

        this.SpinBtn = Renderer.CreateSprite(Game.GUISheet, "SpinBtn", {
            alpha: 1,
            scaleX: 1,
            scaleY: 1,
            position: {X: -150, Y: -160},
            parent: this.DemoContainer
        });


        var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


        this.LetPosArray = [

            {X: 280, Y: -50, S: -30, SX: 0, SY: 0.8},
            {X: 265, Y: -39, S: -20, SX: 0.2, SY: 0.9},
            {X: 212, Y: -23, S: -10, SX: 0.6, SY: 0.94},
            {X: 120, Y: -10, S: -5, SX: 0.8, SY: 0.98},
            {X: 0, Y: -4, S: 0, SX: 1, SY: 1},
            {X: -120, Y: -10, S: 5, SX: 0.8, SY: 0.98},
            {X: -212, Y: -23, S: 10, SX: 0.6, SY: 0.94},
            {X: -265, Y: -39, S: 20, SX: 0.2, SY: 0.9},
            {X: -280, Y: -50, S: 30, SX: 0, SY: 0.8},
            {X: -280, Y: -50, S: 30, SX: 0.5, SY: 0.8},
        ];


        for (var i = 0; i < 88; i++) {

            var letter;
            if (i < 9) {
                letter = Renderer.CreateSprite(Game.GUISheet, "Letter_" + alphabetArray[i], {
                    alpha: 1,
                    scaleX: this.LetPosArray[i].SX,
                    scaleY: this.LetPosArray[i].SY,
                    position: {X: this.LetPosArray[i].X, Y: this.LetPosArray[i].Y},
                    //pixi:{skewY:25},
                    parent: this.SpinnerContainer
                });
            } else {
                letter = Renderer.CreateSprite(Game.GUISheet, "Letter_" + alphabetArray[i], {
                    alpha: 1,
                    scaleX: this.LetPosArray[8].SX,
                    scaleY: this.LetPosArray[8].SY,
                    position: {X: this.LetPosArray[8].X, Y: this.LetPosArray[8].Y},
                    //pixi:{skewY:25},
                    parent: this.SpinnerContainer
                });

            }

            LetterArray.push(letter);

        }




        var setTL = gsap.timeline({onUpdate: UpdateStage});
        setTL.set(LetterArray[0], {pixi: {skewY: -30}});
        setTL.set(LetterArray[1], {pixi: {skewY: -20}});
        setTL.set(LetterArray[2], {pixi: {skewY: -10}});
        setTL.set(LetterArray[3], {pixi: {skewY: -5}});
        setTL.set(LetterArray[4], {pixi: {skewY: 0}});
        setTL.set(LetterArray[5], {pixi: {skewY: 5}});
        setTL.set(LetterArray[6], {pixi: {skewY: 10}});
        setTL.set(LetterArray[7], {pixi: {skewY: 20}});
        setTL.set(LetterArray[8], {pixi: {skewY: 30}});


        //gsap.delayedCall( 2, this.NextSpin, [], this );

        this.SpinBtn.SetButtonMode(true, this.NextSpin, this, true);

        console.log("CSPINNER");

        this.SetUpNeon();

        TheStage.addChild(this.DemoContainer);


        //	Make sure we're repositionable.
        beablib.SetRepositionable(this);
    };

    //-----------------------------------------------------------------------------------------------
    //	Public members.
    //-----------------------------------------------------------------------------------------------


    CSpinner.prototype.Reposition = function (scale) {

        this.DemoContainer.SetPosition(TheStage.View.HalfWidth, TheStage.View.HalfHeight);
        this.DemoContainer.SetScale(scale);

        UpdateStage();
    };

    //-----------------------------------------------------------------------------------------------

    CSpinner.prototype.NextSpin = function () {

        var timeOffset;

        if (OffSetCount < 50) {
            timeOffset = 0.03;
        } else {
            var timeOffset = Power4.easeOut((OffSetCount - 50) / 200);
        }


        for (var i = 8; i > -1; i--) {

            var curveTL = gsap.timeline({onUpdate: UpdateStage});
            curveTL.to(
                LetterArray[i + OffSetCount], {
                    x: this.LetPosArray[i].X,
                    y: this.LetPosArray[i].Y,
                    pixi: {skewY: this.LetPosArray[i].S},
                    scaleX: this.LetPosArray[i].SX,
                    scaleY: this.LetPosArray[i].SY,
                    duration: timeOffset,
                    ease: "none",
                    //onComplete:this.NextSpin,
                    //callbackScope:this
                });

        }

        ++OffSetCount;
        SegTime = SegTime + (SegTime * 0.05);


        //console.log("timeOffset :: " + timeOffset);

        if (OffSetCount < 70) {
            gsap.delayedCall(timeOffset, this.NextSpin, [], this);
        }

    };

    //-----------------------------------------------------------------------------------------------

    CSpinner.prototype.SetUpNeon = function () {

        this.WordArray1 = ["A", "T", "T", "R", "A", "C", "T"];
        this.WordArray2 = ["B", "R", "O", "N", "Z", "E"];
        this.WordArray3 = ["C", "O", "A", "S", "T"];
        this.WordArray4 = ["S", "Q", "U", "A", "D"];
        this.WordArray5 = ["C", "E", "L", "L"];
        this.WordArray6 = ["N", "O", "U", "N"];
        this.WordArray7 = ["L", "A", "P"];
        this.WordArray8 = ["F", "E", "W"];

        this.AllWordsArray = [this.WordArray1, this.WordArray2, this.WordArray3, this.WordArray4, this.WordArray5, this.WordArray6, this.WordArray7, this.WordArray8];

        this.AllNeonLetterArray = [];

        this.WinBorderArray = [];
        this.WinBorderGlowArray = [];
        this.WinLetterArray = [];
        this.WinLetterGlowArray = [];



        this.WordPosArray = [{X:70, Y:-220}, {X:133, Y:-157},{X:196, Y:-94}, {X:196, Y:-31},{X:259, Y:32}, {X:259, Y:95},{X:322, Y:158}, {X:322, Y:221} ];

        this.NeonContainer = Renderer.CreateContainer( {scale:1, parent:this.DemoContainer});


        for (var i = 0; i < 8; i++) {

            var neonArray = [];

            for (var j = 0; j < this.AllWordsArray[i].length; j++) {

                var borderOff = Renderer.CreateSprite(Game.GUISheet, "Neoff_Border", {alpha: 0.5, scale:0.33, position: {X:this.WordPosArray[i].X + (63 * j), Y:this.WordPosArray[i].Y}, parent: this.NeonContainer});
                var letterOff = Renderer.CreateSprite(Game.GUISheet, "Neoff_" + this.AllWordsArray[i][j], {alpha:0.5, scale:0.33, position: {X:this.WordPosArray[i].X + (63 * j), Y:this.WordPosArray[i].Y}, parent: this.NeonContainer});

                var neonOn    = Renderer.CreateContainer( { alpha:0, scale:1, parent:this.DemoContainer});
                var winOn    = Renderer.CreateContainer( { alpha:1, scale:1, parent:this.DemoContainer});

                var borderOn  = Renderer.CreateSprite(Game.GUISheet, "Neon_Border", {alpha: 1, scale:0.33, position: {X:this.WordPosArray[i].X + 2 +  (63 * j), Y:this.WordPosArray[i].Y + 2}, parent:neonOn});
                var letterOn  = Renderer.CreateSprite(Game.GUISheet, "Neon_" + this.AllWordsArray[i][j], {alpha: 1, scale:0.33, position: {X:this.WordPosArray[i].X + (63 * j), Y:this.WordPosArray[i].Y}, parent:neonOn});

                neonArray.push(neonOn);

                if(i === 4){

                    console.log("i === 4");

                    var whiteBorderOff  = Renderer.CreateSprite(Game.GUISheet, "WhiteGlow", {alpha: 0, scale:0.33, position: {X:this.WordPosArray[i].X + 2 +  (63 * j), Y:this.WordPosArray[i].Y + 2}, parent:winOn});
                    var whiteBorderOn   = Renderer.CreateSprite(Game.GUISheet, "WhiteBorder", {alpha: 0, scale:0.33, position: {X:this.WordPosArray[i].X + 2 +  (63 * j), Y:this.WordPosArray[i].Y + 2}, parent:winOn});
                    var whiteOff        = Renderer.CreateSprite(Game.GUISheet, "White_" + this.AllWordsArray[i][j], {alpha: 0, scale:0.33, position: {X:this.WordPosArray[i].X + (63 * j), Y:this.WordPosArray[i].Y}, parent:winOn});
                    var whiteOn         = Renderer.CreateSprite(Game.GUISheet, "Glow_" + this.AllWordsArray[i][j], {alpha: 0, scale:0.33, position: {X:this.WordPosArray[i].X + (63 * j), Y:this.WordPosArray[i].Y}, parent:winOn});

                    this.WinBorderArray.push(whiteBorderOff);
                    this.WinBorderGlowArray.push(whiteBorderOn);
                    this.WinLetterArray.push(whiteOff);
                    this.WinLetterGlowArray.push(whiteOn);

                }

            }

            this.AllNeonLetterArray.push(neonArray);
        };


        gsap.delayedCall( 2, this.MarkOffNeonLetter, ["A"], this );
        gsap.delayedCall( 5, this.MarkOffNeonLetter, ["L"], this );
        gsap.delayedCall( 8, this.MarkOffNeonLetter, ["E"], this );
        gsap.delayedCall( 11, this.MarkOffNeonLetter, ["N"], this );
        gsap.delayedCall( 14, this.MarkOffNeonLetter, ["Q"], this );
        gsap.delayedCall( 16, this.MarkOffNeonLetter, ["R"], this );
        gsap.delayedCall( 19, this.MarkOffNeonLetter, ["C"], this );
        gsap.delayedCall( 21.4, this.MarkOffWinLetter, [], this );


        //var neonTL = gsap.timeline({onUpdate: UpdateStage, repeat:-1, repeatDelay:2, delay:1});
        //neonTL.to(this.Neon_A, {  ease: "rough({ template: none.out, strength:5, points: 50, taper: 'none', randomize:true, clamp: true})",  alpha:1,  duration:1} );
        //neonTL.to(this.Neon_A, {  alpha:0,  duration:0.2}, "+=0.8" );

        //gsap.to(this.Neon_A, {duration:2, alpha:1, ease: "rough({strength: 3, points:50, template: strong.inOut, taper: both, randomize: false})", onUpdate: UpdateStage });


    };

    //--------------------------------------------------------------------------------

    CSpinner.prototype.MarkOffNeonLetter = function ( letter) {

        var matchCount = 0;

        for (var i = 0; i < 8; i++) {

            for (var j = 0; j < this.AllWordsArray[i].length; j++) {

                if(letter === this.AllWordsArray[i][j]){

                    var neonTL = gsap.timeline({onUpdate: UpdateStage, delay:0.4 * matchCount });
                    neonTL.to(this.AllNeonLetterArray[i][j], {  ease: "rough({ template: sine.out, strength:2, points:50, taper: 'none', randomize:true, clamp: true})",  alpha:1,  duration:0.8} );
                    //neonTL.to(this.AllWordsArray[i][j].NeonOn, {  alpha:0,  duration:0.2}, "+=0.8" );



                    ++matchCount;

                }


                /*
                var borderOff = Renderer.CreateSprite(Game.GUISheet, "Neoff_Border", {alpha: 1, scale:0.33, position: {X:this.WordPosArray[i].X + (63 * j), Y:this.WordPosArray[i].Y}, parent: this.NeonContainer});
                var letterOff = Renderer.CreateSprite(Game.GUISheet, "Neoff_" + this.AllWordsArray[i][j], {alpha: 1, scale:0.33, position: {X:this.WordPosArray[i].X + (63 * j), Y:this.WordPosArray[i].Y}, parent: this.NeonContainer});

                var neonOn    = Renderer.CreateContainer( {scale:1, parent:this.DemoContainer});

                var borderOn  = Renderer.CreateSprite(Game.GUISheet, "Neon_Border", {alpha: 0, scale:0.33, position: {X:this.WordPosArray[i].X + (63 * j), Y:this.WordPosArray[i].Y}, parent:neonOn});
                var letterOn  = Renderer.CreateSprite(Game.GUISheet, "Neon_" + this.AllWordsArray[i][j], {alpha: 0, scale:0.33, position: {X:this.WordPosArray[i].X + (63 * j), Y:this.WordPosArray[i].Y}, parent:neonOn});

                this.AllWordsArray[i][j].NeonOn = neonOn;
                */

            }
        };





        //gsap.to(this.Neon_A, {duration:2, alpha:1, ease: "rough({strength: 3, points:50, template: strong.inOut, taper: both, randomize: false})", onUpdate: UpdateStage });


    };


    //--------------------------------------------------------------------------------

    CSpinner.prototype.MarkOffWinLetter = function ( ) {

            for (var j = 0; j < this.AllWordsArray[4].length; j++) {

                var fadeTL = gsap.timeline({onUpdate: UpdateStage, delay:0.1 * j });
                fadeTL.to(this.AllNeonLetterArray[4][j], {  ease:"none",  alpha:0,  duration:0.1} );

                var borderTL = gsap.timeline({onUpdate: UpdateStage, delay:0.1 * j });
                borderTL.to(this.WinBorderArray[j], {  ease:"none",  alpha:0.5,  duration:0.1} );

                var borderGlowTL = gsap.timeline({onUpdate: UpdateStage, delay:0.1 * j });
                borderTL.to(this.WinLetterArray[j], {  ease:"none",  alpha:0.5,  duration:0.1} );

                var neonTL = gsap.timeline({onUpdate: UpdateStage, delay:0.1 * j });
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "rough({ template: sine.out, strength:2, points:50, taper: 'none', randomize:true, clamp: true})", yoyo:true, repeat:3, repeatDelay:0.3, alpha:1,  duration:0.8} );
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:0,  duration:0.2} );
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:1,  duration:0.2},"+=0.4" );
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:0,  duration:0.2} );
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:1,  duration:0.2},"+=0.4" );
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:0,  duration:0.2} );
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:1,  duration:0.2},"+=0.4" );
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:0,  duration:0.2} );
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:1,  duration:0.2},"+=0.4" );
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:0,  duration:0.2} );
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:1,  duration:0.2},"+=0.4" );
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:0,  duration:0.2} );
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:1,  duration:0.2},"+=0.4" );
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:0,  duration:0.2} );
                neonTL.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:1,  duration:0.2},"+=0.4" );

                var neonTL2 = gsap.timeline({onUpdate: UpdateStage, delay:9 });
                neonTL2.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:0,  duration:0.2} );
                neonTL2.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:1,  duration:0.2},"+=0.4" );
                neonTL2.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:0,  duration:0.2},"+=0.4" );
                neonTL2.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:1,  duration:0.2},"+=0.4" );
                neonTL2.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:0,  duration:0.2},"+=0.4" );
                neonTL2.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:1,  duration:0.2},"+=0.4" );
                neonTL2.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:0,  duration:0.2},"+=0.4" );
                neonTL2.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:1,  duration:0.2},"+=0.4" );
                neonTL2.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:0,  duration:0.2},"+=0.4" );
                neonTL2.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:1,  duration:0.2},"+=0.4" );
                neonTL2.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:0,  duration:0.2},"+=0.4" );
                neonTL2.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:1,  duration:0.2},"+=0.4" );
                neonTL2.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:0,  duration:0.2},"+=0.4" );
                neonTL2.to([this.WinBorderGlowArray[j], this.WinLetterGlowArray[j] ], {  ease: "none", alpha:1,  duration:0.2},"+=0.4" );


            }


    };












    //--------------------------------------------------------------------------------

    CSpinner.prototype.DegreesToRadians			=	function( degree ) {

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

    Game.CSpinner	=	CSpinner;

    //-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------
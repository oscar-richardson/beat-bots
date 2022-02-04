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
    //var Game = beablib.Game,
       // Renderer = beablib.Renderer;

    var	Audio		=	beablib.Audio,
        Game		=	beablib.Game,
        Renderer	=	beablib.Renderer;

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

    var CTronAnims = function (stage) {
        //	Make a note of the stage.
        TheStage = stage;

        this.DemoContainer = Renderer.CreateContainer();





        this.TronBG = Renderer.CreateSprite(Game.GUISheet, "TronBG", {
            alpha: 1,
            position: {X:0, Y:0},
            parent: this.DemoContainer
        });



        /*
        TweenLite.defaultEase = Power0.easeNone;


        var shape1 = "M490.1,280.649 c0,44.459-36.041,80.5-80.5,80.5s-80.5-36.041-80.5-80.5s36.041-80.5,80.5-80.5S490.1,236.19,490.1,280.649z";

        var shape2 = "M148.802,244.876 c2.737-36.735,16.107-69.079,40.099-97.061  c27.038-31.596,60.924-47.386,101.629-47.386c15.481,0,38.483,2.447,69.024,7.287c30.541,4.886,53.533,7.278,69.033,7.278 c23.693,0,57.868,8.847,102.526,26.477c7.914,3.009,17.471,11.239,28.701,24.59c6.381,7.886,16.256,19.769,29.616,35.568  c3.036,2.139,6.998,5.316,11.865,9.595c4.859,4.223,8.194,6.063,9.997,5.456c0.616-1.84,2.149-4.4,4.578-7.735 c1.214-1.225,1.962-1.832,2.261-1.832c0.935,0.607,1.831,1.215,2.747,1.832c0.906,0.616,1.205,2.419,0.906,5.456 c-0.616,5.474-0.906,7.138-0.906,4.998c-0.327,3.056-0.757,5.008-1.373,5.952c-3.952,6.671-5.485,11.847-4.55,15.472c0.916,3.325,3.765,8.669,8.642,15.958c4.868,7.287,7.586,12.761,8.193,16.405c-0.299,2.728-0.43,7.119-0.43,13.211l-4.568,11.379 c0,8.512,9.865,23.114,29.616,43.78c9.436,4.223,14.117,18.826,14.117,43.714c0,19.47-16.089,29.167-48.273,29.167c-4.26,0-8.81-0.13-13.678-0.467c-3.335-1.196-8.203-2.56-14.575-4.074c-7.586-0.934-12.761-3.494-15.48-7.773c-4.877-6.95-12.781-13.509-23.711-19.581c-1.823-0.878-4.485-4.223-7.979-10.016c-3.503-5.774-6.615-9.418-9.333-10.949c-2.719-1.495-6.68-1.813-11.856-0.878c-8.81,1.494-13.677,2.261-14.574,2.261c-2.139,0-5.25-0.598-9.343-1.831 c-4.11-1.215-7.054-1.831-8.893-1.831c-2.112,9.735-2.589,19.152-1.364,28.252c0.298,2.448,1.831,4.428,4.559,5.923 c4.27,3.046,6.531,4.709,6.849,5.045c2.718,2.111,5.615,5.605,8.642,10.445c0.616,1.849-0.523,4.952-3.419,9.342c-2.887,4.41-5.223,7.008-7.063,7.736c-1.813,0.785-5.765,1.178-11.847,1.178c-8.82,0-12.295,0.131-10.464,0.43 c-12.145-1.831-18.984-2.878-20.516-3.158c-7.587-1.532-14.126-3.943-19.582-7.305c-2.756-1.813-5.913-10.333-9.557-25.524c-3.681-16.406-6.717-26.272-9.137-29.635c-0.598-0.896-1.355-1.326-2.261-1.326c-1.533,0-4.045,1.494-7.53,4.559 c-3.494,2.99-5.858,4.652-7.054,5.008c-4.242,17.9-6.4,26.402-6.4,25.468c0,7.007,1.972,12.892,5.924,17.77 c3.943,4.858,8.063,9.567,12.323,14.107c5.157,5.774,7.736,10.782,7.736,15.042c0,2.41-0.748,4.521-2.28,6.372c-6.381,7.885-17.022,11.847-31.905,11.847c-16.713,0-27.644-2.28-32.792-6.839c-6.699-5.774-10.949-11.865-12.762-18.199 c-0.298-1.533-1.055-6.091-2.28-13.678c-0.607-4.578-1.98-7.287-4.082-8.184c-6.101-0.916-13.687-2.578-22.778-5.007c-1.841-1.215-3.811-4.26-5.942-9.118c-3.933-9.399-6.83-15.789-8.661-19.134c-9.128-4.56-23.702-9.698-43.761-15.453 c-0.916,1.831-1.345,4.373-1.345,7.718c3.335,4.26,8.343,10.8,15.032,19.581c5.466,7.288,8.203,14.295,8.203,20.965 c0,12.781-8.203,19.134-24.609,19.134c-12.453,0-20.955-0.878-25.523-2.709c-6.671-2.728-12.295-9.136-16.854-19.134c-7.596-16.742-11.847-26.159-12.762-28.27c-4.868-11.231-8.204-21.133-10.006-29.653c-1.233-6.055-3.064-15.35-5.485-27.804c-2.121-10.296-5.456-18.358-10.015-24.132C155.332,279.36,147.578,260.665,148.802,244.876z";

        // Data for the start and end paths
        var morphData = [shape1, shape2];

        // Run it through the MorphSVGPlugin
        MorphSVGPlugin.pathFilter(morphData);

        // Object to animate
        var path = {
            d: morphData[0]
        };

        TheStage.fillStyle = "#ccc";

        TweenMax.to(path, 2, {
            d: morphData[1],
            ease: Power4.easeInOut,
            onUpdate: render,
            repeat: -1,
            repeatDelay: 0.5,
            yoyo: true
        });

        function render() {
            TheStage.clearRect(0, 0, vw, vh);
            TheStage.fill(new Path2D(path.d));
        }

        */

        /*
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
        */

        console.log("TRON ANIMS");

        TheStage.addChild(this.DemoContainer);


        //	Make sure we're repositionable.
        beablib.SetRepositionable(this);
    };

    //-----------------------------------------------------------------------------------------------
    //	Public members.
    //-----------------------------------------------------------------------------------------------


    CTronAnims.prototype.Reposition = function (scale) {

        this.DemoContainer.SetPosition(TheStage.View.HalfWidth, TheStage.View.HalfHeight);
        this.DemoContainer.SetScale(scale);

        UpdateStage();
    };

    //-----------------------------------------------------------------------------------------------

    CTronAnims.prototype.NextSpin = function () {

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

    CTronAnims.prototype.SetUpNeon = function () {

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

    CTronAnims.prototype.MarkOffNeonLetter = function ( letter) {

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

    CTronAnims.prototype.MarkOffWinLetter = function ( ) {

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

    CTronAnims.prototype.DegreesToRadians			=	function( degree ) {

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

    Game.CTronAnims	=	CTronAnims;

    //-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------
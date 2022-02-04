//-----------------------------------------------------------------------------------------------

(function()
{
    "use strict";

    //-----------------------------------------------------------------------------------------------
    //	Const-ish.
    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------
    //	Private statics.
    //-----------------------------------------------------------------------------------------------

    //	Beablib object aliases.
    var	Game		=	beablib.Game,
        Renderer	=	beablib.Renderer;

    //	Data.
    var	TheStage	=	null;

    //  Game data.
    var Dice_anim_ss,
        Dice_anim,
        Dice_anim2_ss,
        Dice_anim2,
        DiceSpin1Array       =  [],
        DiceStaticArray      =  [],
        DiceGlowArray        =  [],
        TempYahtzeePZArray   =  [],
        PzSpinArray          =  [],
        PzStaticGlowArray    =  [],
        PzStaticArray        =  [],

        BounceEase1 =  "M0,0 C0,0 0.03865,0.04334 0.05459,0.07261 0.07494,0.10996 0.08683,0.13739 0.0981,0.18008 0.15586,0.39883 0.20037,0.70552 0.2356,0.75818 0.24882,0.77793 0.31109,0.63885 0.36218,0.57469 0.38138,0.55058 0.40112,0.53545 0.42543,0.51977 0.4376,0.51192 0.45471,0.50464 0.46565,0.50795 0.48033,0.51238 0.4953,0.52885 0.50815,0.54475 0.52928,0.57093 0.54261,0.59094 0.55819,0.62255 0.60783,0.72328 0.64915,0.85312 0.67897,0.89142 0.68605,0.90051 0.71243,0.85649 0.73247,0.8464 0.7447,0.84025 0.76251,0.83886 0.77501,0.84308 0.79109,0.84851 0.80642,0.86078 0.81919,0.87567 0.84535,0.90619 0.86475,0.95662 0.88263,0.96862 0.88961,0.97331 0.904,0.94872 0.91715,0.94144 0.92448,0.93739 0.93402,0.93456 0.94109,0.93629 0.94995,0.93845 0.95909,0.94549 0.96649,0.95349 0.98032,0.96844 1,1 1,1 ",
        BounceEase2 =  "M0,0 C0,0 0.03249,0.00705 0.04917,0.01469 0.06112,0.02017 0.07014,0.02621 0.079,0.03621 0.10733,0.06816 0.12598,0.09208 0.1508,0.1293 0.17112,0.15978 0.1825,0.17982 0.1973,0.21361 0.22959,0.28732 0.2494,0.33204 0.2735,0.40938 0.31129,0.53066 0.33866,0.67292 0.35758,0.72792 0.35897,0.73197 0.37493,0.72402 0.37949,0.71755 0.41701,0.66423 0.44369,0.60073 0.48434,0.54779 0.49459,0.53443 0.51197,0.529 0.52844,0.52351 0.54034,0.51955 0.55679,0.51489 0.56475,0.521 0.58583,0.53718 0.61031,0.56532 0.62413,0.59693 0.66782,0.69691 0.69737,0.84033 0.72383,0.88499 0.72913,0.89394 0.75677,0.85965 0.77536,0.85221 0.78459,0.84851 0.79702,0.84788 0.8057,0.8522 0.82863,0.86363 0.85438,0.87853 0.87039,0.89958 0.88793,0.92266 0.88876,0.96935 0.90359,0.98096 0.91272,0.9881 0.94067,0.96331 0.95564,0.96627 0.97107,0.96932 1,1 1,1 ",
        BounceEase3 =  "M0,0 C0,0 0.04399,0.10297 0.06397,0.16971 0.08915,0.25386 0.0995,0.30503 0.11735,0.39209 0.12797,0.44388 0.13242,0.47421 0.13715,0.52669 0.14322,0.59389 0.14161,0.70717 0.1452,0.70073 0.15377,0.68537 0.21196,0.45101 0.26249,0.30216 0.27859,0.25472 0.29665,0.22464 0.32083,0.18328 0.32862,0.16996 0.34566,0.14764 0.35012,0.15226 0.36336,0.16597 0.39261,0.22232 0.40237,0.26769 0.44209,0.45225 0.46802,0.70324 0.48449,0.77655 0.48556,0.78134 0.50661,0.76764 0.51252,0.75795 0.55708,0.68496 0.58812,0.60109 0.63231,0.53444 0.63993,0.52293 0.65781,0.51978 0.67238,0.51682 0.68437,0.51438 0.69905,0.51353 0.70833,0.51898 0.72159,0.52675 0.73178,0.54205 0.74211,0.55774 0.75229,0.57322 0.76003,0.58535 0.76394,0.60352 0.79396,0.74298 0.81497,0.89445 0.83435,0.98637 0.83488,0.9889 0.84293,0.98994 0.84497,0.9879 0.86099,0.97188 0.87767,0.94368 0.89815,0.92255 0.90393,0.91659 0.91326,0.91001 0.91914,0.91139 0.92847,0.91356 0.93964,0.92418 0.94899,0.93442 0.96959,0.957 1,1 1,1 ",
        BounceEase4 =  "M0,0 C0,0 0.02573,0.03805 0.03564,0.06297 0.05008,0.09926 0.0589,0.12451 0.06526,0.16407 0.09317,0.33754 0.11126,0.60522 0.12557,0.62203 0.13513,0.63326 0.16817,0.43184 0.20024,0.32262 0.20679,0.30031 0.21701,0.28292 0.22982,0.26697 0.23591,0.25939 0.25029,0.25039 0.25624,0.25288 0.26486,0.25649 0.2748,0.2741 0.28113,0.28842 0.29203,0.31311 0.29863,0.3318 0.30347,0.3598 0.32833,0.50354 0.35076,0.69288 0.35917,0.73972 0.35949,0.7415 0.36834,0.73445 0.36989,0.72987 0.39403,0.65868 0.40775,0.58959 0.43587,0.51348 0.44207,0.49671 0.45253,0.48351 0.46484,0.47294 0.47357,0.46544 0.48978,0.45792 0.49782,0.46026 0.5061,0.46268 0.51467,0.4773 0.52007,0.48904 0.52985,0.51028 0.53649,0.52739 0.53995,0.55178 0.55594,0.66467 0.56077,0.8381 0.57189,0.8547 0.57805,0.8639 0.61218,0.75577 0.63918,0.69992 0.6443,0.68935 0.65062,0.68161 0.65889,0.67477 0.66506,0.66967 0.67757,0.66186 0.68086,0.66546 0.6912,0.67677 0.70595,0.70682 0.71251,0.7334 0.72859,0.79848 0.73499,0.88844 0.74238,0.91447 0.74325,0.91754 0.75633,0.90875 0.76054,0.90267 0.7827,0.87067 0.79754,0.83426 0.81857,0.80448 0.82183,0.79986 0.83374,0.79451 0.83481,0.7975 0.84574,0.82802 0.8655,0.9546 0.87878,0.97252 0.88396,0.97951 0.90804,0.93601 0.92546,0.91978 0.92984,0.91569 0.93929,0.91055 0.94206,0.91353 0.95831,0.93102 1,1 1,1 ",
        BounceEase5 =  "M0,0 C0,0 0.03724,0.00248 0.0579,0.00751 0.0712,0.01076 0.08086,0.01519 0.09237,0.02251 0.10569,0.03099 0.11517,0.03867 0.12558,0.05061 0.13777,0.0646 0.14785,0.07568 0.15382,0.09301 0.17914,0.16658 0.19576,0.22027 0.21187,0.30131 0.23063,0.39564 0.24104,0.53089 0.24486,0.55082 0.24521,0.55263 0.25405,0.53881 0.25587,0.53076 0.27321,0.45419 0.27885,0.39422 0.29776,0.3172 0.30162,0.30149 0.30897,0.28882 0.31801,0.27767 0.32285,0.27169 0.3337,0.2646 0.33897,0.26637 0.34712,0.2691 0.35846,0.28187 0.36424,0.29319 0.37519,0.31466 0.38272,0.33371 0.38645,0.35942 0.40284,0.47258 0.40696,0.65398 0.41813,0.66519 0.42608,0.67317 0.4563,0.5288 0.48303,0.45634 0.48752,0.44417 0.49658,0.43281 0.50582,0.42754 0.51328,0.42328 0.52781,0.42293 0.5354,0.42645 0.54333,0.43013 0.55033,0.44052 0.555,0.45038 0.56378,0.46892 0.57025,0.48433 0.57295,0.50573 0.58475,0.59918 0.58316,0.74497 0.59396,0.75904 0.60046,0.7675 0.63586,0.66967 0.66256,0.62238 0.66692,0.61466 0.6735,0.60898 0.68077,0.60529 0.68781,0.60171 0.70091,0.59685 0.70458,0.60104 0.71503,0.61294 0.7282,0.63971 0.73228,0.66398 0.74436,0.73572 0.73888,0.85648 0.74928,0.86656 0.75642,0.87348 0.78813,0.78627 0.81325,0.74245 0.81766,0.73475 0.82378,0.72863 0.83045,0.72494 0.83519,0.72233 0.84544,0.71992 0.84781,0.72336 0.85813,0.73835 0.87147,0.7662 0.87752,0.79327 0.88958,0.8473 0.89034,0.93075 0.89696,0.94361 0.89949,0.94852 0.91709,0.90846 0.93067,0.89648 0.93756,0.8904 0.95296,0.88538 0.95904,0.88881 0.968,0.89388 0.97666,0.91094 0.98204,0.92553 0.99154,0.95133 1,1 1,1 ",
        BounceEase6 =  "M0,0 C0,0 0.05491,0.00491 0.08418,0.01516 0.1185,0.02718 0.14227,0.04005 0.1735,0.06074 0.21077,0.08543 0.23343,0.10459 0.26658,0.13599 0.30526,0.17262 0.32874,0.19791 0.36131,0.23862 0.37782,0.25924 0.38619,0.27524 0.39742,0.29947 0.41246,0.33194 0.422,0.35331 0.43064,0.38828 0.45406,0.48302 0.46932,0.64154 0.48161,0.6401 0.49441,0.63861 0.50627,0.46985 0.52912,0.37678 0.53452,0.35479 0.54757,0.33842 0.55984,0.32152 0.56341,0.3166 0.57056,0.31293 0.57585,0.31244 0.58083,0.31197 0.58908,0.31428 0.59208,0.31851 0.60092,0.33098 0.60781,0.34673 0.61311,0.36496 0.62321,0.3997 0.62844,0.42277 0.63322,0.46 0.6481,0.57583 0.65625,0.74835 0.66392,0.76068 0.66848,0.76801 0.69138,0.64835 0.7128,0.58788 0.71797,0.57326 0.7273,0.56027 0.7377,0.55235 0.74472,0.547 0.75948,0.54381 0.76647,0.54698 0.77531,0.55098 0.78467,0.56405 0.78955,0.57583 0.79877,0.59809 0.80434,0.61759 0.80647,0.64353 0.81356,0.73019 0.81071,0.86497 0.81416,0.87649 0.81559,0.88127 0.834,0.81317 0.84929,0.78654 0.85407,0.77822 0.86586,0.77289 0.87494,0.77065 0.88219,0.76886 0.89472,0.76913 0.89876,0.77431 0.91016,0.78894 0.92081,0.8125 0.92631,0.83656 0.93658,0.88152 0.93783,0.95227 0.94184,0.96284 0.94302,0.96596 0.95369,0.93863 0.96227,0.93132 0.96746,0.9269 0.98228,0.92256 0.98446,0.92653 0.99167,0.93966 1,1 1,1 ";

    //	Functions.
    var	UpdateStage	=	function()
    {
        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------
    //	Object definition.
    //-----------------------------------------------------------------------------------------------

    var CDiceTests	=	function( stage )
    {
        //	Make a note of the stage.
        TheStage		=	stage;

        this.DemoContainer			=	Renderer.CreateContainer( );
        this.DiceContainer			=	Renderer.CreateContainer( );
        this.DiceContainer.SetPosition( 20, -74);
        this.DiceContainer.SetScale(0.85);

        this.Background        = Renderer.CreateSprite( Game.DiceSplashSheet, "Background",  { alpha:1,  scaleX:1, scaleY:1, position:{X:0, Y:0}, parent:this.DemoContainer});

        this.Overlay        = Renderer.CreateSprite( Game.DiceSplashSheet, "Overlay",  { alpha:1, scaleX:1, scaleY:1, position:{X:0, Y:0}, parent:this.DemoContainer});


        this.ShakerBtm        = Renderer.CreateSprite( Game.DiceSplashSheet, "Shaker",  { alpha:1, rotation:this.DegreesToRadians(228), scaleX:0.5, scaleY:0.5, position:{X:290, Y:-280}, parent:this.DemoContainer});


        this.DemoContainer.addChild( this.DiceContainer );

        this.DiceDropShadowFilter    = new PIXI.filters.DropShadowFilter();



        this.DiceDropShadowFilter.rotation = 80;
        this.DiceDropShadowFilter.distance = 5;
        this.DiceDropShadowFilter.alpha = 0;

        //this.DemoContainer.rotation = this.DegreesToRadians(-15);

        this.DiceContainerArray   = [];

        //// ANINS ////
        Dice_anim_ss = beablib.SpriteSheetPath["DiceAssetsSS"];
        Dice_anim = Dice_anim_ss.spriteSheet.animations;

        Dice_anim.diceRoll = [Dice_anim["dice_anim_01"][0], Dice_anim["dice_anim_15"][0], "diceRoll", 0.52 ];

        this.DiceAnimSpriteSheet = beablib.CreateSpriteSheet(Dice_anim_ss);

        Dice_anim2_ss = beablib.SpriteSheetPath["DiceAssetsSS"];
        Dice_anim2 = Dice_anim2_ss.spriteSheet.animations;

        Dice_anim2.diceRoll2 = [Dice_anim2["dice_rev_01"][0], Dice_anim2["dice_rev_15"][0], "diceRoll", 0.6 ];

        this.DiceAnimSpriteSheet2 = beablib.CreateSpriteSheet(Dice_anim2_ss);

        var diceContainerPosArray = [{X:250, Y:-220}, {X:250, Y:-220}, {X:250, Y:-220}, {X:250, Y:-220}, {X:250, Y:-220}];

        /*
        for (var j = 0; j < 5; j++) {

            var blurBG = Renderer.CreateSprite(Game.DiceSplashSheet, "Background_Blur", {
                alpha: 1,
                scaleX: 1,
                scaleY: 1,
                position: {X: -12, Y: -12},
                parent: this.DemoContainer
            });
            DiceBlurBGArray.push(blurBG);

            var landMask = new PIXI.Graphics();
            landMask.lineStyle(9, 0xFFFFFF, 1);
            landMask.drawCircle(0, 0, 80);
            landMask.drawCircle(0, 0, 40);
            landMask.endFill();

            this.DemoContainer.addChild(landMask);

            DiceBlurBGArray[j].mask = landMask;

            DiceLandMaskArray.push(landMask);

            landMask.SetScale(0);
        }
        */


        for (var i = 0; i < 5; i++) {

            var diceContainer = 	Renderer.CreateContainer( );
            diceContainer.SetPosition( diceContainerPosArray[i].X, diceContainerPosArray[i].Y);
            diceContainer.SetScale(0.5);

            diceContainer.filters = [this.DiceDropShadowFilter];

            this.DiceContainerArray.push( diceContainer );

            var diceGlow  = Renderer.CreateSprite( this.DiceAnimSpriteSheet, "DieGlow2",  { alpha:0, scaleX:1.04, scaleY:1.04, position:{X:0, Y:0}, parent:this.DiceContainerArray[i]});

            DiceGlowArray.push( diceGlow );

            var staticDice  = Renderer.CreateSprite( this.DiceAnimSpriteSheet, "dice_angled_0" + (i+1),  { alpha:0, scaleX:1, scaleY:1, position:{X:0, Y:0}, parent:this.DiceContainerArray[i]});

            DiceStaticArray.push( staticDice );

            //this.DemoContainer.addChild( diceContainer );
            this.DiceContainer.addChild( diceContainer );


            //// PRIZE STUFF ////
            var pzContainer = 	Renderer.CreateContainer( );
            pzContainer.SetPosition( -139 + (55 *i), -180);
            pzContainer.SetScale(1);

            TempYahtzeePZArray.push( pzContainer );

            var pzGlow        = Renderer.CreateSprite( this.DiceAnimSpriteSheet, "PzGlow",  { alpha:0, scaleX:0.72, scaleY:0.72, position:{X:0, Y:0}, parent:TempYahtzeePZArray[i]});

            PzStaticGlowArray.push( pzGlow );

            var pzAnim        = Renderer.CreateSprite( this.DiceAnimSpriteSheet, "diceRoll",  { alpha:0, scaleX:0.5, scaleY:0.5, position:{X:0, Y:0}, parent:TempYahtzeePZArray[i]});

            PzSpinArray.push( pzAnim );

            var staticPZDice  = Renderer.CreateSprite( this.DiceAnimSpriteSheet, "PzDice_" + (i+1) ,  { alpha:0, scaleX:0.72, scaleY:0.72, position:{X:0, Y:0}, parent:TempYahtzeePZArray[i]});

            PzStaticArray.push( staticPZDice );


            this.DiceContainer.addChild( pzContainer );

        }

        this.DiceAnim1        = Renderer.CreateSprite( this.DiceAnimSpriteSheet, "diceRoll",  { alpha:1, scaleX:1, scaleY:1, position:{X:0, Y:0}, parent:this.DiceContainerArray[0]});
        this.DiceAnim2        = Renderer.CreateSprite( this.DiceAnimSpriteSheet2, "diceRoll2",  { alpha:1, scaleX:1, scaleY:1, position:{X:0, Y:0}, parent:this.DiceContainerArray[1]});
        this.DiceAnim3        = Renderer.CreateSprite( this.DiceAnimSpriteSheet, "diceRoll",  { alpha:1, scaleX:1, scaleY:1, position:{X:0, Y:0}, parent:this.DiceContainerArray[2]});
        this.DiceAnim4        = Renderer.CreateSprite( this.DiceAnimSpriteSheet2, "diceRoll2",  { alpha:1, scaleX:1, scaleY:1, position:{X:0, Y:0}, parent:this.DiceContainerArray[3]});
        this.DiceAnim5        = Renderer.CreateSprite( this.DiceAnimSpriteSheet, "diceRoll",  { alpha:1, scaleX:1, scaleY:1, position:{X:0, Y:0}, parent:this.DiceContainerArray[4]});


        DiceSpin1Array = [ this.DiceAnim1, this.DiceAnim2, this.DiceAnim3, this.DiceAnim4, this.DiceAnim5];


        gsap.delayedCall( 2, this.RollDice1, [  ], this );
        gsap.delayedCall( 3.6, this.DiceJump, [  ], this );
        //gsap.delayedCall( 8, this.DiceJump, [  ], this );
        //gsap.delayedCall( 11, this.DiceJump, [  ], this );
        //gsap.delayedCall( 14, this.DiceJump, [  ], this );

        /*
        gsap.delayedCall( 6, this.RollDice2, [  ], this );
        gsap.delayedCall( 10, this.RollDice3, [  ], this );
        gsap.delayedCall( 14, this.RollDice4, [  ], this );

        gsap.delayedCall( 18, this.RollDice1, [  ], this );
        gsap.delayedCall( 22, this.RollDice2, [  ], this );
        gsap.delayedCall( 26, this.RollDice3, [  ], this );
        gsap.delayedCall( 30, this.RollDice4, [  ], this );

        gsap.delayedCall( 34, this.RollDice1, [  ], this );
        gsap.delayedCall( 38, this.RollDice2, [  ], this );
        gsap.delayedCall( 42, this.RollDice3, [  ], this );
        gsap.delayedCall( 48, this.RollDice4, [  ], this );
        */



        this.Shaker        = Renderer.CreateSprite( Game.DiceSplashSheet, "Shaker",  { alpha:1, rotation:this.DegreesToRadians(228), scaleX:0.5, scaleY:0.5, position:{X:300, Y:-290}, parent:this.DemoContainer});



        TheStage.addChild( this.DemoContainer );

        //	The following would disable the button.
        /*
                    this.ButtonSprite.SetButtonMode( false );
        */
        //	Make sure we're repositionable.
        beablib.SetRepositionable( this );
    };

    //-----------------------------------------------------------------------------------------------
    //	Public members.
    //-----------------------------------------------------------------------------------------------



    CDiceTests.prototype.Reposition		=	function( scale )
    {

        this.DemoContainer.SetPosition( TheStage.View.HalfWidth, TheStage.View.HalfHeight );
        this.DemoContainer.SetScale( scale );

        UpdateStage();
    };



    //--------------------------------------------------------------------------------

    CDiceTests.prototype.DegreesToRadians			=	function( degree ) {

        var rads = degree * 0.0174533;

        console.log( "degree :: " + rads );

        return rads;

    };

    //--------------------------------------------------------------------------------

    CDiceTests.prototype.PlayDiceAnim   		=	function( number, name ) {

        DiceSpin1Array[ number ].gotoAndPlay(name, {duration: 3, stage:TheStage});

    };

    //--------------------------------------------------------------------------------

    CDiceTests.prototype.StopDiceAnim			=	function( number ) {

        //DiceSpin1Array[ number ].gotoAndPlay("diceRoll", {duration: 3, stage:TheStage});
        DiceSpin1Array[ number ].stop();

    };

    //--------------------------------------------------------------------------------

    CDiceTests.prototype.PlayPzDiceAnim   		=	function( number, name ) {

        PzSpinArray[ number ].gotoAndPlay(name, {duration: 3, stage:TheStage});

    };

    //--------------------------------------------------------------------------------

    CDiceTests.prototype.StopPzDiceAnim			=	function( number ) {

        //DiceSpin1Array[ number ].gotoAndPlay("diceRoll", {duration: 3, stage:TheStage});
        PzSpinArray[ number ].stop();

    };

    //--------------------------------------------------------------------------------

    CDiceTests.prototype.DiceJump			=	function(  ) {

        CustomBounce.create("myBounce", { endAtStart:true, strength:0.6, squash:7, squashID:"myBounce-squash"});

        for (var i = 0; i < 5; i++) {

            //CustomBounce.create("myBounce", { endAtStart:true, strength:0.6, squash:7, squashID:"myBounce-squash"});
            //do the bounce by affecting the "y" property.
            //gsap.to( this.DiceContainerArray[i], { duration:1.4, y:this.DiceContainerArray[i].y - 100, delay:0.4 * i, ease:"myBounce", onUpdate:UpdateStage});
            //gsap.to( this.DiceDropShadowFilter, { duration:1.4, distance:30, delay:0.4 * i, ease:"myBounce", onUpdate:UpdateStage});
            //and do the squash/stretch at the same time:
            //gsap.to( this.DiceContainerArray[i], { duration:1.4, scaleX:1.1, scaleY:0.9, delay:0.4 * i, ease:"myBounce-squash", transformOrigin:"center bottom"});

            //tl.to( , {distance:5, alpha:0.5, duration:1, },"-=1");

            //DiceGlowArray

            var tl = gsap.timeline({onUpdate:UpdateStage });
            tl.to( this.DiceContainerArray[i], { y:this.DiceContainerArray[i].y-3, scaleX:this.DiceContainerArray[i].scaleX + 0.08, scaleY:this.DiceContainerArray[i].scaleY + 0.08, delay:0.5 * i, duration:0.3, ease: "power2.out" });
            tl.to( DiceGlowArray[i], { alpha:0.85, duration:0.3, ease: "power2.out" }, "-=0.3");
            tl.to( this.DiceContainerArray[i],  {y:this.DiceContainerArray[i].y, scaleX:this.DiceContainerArray[i].scaleX, scaleY:this.DiceContainerArray[i].scaleY, duration:0.3, ease: "power2.out" });
            tl.to( DiceGlowArray[i], { alpha:0, duration:0.3, ease: "power2.out" }, "-=0.3");
            //tl.to( this.DiceGlowArray[i], { alpha:1, duration:0.3, ease: "power2.out" }, "-=0.3");


            var tlPz = gsap.timeline({onUpdate:UpdateStage });
            tlPz.set( PzStaticArray[i], { alpha:0,  delay:2 + (0.2 * i)  });
            tlPz.set( PzSpinArray[i], { alpha:1 });
            tlPz.call( this.PlayPzDiceAnim, [i, "diceRoll"]);
            tlPz.to( TempYahtzeePZArray[i], {scaleX:1.1, scaleY:1.1, duration:0.6, ease: "power2.out" });
            tlPz.to( TempYahtzeePZArray[i], {scaleX:1, scaleY:1, duration:0.6, ease: "bounce.out" });
            //tlPz.to( this.DiceDropShadowFilter, {distance:5, alpha:0.5, duration:1, },"-=1");
            tlPz.set( PzSpinArray[i], { alpha:0 },"-=0.2");
            tlPz.set( PzStaticArray[i], { alpha:1 },"-=0.2");
            tlPz.call( this.StopPzDiceAnim, [i]);

            var tlPz2 = gsap.timeline({onUpdate:UpdateStage,delay:4 });
            tlPz2.to( [PzStaticGlowArray[i],DiceGlowArray[i]], {alpha:0.7, ease: "power1.out" });
            tlPz2.to( [PzStaticGlowArray[i],DiceGlowArray[i]], {alpha:0, ease: "power1.out" });
            tlPz2.to( [PzStaticGlowArray[i],DiceGlowArray[i]], {alpha:0.7, ease: "power1.out" });
            tlPz2.to( [PzStaticGlowArray[i],DiceGlowArray[i]], {alpha:0, ease: "power1.out" });
            tlPz2.to( [PzStaticGlowArray[i],DiceGlowArray[i]], {alpha:0.7, ease: "power1.out" });
            tlPz2.to( [PzStaticGlowArray[i],DiceGlowArray[i]], {alpha:0, ease: "power1.out" });
            tlPz2.to( [PzStaticGlowArray[i],DiceGlowArray[i]], {alpha:0.7, ease: "power1.out" });
            tlPz2.to( [PzStaticGlowArray[i],DiceGlowArray[i]], {alpha:0, ease: "power1.out" });
            tlPz2.to( [PzStaticGlowArray[i],DiceGlowArray[i]], {alpha:0.7, ease: "power1.out" });

        }

    };



    //--------------------------------------------------------------------------------

    CDiceTests.prototype.RollDice1			=	function(  ) {

        /*
        DiceLandMaskArray[0].SetScale(0);
        DiceLandMaskArray[1].SetScale(0);
        DiceLandMaskArray[2].SetScale(0);
        DiceLandMaskArray[3].SetScale(0);
        DiceLandMaskArray[4].SetScale(0);

        DiceBlurBGArray[0].alpha = 1;
        DiceBlurBGArray[1].alpha = 1;
        DiceBlurBGArray[2].alpha = 1;
        DiceBlurBGArray[3].alpha = 1;
        DiceBlurBGArray[4].alpha = 1;
        */

        this.DiceContainerArray[4].SetPosition( 250, -220);
        this.DiceContainerArray[4].SetScale( 0.5 );
        this.DiceContainerArray[4].rotation = 0;

        this.DiceContainerArray[3].SetPosition( 240, -230);
        this.DiceContainerArray[3].SetScale( 0.5 );
        this.DiceContainerArray[3].rotation = 0;

        this.DiceContainerArray[2].SetPosition( 234, -240);
        this.DiceContainerArray[2].SetScale( 0.5 );
        this.DiceContainerArray[2].rotation = 0;

        this.DiceContainerArray[1].SetPosition( 250, -220);
        this.DiceContainerArray[1].SetScale( 0.5 );
        this.DiceContainerArray[1].rotation = 0;

        this.DiceContainerArray[0].SetPosition( 260, -210);
        this.DiceContainerArray[0].SetScale( 0.5 );
        this.DiceContainerArray[0].rotation = 0;

        DiceSpin1Array[4].alpha  = 1;
        DiceStaticArray[4].alpha = 0;

        DiceSpin1Array[3].alpha  = 1;
        DiceStaticArray[3].alpha = 0;

        DiceSpin1Array[2].alpha  = 1;
        DiceStaticArray[2].alpha = 0;

        DiceSpin1Array[1].alpha  = 1;
        DiceStaticArray[1].alpha = 0;

        DiceSpin1Array[0].alpha  = 1;
        DiceStaticArray[0].alpha = 0;

        this.DiceDropShadowFilter.rotation = 135;
        this.DiceDropShadowFilter.distance = 130;
        this.DiceDropShadowFilter.alpha = 0.2;

        var tl = gsap.timeline({onUpdate:UpdateStage });
        //tl.set( DiceLandMaskArray[4], { x:-270, y:175 });
        tl.call( this.PlayDiceAnim, [4, "diceRoll"]);
        tl.to( this.DiceContainerArray[4], {x:-270, scaleX:1, scaleY:1, duration:1, ease: "power2.out" });
        tl.to( this.DiceContainerArray[4], {y:150, rotation:this.DegreesToRadians(-5), duration:1, ease: CustomEase.create("custom", BounceEase4)}, "-=1");
        tl.to( this.DiceDropShadowFilter, {distance:5, alpha:0.5, duration:1, },"-=1");
        tl.set( DiceSpin1Array[4], { alpha:0 },"-=0.2");
        tl.set( DiceStaticArray[4], { alpha:1 },"-=0.2");
        //tl.to( DiceLandMaskArray[4], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl.to( DiceBlurBGArray[4], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl.call( this.StopDiceAnim, [4]);

        var tl2 = gsap.timeline({onUpdate:UpdateStage });
        //tl2.set( DiceLandMaskArray[3], { x:-240, y:75 });
        tl2.call( this.PlayDiceAnim, [3, "diceRoll2" ]);
        tl2.to( this.DiceContainerArray[3], {x:-240, scaleX:0.9, scaleY:0.9, duration:1.1, ease: "power1.out", delay:0.1 });
        tl2.to( this.DiceContainerArray[3], {y:50, rotation:this.DegreesToRadians(5), duration:1.1, ease: CustomEase.create("custom", BounceEase2),}, "-=1.1");
        tl2.set( DiceSpin1Array[3], { alpha:0 },"-=0.2");
        tl2.set( DiceStaticArray[3], { alpha:1 },"-=0.2");
        //tl2.to( DiceLandMaskArray[3], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl2.to( DiceBlurBGArray[3], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl2.call( this.StopDiceAnim, [3]);

        var tl3 = gsap.timeline({onUpdate:UpdateStage });
        //tl3.set( DiceLandMaskArray[2], { x:-110, y:215 });
        tl3.call( this.PlayDiceAnim, [2, "diceRoll1" ]);
        tl3.to( this.DiceContainerArray[2], {x:-110, scaleX:1.03, scaleY:1.03, duration:0.9, ease: "power3.out", delay:0.12 });
        tl3.to( this.DiceContainerArray[2], {y:190, rotation:this.DegreesToRadians(15), duration:0.9, ease: CustomEase.create("custom", BounceEase1)}, "-=0.9");
        tl3.set( DiceSpin1Array[2], { alpha:0 },"-=0.2");
        tl3.set( DiceStaticArray[2], { alpha:1 },"-=0.2");
        //tl3.to( DiceLandMaskArray[2], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl3.to( DiceBlurBGArray[2], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl3.call( this.StopDiceAnim, [2]);

        var tl4 = gsap.timeline({onUpdate:UpdateStage });
        //tl4.set( DiceLandMaskArray[1], { x:-30, y:155 });
        tl4.call( this.PlayDiceAnim, [1, "diceRoll2" ]);
        tl4.to( this.DiceContainerArray[1], {x:-30, scaleX:0.94, scaleY:0.94, duration:1.2, ease: "power1.out"});
        tl4.to( this.DiceContainerArray[1], {y:130, rotation:this.DegreesToRadians(4), duration:1.2, ease: CustomEase.create("custom", BounceEase6)}, "-=1.2");
        tl4.set( DiceSpin1Array[1], { alpha:0 },"-=0.2");
        tl4.set( DiceStaticArray[1], { alpha:1 },"-=0.2");
        //tl4.to( DiceLandMaskArray[1], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl4.to( DiceBlurBGArray[1], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl4.call( this.StopDiceAnim, [1]);

        var tl5 = gsap.timeline({onUpdate:UpdateStage });
        //tl5.set( DiceLandMaskArray[0], { x:100, y:155 });
        tl5.call( this.PlayDiceAnim, [0, "diceRoll1" ]);
        tl5.to( this.DiceContainerArray[0], {x:100, scaleX:1, scaleY:1, duration:1.1, ease: "power2.out", delay:0.1 });
        tl5.to( this.DiceContainerArray[0], {y:130, rotation:this.DegreesToRadians(12), duration:1.1, ease: CustomEase.create("custom", BounceEase5)}, "-=1.1");
        tl5.set( DiceSpin1Array[0], { alpha:0 },"-=0.2");
        tl5.set( DiceStaticArray[0], { alpha:1 }, "-=0.2");
        //tl5.to( DiceLandMaskArray[0], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl5.to( DiceBlurBGArray[0], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl5.call( this.StopDiceAnim, [0]);

    };

    //--------------------------------------------------------------------------------

    CDiceTests.prototype.RollDice2			=	function(  ) {

        /*
        DiceLandMaskArray[0].SetScale(0);
        DiceLandMaskArray[1].SetScale(0);
        DiceLandMaskArray[2].SetScale(0);
        DiceLandMaskArray[3].SetScale(0);
        DiceLandMaskArray[4].SetScale(0);

        DiceBlurBGArray[0].alpha = 1;
        DiceBlurBGArray[1].alpha = 1;
        DiceBlurBGArray[2].alpha = 1;
        DiceBlurBGArray[3].alpha = 1;
        DiceBlurBGArray[4].alpha = 1;
        */

        this.DiceContainerArray[4].SetPosition( 250, -220);
        this.DiceContainerArray[4].SetScale( 0.5 );
        this.DiceContainerArray[4].rotation = 0;

        this.DiceContainerArray[3].SetPosition( 240, -230);
        this.DiceContainerArray[3].SetScale( 0.5 );
        this.DiceContainerArray[3].rotation = 0;

        this.DiceContainerArray[2].SetPosition( 234, -240);
        this.DiceContainerArray[2].SetScale( 0.5 );
        this.DiceContainerArray[2].rotation = 0;

        this.DiceContainerArray[1].SetPosition( 250, -220);
        this.DiceContainerArray[1].SetScale( 0.5 );
        this.DiceContainerArray[1].rotation = 0;

        this.DiceContainerArray[0].SetPosition( 260, -210);
        this.DiceContainerArray[0].SetScale( 0.5 );
        this.DiceContainerArray[0].rotation = 0;

        DiceSpin1Array[4].alpha  = 1;
        DiceStaticArray[4].alpha = 0;

        DiceSpin1Array[3].alpha  = 1;
        DiceStaticArray[3].alpha = 0;

        DiceSpin1Array[2].alpha  = 1;
        DiceStaticArray[2].alpha = 0;

        DiceSpin1Array[1].alpha  = 1;
        DiceStaticArray[1].alpha = 0;

        DiceSpin1Array[0].alpha  = 1;
        DiceStaticArray[0].alpha = 0;

        this.DiceDropShadowFilter.rotation = 135;
        this.DiceDropShadowFilter.distance = 130;
        this.DiceDropShadowFilter.alpha = 0.2;

        var tl = gsap.timeline({onUpdate:UpdateStage });
        //tl.set( DiceLandMaskArray[4], { x:80, y:228 });
        tl.call( this.PlayDiceAnim, [4, "diceRoll"]);
        tl.to( this.DiceContainerArray[4], {x:80, scaleX:1.04, scaleY:1.04, delay:0.05, duration:1, ease: "power2.out" });
        tl.to( this.DiceContainerArray[4], {y:203,  rotation:this.DegreesToRadians(3), duration:1, ease: CustomEase.create("custom", BounceEase1)}, "-=1");
        tl.to( this.DiceDropShadowFilter, {distance:5, alpha:0.5, duration:1, },"-=1");
        tl.set( DiceSpin1Array[4], { alpha:0 },"-=0.2");
        tl.set( DiceStaticArray[4], { alpha:1 },"-=0.2");
        //tl.to( DiceLandMaskArray[4], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl.to( DiceBlurBGArray[4], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl.call( this.StopDiceAnim, [4]);

        var tl2 = gsap.timeline({onUpdate:UpdateStage });
        //tl2.set( DiceLandMaskArray[3], { x:-270, y:115 });
        tl2.call( this.PlayDiceAnim, [3, "diceRoll2" ]);
        tl2.to( this.DiceContainerArray[3], {x:-270, scaleX:0.94, scaleY:0.94, duration:1.1, ease: "power1.out", delay:0.1 });
        tl2.to( this.DiceContainerArray[3], {y:90, rotation:this.DegreesToRadians(9), duration:1.1, ease: CustomEase.create("custom", BounceEase2),}, "-=1.1");
        tl2.set( DiceSpin1Array[3], { alpha:0 },"-=0.2");
        tl2.set( DiceStaticArray[3], { alpha:1 },"-=0.2");
        //tl2.to( DiceLandMaskArray[3], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl2.to( DiceBlurBGArray[3], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl2.call( this.StopDiceAnim, [3]);

        var tl3 = gsap.timeline({onUpdate:UpdateStage });
        //tl3.set( DiceLandMaskArray[2], { x:-310, y:35 });
        tl3.call( this.PlayDiceAnim, [2, "diceRoll1" ]);
        tl3.to( this.DiceContainerArray[2], {x:-310, scaleX:0.86, scaleY:0.86, duration:0.9, ease: "power3.out", delay:0.12 });
        tl3.to( this.DiceContainerArray[2], {y:10, rotation:this.DegreesToRadians(10), duration:0.9, ease: CustomEase.create("custom", BounceEase6)}, "-=0.9");
        tl3.set( DiceSpin1Array[2], { alpha:0 },"-=0.2");
        tl3.set( DiceStaticArray[2], { alpha:1 },"-=0.2");
        //tl3.to( DiceLandMaskArray[2], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl3.to( DiceBlurBGArray[2], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl3.call( this.StopDiceAnim, [2]);

        var tl4 = gsap.timeline({onUpdate:UpdateStage });
        //tl4.set( DiceLandMaskArray[1], { x:20, y:155 });
        tl4.call( this.PlayDiceAnim, [1, "diceRoll2" ]);
        tl4.to( this.DiceContainerArray[1], {x:20, scaleX:0.94, scaleY:0.94, duration:0.8, ease: "power1.out", delay:0.2 });
        tl4.to( this.DiceContainerArray[1], {y:130, rotation:this.DegreesToRadians(4), duration:0.8, ease: CustomEase.create("custom", BounceEase3)}, "-=0.8");
        tl4.set( DiceSpin1Array[1], { alpha:0 },"-=0.2");
        tl4.set( DiceStaticArray[1], { alpha:1 },"-=0.2");
        //tl4.to( DiceLandMaskArray[1], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl4.to( DiceBlurBGArray[1], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl4.call( this.StopDiceAnim, [1]);

        var tl5 = gsap.timeline({onUpdate:UpdateStage });
        //tl5.set( DiceLandMaskArray[0], { x:-100, y:205 });
        tl5.call( this.PlayDiceAnim, [0, "diceRoll1" ]);
        tl5.to( this.DiceContainerArray[0], {x:-100, scaleX:0.97, scaleY:0.97, duration:1.1, ease: "power2.out", delay:0.3 });
        tl5.to( this.DiceContainerArray[0], {y:180, rotation:this.DegreesToRadians(17), duration:1.1, ease: CustomEase.create("custom", BounceEase5)}, "-=1.1");
        tl5.set( DiceSpin1Array[0], { alpha:0 },"-=0.2");
        tl5.set( DiceStaticArray[0], { alpha:1 }, "-=0.2");
        //tl5.to( DiceLandMaskArray[0], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl5.to( DiceBlurBGArray[0], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl5.call( this.StopDiceAnim, [0]);

    };

    //--------------------------------------------------------------------------------

    CDiceTests.prototype.RollDice3			=	function(  ) {

        this.DiceContainerArray[4].SetPosition( 250, -220);
        this.DiceContainerArray[4].SetScale( 0.5 );
        this.DiceContainerArray[4].rotation = 0;

        this.DiceContainerArray[3].SetPosition( 240, -230);
        this.DiceContainerArray[3].SetScale( 0.5 );
        this.DiceContainerArray[3].rotation = 0;

        this.DiceContainerArray[2].SetPosition( 234, -240);
        this.DiceContainerArray[2].SetScale( 0.5 );
        this.DiceContainerArray[2].rotation = 0;

        this.DiceContainerArray[1].SetPosition( 250, -220);
        this.DiceContainerArray[1].SetScale( 0.5 );
        this.DiceContainerArray[1].rotation = 0;

        this.DiceContainerArray[0].SetPosition( 260, -210);
        this.DiceContainerArray[0].SetScale( 0.5 );
        this.DiceContainerArray[0].rotation = 0;

        DiceSpin1Array[4].alpha  = 1;
        DiceStaticArray[4].alpha = 0;

        DiceSpin1Array[3].alpha  = 1;
        DiceStaticArray[3].alpha = 0;

        DiceSpin1Array[2].alpha  = 1;
        DiceStaticArray[2].alpha = 0;

        DiceSpin1Array[1].alpha  = 1;
        DiceStaticArray[1].alpha = 0;

        DiceSpin1Array[0].alpha  = 1;
        DiceStaticArray[0].alpha = 0;

        this.DiceDropShadowFilter.rotation = 135;
        this.DiceDropShadowFilter.distance = 130;
        this.DiceDropShadowFilter.alpha = 0.2;

        var tl = gsap.timeline({onUpdate:UpdateStage });
        //tl.set( DiceLandMaskArray[4], { x:-150, y:205 });
        tl.call( this.PlayDiceAnim, [4, "diceRoll"]);
        tl.to( this.DiceContainerArray[4], {x:-150, scaleX:1.05, scaleY:1.05, duration:1, ease: "power2.out" });
        tl.to( this.DiceContainerArray[4], {y:180, rotation:this.DegreesToRadians(11), duration:1, ease: CustomEase.create("custom", BounceEase4)}, "-=1");
        tl.to( this.DiceDropShadowFilter, {distance:5, alpha:0.5, duration:1, },"-=1");
        tl.set( DiceSpin1Array[4], { alpha:0 },"-=0.2");
        tl.set( DiceStaticArray[4], { alpha:1 },"-=0.2");
        //tl.to( DiceLandMaskArray[4], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl.to( DiceBlurBGArray[4], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl.call( this.StopDiceAnim, [4]);

        var tl2 = gsap.timeline({onUpdate:UpdateStage });
        //tl2.set( DiceLandMaskArray[3], { x:-240, y:75 });
        tl2.call( this.PlayDiceAnim, [3, "diceRoll2" ]);
        tl2.to( this.DiceContainerArray[3], {x:-240, scaleX:0.9, scaleY:0.9, duration:1.1, ease: "power1.out", delay:0.1 });
        tl2.to( this.DiceContainerArray[3], {y:50, rotation:this.DegreesToRadians(5), duration:1.1, ease: CustomEase.create("custom", BounceEase2),}, "-=1.1");
        tl2.set( DiceSpin1Array[3], { alpha:0 },"-=0.2");
        tl2.set( DiceStaticArray[3], { alpha:1 },"-=0.2");
        //tl2.to( DiceLandMaskArray[3], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl2.to( DiceBlurBGArray[3], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl2.call( this.StopDiceAnim, [3]);

        var tl3 = gsap.timeline({onUpdate:UpdateStage });
        //tl3.set( DiceLandMaskArray[2], { x:60, y:115 });
        tl3.call( this.PlayDiceAnim, [2, "diceRoll1" ]);
        tl3.to( this.DiceContainerArray[2], {x:60, scaleX:1, scaleY:1, duration:0.9, ease: "power3.out", delay:0.12 });
        tl3.to( this.DiceContainerArray[2], {y:90, rotation:this.DegreesToRadians(15), duration:0.9, ease: CustomEase.create("custom", BounceEase1)}, "-=0.9");
        tl3.set( DiceSpin1Array[2], { alpha:0 },"-=0.2");
        tl3.set( DiceStaticArray[2], { alpha:1 },"-=0.2");
        //tl3.to( DiceLandMaskArray[2], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl3.to( DiceBlurBGArray[2], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl3.call( this.StopDiceAnim, [2]);

        var tl4 = gsap.timeline({onUpdate:UpdateStage });
        //tl4.set( DiceLandMaskArray[1], { x:-100, y:75 });
        tl4.call( this.PlayDiceAnim, [1, "diceRoll2" ]);
        tl4.to( this.DiceContainerArray[1], {x:-100, scaleX:0.9, scaleY:0.9, duration:0.8, ease: "power1.out", delay:0.2 });
        tl4.to( this.DiceContainerArray[1], {y:50, rotation:this.DegreesToRadians(4), duration:0.8, ease: CustomEase.create("custom", BounceEase3)}, "-=0.8");
        tl4.set( DiceSpin1Array[1], { alpha:0 },"-=0.2");
        tl4.set( DiceStaticArray[1], { alpha:1 },"-=0.2");
        //tl4.to( DiceBlurBGArray[1], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl4.call( this.StopDiceAnim, [1]);

        var tl5 = gsap.timeline({onUpdate:UpdateStage });
        //tl5.set( DiceLandMaskArray[0], { x:-180, y:15 });
        tl5.call( this.PlayDiceAnim, [0, "diceRoll1" ]);
        tl5.to( this.DiceContainerArray[0], {x:-180, scaleX:0.8, scaleY:0.8, duration:1.1, ease: "power2.out", delay:0.1 });
        tl5.to( this.DiceContainerArray[0], {y:-10, rotation:this.DegreesToRadians(12), duration:1.1, ease: CustomEase.create("custom", BounceEase5)}, "-=1.1");
        tl5.set( DiceSpin1Array[0], { alpha:0 },"-=0.2");
        tl5.set( DiceStaticArray[0], { alpha:1 }, "-=0.2");
        //tl5.to( DiceLandMaskArray[0], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl5.to( DiceBlurBGArray[0], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl5.call( this.StopDiceAnim, [0]);

    };


    //--------------------------------------------------------------------------------

    CDiceTests.prototype.RollDice4			=	function(  ) {

        this.DiceContainerArray[4].SetPosition( -250, -220);
        this.DiceContainerArray[4].SetScale( 0.5 );
        this.DiceContainerArray[4].rotation = 0;

        this.DiceContainerArray[3].SetPosition( -240, -230);
        this.DiceContainerArray[3].SetScale( 0.5 );
        this.DiceContainerArray[3].rotation = 0;

        this.DiceContainerArray[2].SetPosition( -234, -240);
        this.DiceContainerArray[2].SetScale( 0.5 );
        this.DiceContainerArray[2].rotation = 0;

        this.DiceContainerArray[1].SetPosition( -250, -220);
        this.DiceContainerArray[1].SetScale( 0.5 );
        this.DiceContainerArray[1].rotation = 0;

        this.DiceContainerArray[0].SetPosition( - 260, -210);
        this.DiceContainerArray[0].SetScale( 0.5 );
        this.DiceContainerArray[0].rotation = 0;

        DiceSpin1Array[4].alpha  = 1;
        DiceStaticArray[4].alpha = 0;

        DiceSpin1Array[3].alpha  = 1;
        DiceStaticArray[3].alpha = 0;

        DiceSpin1Array[2].alpha  = 1;
        DiceStaticArray[2].alpha = 0;

        DiceSpin1Array[1].alpha  = 1;
        DiceStaticArray[1].alpha = 0;

        DiceSpin1Array[0].alpha  = 1;
        DiceStaticArray[0].alpha = 0;

        this.DiceDropShadowFilter.rotation = 135;
        this.DiceDropShadowFilter.distance = 130;
        this.DiceDropShadowFilter.alpha = 0.2;

        var tl = gsap.timeline({onUpdate:UpdateStage });
        //tl.set( DiceLandMaskArray[4], { x:80, y:228 });
        tl.call( this.PlayDiceAnim, [4, "diceRoll"]);
        tl.to( this.DiceContainerArray[4], {x:-80, scaleX:1.04, scaleY:1.04, delay:0.05, duration:1, ease: "power2.out" });
        tl.to( this.DiceContainerArray[4], {y:203,  rotation:this.DegreesToRadians(3), duration:1, ease: CustomEase.create("custom", BounceEase1)}, "-=1");
        tl.to( this.DiceDropShadowFilter, {distance:5, alpha:0.5, duration:1, },"-=1");
        tl.set( DiceSpin1Array[4], { alpha:0 },"-=0.2");
        tl.set( DiceStaticArray[4], { alpha:1 },"-=0.2");
        //tl.to( DiceLandMaskArray[4], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl.to( DiceBlurBGArray[4], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl.call( this.StopDiceAnim, [4]);

        var tl2 = gsap.timeline({onUpdate:UpdateStage });
        //tl2.set( DiceLandMaskArray[3], { x:-270, y:115 });
        tl2.call( this.PlayDiceAnim, [3, "diceRoll2" ]);
        tl2.to( this.DiceContainerArray[3], {x:270, scaleX:0.94, scaleY:0.94, duration:1.1, ease: "power1.out", delay:0.1 });
        tl2.to( this.DiceContainerArray[3], {y:90, rotation:this.DegreesToRadians(9), duration:1.1, ease: CustomEase.create("custom", BounceEase2),}, "-=1.1");
        tl2.set( DiceSpin1Array[3], { alpha:0 },"-=0.2");
        tl2.set( DiceStaticArray[3], { alpha:1 },"-=0.2");
        //tl2.to( DiceLandMaskArray[3], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl2.to( DiceBlurBGArray[3], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl2.call( this.StopDiceAnim, [3]);

        var tl3 = gsap.timeline({onUpdate:UpdateStage });
        //tl3.set( DiceLandMaskArray[2], { x:-310, y:35 });
        tl3.call( this.PlayDiceAnim, [2, "diceRoll1" ]);
        tl3.to( this.DiceContainerArray[2], {x:310, scaleX:0.86, scaleY:0.86, duration:0.9, ease: "power3.out", delay:0.12 });
        tl3.to( this.DiceContainerArray[2], {y:10, rotation:this.DegreesToRadians(10), duration:0.9, ease: CustomEase.create("custom", BounceEase1)}, "-=0.9");
        tl3.set( DiceSpin1Array[2], { alpha:0 },"-=0.2");
        tl3.set( DiceStaticArray[2], { alpha:1 },"-=0.2");
        //tl3.to( DiceLandMaskArray[2], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl3.to( DiceBlurBGArray[2], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl3.call( this.StopDiceAnim, [2]);

        var tl4 = gsap.timeline({onUpdate:UpdateStage });
        //tl4.set( DiceLandMaskArray[1], { x:20, y:155 });
        tl4.call( this.PlayDiceAnim, [1, "diceRoll2" ]);
        tl4.to( this.DiceContainerArray[1], {x:-20, scaleX:0.94, scaleY:0.94, duration:0.8, ease: "power1.out", delay:0.2 });
        tl4.to( this.DiceContainerArray[1], {y:130, rotation:this.DegreesToRadians(4), duration:0.8, ease: CustomEase.create("custom", BounceEase3)}, "-=0.8");
        tl4.set( DiceSpin1Array[1], { alpha:0 },"-=0.2");
        tl4.set( DiceStaticArray[1], { alpha:1 },"-=0.2");
        //tl4.to( DiceLandMaskArray[1], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl4.to( DiceBlurBGArray[1], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl4.call( this.StopDiceAnim, [1]);

        var tl5 = gsap.timeline({onUpdate:UpdateStage });
        //tl5.set( DiceLandMaskArray[0], { x:-100, y:205 });
        tl5.call( this.PlayDiceAnim, [0, "diceRoll1" ]);
        tl5.to( this.DiceContainerArray[0], {x:100, scaleX:0.97, scaleY:0.97, duration:1.1, ease: "power2.out", delay:0.3 });
        tl5.to( this.DiceContainerArray[0], {y:180, rotation:this.DegreesToRadians(17), duration:1.1, ease: CustomEase.create("custom", BounceEase5)}, "-=1.1");
        tl5.set( DiceSpin1Array[0], { alpha:0 },"-=0.2");
        tl5.set( DiceStaticArray[0], { alpha:1 }, "-=0.2");
        //tl5.to( DiceLandMaskArray[0], {scaleX:2, scaleY:1, duration:0.7, ease: "power1.out" }, "-=0.2");
        //tl5.to( DiceBlurBGArray[0], {alpha:0, scaleY:1, duration:0.3, ease: "power1.out" }, "-=0.3");
        tl5.call( this.StopDiceAnim, [0]);

    };





    //--------------------------------------------------------------------------------

    CDiceTests.prototype.DelayStarExplosion			=	function( container ) {

        gsap.delayedCall( 0.5, this.LetterStarExplosion, [ container ], this );

    };


    //--------------------------------------------------------------------------------

    CDiceTests.prototype.LetterStarExplosion			=	function( container ) {

        console.log( "Hello" );

        var starArray = [];

        for (var i = 0; i < 15; i++) {

            var star = 	Renderer.CreateSprite( Game.ScrabbleSheet, "GreenStar", { scaleX:0, scaleY:0, position:{X:0,Y:0},  parent:container});

            var randRot = (10 + Math.floor(Math.random() * 50)) * 0.174533;

            var randAngle  = Math.floor(Math.random() * 360);
            var randSpread = Math.floor(Math.random() * 60);
            var randScale  = (Math.random()) + 0.1;
            var randDrop   = (Math.floor(Math.random() * 60)) + 50;
            var randTime   = ((Math.random()) / 3) + 0.3;

            var randXpos = star.x + Math.cos(randAngle) * (120 + randSpread);
            var randYpos = star.y + Math.sin(randAngle) * (120 + randSpread);

            //console.log( "randRot :: " + randRot);
            //console.log( "randScale :: " + randScale);
            //console.log( "randDrop :: " + randDrop);
            //console.log( "randTime :: " + randTime);


            var tl = gsap.timeline({onUpdate:UpdateStage});
            tl.to( star, { x: randXpos, y: randYpos, scaleX: randScale, scaleY: randScale, duration:randTime, delay:0.2, ease:"power1.out", rotation:randRot, onUpdate:UpdateStage});
            tl.to( star, { y: randYpos+randDrop, duration: 0.6, ease:"power3.in",onUpdate:UpdateStage},"-=0.3");
            tl.to( star, { alpha: 0, duration: 0.3, onUpdate:UpdateStage}, "-=0.1");
        }


    };


    //-----------------------------------------------------------------------------------------------
    //	Public statics.
    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.CDiceTests	=	CDiceTests;

    //-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------
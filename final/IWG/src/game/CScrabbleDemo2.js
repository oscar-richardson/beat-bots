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

    //	Game data.
    //var BTN_ARRAY  =  [];

    //	Functions.
    var	UpdateStage	=	function()
    {
        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------
    //	Object definition.
    //-----------------------------------------------------------------------------------------------

    var CScrabbleDemo2	=	function( stage )
    {
        //	Make a note of the stage.
        TheStage		=	stage;

        this.DemoContainer			=	Renderer.CreateContainer( );
        this.PlayContainer			=	Renderer.CreateContainer( );
        this.PlayContainer.SetPosition( -18, 0);

        this.ScrabbleBG	=	Renderer.CreateSprite( Game.ScrabbleSplashSheet, "ScrabbleSplash", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.DemoContainer});
        this.Logo	    =	Renderer.CreateSprite( Game.ScrabbleSplashSheet, "Logo", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.DemoContainer});
        //this.BoostGlow	=	Renderer.CreateSprite( Game.ScrabbleSplashSheet, "Boost", { alpha:0, scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.DemoContainer});
        this.Boost	    =	Renderer.CreateSprite( Game.ScrabbleSplashSheet, "Boost", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.DemoContainer});
        this.PrizeMeter	=	Renderer.CreateSprite( Game.ScrabbleSplashSheet, "PrizeMeter", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.DemoContainer});

        this.DemoContainer.addChild( this.PlayContainer );

        //var glowFilter    = new PIXI.filters.GlowFilter();

        //this.BoostGlow.filters = [glowFilter];


        //glowFilter.color            = 0x9ddb73;
        //glowFilter.distance         = 35;
        //glowFilter.outerStrength    = 5;
        //glowFilter.innerStrength    = 5;




        this.BoostHL	=	Renderer.CreateSprite( Game.ScrabbleSheet, "Boost", { alpha:0.7, scaleX:1, scaleY:1, position:{X:-18,Y:0},  parent:this.DemoContainer});


        this.MaskRect = new PIXI.Graphics();
        this.MaskRect.beginFill(0xFF0000);
        this.MaskRect.drawRect(0, 0, 60, 210);
        this.MaskRect.rotation = 0.3;
        this.DemoContainer.addChild(this.MaskRect);

        this.MaskRect.SetPosition(-340, -162);

        this.BoostHL.mask = this.MaskRect;


        //var t2 = gsap.timeline({delay:1.5, repeat:-1, repeatDelay:6, onUpdate:UpdateStage });
        //t2.to( this.BoostGlow, {alpha:0.6, duration:0.5, ease: "none" });
        //t2.to( this.BoostGlow, {alpha:0, duration:0.5, ease: "none" });
        //t2.to( this.BoostGlow, {alpha:0.6, duration:0.5, ease: "none" });
        //t2.to( this.BoostGlow, {alpha:0, duration:0.5, ease: "none" });



        this.Play_P_Shadow	=	Renderer.CreateSprite( Game.ScrabbleSheet, "Play_P_Shadow", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.PlayContainer});
        this.Play_L_Shadow	=	Renderer.CreateSprite( Game.ScrabbleSheet, "Play_L_Shadow", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.PlayContainer});
        this.Play_A_Shadow	=	Renderer.CreateSprite( Game.ScrabbleSheet, "Play_A_Shadow", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.PlayContainer});
        this.Play_Y_Shadow	=	Renderer.CreateSprite( Game.ScrabbleSheet, "Play_Y_Shadow", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.PlayContainer});

        this.Play_P	=	Renderer.CreateSprite( Game.ScrabbleSheet, "Play_P", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.PlayContainer});
        this.Play_L	=	Renderer.CreateSprite( Game.ScrabbleSheet, "Play_L", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.PlayContainer});
        this.Play_A	=	Renderer.CreateSprite( Game.ScrabbleSheet, "Play_A", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.PlayContainer});
        this.Play_Y	=	Renderer.CreateSprite( Game.ScrabbleSheet, "Play_Y", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.PlayContainer});

        this.PlayShadowArray = [ this.Play_P_Shadow, this.Play_L_Shadow, this.Play_A_Shadow, this.Play_Y_Shadow ];
        this.PlayArray = [ this.Play_P, this.Play_L, this.Play_A, this.Play_Y ];
        //this.PlayYOffsetArray = [ -8, -4, 4, 8 ];
        this.PlayYOffsetArray = [ 0,0,0,0 ];

        for( var k=0; k < 100; k++ ) {

            gsap.delayedCall( 2 + (k * 4), this.PlayPrompt, [  ], this );

        }


        //var tl2 = gsap.timeline({delay:1.5, repeat:-1, repeatDelay:4, onUpdate:UpdateStage });
        //tl2.to( this.PlayArray, { y:-34, stagger:0.07,  duration:0.4, ease: "power1.inOut" });
       // tl3.to( this.PlayShadowArray[i], { y:34, x:this.PlayYOffsetArray[i], delay:i * 0.07,  duration:0.4, ease: "power1.inOut" });
        //tl2.to( this.PlayArray, { y:0, stagger:0.07,  duration:0.4, ease: "power1.out"}, "-=0.3" );



        //gsap.to( this.PlayArray, { delay:1,  y:-23, stagger:0.05,  duration:0.3, ease: "power2.out", onUpdate:UpdateStage});


        /*
        this.TileContainer			=	Renderer.CreateContainer( );
        this.TileContainer.SetPosition( -40, 20 );
        this.TileContainer.alpha = 0;
        this.TileContainer.rotation = this.DegreesToRadians(-22);
        this.TileContainer.SetScale(0.62);

        this.BoardTileContainer     =	Renderer.CreateContainer( );
        this.StarContainer          =	Renderer.CreateContainer( );


        //gsap.set( this.TileContainer, { pixi: {skewX:10, skewY:-40, blurX:3, blurY:3 }});


        this.ScrabbleBG	=	Renderer.CreateSprite( Game.ScrabbleSheet, "TempBG", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.DemoContainer});
        this.RackTile	=	Renderer.CreateSprite( Game.ScrabbleSheet, "RackTile", { scaleX:1, scaleY:1, position:{X:-88,Y:89},  parent:this.DemoContainer});


        this.TileSide	=	Renderer.CreateSprite( Game.ScrabbleSheet, "TileSide", { scaleX:0.76, scaleY:0.85, position:{X:0,Y:0},  parent:this.TileContainer});
        this.BlankTile	=	Renderer.CreateSprite( Game.ScrabbleSheet, "Letter_R", { scaleX:0, scaleY:1, position:{X:0,Y:0},  parent:this.TileContainer});
        this.TileBack	=	Renderer.CreateSprite( Game.ScrabbleSheet, "LetterBack", { scaleX:0.2, scaleY:1, position:{X:0,Y:0},  parent:this.TileContainer});



        this.DemoContainer.addChild( this.BoardTileContainer, this.StarContainer, this.TileContainer );

        c


        var tl = gsap.timeline({delay:1.5, repeat:-1, repeatDelay:4, onUpdate:UpdateStage });


        tl.to( this.RackTile, {x:-40, y:20 ,scaleX:0.3, scaleY:1.2, rotation:this.DegreesToRadians(-26), duration:0.1, delay:1 , ease: "none" });
        tl.set( this.RackTile, {alpha:0});
        tl.set( this.TileContainer, {alpha:1});
        tl.to( this.TileBack, {scaleX:0, duration:0.01, ease: "none" });
        tl.to( this.BlankTile, {scaleX:1, duration:0.1, ease: "none" } );
        tl.to( this.BlankTile, {scaleX:0, duration:0.1, ease: "none" } );
        tl.to( this.TileBack, {scaleX:1, duration:0.1, ease: "none" });
        tl.to( this.TileBack, {scaleX:0, duration:0.1, ease: "none" });
        tl.to( this.BlankTile, {scaleX:1, duration:0.1, ease: "none" });
        tl.to( this.BlankTile, {scaleX:0, duration:0.1, ease: "none" } );
        tl.to( this.TileBack, {scaleX:1, duration:0.1, ease: "none" });
        tl.to( this.TileBack, {scaleX:0, duration:0.1, ease: "none" });
        tl.to( this.BlankTile, {scaleX:1, duration:0.1, ease: "none" });
        tl.to( this.TileContainer, {x:140, y:-190 ,scaleX:1.5, scaleY:1.5, rotation:this.DegreesToRadians(5), duration:0.6, ease:"sine.out" },"-=1");

        //tl.to( this.TileContainer, {x:140, y:-190 ,scaleX:1.5, scaleY:1.5, rotation:this.DegreesToRadians(5), duration:0.6, ease:"sine.out" },"-=1");
        tl.to( dropShadowFilter, {distance:80, alpha:0.2, duration:0.6, },"-=1.6");
        tl.set(this.StarContainer, {x:-106, y:-252} );
        tl.call(this.LetterStarExplosion, [ this.StarContainer ] );
        tl.to( this.TileContainer, {x:-106, y:-255 ,scaleX:0.8, scaleY:0.8,  rotation:this.DegreesToRadians(0), duration:0.3, ease:"power1.out"});
        tl.to( dropShadowFilter, {distance:15, alpha:0.5, duration:0.3, },"-=0.3");
        tl.to( this.TileContainer, {scaleX:1, scaleY:1, duration:0.3, ease:"back.out(3)"});
        tl.call(this.PlaceLettersOnBoard, [ this.BoardTileContainer ] );
        //     >>>>tl.call(  this.DelayStarExplosion, [ this.StarContainer ] );
        tl.to( this.TileContainer, {rotation:this.DegreesToRadians( 1080 ), scaleX:1, scaleY:1, duration:1.4, ease:"power2.inOut" }, "+=0.7");

        gsap.delayedCall( 5, this.LetterStarExplosion, [ this.StarContainer ], this );


        */




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



    CScrabbleDemo2.prototype.Reposition		=	function( scale )
    {


        this.DemoContainer.SetPosition( TheStage.View.HalfWidth, TheStage.View.HalfHeight );
        this.DemoContainer.SetScale( scale );

        UpdateStage();
    };



    //--------------------------------------------------------------------------------

    CScrabbleDemo2.prototype.DegreesToRadians			=	function( degree ) {

        var rads = degree * 0.0174533;

        console.log( "degree :: " + rads );

        return rads;

    };

    //--------------------------------------------------------------------------------

    CScrabbleDemo2.prototype.PlayPrompt			=	function( container ) {

        for (var i = 0; i < 4; i++) {

            var tl3 = gsap.timeline({ onUpdate:UpdateStage });
            tl3.to( this.PlayArray[i], { y:-23, delay:i * 0.1,  duration:0.4, ease: "power1.inOut" });
            tl3.to( this.PlayArray[i], { y:0, duration:0.2, ease: "power1.in"});
            tl3.to( this.PlayArray[i], { y:-23, duration:0.4, delay:0.2, ease: "power1.inOut" });
            tl3.to( this.PlayArray[i], { y:0, duration:0.2, ease: "power1.in"});

            var tl4 = gsap.timeline({  onUpdate:UpdateStage });
            tl4.to( this.PlayShadowArray[i], { y:16, x:this.PlayYOffsetArray[i], delay:i * 0.1, scaleX:1.25, alpha:0, duration:0.4, ease: "power1.inOut" });
            tl4.to( this.PlayShadowArray[i], { y:0, x:0, alpha:1, scaleX:1, duration:0.2, ease: "power1.in"});
            tl4.to( this.PlayShadowArray[i], { y:16, x:this.PlayYOffsetArray[i], scaleX:1.25, alpha:0, delay:0.2, duration:0.4, ease: "power1.inOut" });
            tl4.to( this.PlayShadowArray[i], { y:0, x:0, alpha:1, scaleX:1, duration:0.2, ease: "power1.in"});

        }

        var tl = gsap.timeline({ onUpdate:UpdateStage });
        tl.to( this.MaskRect, {x:400, duration:0.9, ease: "none" });
        tl.set( this.MaskRect, {x:-350  });
        tl.to( this.MaskRect, {x:400, duration:0.9, ease: "none" });
        tl.set( this.MaskRect, {x:-350  });

    };


    //--------------------------------------------------------------------------------

    CScrabbleDemo2.prototype.LetterStarExplosion			=	function( container ) {

        /*
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
        */


    };




    //--------------------------------------------------------------------------------

    CScrabbleDemo2.prototype.PlaceLettersOnBoard			=	function( container ) {

        /*
        var letterArray = [];

        var letterPostionArray = [{X:-271, Y:-117}, {X:-128, Y:-58}, {X:-149, Y:-37},  {X:-54, Y:-179}];

        var letterScaleArray = [ 0.31, 0.33, 0.33, 0.28];

        for (var i = 0; i < 4; i++) {

            var letterR = Renderer.CreateSprite(Game.ScrabbleSheet, "Tile_R", {
                scaleX: 0.7,
                scaleY: 0.7,
                position: {X:-106, Y:-252},
                parent:container
            });


            var tl = gsap.timeline({onUpdate:UpdateStage});
            tl.to( letterR, { x: letterPostionArray[i].X, y: letterPostionArray[i].Y, scaleX: letterScaleArray[i], scaleY: letterScaleArray[i], duration:0.6, delay:1.1 + (0.24 * i), ease:"power2.out", onUpdate:UpdateStage});

            UpdateStage();
        }

        //var randRot = (10 + Math.floor(Math.random() * 50)) * 0.174533;
        */

    };



    //-----------------------------------------------------------------------------------------------
    //	Public statics.
    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.CScrabbleDemo2	=	CScrabbleDemo2;

    //-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------
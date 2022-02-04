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

    var CScrabbleDemo1	=	function( stage )
    {
        //	Make a note of the stage.
        TheStage		=	stage;

        this.DemoContainer			=	Renderer.CreateContainer( );
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

        var dropShadowFilter    = new PIXI.filters.DropShadowFilter();

        this.TileContainer.filters = [dropShadowFilter];

        dropShadowFilter.rotation = 135;
        dropShadowFilter.distance = 15;
        dropShadowFilter.alpha = 0.5;


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
        tl.to( this.TileContainer, {x:140, y:-190 ,scaleX:1.5, scaleY:1.5, /*pixi:{skewX:0, skewY:0, blurX:0, blurY:0},*/ rotation:this.DegreesToRadians(5), duration:0.6, ease:"sine.out" },"-=1");

        tl.to( this.TileContainer, {x:140, y:-190 ,scaleX:1.5, scaleY:1.5, /*pixi:{skewX:0, skewY:0, blurX:0, blurY:0},*/ rotation:this.DegreesToRadians(5), duration:0.6, ease:"sine.out" },"-=1");
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



    CScrabbleDemo1.prototype.Reposition		=	function( scale )
    {


        this.DemoContainer.SetPosition( TheStage.View.HalfWidth, TheStage.View.HalfHeight );
        this.DemoContainer.SetScale( scale );

        UpdateStage();
    };



    //--------------------------------------------------------------------------------

    CScrabbleDemo1.prototype.DegreesToRadians			=	function( degree ) {

        var rads = degree * 0.0174533;

        console.log( "degree :: " + rads );

        return rads;

    };

    //--------------------------------------------------------------------------------

    CScrabbleDemo1.prototype.DelayStarExplosion			=	function( container ) {

        gsap.delayedCall( 0.5, this.LetterStarExplosion, [ container ], this );

    };


    //--------------------------------------------------------------------------------

    CScrabbleDemo1.prototype.LetterStarExplosion			=	function( container ) {

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




    //--------------------------------------------------------------------------------

    CScrabbleDemo1.prototype.PlaceLettersOnBoard			=	function( container ) {

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

    };



    //-----------------------------------------------------------------------------------------------
    //	Public statics.
    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.CScrabbleDemo1	=	CScrabbleDemo1;

    //-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------
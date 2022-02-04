//-----------------------------------------------------------------------------------------------

(function()
{
    "use strict";

    //-----------------------------------------------------------------------------------------------
    //	const-ish.
    //-----------------------------------------------------------------------------------------------


    var Game			=	ProjectX.Game;		//	Game object shortcut.

    var	TheStage		=	null;

    var LEFTBEAM_OFFSET_X               = 124,
        LEFTBEAM_OFFSET_Y               = 0,
        RIGHTBEAM_OFFSET_X              = 124,
        RIGHTBEAM_OFFSET_Y              = 0;



    //-----------------------------------------------------------------------------------------------

    //	Set local paths to external objects.
    var CMidGround 	=	function( stage )
    {

        TheStage = stage;


        //	Let's start with a container...
        //this.MidGroundContainer = new createjs.Container();
        //this.MidGroundContainer.alpha = 1;


        /// Left Border panel
        this.LeftBeam = new createjs.Sprite(Game.PanelsTextSheet, "Beams");
        //this.LeftBeam.SetPosition(-300,0);


        /// Right Border panel
        this.RightBeam = new createjs.Sprite(Game.PanelsTextSheet, "Beams");
        //this.RightBeam.SetPosition(300, 0);



        //this.RightBeam.setTransform(inchlib.HalfViewWidth, -inchlib.HalfViewHeight, -1);

        TheStage.addChild( this.LeftBeam, this.RightBeam  );





        //	Add the beehive to the stage...
        TheStage.addChild( this.MidGroundContainer );

        //	...& make sure we're repositionable.
        ProjectX.SetRepositionable( this );


    };

    CMidGround.prototype.Reposition		=	function()
    {

        var width              =   TheStage.View.Width,
            half_height             =   TheStage.View.HalfHeight,
            scale                   =   ProjectX.MainView.ScaleFactor;

        //this.LeftBeam.SetPosition( (LEFTBEAM_OFFSET_X * scale) + half_width , (LEFTBEAM_OFFSET_Y * scale) + half_height );
        this.LeftBeam.SetPosition( LEFTBEAM_OFFSET_X * scale, (LEFTBEAM_OFFSET_Y * scale) + half_height );
        this.LeftBeam.SetScale( scale * 0.84 );

        this.RightBeam.SetPosition( width - (RIGHTBEAM_OFFSET_X * scale), (RIGHTBEAM_OFFSET_Y * scale) + half_height );
        this.RightBeam.SetScale( -scale * 0.84, scale * 0.84);
        //this.RightBeam.scaleX	= -1;

        TheStage.SetDirty();
    };




    //-----------------------------------------------------------------------------------------------
    //	Static variables.
    //-----------------------------------------------------------------------------------------------

    CMidGround.VERSION			=	'0_0_1';

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.CMidGround		=	CMidGround;
}());

//-----------------------------------------------------------------------------------------------

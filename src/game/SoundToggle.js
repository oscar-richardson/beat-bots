//-----------------------------------------------------------------------------------------------

(function()
{
    "use strict";

    //-----------------------------------------------------------------------------------------------
    //	const-ish.
    //-----------------------------------------------------------------------------------------------

    //var	LS_SOUND_TOGGLE_SCALE		=	0.5;

    //-----------------------------------------------------------------------------------------------
    //	Private static data.
    //-----------------------------------------------------------------------------------------------

    var Game			=	ProjectX.Game;		//	Game object shortcut.

    var	IDSound			=	null,
        SpriteSheet     =   null;

    var	UpdateFn		=	function(){};

    //-----------------------------------------------------------------------------------------------
    //	Object definition.
    //-----------------------------------------------------------------------------------------------

    //	Set local paths to external objects.
    var SoundToggle	=	function( sound_id_name, position, scale, parent_container, update_fn )
    {
        //	Make a note of the update function...
        UpdateFn	=	update_fn;

        //	...the sprite sheet...
        SpriteSheet		=	Game.ButtonsSheet;

        //	...& the ID sound.
        IDSound			=	sound_id_name;

        //	We want event dispatching capabilities for this object.
        createjs.EventDispatcher.initialize( SoundToggle.prototype );

        //	Let's start with handy container.
        this.Container			=	new	createjs.Container();
        this.Container.SetPosition( position );
        this.Container.SetScale( scale );

        //	Let's have an audio state sprite.
        this.AudioSprite    =   new createjs.Sprite( Game.ButtonsSheet, "audioBtn0001" );
        this.Container.addChild( this.AudioSprite );

        //	Let's attach a listener too.
        this.Mute	=	false;
        this.Container.on( "click", this.HandleAudioToggle, this, false );

        //	Finally, let's add stuff to the parent's container.
        parent_container.addChild( this.Container );

        //	We're done.
        console.log( "Created SoundToggle" );
    };

    //-----------------------------------------------------------------------------------------------
    //	Public.
    //-----------------------------------------------------------------------------------------------

    SoundToggle.prototype.Show		=	function( state )
    {
        //	Toggle the button image.
        if( state )	TweenLite.to( this.Container, 0.5, { alpha:1, onUpdate:UpdateFn } );
        else		TweenLite.to( this.Container, 0.5, { alpha:0, onUpdate:UpdateFn } );
    };

    //-----------------------------------------------------------------------------------------------

    SoundToggle.prototype.Enable		=	function( state )
    {
        this.Container.mouseEnabled	=	state;
        this.Container.alpha		=	state ? 1.0 : 0.5;
    };

    //-----------------------------------------------------------------------------------------------

    SoundToggle.prototype.Expand				=	function()
    {
        TweenMax.to( this.Container, 1, { y:inchlib.ViewHeight * 0.16, ease: Quad.easeOut}  );
    };

    //-----------------------------------------------------------------------------------------------

    SoundToggle.prototype.HandleAudioToggle	=	function( event )
    {
        //	Do the thing I'm not sure about.
        Game.CheckFirstTap();

        //	Toggle the mute state...
        this.Mute			=	!this.Mute;

        //	...the associated sprite...
        this.AudioSprite.gotoAndStop( this.Mute ? "audioBtn0002" : "audioBtn0001" );

        //	...& make sure the stage updates.
        UpdateFn();

        //	Set the audio mute state...
        ProjectX.Audio.SetMute( this.Mute );

        //	...& if we're unmuting, let's play a sound effect to acknowledge it.
        if( !this.Mute)
        {
            ProjectX.Audio.Play(  IDSound  );
        }
    };

    //-----------------------------------------------------------------------------------------------
    //	Static variables.
    //-----------------------------------------------------------------------------------------------

    SoundToggle.VERSION			=	'0_0_1';

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.SoundToggle		=	SoundToggle;
}());

//-----------------------------------------------------------------------------------------------

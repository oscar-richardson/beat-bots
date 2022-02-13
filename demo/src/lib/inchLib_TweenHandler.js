//-----------------------------------------------------------------------------------------------
//	Inchinn TweenHandler.
//
//	This code piggy backs onto TweenMax, so is pretty useless without that library.
//
//-----------------------------------------------------------------------------------------------

inchlib					=	window.inchlib || {};
inchlib.TweenHandler	=	inchlib.TweenHandler || {};

//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Private.
	//-----------------------------------------------------------------------------------------------

	var	TempTimeline	=	null,
		TweenHandler	=	inchlib.TweenHandler;

	//-----------------------------------------------------------------------------------------------

	var	TickFunctions	=	[],
		TickHandler		=	function()
		{
			for( var c0=0; c0<TickFunctions.length; c0++ )
			{
				TickFunctions[c0]();
			}
		};

	//-----------------------------------------------------------------------------------------------

	var	HasListener		=	false,
		EnableListener	=	function( state, tick_fn )
		{
			//	Are we in the correct state?
			if( HasListener!==state )
			{
				//	Nope, add/remove the listener...
				if( state )
				{
					console.log( "Adding tick listener" );
					TweenMax.ticker.addEventListener( "tick", tick_fn );
				}
				else
				{
					console.log( "Removing tick listener" );
					TweenMax.ticker.removeEventListener( "tick", tick_fn );
				}

				//	...& make a note of the state.
				HasListener	=	state;
			}
		};

	//-----------------------------------------------------------------------------------------------
	//	Statics.
	//-----------------------------------------------------------------------------------------------

	TweenHandler.AddTickFunction	=	function( fn )
	{
		TickFunctions.push( fn );
	};

	//-----------------------------------------------------------------------------------------------

	TweenHandler.StartListening		=	function()
	{
		EnableListener( true, TickHandler );
	};

	//-----------------------------------------------------------------------------------------------

	TweenHandler.PauseTweens		=	function( pause )
	{
		//	Pause/Unpause the current tweens...
		//		var	temp_timeline	=	TimelineLite.exportRoot( {omitDelayedCalls:false} );

		if( pause )
		{
			if( TempTimeline===null )
			{
				console.log( "Pausing Tweens" );
				TempTimeline	=	TimelineLite.exportRoot( null, false );;
				TempTimeline.pause( null, false );
			}
			else
			{
				console.log( "Tweens already paused" );
			}
		}
		else
		{
			if( TempTimeline!==null )
			{
				console.log( "Resuming Tweens" );
				TempTimeline.resume();
				TempTimeline	=	null;
			}
			else
			{
				console.log( "No tweens to unpause" );
			}
		}

		//	...& enable/disable the listener.
		//		EnableListener( !pause );
	};

	//-----------------------------------------------------------------------------------------------
}());


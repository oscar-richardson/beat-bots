//	Inchinn harness - Wraps createjs.

//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	const-ish.
	//-----------------------------------------------------------------------------------------------

	var	NUM_DEBUG_STRINGS		=	7; //13;

	var EXPECTED_FPS            =   30,               //  Frame-time threshold above which we will auto pause (in milliseconds)
		SETTLE_COUNT			=	30,
		AV_SCALAR_NORMAL		=	6,
		AV_SCALAR_HIGH			=	10,
		AV_DELTA_CLAMP			=	1.2;

	var PLATFORM_SAFARI_IOS     = 0,
		PLATFORM_CHROME_IOS     = 1,
		PLATFORM_CHROME_ANDROID = 2,
		PLATFORM_SAFARI_BB      = 3,
		PLATFORM_WINDOWS_PHONE  = 4;

	//	Pause states.
	var	INCHLIB_PS_NONE			=	0,
		INCHLIB_PS_SUSPENDED	=	1,
		INCHLIB_PS_PAUSED		=	2;

	//-----------------------------------------------------------------------------------------------

	var inchlib 	= function ()
		{
			//	If an instance exists, then return it rather than creating a new one.
			if( typeof inchlib.instance === "object" )
			{
				return inchlib.instance;
			}

			//	Nothing exists yet, so this one will be our singleton instance.
			inchlib.instance	=	this;
		},
		_inchlib	=	new	inchlib();		//	Create a private instance of the library.

	//-----------------------------------------------------------------------------------------------
	//	Private statics.
	//-----------------------------------------------------------------------------------------------

	var	PauseFunction		=	null,
		PauseOverlay		=	null,
		PauseState			=	INCHLIB_PS_NONE,
		SetPauseState		=	function( state )
		{
			PauseState	=	state;
			inchlib.SetDebugText( NUM_DEBUG_STRINGS-2, "Pause State: "+PauseState )

			if( PauseFunction != null )
			{
				PauseFunction( (PauseState==INCHLIB_PS_PAUSED) );
			}
		};

	//-----------------------------------------------------------------------------------------------
	//	Public statics.
	//-----------------------------------------------------------------------------------------------

	inchlib.HalfViewHeight	=	0;
	inchlib.HalfViewWidth	=	0;
	inchlib.TickFunction	=	null;
	inchlib.ViewHeight		=	0;
	inchlib.ViewWidth		=	0;
	inchlib.ViewScaleFactor	=	0;
	inchlib.VERSION			=	'0.0.7';
	inchlib.STAGE			=	null;

	//-----------------------------------------------------------------------------------------------

	var	av_time_total			=	0,
		av_time					=	0,
		av_time_scaler			=	AV_SCALAR_NORMAL,
		av_scaler_string		=	"N",
		detect_pulse			=	false,
		do_autopause			=	false,
		do_update				=	false,
		heartbeats				=	1,
		largest_tick_time		=	0,
		last_fps				=	EXPECTED_FPS,
		last_time				=	createjs.Ticker.getEventTime(),
		tick_function			=	null,
		tick_time				=	0,
		tick_zero				=	createjs.Ticker.getTicks(),
		unpause_sfx				=	null,
		unpause_timeout			=	0,
		heartbeat				=	function( event )
		{
			//	Maybe execute the game's tick function.
			if( !event.paused && tick_function!=null )
			{
				tick_function();
			}

			//	Maybe update the stage.
			if( do_update )	inchlib.STAGE.update();

			//	Do we care about slow downs?
			if( do_autopause )
			{
				//	Yes we do, so let's continually monitor the situation.
				var	clamped_delta		=	Math.min( inchlib.TimeDelta*1.5, AV_DELTA_CLAMP ),
					event_time			=	createjs.Ticker.getEventTime(),
					kill_time			=	0,
					ticks_since_reset	=	createjs.Ticker.getTicks()-tick_zero;

				tick_time		=	Math.ceil( event_time - last_time );
				last_time		=	event_time;

				if( tick_time < 0 )	tick_time	=	0;

				av_time_total	+=	tick_time;
				av_time			=	Math.ceil(av_time_total / heartbeats);
				kill_time		=	Math.round((av_time * av_time_scaler * clamped_delta)*100)/100;

				inchlib.SetDebugText( 4, "av_time: "+av_time  );
				inchlib.SetDebugText( 5, "tick_time: "+tick_time  );
				inchlib.SetDebugText( 7, "kill_time: "+kill_time+" "+av_scaler_string  );

				if( detect_pulse===true && heartbeats>SETTLE_COUNT )
				{
					if( tick_time > largest_tick_time )	largest_tick_time=tick_time;
					inchlib.SetDebugText( 6, ">tick_time: "+largest_tick_time  );

					if( tick_time > kill_time )
					{
						inchlib.SetDebugText( 8, "tick_time when paused: "+tick_time  );

						if( isChrome )
						{
							unpause_timeout = 500;
						}
						else
						{
							unpause_timeout = 0;
						}
						inchlib.SetDebugText( NUM_DEBUG_STRINGS-3, "Pause is pulse triggered"  );
						inchlib.PauseGame( true );
					}
				}
			}

			//	Find the current fps...
			var	current_fps		=	createjs.Ticker.getMeasuredFPS(),
				smoothed_fps	=	(last_fps+current_fps) * 0.5;

			//	...& adjust the time delta.
			inchlib.TimeDelta	=	(inchlib.TargetFPS/smoothed_fps);
			if( inchlib.TimeDelta > 2.5 )	inchlib.TimeDelta	=	2.5;	//	Cap the delta.
			inchlib.SetDebugText( 1, "ActualFPS: "+smoothed_fps );
			inchlib.SetDebugText( 2, "TimeDelta: "+inchlib.TimeDelta );
			last_fps	=	current_fps;

			heartbeats++;
		};

	//-----------------------------------------------------------------------------------------------

	inchlib.CreateStage			=	function( canvas_name, canvas_width, canvas_height, params )// auto_clear, want_touch, want_update, want_autopause, debug )
	{
		var	debug		=	(params.WantDebug===undefined)	? false : params.WantDebug,
			want_touch	=	(params.WantTouch===undefined)	? true : params.WantTouch;


		//	Let's have a build number.
		var	build_number	=	1.9;

		//	Create the stage.
		inchlib.STAGE			=	new	createjs.Stage( canvas_name );
		inchlib.STAGE.autoClear	=	(params.AutoClear===undefined)	? false : params.AutoClear;

		//	Make a note of our screen dimensions.
		inchlib.ViewWidth		=	canvas_width;
		inchlib.ViewHeight		=	canvas_height;
		inchlib.ViewScaleFactor	=	Math.min( inchlib.ViewWidth / 480, inchlib.ViewHeight / 320) / 2;	//	We assume the original iPhone dimensions as our base device size.
		inchlib.HalfViewHeight	=	inchlib.ViewHeight * 0.5;
		inchlib.HalfViewWidth	=	inchlib.ViewWidth * 0.5;

		inchlib.ViewScaleFactor	=	Math.round(inchlib.ViewScaleFactor*100)/100;

		console.log( "inchlib.ViewHeight:      " + inchlib.ViewHeight );
		console.log( "inchlib.ViewWidth:       " + inchlib.ViewWidth );
		console.log( "inchlib.ViewScaleFactor: " + inchlib.ViewScaleFactor );

		//	Possibly make it touch compatible.
		if( want_touch )	createjs.Touch.enable( inchlib.STAGE );

		//	Possibly want auto pausing.
		do_autopause	=	(params.WantAutoPause===undefined)	? false : params.WantAutoPause;
		console.log( "do_autopause: "+do_autopause );

		//	Possibly want update.
		do_update		=	(params.WantUpdate===undefined) 	? true : params.WantUpdate;
		console.log( "do_update: "+do_update );

		//	Possibly want some handy HTML debug elements.
		if( debug )
		{
			//	We do!
			inchlib.CreateDebugElements();
		}
		else
		{
			//	We don't, so create a couple of function stubbs to avoid future hick ups.
			inchlib.SetDebugText	=	function( line, string )	{}
			inchlib.SetupButton		=	function( string, fn )		{}
		}

		//	Let's attempt to gauge the speed of the device.
		calculateJsBogoMips();

		//	Not doing anything with this now.
		//		inchlib.DetectBrowserEnvironment();
		//		inchlib.UpdateAutoPauseProfile();

		//	Set up frame rate expectancy.
		var	max_frame_rates	=	[ 10, 10, 15, 30 ],
			max_fps			=	EXPECTED_FPS; //max_frame_rates[ jsBogoMips.getEffectsLevel() ];

		//	Make a note of our best FPS & decide on our time delta.
		inchlib.TargetFPS	=	EXPECTED_FPS; //inchlib.OurAutoPauseProfile.ExpectedFPS;
		inchlib.TimeDelta	=	2.5; //(inchlib.TargetFPS/inchlib.TargetFPS);

		console.log( "Target FPS: "+inchlib.TargetFPS );
//		inchlib.SetDebugText( 3, "bogoMips: "+inchlib.calculatedBogoMips );

		//	Get the ticker running as fast as possible...
		createjs.Ticker.setFPS( 60 );
		createjs.Ticker.timingMode	=	createjs.Ticker.TIMEOUT;
//		createjs.Ticker.timingMode	=	createjs.Ticker.RAF_SYNCHED;

		//	...& add our main tick handler.
		createjs.Ticker.addEventListener( "tick", heartbeat );


		//	Allow external stuff to set the tick function.
		inchlib.SetTickFunction			=	function( fn )	{	tick_function=fn; this.SetPauseDetect(true);	};

		//	Allow external stuff to set some pause parameters.
		inchlib.SetPauseFunction		=	function( fn )	{	PauseFunction=fn; 								};
		inchlib.SetUnPauseSFX			=	function( sfx )	{	unpause_sfx=sfx;								};
		inchlib.SetPauseHighLoad		=	function()		{	av_time_scaler=AV_SCALAR_HIGH; av_scaler_string="H"; inchlib.ResetHeartbeat();	};
		inchlib.SetPauseNormalLoad		=	function()		{	av_time_scaler=AV_SCALAR_NORMAL; av_scaler_string="N"; inchlib.ResetHeartbeat();	};
		inchlib.SetPauseHighScalar		=	function( v )	{	AV_SCALAR_HIGH=v; inchlib.ResetHeartbeat();		};
		inchlib.SetPauseNormalScalar	=	function( v )	{	AV_SCALAR_NORMAL=v; inchlib.ResetHeartbeat();	};
		inchlib.SetPauseDeltaClamp		=	function( v )	{	AV_DELTA_CLAMP=v;								};
		inchlib.SetPauseDetect			=	function( s )
											{
												//	Are we becoming active?
												if( s )
												{
													//	Yep.
													inchlib.ResetHeartbeat();
												}

												//	Set the detection state.
												detect_pulse	=	s;
											};
		inchlib.ResetHeartbeat			=	function()
											{
												//	Reset the heartbeat variables.
												av_time				=	0;
												av_time_total		=	0;
												heartbeats			=	1;
												last_fps			=	EXPECTED_FPS;
												last_time			=	createjs.Ticker.getEventTime();
												tick_time			=	0;
												tick_zero			=	createjs.Ticker.getTicks();
												largest_tick_time	=	0;
											}


		//	Show the build number last.
		inchlib.SetDebugText( NUM_DEBUG_STRINGS-1, "BN: "+build_number );
	};

	//-----------------------------------------------------------------------------------------------

	inchlib.PauseGame			=	function( state )
	{
		//	Do we want to pause?
		if( state===true )
		{
			//	Yep & are we free to do so?
			if( PauseState!==INCHLIB_PS_PAUSED )
			{
				//	Yep, so pause...
				console.log( "Pausing." );
				SetPauseState( INCHLIB_PS_PAUSED );
				createjs.Ticker.setPaused( true );

				//	...remove the main tick handler...
				createjs.Ticker.removeEventListener( "tick", heartbeat );

				//	...show the default pause screen...
				inchlib.ShowPauseScreen();

				//	...make a note of the current sound state & mute regardless...
				var	sound_state	=	createjs.Sound.getMute();
				createjs.Sound.setMute( true );

				//	...create a listener...
				PauseOverlay.on	(
									"click",
									function()
									{
										//	Restore the sound state...
										createjs.Sound.setMute( sound_state );

										//	...& maybe acknowledge the click.
										if( unpause_sfx!=null )	createjs.Sound.play( unpause_sfx );

										//	Start the unpausing process.
										setTimeout	(
														function ()
														{
															//	Reset the heartbeat variables.
															inchlib.ResetHeartbeat();

															//	Uncache the main stage...
															inchlib.STAGE.uncache();

															//	...& get rid of the pause overlay.
															inchlib.STAGE.removeChild( PauseOverlay );

															//	...unpause...
															console.log( "UnPausing." );
															SetPauseState( INCHLIB_PS_NONE );
															createjs.Ticker.setPaused( false );

															//	...& finally restore the tick handler.
															createjs.Ticker.addEventListener( "tick", heartbeat );

															inchlib.SetDebugText( NUM_DEBUG_STRINGS-3, "" );
														},
														unpause_timeout
													);
									},
									null, true
								);

				//	...& finally update the stage so we can see the pause screen.
				inchlib.STAGE.update();
			}
		}
		else
		{
			//	Nope, we're attempting to unpause, but as something else handles that, let's just update the display for now.
			inchlib.STAGE.update();
		}
	};

	//-----------------------------------------------------------------------------------------------

	inchlib.ShowPauseScreen			=	function()
	{
		//	Do we have an overlay screen yet?
		if( PauseOverlay === null )
		{
			//	Nope, so create one...
			PauseOverlay	=	new	createjs.Container();

			//	...layer on a dimmed ovarlay...
			var	overlay		=	new	createjs.Shape();
			overlay.alpha	=	0.75;
			overlay.graphics.beginFill("#0").drawRect( 0,0,inchlib.ViewWidth,inchlib.ViewHeight).closePath();

			//	...with an icon...
			var	pause_icon	=	new createjs.Shape();
			pause_icon.graphics.f().s("#FFFFFF").ss(5, 1, 1).p("AFKAAQAACIhhBhQhgBhiJAAQiIAAhhhhQhghhAAiIQAAiIBghhQBhhgCIAAQCJAABgBgQBhBhAACIg");
			pause_icon.y	=	inchlib.HalfViewHeight;
			pause_icon.x	=	inchlib.HalfViewWidth;

			//	 ...& text borrowed from MattH...
			var	pause_text	=	new createjs.Shape();
			pause_text.graphics.f("#FFFFFF").s().p("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");
			pause_text.y = inchlib.HalfViewHeight;
			pause_text.x = inchlib.HalfViewWidth;

			//	...add it to the pause screen container...
			PauseOverlay.addChild( overlay, pause_icon, pause_text );
		}

		//	Add the pause overlay to the stage...
		inchlib.STAGE.addChild( PauseOverlay );

		//	...& cache it.
		inchlib.STAGE.cache( 0,0,inchlib.ViewWidth, inchlib.ViewHeight );
	};

	//-----------------------------------------------------------------------------------------------

	inchlib.CreateDebugElements		=	function()
	{
		var	element	=	document.createElement( 'div' );

		element.id = "Inchlib-Debug";
		document.body.appendChild( element );

		//	Create some text strings.
		inchlib.DebugText	=	new	Array( NUM_DEBUG_STRINGS );
		for( var c0=0; c0<NUM_DEBUG_STRINGS; c0++ )
		{
			inchlib.DebugText[c0]	=	document.createTextNode( "" );
			element.appendChild( inchlib.DebugText[c0] );
			element.appendChild( document.createElement('br') );
		}

		//	Create a debug button.
		inchlib.DebugButton		=	document.createElement( 'input' );
		element.appendChild( inchlib.DebugButton );

		inchlib.DebugButton.type	=	"button";
		inchlib.DebugButton.name	=	"Inchlib-Debug";
		inchlib.DebugButton.value	=	"-";

		inchlib.DebugElement				=	document.getElementById( 'Inchlib-Debug' );
		inchlib.DebugElement.style.position	=	'absolute';
		inchlib.DebugElement.style.left		=	'10px';
		inchlib.DebugElement.style.top		=	'10px';
		inchlib.DebugElement.style.color	=	'#00ffff';
//		inchlib.DebugElement.style.textShadow	=	"1px 1px 2 #0";

		inchlib.SetDebugText	=	function( line, string )	{	inchlib.DebugText[line].nodeValue=string;							}
		inchlib.SetupButton		=	function( string, fn )		{	inchlib.DebugButton.value=string; inchlib.DebugButton.onclick=fn;	}
	};

	//-----------------------------------------------------------------------------------------------

	var	isChrome	=	false,
		isFirefox	=	false,
		isIE		=	false,
		isOpera		=	false,
		isSafari	=	false;
	var	isAndroid	=	false,
		isiOS		=	false,
		isOSX		=	false;

	inchlib.DetectBrowserEnvironment		=	function()
	{
		isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
		// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
		isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
		isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
		// At least Safari 3+: "[object HTMLElementConstructor]"
		isChrome = ((navigator.userAgent.match('CriOS')) || !!window.chrome) && !isOpera; // Chrome 1+
		isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6

		if( isOpera )           inchlib.SetDebugText( 4, "Browser: Opera" );
		else if( isFirefox )    inchlib.SetDebugText( 4, "Browser: Firefox" );
		else if( isChrome )     inchlib.SetDebugText( 4, "Browser: Chrome" );
		else if( isSafari )     inchlib.SetDebugText( 4, "Browser: Safari" );
		else if( isIE )         inchlib.SetDebugText( 4, "Browser: IE" );
		else                    inchlib.SetDebugText( 4, "Browser: UNKNOWN" );

		inchlib.SetDebugText( 5, "OS: UNKNOWN [" + navigator.appVersion + "]" );
		if (navigator.appVersion.indexOf("Win")!=-1)  inchlib.SetDebugText( 5, "OS: Windows" );
		if (navigator.appVersion.indexOf("Mac")!=-1)  inchlib.SetDebugText( 5, "OS: MacOS" );
		if (navigator.appVersion.indexOf("X11")!=-1)  inchlib.SetDebugText( 5, "OS: UNIX" );
		if (navigator.appVersion.indexOf("Linux")!=-1)  inchlib.SetDebugText( 5, "OS: Linux" );

		isiOS = (navigator.appVersion.indexOf("Mac")!=-1);
		if( isChrome )
		{
			inchlib.OurPlatform = isiOS ? PLATFORM_CHROME_IOS : PLATFORM_CHROME_ANDROID;
			console.log( "Our platform = " + (isiOS ? "iOS/Chrome" : "Android/Chrome") );
		}
		else if( isSafari )
		{
			inchlib.OurPlatform = isiOS ? PLATFORM_SAFARI_IOS : PLATFORM_SAFARI_BB;
			console.log( "Our platform = " + (isiOS ? "iOS/Safari" : "Blackberry/Safari") );
		}
		else
		{
			inchlib.OurPlatform = PLATFORM_WINDOWS_PHONE;;
			console.log( "Our platform = Windows Mobile" );
		}
	};

	//-----------------------------------------------------------------------------------------------

	inchlib.UpdateAutoPauseProfile		=	function()
	{
		inchlib.AutoPauseProfiles = new Array();
		inchlib.AutoPauseProfiles[PLATFORM_SAFARI_IOS]      = { ExpectedFPS: max_fps };
		inchlib.AutoPauseProfiles[PLATFORM_SAFARI_BB]       = { ExpectedFPS: max_fps };
		inchlib.AutoPauseProfiles[PLATFORM_CHROME_IOS]      = { ExpectedFPS: max_fps };
		inchlib.AutoPauseProfiles[PLATFORM_CHROME_ANDROID]  = { ExpectedFPS: max_fps };
		inchlib.AutoPauseProfiles[PLATFORM_WINDOWS_PHONE]   = { ExpectedFPS: max_fps };

		console.log( "UpdateAutoPauseProfile, OurPlatform = " + inchlib.OurPlatform );
		inchlib.OurAutoPauseProfile = inchlib.AutoPauseProfiles[ inchlib.OurPlatform ];
		//		console.log( "UpdateAutoPauseProfile, min FPS = " + inchlib.OurAutoPauseProfile.MinAcceptableFPS );
	};

	//-----------------------------------------------------------------------------------------------

	/**
	 * calculateJsBogoMips
	 *
	 * determine the jsBogoMips value for this client
	 *
	 * @return {Number} jsBogoMips value
	 */
	function calculateJsBogoMips()
	{
		// get the initial time
		var startTime = (new Date()).getTime();

		// initialize the loop counter.  This is done by adding 0 + 0 to try to
		// simulate the time taken to accumulate the total in the loop
		var loops_per_sec = 0 + 0;

		// In an attempt to compensate for the time it takes to retrieve the time and the time it
		// takes to increment the counter, we calculate the difference between the first time we
		// got the time, and the second time
		var currentTime = (new Date()).getTime();
		var compensation = currentTime - startTime;

		// once more get the current time (in milliseconds) and add 1000 to it to determine the end time
		var endTime = (new Date()).getTime() + 1000;

		while (currentTime < endTime) {
			loops_per_sec++;
			currentTime = (new Date()).getTime();
		}

		inchlib.calculatedBogoMips = (loops_per_sec + (loops_per_sec * compensation)) / 1000000;

		return	inchlib.calculatedBogoMips;
	}

	//-----------------------------------------------------------------------------------------------
	//	Namespace
	//-----------------------------------------------------------------------------------------------

	window.inchlib			=	inchlib;

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------

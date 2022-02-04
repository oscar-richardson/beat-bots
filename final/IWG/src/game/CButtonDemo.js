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
	var BTN_ARRAY  =  [];

	//	Functions.
	var	UpdateStage	=	function()
	{
		TheStage.SetDirty();
	};

	//-----------------------------------------------------------------------------------------------
	//	Object definition.
	//-----------------------------------------------------------------------------------------------

	var CButtonDemo	=	function( stage )
	{
		//	Make a note of the stage.
		TheStage		=	stage;

		this.DemoContainer			=	Renderer.CreateContainer( ); //////

		this.PrizeContainer			=	Renderer.CreateContainer( ); //////
		this.SpongeBobContainer		=   Renderer.CreateContainer( ); //////
		this.GridContainer			=	Renderer.CreateContainer( ); //////
		this.StarTrackerContainer	=	Renderer.CreateContainer( ); //////
		this.MotionPath1Container	=	Renderer.CreateContainer( ); //////
		this.MotionPath2Container	=	Renderer.CreateContainer( ); //////
		this.VortexContainer	    =	Renderer.CreateContainer( ); //////
		this.DonutContainer		    =	Renderer.CreateContainer( ); //////
		this.SparkleDemoContainer	=	Renderer.CreateContainer( ); //////
		this.SparkleContainer	    =	Renderer.CreateContainer( ); //////
		this.TickerContainer	    =	Renderer.CreateContainer( ); //////
		this.PuffinContainer		=	Renderer.CreateContainer( ); //////
		this.ClickDemoContainer		=	Renderer.CreateContainer( ); //////
		this.DiamondContainer		=	Renderer.CreateContainer( ); //////
		this.ElasticContainer		=	Renderer.CreateContainer( ); //////

		this.ExplodeContainer		=  Renderer.CreateContainer( ); //////
		this.ParticleContainer		=  Renderer.CreateContainer( ); //////
		this.DisplacementContainer	=  Renderer.CreateContainer( ); //////




		this.PrizeContainer.SetPosition( -400, -244 );       /////
		this.SpongeBobContainer.SetPosition( -203,-193 );    /////
		this.GridContainer.SetPosition( -52, -300 );     	 /////
		this.MotionPath1Container.SetPosition( 203, -248 );  /////
		this.MotionPath2Container.SetPosition( 355, -248 );  /////
		this.VortexContainer.SetPosition( -198, -90 ); 		 /////
		this.VortexContainer.SetScale( 0.4 );  							 /////
		this.DonutContainer.SetPosition( -376, -81 );        /////
		this.SparkleDemoContainer.SetPosition( -456, -252 ); /////
		this.ClickDemoContainer.SetPosition( 0, -100 );      /////
		this.TickerContainer.SetPosition( 200, -90 );        /////
		this.PuffinContainer.SetPosition( 205, -50 );        /////
		this.ElasticContainer.SetPosition( 378, -97 );        /////
		this.ExplodeContainer.SetPosition( -376, 97 );        /////
		this.ParticleContainer.SetPosition( -196, 43 );        /////

		this.DemoContainer.addChild( this.DisplacementContainer, this.PrizeContainer, this.SpongeBobContainer, this.GridContainer, this.StarTrackerContainer, this.MotionPath1Container, this.MotionPath2Container,
		this.SparkleDemoContainer, this.VortexContainer, this.DonutContainer, this.TickerContainer,  this.ClickDemoContainer, this.PuffinContainer, this.ElasticContainer,
		this.ExplodeContainer, this.ParticleContainer );


		this.SparkleDemoContainer.addChild( this.SparkleContainer );
		this.ClickDemoContainer.addChild( this.DiamondContainer );




		///// SPARKLE /////
		//this.Sparkle	=	Renderer.CreateSprite( Game.DemoSheet, "Shine1", { scaleX:1, scaleY:1, position:{X:-50,Y:100},  parent:this.DemoContainer} );


		///// BLUR ////
		//gsap.to( this.ButtonSprite, {duration:1, delay:2, pixi: { blurX:3, blurY:3 },onUpdate:UpdateStage });

		///// BRIGHTNESS ////
		//gsap.to( this.ButtonSprite, {duration: 1, delay:2, pixi:{brightness:3},onUpdate:UpdateStage});

		//gsap.to( this.ButtonSprite, {duration: 0.7, delay:2, ease: "back.Out(2)", pixi: {skewX:10}, onUpdate:UpdateStage});
		//gsap.to( this.ButtonSprite, {duration: 0.7, delay:2.7, ease: "back.in(2)", pixi: {skewX:-10}, onUpdate:UpdateStage});
		//gsap.to( this.ButtonSprite, {duration: 0.35, delay:3.4, ease: "back.Out(2)", pixi: {skewX:0}, onUpdate:UpdateStage});




		//// SPARKLE ////
		/*
		var t2 = gsap.timeline({repeat: 8, repeatDelay: 2, onUpdate:UpdateStage});
		t2.to(this.Sparkle, {duration: 3, pixi:{brightness:3, combineCMF:false}});
		t2.to(this.Sparkle, {duration: 3, pixi:{blur:0, combineCMF:false}});
		t2.to(this.Sparkle, {duration: 3, pixi:{contrast:3, combineCMF:false}});
		t2.to(this.Sparkle, {duration: 3, pixi:{hue:180, combineCMF:false}});
		t2.to(this.Sparkle, {duration: 3, pixi:{saturation:0, combineCMF:false}});
		t2.to(this.Sparkle, {duration: 3, pixi:{brightness:3, combineCMF:false}});
		*/

		/* $$$$$$$
		var blobArray = [];

		for( var i=0; i < 11; i++ ) {

			for( var j=0; j < 11; j++ ) {

				var blobMC = Renderer.CreateSprite( Game.DemoSheet, "particle1", { scaleX:0, scaleY:0, position:{X:10 * i,Y:10 * j},  parent:this.GridContainer} );

				blobArray.push( blobMC );

			}
		}



		// CONTINUOUS ////
		gsap.to(blobArray, {
			duration: 1,
			scaleX: 0.62,
			scaleY: 0.62,
			//alpha:0,
			delay:2,
			ease: "sine.inOut",
			onUpdate:UpdateStage,
			stagger: {
				yoyo: true,
				repeat: 5,
				grid: [11,11],
				from: "center",
				amount: 2.3
			}

		});

/*
//// SINLE PULSE ////

        gsap.to(blobArray, {
          duration: 1.3,
          scale: 1.6,
          alpha:0,
          ease: "power2.inOut",
          stagger: {
             yoyo: false,
             repeat: -1,
             grid: [11,11],
             from: "center",
             amount: 1
          }
        })
        */

		/* $$$$$$
		var circle = new PIXI.Graphics();
		circle.beginFill("red").drawCircle(0, 0, 56);
		circle.x = -71;
		circle.y = -240;
		circle.alpha = 0.5;

		this.DemoContainer.addChild(circle);

		this.GridContainer.mask = circle;



		///// STAR TRACKER /////


		this.Star1	=	Renderer.CreateSprite( Game.DemoSheet, "Star1", { scaleX:1, scaleY:1, position:{X:-394,Y:150},  parent:this.StarTrackerContainer} );


		var stl= gsap.timeline({ delay:1,onUpdate:UpdateStage});
		stl.to(this.Star1, {y:-243, x:-70, duration: 1.3,  ease: "none" });
		stl.to(this.Star1, {scaleX:1.5, scaleY:1.5, duration: 0.3,  ease: "none" });
		stl.to(this.Star1, {scaleX:0, scaleY:0, duration: 0.2,  ease: "none" });

		$$$$$$
		*/

		/*

		SpawnStar2		=	function( root, mc ){


			for( var k=0; k < 8; k++ ) {

				var star = new lib.Star;
				star.x = mc.x;
				star.y = mc.y;
				star.scaleX = star.scaleY = 0.2;


				randRot = 120 + Math.floor(Math.random() * 240);


				randAngle = Math.floor(Math.random() * 360);
				randSpread = Math.floor(Math.random() * 60);

				randXpos = star.x + Math.cos(randAngle) * (20 + randSpread);
				randYpos = star.y + Math.sin(randAngle) * (20 + randSpread);

				gsap.to(star, { x:randXpos, y:randYpos + 100, scale:0.8, alpha:0, duration:1.2, rotation:randRot });

				root.addChild(star);

			}


		}
		*/



		//// MOTION PATH ////

		/*
		this.Chest	=	Renderer.CreateSprite( Game.DemoSheet, "icon_t", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.MotionPathContainer} );
		this.Wad	=	Renderer.CreateSprite( Game.DemoSheet, "icon_w", { alpha:1, scaleX:1, scaleY:1, position:{X:110,Y:0},  parent:this.MotionPathContainer} );
		this.Marker1	=	Renderer.CreateSprite( Game.DemoSheet, "particle1", { alpha:0, scaleX:1, scaleY:1, position:{X:-46,Y:-38},  parent:this.MotionPathContainer} );
		this.Marker2	=	Renderer.CreateSprite( Game.DemoSheet, "particle1", { alpha:0, scaleX:1, scaleY:1, position:{X:62,Y:-26},  parent:this.MotionPathContainer} );


		gsap.to(this.Marker1, { motionPath:{path:[{x:-48,y:-5}, {x:-46,y:21}, {x:-26,y:51}, {x:47,y:34}, {x:47,y:7}, {x:16,y:-13}, {x:44,y:-30}, {x:28,y:-46}, {x:-46,y:-38} ]},duration:1, delay:1.5, onUpdate:UpdateStage});

		gsap.to(this.Marker2, { motionPath:{path:[{x:65,y:1}, {x:80,y:12}, {x:86,y:33}, {x:95,y:50}, {x:140,y:41}, {x:164,y:12}, {x:131,y:-38}, {x:106,y:-46}, {x:77,y:32} ]},duration:1, delay:1.5, onUpdate:UpdateStage});


		this.MotionPathContainer.SetScale( 0.3 );
		gsap.to(this.MotionPathContainer, { scaleX:1, scaleY:1 , duration:1, delay:1.5, ease: "back.out(1.7)", onUpdate:UpdateStage});

		// Create an SVG element...
		//var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

		//M8,102 C15,83 58,25 131,24 206,24 233,63 259,91 292,125 328,155 377,155 464,155 497,97 504,74



		// ... which we add to the DOM.
		//document.getElementById( beablib.ParentCanvasID ).appendChild( svg );

		//// HI GUY HERE IS THE MotionPathHelper CODE THAT ERRORS AS IT MUST BE A DOM OBJECT //////
		//MotionPathHelper.create( svg );

		//// PUFFIN STUFF ////
		/*
		this.Puffin	=	Renderer.CreateSprite( Game.DemoSheet, "Tin", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.PuffinContainer} );
		this.PuffinParticle	=	Renderer.CreateSprite( Game.DemoSheet, "particle1", { scaleX:1, scaleY:1, position:{X:-806,Y:-470},  parent:this.PuffinPathContainer} );

		gsap.to(this.PuffinPathContainer, { motionPath: {
			path: "M507,470 C507,501 510.545,685.783 513,709 514.649,724.6 672.061,730.546 679.522,710.894 686.266,693.129 688.93,473.318 676.473,468.424 596.002,436.81 516.722,471 509,468 "
			},duration:10, delay:1.5, ease: "none", onUpdate:UpdateStage});
			*/



		/*
		for( var k=0; k < 15; k++ ) {

			gsap.delayedCall( 1.5 + (k * 0.066), this.SpawnStar, [ this.Marker1, this.MotionPathContainer ], this );
			gsap.delayedCall( 1.5 + (k * 0.066), this.SpawnStar, [ this.Marker2, this.MotionPathContainer ], this );

		}
		*/


		////// MY VORTEX DEMO //////

		/*
		var animation = gsap.timeline(),

			containers = [],
			startX = 10;

		for (var h = 0; h < 45; h++) {

			var lineContainer = Renderer.CreateContainer();
			var circles = [];

			for (var i = 0; i < 18; i++) {
				var container = Renderer.CreateContainer();
				var circle = new PIXI.Graphics();
				circle.beginFill(0xffffff);

				circle.drawCircle(0, 0, i * 0.34);
				circle.pivot.x = 0;
				circle.pivot.y = 0;
				circle.endFill();
				circle.alpha = 0;
				container.x = startX;

				circles.push(circle);

				container.addChild(circle);

				lineContainer.addChild(container);


			}
			lineContainer.rotation = h * 0.139626;

			this.VortexContainer.addChild(lineContainer);
			containers.push( circles );
		}

		for (var  k = 0; k < 45; k++) {
			for (var j = 0; j < 18; j++) {

				var stl = gsap.timeline({ delay:1, repeat:2, repeatDelay:0.4, onUpdate:UpdateStage});
				stl.to(containers[k][j], {
					x: 60 * (0.3 * j),
					ease: "power2.out",
					duration: 3,
					delay:k * 0.01,
					onUpdate: UpdateStage
				});
				stl.to(containers[k][j], {
					alpha: 1,
					ease: "linear",
					duration: 1,
					//delay:k * 0.01,
					onUpdate: UpdateStage
				},"-=3");

				stl.to(containers[k][j], {
					alpha: 0,
					scaleX: 0.5,
					scaleY: 0.5,
					ease: "power1.out",
					duration: 2,
					//delay: 1 + (k * 0.01),
					onUpdate: UpdateStage
				},"-=2");

				stl.set(containers[k][j], { x:0, scaleX:1, scaleY:1})

			};
		}
		*/

		//// TO DO ////
		/// 1. STAGGER EACH ANIM / CLICKABLE ???
		/// 5. TEXT light sprite anim
		/// 5b. TEXT sparkle anim see SKY HTML5 banner ad


		/// 8.More skew Pixi stuff
		/// 9. Colour anims / Pixi
		/// 
		/// etc.....



		//gsap.to(graph, { duration: 2.5, ease: CustomEase.create("custom", "M0,0 C0,0 0.02929,0.05949 0.05655,0.07503 0.15338,0.13026 0.25451,0.15299 0.36306,0.20705 0.38915,0.22005 0.4073,0.23739 0.42471,0.25839 0.43599,0.27201 0.4403,0.2879 0.44523,0.3062 0.45029,0.32498 0.45381,0.33971 0.45185,0.35921 0.44009,0.47659 0.41193,0.5729 0.40797,0.67786 0.40712,0.70047 0.42195,0.72636 0.43747,0.74054 0.45398,0.75562 0.4828,0.77064 0.50602,0.76742 0.59405,0.75525 0.67727,0.71389 0.77522,0.69383 0.79966,0.68883 0.82615,0.68886 0.84472,0.69807 0.86307,0.70718 0.88053,0.72832 0.88937,0.75047 0.91937,0.82556 0.92651,0.90992 0.9551,0.97442 0.96143,0.9887 1,1 1,1 "), y: -500 });
		//gsap.to(graph, { duration: 2.5, ease: CustomEase.create("custom", "M0,0,C0,0.155,0.067,0.596,0.156,0.762,0.3,1.031,0.497,1,0.544,1,0.583,1,0.737,1.026,0.855,0.782,0.936,0.616,1,0.227,1,0"), y: -500 });

		//var ptl = gsap.timeline({ delay:1, onUpdate:UpdateStage});


		//// BTNS

		this.BtnContainer		=	Renderer.CreateContainer( );

		this.InitBtns();






		//	...& add it to the stage.
		TheStage.addChild( this.BtnContainer, this.DemoContainer );


		/////////////////////////////////////////////////
		//var width = window.innerWidth;
		//var height = window.innerHeight;
		//var controller = gsap.timeline();

		//var app = new PIXI.Application({
			//width: width, // default: 800
			//height: width, // default: 600
			//antialias: true, // default: false
			//transparent: false, // default: false
			//resolution: 1, // default: 1
			//backgroundColor: 0x230716
		//});
		//document.body.appendChild(app.view);

		//class Emitter extends PIXI.Container {
			//constructor(numCircles, color) {
				//super();

		/*
		var animation = gsap.timeline(),
			circles = [],
			containers = [],
			startX = 100;

		for (let i = 0; i < 18; i++) {
			var container =	Renderer.CreateContainer( );
			var circle = new PIXI.Graphics();
			circle.beginFill(0x990000);

			circle.drawCircle(0, 0, i * 1.00002);
			circle.pivot.x = 0;
			circle.pivot.y = 0;
			circle.endFill();
			circle.alpha = 1;
			container.x = startX;

			circles.push(circle);
			container.addChild(circle);
			this.VortexContainer.addChild(container);
		}

		var distributor = gsap.utils.distribute({
			base: 0,
			amount: width / 2,
			from: "default",
			ease: "power1.in"
		});
		gsap.set(containers, { x: distributor });


		//class Ring extends PIXI.Container {
			//constructor(rotationOffset, numEmitters, color, circles, delay) {
				//super();
				this.animation = gsap.timeline();
				this.rotation = 8;
				this.x = width / 2;
				this.y = height / 2;
				//this.degrees = 360 / numEmitters;
				this.color = color;
				this.numCircles = circles;
				let xDistance = gsap.utils.distribute({
					base: 0,
					amount: 1200,
					ease: "power1.in"
				});
				for (let i = 0; i < numEmitters; i++) {

					let myEmitter = new Emitter(this.numCircles, color);
					gsap.set(myEmitter, {
						pixi: { rotation: i* this.rotation }
					});

					app.stage.addChild(this);
					this.addChild(myEmitter);







					//gsap.to(this, {pixi:{rotation:"+=360"}, ease:"linear", duration:50, repeat:-1})
					gsap.timeline({repeat:-1, paused:true}).to(myEmitter.circles, { alpha: 1, duration: 1, stagger: { each: 0.05 } })
						.to(myEmitter.circles, {x: function(index, element, target) {
								return "+=" + xDistance(index, element, target);
							},
							duration: 3,
							ease: "linear"
						}, 0)

						.to(myEmitter.circles, { alpha: 0.5, duration:1}, "-=1").delay(0.02 * i).restart(true)


				}

			}
		}

		Ring(8, 45, 0xff3399, 18);
		*/


		/////////////////////////////////////////////////


		//	The following creates a cursor changing sprite, that is always action, & sends "Button Clicked!" to the console when clicked.
		//this.ButtonSprite.SetButtonMode( true, function(){ console.log( "Button Clicked!" ); }, this, false );


		//gsap.to(this.ButtonSprite, {scaleX:0.6, scaleY:0.6, duration: 0.6, delay:1, ease: "back.out(1.7)", onUpdate:UpdateStage });

		//// Physics2DPlugin ////
		//gsap.to(this.ButtonSprite4, {duration: 2, delay:1.5, physics2D: {velocity: 300, angle: -60, acceleration: 50, accelerationAngle: 180}, onUpdate:UpdateStage});

		//// MotionPathPlugin ////
		//gsap.to(this.ButtonSprite4, { motionPath:{path:[{x:100, y:100}, {x:300, y:-100}, {x:-300, y:0}]},duration: 2, delay:1.5, onUpdate:UpdateStage});
		//gsap.to( "#rect", { motionPath:{path:[{x:100, y:100}, {x:300, y:-100}, {x:-300, y:0}]},duration: 2, delay:1.5, onUpdate:UpdateStage});


		//MotionPathHelper.create( this.ButtonSprite );


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

	CButtonDemo.prototype.Reposition		=	function( scale )
	{
		this.DemoContainer.SetPosition( TheStage.View.HalfWidth, TheStage.View.HalfHeight );
		this.DemoContainer.SetScale( scale );

		this.BtnContainer.SetPosition( TheStage.View.HalfWidth, TheStage.View.HalfHeight );
		this.BtnContainer.SetScale( scale );

		UpdateStage();
	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.InitBtns			=	function( ) {


		var	set_glow3	=	function( index, state )
		{
			BTN_ARRAY[ index ].alpha = state;
			UpdateStage();
		}.bind(this);


		for( var i=0; i < 20; i++ ) {

			var btn = Renderer.CreateSprite( Game.DemoSheet, "Btn" + (i+1), { alpha:0.6, scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.BtnContainer} );

			btn.numId = i;
			btn.ButtonIndex = i;
			BTN_ARRAY.push(btn);

			this.BtnContainer.addChild( btn );

			var dataObjBtn = new Object();
			dataObjBtn.numId = BTN_ARRAY[i].numId;

			var	btn_ref	=	BTN_ARRAY[i];

			btn_ref.SetButtonMode( true, this.BtnClicked, this, false, dataObjBtn);
			btn_ref.mouseover = function () {
				set_glow3( this.ButtonIndex, 0.9);
			}.bind(btn_ref);
			btn_ref.mouseout = function () {
				set_glow3(this.ButtonIndex, 0.6);
			}.bind(btn_ref);


		}


		this.MaskContainer			=	Renderer.CreateContainer( ); //



		this.MaskRect = new PIXI.Graphics();
		this.MaskRect.beginFill(0xFF0000);
		this.MaskRect.drawRoundedRect(-160, 0, 320, 200, 20);
		this.MaskRect.alpha = 0.6;
		this.MaskContainer.addChild(this.MaskRect);

		this.MaskRect.SetPosition(0, 26);


		this.MaskEllipse = new PIXI.Graphics();
		this.MaskEllipse.beginFill(0x00FF00);
		this.MaskEllipse.drawEllipse(0, 150, 220, 100 );
		this.MaskEllipse.alpha = 0.6;
		this.MaskContainer.addChild(this.MaskEllipse);

		TheStage.addChild( this.MaskContainer );

		//this.Rack.mask = this.MaskRect;

	};


	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.SpawnStar			=	function( mc, container ) {

			for (var k = 0; k < 8; k++) {

				var star = Renderer.CreateSprite(Game.DemoSheet, "particle1", {
					scaleX: 0.6,
					scaleY: 0.6,
					position: {X:mc.x, Y: mc.y},
					parent: container
				});

				var randRot = 120 + Math.floor(Math.random() * 240);

				var randAngle = Math.floor(Math.random() * 360);
				var randSpread = Math.floor(Math.random() * 60);

				var randXpos = star.x + Math.cos(randAngle) * (20 + randSpread);
				var randYpos = star.y + Math.sin(randAngle) * (20 + randSpread);

				gsap.to( star, {x: randXpos, y: randYpos, scaleX: 0.8, scaleY:0.8,  alpha: 0, duration: 1.2, rotation: randRot, onUpdate:UpdateStage});

			}
	};


	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.BtnClicked			=	function(event, data ) {

		console.log( "I clicked :: " + data.numId);

		BTN_ARRAY[data.numId].alpha = 0;

		BTN_ARRAY[data.numId].SetButtonMode( false );

		switch ( data.numId ) {
			case 0:
				this.PlayAnim1();
				/// PLAY PRIZE ANIM
				break;
			case 1:
				this.PlayAnim1();
				this.PlayAnim2();
				/// PLAY SPONGEBOB ANIM
				break;
			case 2:
				this.PlayAnim3();
				/// PLAY BLOB ANIM
				break;
			case 3:
				this.PlayAnim4();
				/// PLAY MOTIONPATH ANIM 1
				break;
			case 4:
				this.PlayAnim5();
				/// PLAY MOTIONPATH ANIM 2
				break;
			case 5:
				this.PlayAnim6();
				/// PLAY DONUT ANIM
				break;
			case 6:
				this.PlayAnim7();
				/// PLAY VORTEX ANIM
				break;
			case 7:
				this.PlayAnim8();
				/// PLAY DIAMOND ANIM
				break;
			case 8:
				this.PlayAnim9();
				/// PLAY PUFFIN ANIM
				break;
			case 9:
				this.PlayAnim10();
				/// PLAY ELASTIC ANIM
				break;
			case 10:
				this.PlayAnim11();
				/// PLAY STAR / EXPLODE TEST ANIM
				break;
			case 11:
				this.PlayAnim12();
				//// PLAY PARTICLE ANIM
				break;
			case 12:
				this.PlayAnim13();
				//// PLAY DISPLACEMENT ANIM
				break;
			case 13:
				////
				break;
			case 14:
				/////
				break;
			case 15:
				////
				break;
			case 16:
				////
				break;
			case 17:
				////
				break;
			case 18:
				////
				break;
			case 19:
				/////
				break;
			case 20:
				////
				break;
		}

		UpdateStage();

	};


	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim1			=	function(  ) {

		this.Let_E	=	Renderer.CreateSprite( Game.DemoSheet, "Let_E", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.PrizeContainer} );
		this.Let_Z	=	Renderer.CreateSprite( Game.DemoSheet, "Let_Z", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.PrizeContainer} );
		this.Let_I	=	Renderer.CreateSprite( Game.DemoSheet, "Let_I", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.PrizeContainer} );
		this.Let_R	=	Renderer.CreateSprite( Game.DemoSheet, "Let_R", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.PrizeContainer} );
		this.Let_P	=	Renderer.CreateSprite( Game.DemoSheet, "Let_P", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.PrizeContainer} );


		var prizeArray       = [ this.Let_P, this.Let_R, this.Let_I, this.Let_Z, this.Let_E];
		var prizeXPosArray   = [-20,-10,0 ,10 ,20];


		gsap.to(prizeArray, {
				scaleY:1.3,
				duration: 0.35,
				delay:0.3,
				ease: "sine.inOut",
				onUpdate:UpdateStage,
				stagger: {
					yoyo: true,
					repeat: 5,
					from: "start",
					amount: 0.2
				}
			}
		);

		for( var i=0; i < 5; i++ ) {

			gsap.to(prizeArray[i], {
					scaleY:0,
					scaleX:0,
					x:prizeXPosArray[i],
					y:-5,
					duration: 0.22,
					delay:3 + (0.06 *i),
					ease: "sine.inOut",
					onUpdate:UpdateStage
				}
			);
		}


		//// SPARKLE /////


		this.Sparkle	=	Renderer.CreateSprite( Game.DemoSheet, "particle1", { scaleX:0, scaleY:1.6, position:{X:0,Y:0},  parent:this.SparkleContainer} );

		this.PZAmount	=	Renderer.CreateSprite( Game.DemoSheet, "PZ_25000", { alpha:1, scaleX:0, scaleY:0, position:{X:0,Y:-10},  parent:this.PrizeContainer} );
		this.PZAmountGlow	=	Renderer.CreateSprite( Game.DemoSheet, "PZ_25000_Glow", { alpha:1, scaleX:0, scaleY:0, position:{X:0,Y:-10},  parent:this.PrizeContainer} );

		this.Star	=	Renderer.CreateSprite( Game.DemoSheet, "Star1", { alpha:1, scaleX:0, scaleY:0, position:{X:41,Y:-17},  parent:this.PrizeContainer} );


		this.MaskRect = new PIXI.Graphics();
		this.MaskRect.beginFill(0xFF0000);
		this.MaskRect.drawRect(-7, -30, 14, 60);
		this.MaskRect.rotation = 0.2;
		this.PrizeContainer.addChild(this.MaskRect);

		this.MaskRect.SetPosition(-66, -10);

		this.PZAmountGlow.mask = this.MaskRect;


		this.SparkleContainer.SetScale(3);

		this.SparkleDemoContainer.SetScale( 0);
		this.SparkleDemoContainer.alpha = 0;

		var spTl1 = gsap.timeline({ delay:2.8, onUpdate:UpdateStage});
		spTl1.to(this.Sparkle, {scaleX:2, scaleY:0.2, duration:0.1});
		spTl1.to(this.Sparkle, {scaleX:0.2, scaleY:2, duration:0.1});
		spTl1.to(this.Sparkle, {scaleX:2, scaleY:0.2, duration:0.1});
		spTl1.to(this.Sparkle, {scaleX:0.2, scaleY:2, duration:0.1});
		spTl1.to(this.Sparkle, {scaleX:2, scaleY:0.2, duration:0.1});
		spTl1.to(this.Sparkle, {scaleX:0.2, scaleY:2, duration:0.1});
		spTl1.to(this.Sparkle, {scaleX:2, scaleY:0.2, duration:0.1});
		spTl1.to(this.Sparkle, {scaleX:0.2, scaleY:2, duration:0.1});


		var spTl2 = gsap.timeline({ delay:2.8, onUpdate:UpdateStage});
		spTl2.to(this.SparkleDemoContainer, {x:-348,  ease: "none", duration:0.8});
		spTl2.to(this.SparkleDemoContainer, {alpha:0.8, scaleX:0.8, scaleY:1, ease: "power2.out", duration:0.4},"-=0.8");
		spTl2.to( this.SparkleDemoContainer, {alpha:0, scaleX:0, scaleY:0, ease: "power2.in", duration:0.4}, "-=0.4");
		spTl2.to([this.PZAmount, this.PZAmountGlow],{scaleX:0.9, scaleY:0.9, ease: "back.out", duration:0.4}, "-=0.2");
		spTl2.to([this.PZAmount, this.PZAmountGlow],{scaleX:1, scaleY:1, ease: "none", duration:0.15});
		spTl2.to(this.MaskRect,{x:100,  ease: "none", duration:0.8},"+=0.2");
		spTl2.to(this.Star,{rotation:3, ease:"none", duration:1.1},"-=0.8");
		spTl2.to(this.Star,{scaleX:0.8, scaleY:0.8, ease: "back.out", duration:0.5},"-=0.8");
		spTl2.to(this.Star,{alpha:0, scaleX:0.3, scaleY:0.3, ease: "power1.out", duration:0.3},);

	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim2			=	function(  ) {

		console.log("Hello SB")

		/// SPongeBob /////
		this.SpongeBobSprite	=	Renderer.CreateSprite( Game.DemoSheet, "Sponge", { scaleX:0.65, scaleY:0.65, position:{X:0,Y:0},  parent:this.SpongeBobContainer} );

		var tl = gsap.timeline({repeat: 8, repeatDelay: 2, onUpdate:UpdateStage});
		tl.to(this.SpongeBobSprite, {duration: 0.2, ease: "power1.out", pixi: {skewX:15, rotation:-2}});
		tl.to(this.SpongeBobSprite, {duration: 0.2, ease: "power1.out", pixi: {skewX:-15, rotation:2}});
		tl.to(this.SpongeBobSprite, {duration: 0.17, ease: "power1.out", pixi: {skewX:12, rotation:-2}});
		tl.to(this.SpongeBobSprite, {duration: 0.17, ease: "power1.out", pixi: {skewX:-12, rotation:2}});
		tl.to(this.SpongeBobSprite, {duration: 0.14, ease: "power1.out", pixi: {skewX:9, rotation:-2}});
		tl.to(this.SpongeBobSprite, {duration: 0.14, ease: "power1.out", pixi: {skewX:-9, rotation:2}});
		tl.to(this.SpongeBobSprite, {duration: 0.11, ease: "power1.out", pixi: {skewX:7, rotation:-2}});
		tl.to(this.SpongeBobSprite, {duration: 0.11, ease: "power1.out", pixi: {skewX:-7, rotation:2}});
		tl.to(this.SpongeBobSprite, {duration: 0.08, ease: "power1.out", pixi: {skewX:4, rotation:-2}});
		tl.to(this.SpongeBobSprite, {duration: 0.08, ease: "power1.out", pixi: {skewX:-4, rotation:2}});
		tl.to(this.SpongeBobSprite, {duration: 0.07, ease: "power1.out", pixi: {skewX:3, rotation:-2}});
		tl.to(this.SpongeBobSprite, {duration: 0.07, ease: "power1.out", pixi: {skewX:-3, rotation:2}});
		tl.to(this.SpongeBobSprite, {duration: 0.05, ease: "power1.out", pixi: {skewX:2, rotation:-2}});
		tl.to(this.SpongeBobSprite, {duration: 0.05, ease: "power1.out", pixi: {skewX:-2, rotation:2}});
		tl.to(this.SpongeBobSprite, {duration: 0.04, ease: "power1.out", pixi: {skewX:1, rotation:-2}});
		tl.to(this.SpongeBobSprite, {duration: 0.02, ease: "power1.out", pixi: {skewX:0, rotation:0}});

		//// SPONGE BLUR ////
		gsap.to(this.SpongeBobSprite, {duration: 0.1, pixi: { blurX:5, onUpdate:UpdateStage } });
		gsap.to(this.SpongeBobSprite, {duration: 2, pixi: { blurX:0, onUpdate:UpdateStage } });

	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim3			=	function(  ) {

		var blobArray = [];

		for( var i=0; i < 11; i++ ) {

			for( var j=0; j < 11; j++ ) {

				var blobMC = Renderer.CreateSprite( Game.DemoSheet, "particle1", { scaleX:0, scaleY:0, position:{X:10 * i,Y:10 * j},  parent:this.GridContainer} );

				blobArray.push( blobMC );

			}
		}

		// CONTINUOUS ////
		gsap.to(blobArray, {
			duration: 1,
			scaleX: 0.62,
			scaleY: 0.62,
			//alpha:0,
			delay:2,
			ease: "sine.inOut",
			onUpdate:UpdateStage,
			stagger: {
				yoyo: true,
				repeat: 25,
				grid: [11,11],
				from: "center",
				amount: 2.3
			}

		});

		/*
        //// SINLE PULSE ////

                gsap.to(blobArray, {
                  duration: 1.3,
                  scale: 1.6,
                  alpha:0,
                  ease: "power2.inOut",
                  stagger: {
                     yoyo: false,
                     repeat: -1,
                     grid: [11,11],
                     from: "center",
                     amount: 1
                  }
                })
                */

		var circle = new PIXI.Graphics();
		circle.beginFill("red").drawCircle(0, 0, 56);
		circle.x = -3;
		circle.y = -250;
		circle.alpha = 0;

		this.DemoContainer.addChild(circle);

		this.GridContainer.mask = circle;



		///// STAR TRACKER /////


		this.Star1	=	Renderer.CreateSprite( Game.DemoSheet, "Star1", { scaleX:1, scaleY:1, position:{X:-394,Y:150},  parent:this.StarTrackerContainer} );


		var stl= gsap.timeline({ delay:1,onUpdate:UpdateStage});
		stl.to(this.Star1, {y:-253, x:-2, duration: 1.3,  ease: "none" });
		stl.to(this.Star1, {scaleX:1.5, scaleY:1.5, duration: 0.3,  ease: "none" });
		stl.to(this.Star1, {scaleX:0, scaleY:0, duration: 0.2,  ease: "none" });

		for( var k=0; k < 15; k++ ) {

			gsap.delayedCall( 1.1 + (k * 0.1), this.SpawnStar, [ this.Star1, this.StarTrackerContainer ], this );

		}

	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim4			=	function(  ) {


		this.Chest	=	Renderer.CreateSprite( Game.DemoSheet, "icon_t", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.MotionPath1Container} );
		this.Marker1	=	Renderer.CreateSprite( Game.DemoSheet, "particle1", { alpha:0, scaleX:1, scaleY:1, position:{X:-46,Y:-38},  parent:this.MotionPath1Container} );


		gsap.to(this.Marker1, { motionPath:{path:[{x:-48,y:-5}, {x:-46,y:21}, {x:-26,y:51}, {x:47,y:34}, {x:47,y:7}, {x:16,y:-13}, {x:44,y:-30}, {x:28,y:-46}, {x:-46,y:-38} ]},duration:1, delay:1.22, onUpdate:UpdateStage});


		this.MotionPath1Container.SetScale( 0.4 );
		gsap.to(this.MotionPath1Container, { scaleX:1, scaleY:1, duration:1, delay:1, ease: "back.out(1.7)", onUpdate:UpdateStage});


		for( var k=0; k < 15; k++ ) {

			gsap.delayedCall( 1.25 + (k * 0.066), this.SpawnStar, [ this.Marker1, this.MotionPath1Container ], this );

		}

	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim5			=	function(  ) {

		//this.Chest	=	Renderer.CreateSprite( Game.DemoSheet, "icon_t", { scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.MotionPath1Container} );
		this.Wad	=	Renderer.CreateSprite( Game.DemoSheet, "icon_w", { alpha:1, scaleX:1, scaleY:1, position:{X:110,Y:0},  parent:this.MotionPath2Container} );
		//this.Marker1	=	Renderer.CreateSprite( Game.DemoSheet, "particle1", { alpha:0, scaleX:1, scaleY:1, position:{X:-46,Y:-38},  parent:this.MotionPath1Container} );
		this.Marker2	=	Renderer.CreateSprite( Game.DemoSheet, "particle1", { alpha:0, scaleX:1, scaleY:1, position:{X:62,Y:-26},  parent:this.MotionPath2Container} );


		//gsap.to(this.Marker1, { motionPath:{path:[{x:-48,y:-5}, {x:-46,y:21}, {x:-26,y:51}, {x:47,y:34}, {x:47,y:7}, {x:16,y:-13}, {x:44,y:-30}, {x:28,y:-46}, {x:-46,y:-38} ]},duration:1, delay:1.22, onUpdate:UpdateStage});

		gsap.to(this.Marker2, { motionPath:{path:[{x:65,y:1}, {x:80,y:12}, {x:86,y:33}, {x:95,y:50}, {x:140,y:41}, {x:164,y:12}, {x:131,y:-38}, {x:106,y:-46}, {x:77,y:32} ]},duration:1, delay:1.25, onUpdate:UpdateStage});


		this.MotionPath2Container.SetScale( 0.4 );
		gsap.to(this.MotionPath2Container, { x:290, scaleX:1, scaleY:1, duration:1, delay:1, ease: "back.out(1.7)", onUpdate:UpdateStage});


		for( var k=0; k < 15; k++ ) {

			//gsap.delayedCall( 1.25 + (k * 0.066), this.SpawnStar, [ this.Marker1, this.MotionPath1Container ], this );
			gsap.delayedCall( 1.25 + (k * 0.066), this.SpawnStar, [ this.Marker2, this.MotionPath2Container ], this );

		}

	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim6			=	function(  ) {


		var circle1 = new PIXI.Graphics();

		circle1.lineStyle(1, 0x00FFFF, 1);
		circle1.drawCircle(-20, -20, 40); // drawCircle(x, y, radius)

		//this.DonutContainer.addChild( circle1 );

		var ColourArray = [0x06E2E8,
			0x0AC1D8,
			0x0E9DC7,
			0x1379B5,
			0x1853A3,
			0x3B4CA2,
			0x6743A2,
			0x8D3CA1,
			0xAF36A1,
			0xC13193,
			0xC1307C,
			0xC12E65,
			0xC12B48,
			0xC12A31,
			0xC0472A,
			0xBF6424,
			0xBF811D,
			0xBEAF14];


		for( var k=0; k < 18; k++ ) {

			var angle = k* 0.349066;
			//randSpread = Math.floor(Math.random() * 60);

			console.log("angle is :: " + angle );

			var Xpos = Math.cos( angle ) * 40;
			var Ypos = Math.sin( angle ) * 40;

			//var randXpos = star.x + Math.cos(randAngle) * (20 + randSpread);
			//var randYpos = star.y + Math.sin(randAngle) * (20 + randSpread);

			var circle = new PIXI.Graphics();

			circle.lineStyle(2, ColourArray[k], 1);
			circle.drawCircle( 0, 0, 40); // drawCircle(x, y, radius)
			circle.SetPosition( -20 + Xpos, -20 + Ypos );

			this.DonutContainer.addChild( circle );

			//gsap.to(circle, 0.2, {pixi:{blur:0.5}});

			//this.DonutContainer.cacheAsBitmap = true;

			circle.blendMode = PIXI.BLEND_MODES.SCREEN;

			var vtl= gsap.timeline({ onUpdate:UpdateStage });
			vtl.to(circle, { x:-20, y:-20, duration:1.3, repeat:4, yoyo:true, ease: "power1.in" });
			vtl.to(circle, { scaleX:0, scaleY:0, alpha:1, duration:0.3, ease: "power2.in" });
			//gsap.to(this.DonutContainer, { rotation:6.28319,  duration:13,  ease: "none", onUpdate:UpdateStage  });

			//// BLEND MODES TO TEST /////
			/*
			NORMAL
			ADD
			MULTIPLY
			SCREEN
			OVERLAY
			DARKEN
			LIGHTEN
			COLOR_DODGE
			COLOR_BURN
			HARD_LIGHT
			SOFT_LIGHT
			DIFFERENCE
			EXCLUSION
			HUE
			SATURATION
			COLOR
			LUMINOSITY
			NORMAL_NPM
			ADD_NPM
			SCREEN_NPM
			NONE
			SRC_IN
			SRC_OUT
			SRC_ATOP
			DST_OVER
			DST_IN
			DST_OUT
			DST_ATOP
			SUBTRACT
			SRC_OVER
			ERASE
			XOR
			 */

		}



		this.Tin =	Renderer.CreateSprite( Game.DemoSheet, "Tin", { scaleX:0, scaleY:0, position:{X:-20,Y:-20}, alpha:1, parent:this.DonutContainer} );

		gsap.to( this.Tin, {duration:0.1,  pixi: { blurX:3, blurY:3 }, onUpdate:UpdateStage });

		var ttl= gsap.timeline({ onUpdate:UpdateStage, delay:6.5 });
		ttl.to(this.Tin, { scaleX:0.2, scaleY:0.7, duration:0.13, ease: "power1.out" });
		ttl.to(this.Tin, { scaleX:0.6, scaleY:0.2, duration:0.13, ease: "power1.in" });
		ttl.to(this.Tin, { scaleX:0.5, scaleY:0.5, duration:0.3, ease: "back.out(1.7)"});
		ttl.to(this.Tin, { pixi: { blurX:0, blurY:0 }, duration:0.56}, "-=0.56");

		//this.DonutContainer.cacheAsBitmap = true;

		//PIXI.autoDetectRenderer(1136, 728, {antialias: true});

		//this.DonutContainer.SetScale( 0.5);

	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim7			=	function(  ) {

		var animation = gsap.timeline(),

			containers = [],
			startX = 10;

		for (var h = 0; h < 45; h++) {

			var lineContainer = Renderer.CreateContainer();
			var circles = [];

			for (var i = 0; i < 18; i++) {
				var container = Renderer.CreateContainer();
				var circle = new PIXI.Graphics();
				circle.beginFill(0xffffff);

				circle.drawCircle(0, 0, i * 0.34);
				circle.pivot.x = 0;
				circle.pivot.y = 0;
				circle.endFill();
				circle.alpha = 0;
				container.x = startX;

				circles.push(circle);

				container.addChild(circle);

				lineContainer.addChild(container);


			}
			lineContainer.rotation = h * 0.139626;

			this.VortexContainer.addChild(lineContainer);
			containers.push( circles );
		}

		for (var  k = 0; k < 45; k++) {
			for (var j = 0; j < 18; j++) {

				var stl = gsap.timeline({ delay:1, repeat:1, repeatDelay:0.4, onUpdate:UpdateStage});
				stl.to(containers[k][j], {
					x: 60 * (0.3 * j),
					ease: "power2.out",
					duration: 3,
					delay:k * 0.01,
					onUpdate: UpdateStage
				});
				stl.to(containers[k][j], {
					alpha: 1,
					ease: "linear",
					duration: 1,
					//delay:k * 0.01,
					onUpdate: UpdateStage
				},"-=3");

				stl.to(containers[k][j], {
					alpha: 0,
					scaleX: 0.5,
					scaleY: 0.5,
					ease: "power1.out",
					duration: 2,
					//delay: 1 + (k * 0.01),
					onUpdate: UpdateStage
				},"-=2");

				stl.set(containers[k][j], { x:0, scaleX:1, scaleY:1})

			};
		}

	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim8			=	function(  ) {

		////// CLICK DEMO /////
		this.Car		  =	Renderer.CreateSprite( Game.DemoSheet, "icon_c", { alpha:0, scaleX:0, scaleY:0, position:{X:0,Y:10},  parent:this.ClickDemoContainer} );

		gsap.to( this.Car, {duration:0.1,  pixi: { blurX:2, blurY:2 }, onUpdate:UpdateStage });

		this.DiamondShine =	Renderer.CreateSprite( Game.DemoSheet, "Shine2", { scaleX:0.513, scaleY:1, position:{X:-43,Y:-56}, rotation:-0.65, alpha:0, parent:this.DiamondContainer} );
		this.Diamond 	  =	Renderer.CreateSprite( Game.DemoSheet, "icon_d", { scaleX:0.6, scaleY:0.6, position:{X:0,Y:0},  parent:this.DiamondContainer} );
		this.Star1		  =	Renderer.CreateSprite( Game.DemoSheet, "Star1", { scaleX:0, scaleY:0, position:{X:0,Y:13},  parent:this.ClickDemoContainer} );
		this.Star2		  =	Renderer.CreateSprite( Game.DemoSheet, "Star1", { scaleX:0, scaleY:0, position:{X:-11,Y:28},  parent:this.ClickDemoContainer} );
		this.Star3		  =	Renderer.CreateSprite( Game.DemoSheet, "Star1", { scaleX:0, scaleY:0, position:{X:6,Y:15},  parent:this.ClickDemoContainer} );
		this.Star4		  =	Renderer.CreateSprite( Game.DemoSheet, "Star1", { alpha:0.8, scaleX:0, scaleY:0, position:{X:-2,Y:-12},  parent:this.ClickDemoContainer} );
		this.Particle1	  =	Renderer.CreateSprite( Game.DemoSheet, "particle1", { scaleX:0, scaleY:0, position:{X:0,Y:13},  parent:this.ClickDemoContainer} );



		var diTl1 = gsap.timeline({ delay:1, repeat:-1, repeatDelay:1, onUpdate:UpdateStage});
		//diTl1.to(this.DiamondContainer, {scaleX:0.66, scaleY:0.66, duration:0.2});
		diTl1.to(this.DiamondContainer, {scaleX:0.3, scaleY:0.3, duration:0.3});
		diTl1.to(this.DiamondContainer, {rotation:0.65, y:-60,  duration:0.3, ease: "power2.out"});
		diTl1.to(this.DiamondShine, {alpha:1, duration:0.1,}, "-=0.1");
		diTl1.to(this.DiamondContainer, { y:10,  duration:0.25, ease: "back.out(1.7)"});
		diTl1.to(this.Diamond, { scaleX:0, scaleY:0,  duration:0.25, ease: "power1.out"});
		diTl1.to(this.DiamondShine, { scaleX:0, scaleY:2,  duration:0.25, ease: "power1.out"}, "-=0.25");
		diTl1.to(this.Star1, { scaleX:0.5, scaleY:0.5, rotation:2, duration:0.3, ease: "power1.out"}, "-=0.4");
		diTl1.to(this.Star1, { scaleX:0, scaleY:0,  duration:0.15, ease: "power1.out"});
		diTl1.to(this.Star2, { scaleX:0.4, scaleY:0.4,  duration:0.05, ease: "power1.out"}, "-=0.2");
		diTl1.to(this.Star2, { scaleX:0, scaleY:0,  duration:0.05, ease: "power1.out"});
		diTl1.to(this.Star3, { scaleX:0.4, scaleY:0.4,  duration:0.05, ease: "power1.out"}, "-=0.2");
		diTl1.to(this.Star3, { scaleX:0, scaleY:0,  duration:0.05, ease: "power1.out"});
		diTl1.to(this.Particle1, { scaleX:1.8, scaleY:1.8,  duration:0.3, ease: "power1.out"}, "-=0.3");
		diTl1.to(this.Particle1, { scaleX:6, scaleY:0.2,  duration:0.2, ease: "power1.out"});
		diTl1.to(this.Particle1, { scaleX:1.2, scaleY:1.2,  duration:0.2, ease: "power1.out"});
		diTl1.to(this.Particle1, { scaleX:0, scaleY:0,  duration:0.2, ease: "power1.out"});

		diTl1.to(this.Car, { alpha:0.7, scaleX:0.2, scaleY:1.4, pixi: { blurX:1, blurY:1 }, duration:0.25, ease: "power1.out"}, "-=0.9");
		diTl1.to(this.Car, { alpha:0.9, scaleX:0.9, scaleY:0.2, pixi: { blurX:0, blurY:0 }, duration:0.15, ease: "power1.out"}, "-=0.65");
		diTl1.to(this.Car, { alpha:1, scaleX:0.7, scaleY:0.7,  duration:0.15, ease: "power1.out"}, "-=0.5");

		diTl1.to(this.Star4,{rotation:3, ease:"none", duration:1.1},"-=0.74");
		diTl1.to(this.Star4,{scaleX:0.5, scaleY:0.5, ease: "back.out", duration:0.7},"-=0.74");
		diTl1.to(this.Star4,{alpha:0, scaleX:0, scaleY:0, ease: "power1.out", duration:0.4},);


	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim9			=	function(  ) {


		this.Puffin	=	Renderer.CreateSprite( Game.DemoSheet, "Puffin", { scaleX:0.56, scaleY:0.56, position:{X:0,Y:0},  parent:this.PuffinContainer} );

		/*
		gsap.to(this.Puffin, {
			duration:0.5,
			y:-60,
			repeat:3,
			//yoyo:true,
			delay:1,
			//ease: "sine.inOut",
			ease: CustomEase.create("custom", "M0,0,C0,0.155,0.067,0.596,0.156,0.762,0.3,1.031,0.497,1,0.544,1,0.583,1,0.737,1.026,0.855,0.782,0.936,0.616,1,0.227,1,0"),
			onUpdate:UpdateStage });
			*/



		CustomBounce.create("myBounce", { endAtStart:true, strength:0.6, squash:7, squashID:"myBounce-squash"});
		//do the bounce by affecting the "y" property.
		gsap.to(this.Puffin, 3, {y:-80, ease:"myBounce", duration:2.2,  repeat:2, repeatDelay:0.35, onUpdate:UpdateStage});
		//and do the squash/stretch at the same time:
		gsap.to(this.Puffin, 3, {scaleX:0.66, scaleY:0.31, ease:"myBounce-squash", duration:2.2, repeat:2, repeatDelay:0.35, transformOrigin:"center bottom"});



		/*
		this.PanelArray = [];

		for( var i=0; i < 10; i++ ) {

			var panel	=	Renderer.CreateSprite( Game.DemoSheet, "tick" + i, { alpha:0.5, scaleX:0.28, scaleY:0, position:{X:0,Y:-50},  parent:this.MotionPath2Container} );

			this.PanelArray.push( panel );

			this.TickerContainer.addChild( panel );

			var stl = gsap.timeline({ delay:1, onUpdate:UpdateStage});
			stl.to( this.PanelArray[i], {
				y:0,
				scaleY:0.28,
				scaleX:0.5,
				ease: "sine.in",
				delay:0.35 *i,
				duration: 2,
				onUpdate: UpdateStage,
				stagger: {
					//yoyo: true,
					//repeat: 5,
					//from: "end",
					amount:0
				}
			});
			stl.to( this.PanelArray[i], {
				y:50,
				scaleY:0,
				scaleX:0.28,
				ease: "sine.out",
				duration: 2,
				onUpdate: UpdateStage,
				stagger: {
					//yoyo: true,
					//repeat: 5,
					//from: "end",
					amount:0
				}
			});


			/*
			gsap.to(prizeArray[i], {
					scaleY:0,
					scaleX:0,
					x:prizeXPosArray[i],
					y:-5,
					duration: 0.22,
					delay:3 + (0.06 *i),
					ease: "sine.inOut",
					onUpdate:UpdateStage
				}
			);
			*/
		//}


	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim10			=	function(  ) {

		this.WinArray = [];


		for( var k=0; k < 17; k++ ) {

			var win 	=	Renderer.CreateSprite( Game.DemoSheet, "Win" + (k+1), {  scaleX:0.55, scaleY:0.55, position:{X:0,Y:0},  parent:this.ElasticContainer} );

			this.WinArray.push( win );
		}

		UpdateStage();

		gsap.from( this.WinArray, { delay:0.4, alpha:0, y:36, stagger:0.03, duration:2, ease:"elastic(2, 0.5)", onUpdate:UpdateStage});

		console.log("WIN");


	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim11			=	function(  ) {

		this.StarExplodeContainer =	Renderer.CreateContainer( );

		for( var k=0; k < 5; k++ ) {

			var star = Renderer.CreateSprite(Game.DemoSheet, "star_" + (k + 1), {
				scaleX: 0.55,
				scaleY: 0.55,
				position: {X: 0, Y: 0},
				parent: this.ExplodeContainer
			});
		}


	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim12			=	function(  ) {

		for (var i = 0; i < 30; i++) {

			// Calculate a random size from 5px to 25px
			var  size = Math.floor(Math.random() * 8 + 2);

			var particle = new PIXI.Graphics();
			particle.beginFill( 0xFFFFFF ).drawCircle(0, 0, size);
			particle.x = 0;
			particle.y = 0;
			particle.alpha = 0.4;

			particle.filters = [new PIXI.filters.BlurFilter()];

			// Generate a random x & y destination within a distance of 75px from the mouse
			var destinationX = (Math.random() - 0.5) * 2 * 75,
				destinationY = (Math.random() - 0.5) * 2 * 75;


			//this.ParticleContainer.addChild( particle );

			var length =  (Math.random() * 2000 + 500) / 1000,
				// Delay every particle with a random value of 200ms
				timeDelay = (Math.random() * 200) / 1000;


			gsap.to( particle, { alpha:0, x:destinationX, y:destinationY, delay:1 + timeDelay, duration:length, ease:"power4.out", onUpdate:UpdateStage});


			// We call the function createParticle 30 times
			// We pass the coordinates of the button for x & y values
			//createParticle(x, y);
		}

		/*
		var displacementSprite = PIXI.Sprite.fromImage('_assets/displace.png');
		var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

		stage.addChild(displacementSprite);

		container.filters = [displacementFilter];

		displacementFilter.scale.x = 110;
		displacementFilter.scale.y = 110;
		*/

		this.StarOutlineArray = [];

		for (var j = 0; j < 20; j++) {

			var starOutline 	=	Renderer.CreateSprite( Game.DemoSheet, "StarOutline", { alpha:0.2 + (j * 0.04), scaleX:0.1, scaleY:0.1, position:{X:0,Y:0},  parent:this.ParticleContainer} );

			this.StarOutlineArray.push( starOutline );

		}

		var delayOffset = 0;
		for (var h = 19; h > -1; h--) {

			if(h === 19){
				gsap.to( this.StarOutlineArray[h], {  x:500, y:-230, scaleX:0.45, scaleY:0.45, delay:1 + (delayOffset * 0.01), duration:2, ease:"power4.out", onUpdate:UpdateStage});
			} else {
				gsap.to( this.StarOutlineArray[h], {  x:500, y:-230, scaleX:0.45, scaleY:0.45, delay:1 + (delayOffset * 0.01), duration:2, ease:"power4.out", onUpdate:UpdateStage});
				gsap.to( this.StarOutlineArray[h], {  alpha:0, delay:1 + (delayOffset * 0.01), duration:2, ease:"power4.out", onUpdate:UpdateStage});
			}
			++delayOffset;
		}



	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim13			=	function(  ) {



		/*

		this.DisplacementSprite = Renderer.CreateSprite( Game.DemoSheet, "icon_f", { alpha:1, scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.DisplacementContainer} );
		this.DisplacementFilter = new PIXI.filters.DisplacementFilter(this.DisplacementSprite);


		this.DisplacementContainer.filters = [this.DisplacementFilter];
		//displacementFilter.scale.x = 0;
		//displacementFilter.scale.y = 0;
		//bg = new PIXI.Sprite(PIXI.loader.resources[“img/bg.jpg”].texture);
		this.BG = Renderer.CreateSprite( Game.DemoSheet, "Pebbles", { alpha:1, scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.DisplacementContainer} );

		gsap.to( this.DisplacementSprite, {   delay:1, x:300, y:-130, repeat:10, yoyo:true, duration:2, ease:"power1.out", onUpdate:UpdateStage});
		*/

		this.BG = Renderer.CreateSprite( Game.DemoSheet, "Pebbles", { alpha:1, scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.DisplacementContainer} );
		this.Tin = Renderer.CreateSprite( Game.DemoSheet, "Tin", { alpha:1, scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.DisplacementContainer} );

		var shockwaveFilter =  new PIXI.filters.ShockwaveFilter();

		this.DisplacementContainer.filters = [shockwaveFilter];

		console.log("shockwaveFilter.time :: " + shockwaveFilter.time);
		console.log("shockwaveFilter.center :: " + shockwaveFilter.center);

		shockwaveFilter.time   = 0.1;
		shockwaveFilter.center = [0.3,0.4];
		//shockwaveFilter.center = { x:1, y:0};

		console.log("shockwaveFilter.time :: " + shockwaveFilter.time);
		console.log("shockwaveFilter.center :: " + shockwaveFilter.center);


		gsap.to(shockwaveFilter,  {
			time: 1,
			duration:4,
			delay:2,
			ease:"power1.out",
			onUpdate:UpdateStage
		});

		/*
		gsap.to(this.Tin,  {
			x:300,
			y:-60,
			duration:4,
			delay:2,
			ease:"power2.out",
			onUpdate:UpdateStage
		});
		*/





		/*
		function setup() {
			posX = app.renderer.width / 2;
			displacementSprite = new PIXI.Sprite(PIXI.loader.resources[“img/ripple.png”].texture);
			displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
			displacementSprite.anchor.set(0.5);
			displacementSprite.x = app.renderer.width
				/ 2;
			displacementSprite.y = app.renderer.height
				/ 2;
			vx = displacementSprite.x;

			*/

	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim14			=	function(  ) {

	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim15			=	function(  ) {

	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim16			=	function(  ) {

	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim17			=	function(  ) {

	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim18			=	function(  ) {

	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim19			=	function(  ) {

	};

	//--------------------------------------------------------------------------------

	CButtonDemo.prototype.PlayAnim20			=	function(  ) {

	};



		//-----------------------------------------------------------------------------------------------
	//	Public statics.
	//-----------------------------------------------------------------------------------------------

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------

	Game.CButtonDemo	=	CButtonDemo;

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------


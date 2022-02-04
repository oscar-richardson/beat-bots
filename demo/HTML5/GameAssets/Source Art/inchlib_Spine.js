//-----------------------------------------------------------------------------------------------

inchlib				=	window.inchlib || {};

//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	Const-ish.
	//-----------------------------------------------------------------------------------------------

	//-----------------------------------------------------------------------------------------------

	var SpineAnim		=	function( atlas_path, json_path, image_object )
	{
		//	We want event dispatching capabilities for this object.
		createjs.EventDispatcher.initialize( SpineAnim.prototype );

		this.AtlasLoad		=	function( data )
		{
			var	skeleton_load	=	function( data )
				{
					var json_skeleton	=	new spine.SkeletonJson( new spine.AtlasAttachmentLoader( this.Atlas ) );
					this.SkeletonData	=	json_skeleton.readSkeletonData( data );

					spine.Bone.yDown = true;

					this.dispatchEvent( "SpineAnimReady" );
				},
				texture_load	=	function( page, path, atlas )	{},
				texture_unload	=	function( texture )				{};

			//	Create the atlas...
			this.Atlas	=	new spine.Atlas( data, {load:texture_load.bind(this), unload:texture_unload.bind(this) } );

			//	...& turn it into a sprite sheet.
			this.CreateSpriteAssets( this.Atlas.regions.length, image_object );

			//	Now let's get the json skeleton file loaded.
			$.getJSON( json_path, skeleton_load.bind(this) );

			console.log( this );
		};

		//	Get loading.
		$.get( atlas_path, this.AtlasLoad.bind(this) );
	};

	//-----------------------------------------------------------------------------------------------

	SpineAnim.prototype.CreateSpriteAssets	=	function( assets_length, image )
	{
		//	Parse the regions it to create a sprite sheet...
		var sprite_sheet =
		{
			images: [ image ],
			frames: [],
			animations: {}
		};

		var	count	=	0;

		while( assets_length-- )
		{
			var region	=	this.Atlas.regions[ assets_length ];

			sprite_sheet.frames.push(
										[
											region.x,
											region.y,
											region.width,
											region.height,
											0,
											region.width/2, //region.offsetX,
											region.height/2 //region.offsetY
										]
									);

			sprite_sheet.animations[ region.name ]	=	new	Array( [count++] );// [assets_length] );
		}

		//	...& create the sheet.
		this.SpriteSheet	=	new	createjs.SpriteSheet( sprite_sheet );
	};

	//-----------------------------------------------------------------------------------------------


	SpineAnim.prototype.DrawSpriteSkeleton	=	function ()
	{
		this.Container.removeAllChildren();

		var draw_order	=	this.Skeleton.drawOrder;
		for( var c0=0; c0<draw_order.length; c0++ )
		{
			var slot	=	draw_order[c0];

			if( slot.attachment !== undefined && slot.attachment !== null )
			{
				var attachment	=	slot.attachment,
					bone		=	slot.bone,
					container	=	new createjs.Container(),
					sprite		=	new createjs.Sprite( this.SpriteSheet, attachment.name );

				if(container && sprite)
				{
					container.visible	=	true;
					container.x			=	bone.worldX+attachment.x*bone.m00+attachment.y*bone.m01;
					container.y			=	bone.worldY+attachment.x*bone.m10+attachment.y*bone.m11;
					container.scaleX	=	bone.worldScaleX;
					container.scaleY	=	bone.worldScaleY;
					container.rotation	=	-slot.bone.worldRotation;

					sprite.rotation		= -(attachment.rotation);
					container.addChild(sprite);

					this.Container.addChild(container);
				}
			}
		}
	};

	//-----------------------------------------------------------------------------------------------

	SpineAnim.prototype.CreateAnimInstance	=	function( stage )
	{
		var	skeleton_data	=	this.SkeletonData,
			skeleton		=	new spine.Skeleton( skeleton_data );

		skeleton.updateWorldTransform();

		var	state_data		=	new spine.AnimationStateData( skeleton_data ),
			state			=	new spine.AnimationState( state_data );

		var	main_container	=	new	createjs.Container(),
			slot_containers	=	[],
			slot_sprites	=	[];

		//	Set an animation frame.
		var	set_anim_frame		=	function( skeleton, first_time, sprite_sheet )
		{
			var draw_order	=	skeleton.drawOrder,
				initialise	=	(first_time!=undefined&&first_time) ? true:false,
				visible		=	!initialise;

			for( var c0=0; c0<draw_order.length; c0++ )
			{
				var slot	=	draw_order[c0];

				if( slot.attachment !== undefined && slot.attachment !== null )
				{
					var attachment	=	slot.attachment,
						bone		=	slot.bone;

					if( initialise )
					{
						//	Create the container & the sprite...
						slot_containers[c0]	=	new createjs.Container();
						slot_sprites[c0]	=	new createjs.Sprite( sprite_sheet, attachment.name );

						//	...sprite is child of container...
						slot_containers[c0].addChild( slot_sprites[c0] );

						//	...add the container to the main container.
						main_container.addChild( slot_containers[c0] );
					}

					var	container	=	slot_containers[c0],
						sprite		=	slot_sprites[c0];

					if(container && sprite)
					{
						container.visible	=	visible;
						container.x			=	bone.worldX+attachment.x*bone.m00+attachment.y*bone.m01;
						container.y			=	bone.worldY+attachment.x*bone.m10+attachment.y*bone.m11;
						container.scaleX	=	bone.worldScaleX;
						container.scaleY	=	bone.worldScaleY;
						container.rotation	=	-slot.bone.worldRotation;

						sprite.gotoAndStop( attachment.name );
						sprite.rotation		= -(attachment.rotation);
					}
				}
			}
		};

		//	Set up the first frame of animation.
		set_anim_frame( skeleton, true, this.SpriteSheet );

		//	GotoAndStop functionality.
		main_container.gotoAndStop		=	function( anim )
		{
			state.setAnimation( anim, false );
			state.update(0);
			state.apply( skeleton );
			skeleton.updateWorldTransform();

			set_anim_frame( skeleton );
		};

		//	GotoAndPlay functionality.
		main_container.gotoAndPlay		=	function( anim, loop, on_complete_fn )
		{
			var	animation	=	skeleton_data.findAnimation( anim ),
				anim_data	=	{current_time:Date.now(), fudge:0},
				loop_it		=	(loop!=undefined) ? loop:false;

			state.setAnimation( 0, animation, loop_it );

			console.log("animation.duration, :: " + animation.duration);

			anim_data.current_time=Date.now();

			TweenMax.to	(
							anim_data,
							animation.duration,
							{
								fudge:10,
								repeat:(loop_it?-1:0),
								useFrames:true,
								onUpdate:function()
								{
									var delta = (Date.now() - anim_data.current_time) * 0.001;

									state.update( delta );
									state.apply( skeleton );
									skeleton.updateWorldTransform();

									set_anim_frame( skeleton );

//									stage.SetDirty();

									anim_data.current_time	=	Date.now();
								},

								onComplete: function()
								{
									if( on_complete_fn != undefined && typeof on_complete_fn==="function" )
									{
										on_complete_fn();
									}
								}
							}
						);
		};

		//	Return the container as our base element.
		return	main_container;
	};

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------

	inchlib.SpineAnim	=	SpineAnim;

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------

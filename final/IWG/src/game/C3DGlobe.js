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
    var width = 800;
    var height = 600;
    var PERSPECTIVE = width * 0.8; // The field of view of our 3D scene
    var PROJECTION_CENTER_X = width / 2; // x center of the canvas
    var PROJECTION_CENTER_Y = height / 2; // y center of the canvas
    var dots = []; // Store every particle in this array

    //	Functions.
    var	UpdateStage	=	function()
    {
        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------
    //	Object definition.
    //-----------------------------------------------------------------------------------------------

    var C3DGlobe	=	function( stage )
    {
        //	Make a note of the stage.
        TheStage		=	stage;

        this.DemoContainer			=	Renderer.CreateContainer( ); //////





        TheStage.addChild( this.DemoContainer );

        /*
        class Dot {
            constructor() {
                this.x = (Math.random() - 0.5) * width; // Give a random x position
                this.y = (Math.random() - 0.5) * height; // Give a random y position
                this.z = Math.random() * width; // Give a random z position
                this.radius = 10; // Size of our element in the 3D world

                this.xProjected = 0; // x coordinate on the 2D world
                this.yProjected = 0; // y coordinate on the 2D world
                this.scaleProjected = 0; // Scale of the element on the 2D world (further = smaller)

            }
            // Project our element from its 3D world to the 2D canvas
            project() {
                // The scaleProjected will store the scale of the element based on its distance from the 'camera'
                this.scaleProjected = PERSPECTIVE / (PERSPECTIVE + this.z);
                // The xProjected is the x position on the 2D world
                this.xProjected = (this.x * this.scaleProjected) + PROJECTION_CENTER_X;
                // The yProjected is the y position on the 2D world
                this.yProjected = (this.y * this.scaleProjected) + PROJECTION_CENTER_Y;
            }
            // Draw the dot on the canvas
            draw() {
                // We first calculate the projected values of our dot
                this.project();

                //console.log("!!DRAW!!");
                // We define the opacity of our element based on its distance
                //ctx.globalAlpha = Math.abs(1 - this.z / width);
                // We draw a rectangle based on the projected coordinates and scale
                //ctx.fillRect(this.xProjected - this.radius, this.yProjected - this.radius, this.radius * 2 * this.scaleProjected, this.radius * 2 * this.scaleProjected);
            }
        }

        // Create 800 new dots
        for (let i = 0; i < 800; i++) {
            // Create a new dot and push it into the array
            dots.push(new Dot());



        }
        */


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

    C3DGlobe.prototype.Reposition		=	function( scale )
    {
        this.DemoContainer.SetPosition( TheStage.View.HalfWidth, TheStage.View.HalfHeight );
        this.DemoContainer.SetScale( scale );

        UpdateStage();
    };



    //--------------------------------------------------------------------------------

    C3DGlobe.prototype.render			=	function(  ) {

        // Clear the scene from top left to bottom right
        //ctx.clearRect(0, 0, width, height);

        // Loop through the dots array and draw every dot
        for (var i = 0; i < dots.length; i++) {
            dots[i].draw();
        }

        // Request the browser the call render once its ready for a new frame
        window.requestAnimationFrame(render);

    };



        //-----------------------------------------------------------------------------------------------
        //	Public statics.
        //-----------------------------------------------------------------------------------------------

        //-----------------------------------------------------------------------------------------------
        //	Namespace path.
        //-----------------------------------------------------------------------------------------------

        Game.C3DGlobe	=	C3DGlobe;

        //-----------------------------------------------------------------------------------------------
    }());

//-----------------------------------------------------------------------------------------------





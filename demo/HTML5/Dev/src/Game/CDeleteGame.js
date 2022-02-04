//-----------------------------------------------------------------------------------------------

(function()
{
    "use strict";

    //-----------------------------------------------------------------------------------------------
    //	const-ish.
    //-----------------------------------------------------------------------------------------------

    var Game			=	ProjectX.Game;		//	Game object shortcut.

    var	TheStage		=	null;

    var GRAPHICS_SCALE          = 0.93,
        ParentContainer,
        Layout1Array            = new Array(),
        NewWaveSqArray          = new Array(),
        NewWaveCount            = 0,
        GameOver                = false,
        IsRestart               = false,
        DiamondsLeft            = 49;



    //-----------------------------------------------------------------------------------------------

    //	Set local paths to external objects.
    var CDeleteGame	=	function( stage )
        {

            //ParentContainer = parent_container;

            TheStage = stage;

            /*
             Layout1Array = ["y", "w", "p", "p", "w",
             "p", "p", "g", "w", "y",
             "w", "p", "w", "w", "y",
             "y", "y", "p", "g", "g",
             "y", "p", "p", "p", "g"];
             */

            Layout1Array = ["y", "w", "p", "p", "w", "g", "w",
                "p", "p", "g", "w", "y", "y", "y",
                "w", "p", "w", "w", "y", "w", "y",
                "y", "y", "p", "g", "g", "w", "w",
                "y", "p", "w", "w", "y", "g", "w",
                "p", "p", "w", "w", "p", "g", "p",
                "y", "y", "p", "p", "g", "p", "p"];

            CDeleteGame.Row0Array               = new Array();
            CDeleteGame.Row1Array               = new Array();
            CDeleteGame.Row2Array               = new Array();
            CDeleteGame.Row3Array               = new Array();
            CDeleteGame.Row4Array               = new Array();
            CDeleteGame.Row5Array               = new Array();
            CDeleteGame.Row6Array               = new Array();

            CDeleteGame.Col0Array               = new Array();
            CDeleteGame.Col1Array               = new Array();
            CDeleteGame.Col2Array               = new Array();
            CDeleteGame.Col3Array               = new Array();
            CDeleteGame.Col4Array               = new Array();
            CDeleteGame.Col5Array               = new Array();
            CDeleteGame.Col6Array               = new Array();

                //	Let's start with a container...
            this.DeleteGameContainer = new createjs.Container();
            //this.DeleteGameContainer.SetPosition(position);
            this.DeleteGameContainer.alpha = 1;


        };

    //-----------------------------------------------------------------------------------------------
    CDeleteGame.prototype.SetUpDeleteGame	=	function(  )
    {


        this.Miner1_1 = new createjs.Sprite(Game.PanelsTextSheet, "Miner1_1");
        this.Miner1_1.SetPosition(-300 , 152);
        this.Miner1_1.scaleX	= GRAPHICS_SCALE;
        this.Miner1_1.scaleY	= GRAPHICS_SCALE;
        this.Miner1_1.alpha    = 1;

        this.Miner1_2 = new createjs.Sprite(Game.PanelsTextSheet, "Miner1_2");
        this.Miner1_2.SetPosition(-300, 152 );
        this.Miner1_2.scaleX	= GRAPHICS_SCALE;
        this.Miner1_2.scaleY	= GRAPHICS_SCALE;
        this.Miner1_2.alpha    = 0;

        this.Miner2_1 = new createjs.Sprite(Game.PanelsTextSheet, "Miner2_1");
        this.Miner2_1.SetPosition(300 , 192);
        this.Miner2_1.scaleX	= GRAPHICS_SCALE;
        this.Miner2_1.scaleY	= GRAPHICS_SCALE;
        this.Miner2_1.alpha    = 1;

        this.Miner2_2 = new createjs.Sprite(Game.PanelsTextSheet, "Miner2_2");
        this.Miner2_2.SetPosition(300 , 192);
        this.Miner2_2.scaleX	= GRAPHICS_SCALE;
        this.Miner2_2.scaleY	= GRAPHICS_SCALE;
        this.Miner2_2.alpha    = 0;

        this.GameTitle = new createjs.Sprite(Game.PanelsTextSheet, "Game2Title");
        this.GameTitle.SetPosition(0, -288);
        this.GameTitle.scaleX	= GRAPHICS_SCALE;
        this.GameTitle.scaleY	= GRAPHICS_SCALE;

        this.CountPanel = new createjs.Sprite(Game.PanelsTextSheet, "Diamond_Count_Panel");
        this.CountPanel.SetPosition(-250 , -156);
        this.CountPanel.scaleX	= GRAPHICS_SCALE;
        this.CountPanel.scaleY	= GRAPHICS_SCALE;
        //this.CountPanel.alpha    = 0.4;

        this.TextPanel = new createjs.Sprite(Game.PanelsTextSheet, "Game2_OnScreenInstructions");
        this.TextPanel.SetPosition(0, 272);
        this.TextPanel.scaleX	= GRAPHICS_SCALE;
        this.TextPanel.scaleY	= GRAPHICS_SCALE;
        //this.TextPanel.alpha    = 0.4;

        this.ClockBG = new createjs.Sprite(Game.DeleteGameSheet, "TimerBlank");
        this.ClockBG.SetPosition(-250 , 82 );
        this.ClockBG.scaleX	= GRAPHICS_SCALE;
        this.ClockBG.scaleY	= GRAPHICS_SCALE;

        this.ClockCountContainer = new createjs.Container();
        this.ClockCountContainer.SetPosition(-251, 92 );
        this.ClockCountContainer.alpha = 1;

        this.ClockCount = new createjs.Sprite(Game.TimerSheet, "ClockFace1");
        this.ClockCount.scaleX	= 0.85;
        this.ClockCount.scaleY	= 0.85;

        this.ClockCountContainer.addChild(this.ClockCount);

        this.CountPrintContainer = new createjs.Container();
        this.CountPrintContainer.SetPosition(-248 , -167);
        this.CountPrintContainer.scaleX	= GRAPHICS_SCALE;
        this.CountPrintContainer.scaleY	= GRAPHICS_SCALE;
        this.CountPrintContainer.alpha = 1;

        //Game.DiamondCountFont.Print( "49", new Vector2(0,0), 1, this.CountPrintContainer, "centre", "centre" );

        this.DeleteGameContainer.addChild( this.Miner1_1, this.Miner1_2,  this.Miner2_1, this.Miner2_2,
            this.GameTitle, this.CountPanel, this.TextPanel, this.CountPrintContainer, this.ClockBG, this.ClockCountContainer );

        this.SetUpGameGrid();

        console.log("CDeleteGame.Row0Array " + CDeleteGame.Row0Array);

        TheStage.addChild( this.DeleteGameContainer );

        createjs.Sound.play("TickTock1", createjs.Sound.INTERRUPT_ANY, 0, 0, -1);

        this.UpdateScoreBoard( 49 );

        TheStage.SetDirty();

        for( var i=1; i<90; i++ ) {

            TweenMax.delayedCall(i*1, this.ClockTick , [i+1], this );

        }

        //	...& make sure we're repositionable.
        ProjectX.SetRepositionable( this );

    };

    CDeleteGame.prototype.Reposition		=	function()
    {

        var scale	=	ProjectX.MainView.ScaleFactor;

        this.DeleteGameContainer.SetPosition( TheStage.View.HalfWidth, TheStage.View.HalfHeight );
        this.DeleteGameContainer.SetScale( scale );


        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------
    CDeleteGame.prototype.ClockTick	=	function( number )
    {
        if(!GameOver) {

            console.log("Count num :: " + Math.floor(number/2));

            var clicknum = Math.floor(number/2);

            this.ClockCountContainer.removeAllChildren();

            this.ClockCount = new createjs.Sprite(Game.TimerSheet, "ClockFace" + clicknum);
            this.ClockCount.scaleX = 0.85;
            this.ClockCount.scaleY = 0.85;

            this.ClockCountContainer.addChild(this.ClockCount);

            if(number == 90){

                this.DisplayEndScreen( false );

            }
        }

        TheStage.SetDirty();
    };


    //-----------------------------------------------------------------------------------------------

    CDeleteGame.prototype.SetUpGameGrid	=	function( event, data )
    {
        /// SET UP BLOCKS ///
        var BlockPosCount = 0;
        for( var i=0; i<7; i++ ) {
            for (var j = 0; j < 7; j++) {

                var Block =  new createjs.Sprite(Game.DeleteGameSheet, "Sq_" + Layout1Array[BlockPosCount]);
                Block.x = (-101 + (62 * j));
                Block.y = (-182 + (62 * i));
                //Block.scaleX	= inchlib.ViewScaleFactor;
                //Block.scaleY	= inchlib.ViewScaleFactor;
                Block.colRef	= Layout1Array[BlockPosCount];
                Block.rowNum	= i;
                Block.colNum	= j;

                if(i == 0){ CDeleteGame.Row0Array.push(Block); }
                if(i == 1){ CDeleteGame.Row1Array.push(Block); }
                if(i == 2){ CDeleteGame.Row2Array.push(Block); }
                if(i == 3){ CDeleteGame.Row3Array.push(Block); }
                if(i == 4){ CDeleteGame.Row4Array.push(Block); }
                if(i == 5){ CDeleteGame.Row5Array.push(Block); }
                if(i == 6){ CDeleteGame.Row6Array.push(Block); }

                if(j == 0){ CDeleteGame.Col0Array.push(Block); }
                if(j == 1){ CDeleteGame.Col1Array.push(Block); }
                if(j == 2){ CDeleteGame.Col2Array.push(Block); }
                if(j == 3){ CDeleteGame.Col3Array.push(Block); }
                if(j == 4){ CDeleteGame.Col4Array.push(Block); }
                if(j == 5){ CDeleteGame.Col5Array.push(Block); }
                if(j == 6){ CDeleteGame.Col6Array.push(Block); }


                Block.on("click", this.BlockClicked, this, false, Block);

                this.DeleteGameContainer.addChild( Block );
                ++BlockPosCount;
            }

        }

        TheStage.SetDirty();

    };

    //-----------------------------------------------------------------------------------------------
    CDeleteGame.prototype.BlockClicked	=	function( event, data )
    {

        //this.CheckForBlockRemoval(data.numId);

        console.log("colRef is : " + data.colRef);
        console.log("colNum is : " + data.colNum);
        console.log("rowNum is : " + data.rowNum);

        //var sq:Object = o;

        NewWaveSqArray = [];

        if ( this.CheckSqLocalMatches(data) ) {

            createjs.Sound.play("Ping1");

            console.log("I passed the check");


            CDeleteGame["Col" + data.colNum + "Array"][data.rowNum].off("click", this.BlockClicked );

            if (NewWaveSqArray.length > 0) {

                for (var i = 0; i < NewWaveSqArray.length; i++){

                    this.CheckSqLocalMatches(NewWaveSqArray[i]);
                    NewWaveSqArray[i].colRef = "bl";

                    NewWaveSqArray[i].off("click", this.BlockClicked );

                }
            }

            this.RecalculateGrid();


        }

        TheStage.SetDirty();

    };

    //----------------------------------------------------------------------------------------------
    CDeleteGame.prototype.CheckSqLocalMatches	=	function( object )
    {

        var sq = object;
        var checkCount = 0;

        //console.log("CheckSqLocalMatches sq.colRef :: " + sq.colRef);

        //console.log("this.TopSqCheck(sq) :: " + this.TopSqCheck(sq));

        console.log("sq.rowNum :: " + sq.rowNum);

        if (sq.rowNum > 0) {
            if ( this.TopSqCheck(sq) ) {
                ++checkCount;
            }
        }

        if (sq.rowNum < 6) {
            if( this.BottomSqCheck(sq) ){
                ++checkCount;
            }
        }

        if (sq.colNum > 0) {
            if( this.LeftSqCheck(sq) ){
                ++checkCount;
            }
        }

        if (sq.colNum < 6) {
            if ( this.RightSqCheck(sq) ) {
                ++checkCount;
            }

        }


        if (checkCount > 0) {
            return true;
        }else {
            return false;
        }

        TheStage.SetDirty();


    };

    //-----------------------------------------------------------------------------------------------

    CDeleteGame.prototype.TopSqCheck			=	function(  object )
    {

        var sq = object;
        var indexPos = sq.rowNum - 1;
        var isMatched = false;

        console.log("sq Above colRef :: " + CDeleteGame["Col" + sq.colNum + "Array"][indexPos].colRef);
        console.log("this sq colRef :: " + sq.colRef);

        if (CDeleteGame["Col" + sq.colNum + "Array"][indexPos].colRef == sq.colRef && CDeleteGame["Col" + sq.colNum + "Array"][indexPos].colRef != "bl") {

            NewWaveSqArray.push(CDeleteGame["Col" + sq.colNum + "Array"][indexPos]);

            isMatched = true;

        }

        TheStage.SetDirty();

        return isMatched;

    };

    //-----------------------------------------------------------------------------------------------

    CDeleteGame.prototype.BottomSqCheck			=	function(  object )
    {

        var sq = object;
        var indexPos = sq.rowNum + 1;
        var isMatched = false;

        if (CDeleteGame["Col" + sq.colNum + "Array"][indexPos].colRef == sq.colRef && CDeleteGame["Col" + sq.colNum + "Array"][indexPos].colRef != "bl") {

            NewWaveSqArray.push(CDeleteGame["Col" + sq.colNum + "Array"][indexPos]);

            isMatched = true;

        }

        TheStage.SetDirty();

        return isMatched;

    };

    //-----------------------------------------------------------------------------------------------

    CDeleteGame.prototype.LeftSqCheck			=	function(  object )
    {

        var sq = object;
        var indexPos = sq.colNum - 1;
        var isMatched = false;

        if (CDeleteGame["Row" + sq.rowNum + "Array"][indexPos].colRef == sq.colRef && CDeleteGame["Row" + sq.rowNum + "Array"][indexPos].colRef != "bl") {

            NewWaveSqArray.push(CDeleteGame["Row" + sq.rowNum + "Array"][indexPos]);

            isMatched = true;

        }

        TheStage.SetDirty();

        return isMatched;

    };

    //-----------------------------------------------------------------------------------------------

    CDeleteGame.prototype.RightSqCheck			=	function(  object )
    {

        var sq = object;
        var indexPos = sq.colNum + 1;
        var isMatched = false;

        if (CDeleteGame["Row" + sq.rowNum + "Array"][indexPos].colRef == sq.colRef && CDeleteGame["Row" + sq.rowNum + "Array"][indexPos].colRef != "bl") {

            NewWaveSqArray.push(CDeleteGame["Row" + sq.rowNum + "Array"][indexPos]);

            isMatched = true;

        }

        TheStage.SetDirty();

        return isMatched;

    };

    //-----------------------------------------------------------------------------------------------

    CDeleteGame.prototype.RecalculateGrid			=	function(  object )
    {
        //private function recalculateGrid() : void {

        for (var i = 0; i < 7; i++)
        {

            var tempArray = new Array();

            for (var j = 6; j > -1; j--)
            {

                if ( CDeleteGame["Col" + i + "Array"][j].colRef == "bl" ) {

                    CDeleteGame["Col" + i + "Array"][j].alpha = 0;

                    tempArray.push(CDeleteGame["Col" + i + "Array"][j]);

                    CDeleteGame["Col" + i + "Array"].splice(j, 1);

                }

            }

            CDeleteGame["Col" + i + "Array"] = tempArray.concat(CDeleteGame["Col" + i + "Array"]);

        }

        TheStage.SetDirty();

        this.ReadjustRowPositions();

    };

    //-----------------------------------------------------------------------------------------------

    CDeleteGame.prototype.ReadjustRowPositions			=	function(  object )
    {

        this.MinersBlink();

        var update		=	function(){ TheStage.SetDirty(); }.bind(this);


        CDeleteGame.Row0Array = [];
        CDeleteGame.Row1Array = [];
        CDeleteGame.Row2Array = [];
        CDeleteGame.Row3Array = [];
        CDeleteGame.Row4Array = [];
        CDeleteGame.Row5Array = [];
        CDeleteGame.Row6Array = [];


        for (var i = 0; i < 7; i++)
        {

            for (var j = 6; j > -1; j--)
            {

                CDeleteGame["Col" + j + "Array"][i].rowNum = i;

                console.log("i :: " + i);
                console.log("the colRef :: " + String(CDeleteGame["Col" + j + "Array"][i].colRef));

                var dropPos;

                if (CDeleteGame["Col" + j + "Array"][i].y != -182  + (Number(CDeleteGame["Col" + j + "Array"][i].rowNum) * (62 * i))) {
                    //if (CDeleteGame["Col" + j + "Array"][i].y != 75 + (Number(CDeleteGame["Col" + j + "Array"][i].rowNum) * 60)) {
                    //dropPos = 75 + (Number(CDeleteGame["Col" + j + "Array"][i].rowNum) * 60)

                    dropPos = -182 + (Number(CDeleteGame["Col" + j + "Array"][i].rowNum) * 62 );

                    TweenLite.to(CDeleteGame["Col" + j + "Array"][i], 0.3, { y:dropPos, delay:0.3, ease:Sine.easeOut, onUpdate:update} );

                }

            }

        }

        var tempDiamondCount = 49;

        for (var k = 0; k < 7; k++)
        {

            for (var f = 0; f < 7; f++)
            {

                CDeleteGame["Row" + k + "Array"].push(CDeleteGame["Col" + f + "Array"][k]);

                if(CDeleteGame["Row" + k + "Array"][f].colRef == "bl") {

                    --tempDiamondCount;

                }

            }

        }

        this.UpdateScoreBoard(tempDiamondCount);

        // CODE TEST FOR ANY GOES LEFT //

        this.CheckForRemainingGoes();

        TheStage.SetDirty();

    };

    //-----------------------------------------------------------------------------------------------

    CDeleteGame.prototype.CheckForRemainingGoes			=	function(  )
    {
        var checkCount = 0;

        for (var i = 0; i < 7; i++)
        {
            for (var j = 0; j < 7; j++)
            {
                if (this.CheckSqLocalMatches(CDeleteGame["Row" + i + "Array"][j])) {
                    ++checkCount;
                }

            }
        }

        if (checkCount == 0 && !GameOver) {

            TweenMax.delayedCall(1.2, this.InitRestart,null, this );

        }

        TheStage.SetDirty();


    };

    //-----------------------------------------------------------------------------------------------

    CDeleteGame.prototype.InitRestart			=	function(  )
    {

        if (!GameOver) {

            IsRestart = true;

            TweenMax.killDelayedCallsTo( this.ClockTick );

            //TweenMax.delayedCall(i*1, this.ClockTick , [i+1], this );

            console.log("RESTART SCREEN");

            this.EndScreenContainer = new createjs.Container();
            this.EndScreenContainer.SetPosition(98 , -36 );

            this.RestartScreen = new createjs.Sprite(Game.PanelsTextSheet, "Restart");
            this.RestartScreen.SetPosition(0,0);
            this.RestartScreen.scaleX	= GRAPHICS_SCALE;
            this.RestartScreen.scaleY	= GRAPHICS_SCALE;

            this.RestartBtn = new createjs.Sprite(Game.PrizesBtnsSheet, "RestartBtn");
            this.RestartBtn.SetPosition(0,162);
            this.RestartBtn.scaleX	= GRAPHICS_SCALE;
            this.RestartBtn.scaleY	= GRAPHICS_SCALE;


            this.EndScreenContainer.addChild( this.RestartScreen, this.RestartBtn );

            this.DeleteGameContainer.addChild( this.EndScreenContainer );

            this.RestartBtn.on ("click", this.RestartClicked, this, false, this.RestartBtn);

        }

        TheStage.SetDirty();


    };

    //-----------------------------------------------------------------------------------------------
    CDeleteGame.prototype.RestartClicked	=	function( event, data )
    {

        this.RestartBtn.off ("click", this.RestartClicked );
        this.DeleteGameContainer.removeChild( this.EndScreenContainer );

        this.UpdateScoreBoard(49);

        this.ResetGrid();


        GameOver = false;

        this.ClockCount = new createjs.Sprite(Game.TimerSheet, "ClockFace1");
        this.ClockCount.scaleX = 0.85;
        this.ClockCount.scaleY = 0.85;

        this.ClockCountContainer.addChild(this.ClockCount);

        for( var i=1; i<90; i++ ) {

            TweenMax.delayedCall(i*1, this.ClockTick , [i+1], this );

        }

        TheStage.SetDirty();

    };

    //-----------------------------------------------------------------------------------------------

    CDeleteGame.prototype.ResetGrid			=	function(  )
    {
        for (var i = 0; i < 7; i++)
        {
            for (var j = 0; j < 7; j++)
            {

                this.DeleteGameContainer.removeChild(CDeleteGame["Row" + i + "Array"][j]);

            }
        }

        CDeleteGame.Row0Array = [];
        CDeleteGame.Row1Array = [];
        CDeleteGame.Row2Array = [];
        CDeleteGame.Row3Array = [];
        CDeleteGame.Row4Array = [];
        CDeleteGame.Row5Array = [];
        CDeleteGame.Row6Array = [];

        CDeleteGame.Col0Array = [];
        CDeleteGame.Col1Array = [];
        CDeleteGame.Col2Array = [];
        CDeleteGame.Col3Array = [];
        CDeleteGame.Col4Array = [];
        CDeleteGame.Col5Array = [];
        CDeleteGame.Col6Array = [];

        this.SetUpGameGrid();

        TheStage.SetDirty();


    };

    //-----------------------------------------------------------------------------------------------

    CDeleteGame.prototype.UpdateScoreBoard			=	function( number )
    {

        var DisplayNum = number.toString();

        this.CountPrintContainer.removeAllChildren();

        //Game.DiamondCountFont.Print( DisplayNum, new Vector2(0,0), 1, this.CountPrintContainer, "centre", "centre" );

        this.TimerNum = new createjs.Sprite(Game.TimerNosSheet, "Timer00" + number);
        this.TimerNum.SetPosition( 0,0 );
        //this.TimerNum.scaleX = 0.85;
        //this.TimerNum.scaleY = 0.85;

        console.log("UpdateScoreBoard number :: " + number);

        this.CountPrintContainer.addChild( this.TimerNum );

        if (number == 0) {

            this.DisplayEndScreen(true);



            //TweenLite.to(round2MC.timerMC.clockFace, 0.1, { frame:round2MC.timerMC.clockFace.currentFrame, ease:Linear.easeNone, overWrite:1 } );

        }

        TheStage.SetDirty();

    };

    //-----------------------------------------------------------------------------------------------

    CDeleteGame.prototype.DisplayEndScreen			=	function( boolean )
    {

        GameOver = true;

        createjs.Sound.stop("TickTock1");

        createjs.Sound.play( "Winner2" );



        if (IsRestart) {

            this.RestartBtn.off ("click", this.RestartClicked );
            this.DeleteGameContainer.removeChild( this.RestartContainer );

        }

        var isWinner = boolean;

        this.EndScreenContainer = new createjs.Container();
        this.EndScreenContainer.SetPosition( 0,-54 );

        if(isWinner){

            this.EndScreen = new createjs.Sprite(Game.PanelsTextSheet, "EndScreen0002");
            this.EndScreen.SetPosition(0,0);
            this.EndScreen.scaleX	= GRAPHICS_SCALE;
            this.EndScreen.scaleY	= GRAPHICS_SCALE;

        } else {

            this.EndScreen = new createjs.Sprite(Game.PanelsTextSheet, "EndScreen0001");
            this.EndScreen.SetPosition(0,0);
            this.EndScreen.scaleX	= GRAPHICS_SCALE;
            this.EndScreen.scaleY	= GRAPHICS_SCALE;

        }

        this.RestartBtn = new createjs.Sprite(Game.PrizesBtnsSheet, "RestartBtn");
        this.RestartBtn.SetPosition(0,162);
        this.RestartBtn.scaleX	= GRAPHICS_SCALE;
        this.RestartBtn.scaleY	= GRAPHICS_SCALE;


        this.EndScreenContainer.addChild( this.EndScreen, this.RestartBtn );

        this.DeleteGameContainer.addChild( this.EndScreenContainer );

        //	...& listen out for the finish button being tapped.

        this.RestartBtn.on ("click", this.RestartClicked, this, false, this.RestartBtn);

        TheStage.SetDirty();

        /*
         this.FinishBtn.on(
         "click",
         function( evt )
         {
         core.IWG.ame('closeGame');
         },
         null,
         true
         );
         */

    };

    //-----------------------------------------------------------------------------------------------
    CDeleteGame.prototype.MinersBlink	=	function( )
    {

        this.Miner1_2.alpha = 1;
        this.Miner2_2.alpha = 1;

        this.Miner1_1.alpha = 0;
        this.Miner2_1.alpha = 0;

        TweenMax.delayedCall(0.3, function(){
            this.Miner1_2.alpha = 0;
            this.Miner2_2.alpha = 0;
            this.Miner1_1.alpha = 1;
            this.Miner2_1.alpha = 1;
        }, null, this );

        TheStage.SetDirty();

    };




    //-----------------------------------------------------------------------------------------------
    //	Static variables.
    //-----------------------------------------------------------------------------------------------

    CDeleteGame.VERSION			=	'0_0_1';

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.CDeleteGame		=	CDeleteGame;
}());

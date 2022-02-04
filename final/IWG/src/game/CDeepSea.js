//-----------------------------------------------------------------------------------------------

(function() {
    "use strict";

    //-----------------------------------------------------------------------------------------------
    //	Const-ish.
    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------
    //	Private statics.
    //-----------------------------------------------------------------------------------------------

    //	Beablib object aliases.
    var	Audio		=	beablib.Audio,
        Game        = beablib.Game,
        Renderer    = beablib.Renderer;

    //	Data.
    var TheStage = null;

    //  Game data.
    var AllLightArray  = [],
        LightSettingsArray = [
        {X:-70,Y:-150,R:35,A:0.02},
        {X:-55,Y:-147,R:27,A:0.06},
        {X:-38,Y:-143,R:20,A:0.11},
        {X:-18,Y:-140,R:9,A:0.24},
        {X:0,Y:-136,R:0,A:0.4},
        {X:15,Y:-140,R:-8,A:0.27},
        {X:27,Y:-143,R:-16,A:0.1},
        {X:55,Y:-137,R:-21,A:0.05},
        {X:73,Y:-150,R:-34,A:0.02}],

        SelectionBtnArray    =  [];


    //	Functions.
    var UpdateStage = function () {
        TheStage.SetDirty();
    };

    //-----------------------------------------------------------------------------------------------
    //	Object definition.
    //-----------------------------------------------------------------------------------------------

    var CDeepSea = function (stage) {
        //	Make a note of the stage.
        TheStage = stage;

        this.DemoContainer = Renderer.CreateContainer();


        //this.SeaFloorGUIDE = Renderer.CreateSprite(Game.DeepSea3Sheet, "GUIDE", {alpha: 1, scale:1, position: {X:0, Y:0}, parent: this.DemoContainer});

        this.DemoContentContainer = Renderer.CreateContainer( { alpha:1, position:{X:0,Y:150}, scale:1, parent:this.DemoContainer});


        this.SurfaceLight = Renderer.CreateSprite(Game.DeepSeaSheet, "SurfaceLight", {
            alpha:1,
            scale:1.12,
            position: {X:0, Y:-10},
            parent: this.DemoContentContainer
        });

        ///// SEA FLOOR /////
        this.SeaFloorContainer = Renderer.CreateContainer( { alpha:1, position:{X:0,Y:0}, scale:1, parent:this.DemoContentContainer});

        this.SandyBottomContainer = Renderer.CreateContainer( { alpha:1, position:{X:0,Y:460}, scaleX:1, scaleY:0.3, parent:this.SeaFloorContainer});


        this.OceanFloor         = Renderer.CreateSprite(Game.DeepSea2Sheet, "Sand", {alpha:1, scale:1, position: {X:0, Y:86}, parent: this.SandyBottomContainer});
        this.BackRocksLeft      = Renderer.CreateSprite(Game.DeepSea2Sheet, "BackRocks", {alpha:1, scaleX:-1, scaleY:1, position: {X:-327, Y:0}, parent: this.SandyBottomContainer});
        this.BackRocksRight     = Renderer.CreateSprite(Game.DeepSea2Sheet, "BackRocks", {alpha:1, scaleX:1, scaleY:1, position: {X:327, Y:-8}, parent: this.SandyBottomContainer});

        this.Grass              = Renderer.CreateSprite(Game.DeepSea2Sheet, "Grass", {alpha:1, scaleX:1, scaleY:1, position: {X:0, Y:184}, parent: this.SandyBottomContainer});

        this.GrassLoop = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.GrassLoop.to(this.Grass, { pixi: {skewX:17}, x:45, y:170, duration:1.6, ease: "power1.inOut"});
        this.GrassLoop.to(this.Grass, {pixi: {skewX:0}, x:0, y:184, duration:1.7, ease: "power1.inOut"});

        this.Weed1              = Renderer.CreateSprite(Game.DeepSea2Sheet, "Weed1", {alpha:1, scale:0.76, position: {X:-180, Y:30}, parent: this.SandyBottomContainer});
        this.Weed2              = Renderer.CreateSprite(Game.DeepSea2Sheet, "Weed4", {alpha:1, scale:0.66, position: {X:-20, Y:55}, parent: this.SandyBottomContainer});
        this.Weed3              = Renderer.CreateSprite(Game.DeepSea2Sheet, "Weed3", {alpha:1, scale:0.58, position: {X:80, Y:20}, parent: this.SandyBottomContainer});
        this.Weed4              = Renderer.CreateSprite(Game.DeepSea2Sheet, "Weed4", {alpha:1, scale:0.67, position: {X:290, Y:10}, parent: this.SandyBottomContainer});

        this.Weed1Loop = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.Weed1Loop.to(this.Weed1, {rotation:this.DegreesToRadians(-25),  duration:1.5, ease: "power1.inOut"});
        this.Weed1Loop.to(this.Weed1, {rotation:this.DegreesToRadians(0), duration:1.4, ease: "power1.inOut"});

        this.Weed2Loop = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.Weed2Loop.to(this.Weed2, { rotation:this.DegreesToRadians(-22), duration:1.6, ease: "power1.inOut"});
        this.Weed2Loop.to(this.Weed2, { rotation:this.DegreesToRadians(0), duration:1.7, ease: "power1.inOut"});

        this.Weed3Loop = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.Weed3Loop.to(this.Weed3, { rotation:this.DegreesToRadians(-45), duration:1.3, ease: "power1.inOut"});
        this.Weed3Loop.to(this.Weed3, { rotation:this.DegreesToRadians(0), duration:2, ease: "power1.inOut"});

        this.Weed4Loop = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.Weed4Loop.to(this.Weed4, { rotation:this.DegreesToRadians(-35), duration:1.9, ease: "power1.inOut"});
        this.Weed4Loop.to(this.Weed4, { rotation:this.DegreesToRadians(0), duration:1.2, ease: "power1.inOut"});


        this.SideRockContainer = Renderer.CreateContainer( { alpha:1, position:{X:0,Y:394}, scaleX:1, scaleY:0.8, parent:this.SeaFloorContainer});

        this.RockRight    = Renderer.CreateSprite(Game.DeepSea2Sheet, "BigRock", {alpha:1, scale:1, position: {X:524, Y:-50}, parent: this.SideRockContainer});
        this.RockLeft    = Renderer.CreateSprite(Game.DeepSea2Sheet, "BigRock", {alpha:1, scaleX:-1, scaleY:1, position: {X:-528, Y:-50}, parent: this.SideRockContainer});

        this.RightWeed1              = Renderer.CreateSprite(Game.DeepSea2Sheet, "Weed1", {alpha:1, scale:1.36, position: {X:444, Y:20}, parent: this.SideRockContainer});
        this.RightWeed3              = Renderer.CreateSprite(Game.DeepSea2Sheet, "Weed3", {alpha:1, scale:0.78, position: {X:590, Y:-244}, parent: this.SideRockContainer});
        this.RightWeed4              = Renderer.CreateSprite(Game.DeepSea2Sheet, "Weed4", {alpha:1, scale:0.87, position: {X:600, Y:-120}, parent: this.SideRockContainer});
        this.RightWeed2              = Renderer.CreateSprite(Game.DeepSea2Sheet, "Weed4", {alpha:1, scale:1.66, position: {X:540, Y:-30}, parent: this.SideRockContainer});

        this.LeftWeed1              = Renderer.CreateSprite(Game.DeepSea2Sheet, "Weed1", {alpha:1, scale:1.36, position: {X:-444, Y:20}, parent: this.SideRockContainer});
        this.LeftWeed3              = Renderer.CreateSprite(Game.DeepSea2Sheet, "Weed3", {alpha:1, scale:0.78, position: {X:-590, Y:-244}, parent: this.SideRockContainer});
        this.LeftWeed4              = Renderer.CreateSprite(Game.DeepSea2Sheet, "Weed4", {alpha:1, scale:0.87, position: {X:-600, Y:-120}, parent: this.SideRockContainer});
        this.LeftWeed2              = Renderer.CreateSprite(Game.DeepSea2Sheet, "Weed4", {alpha:1, scale:1.66, position: {X:-540, Y:-30}, parent: this.SideRockContainer});


        this.Weed1RockLoop = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.Weed1RockLoop.to([this.RightWeed1, this.LeftWeed1], {rotation:this.DegreesToRadians(-25),  duration:1.3, ease: "power1.inOut"});
        this.Weed1RockLoop.to([this.RightWeed1, this.LeftWeed1], {rotation:this.DegreesToRadians(0), duration:1.2, ease: "power1.inOut"});

        this.Weed2RockLoop = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.Weed2RockLoop.to([this.RightWeed2, this.LeftWeed2], { rotation:this.DegreesToRadians(-22), duration:1.5, ease: "power1.inOut"});
        this.Weed2RockLoop.to([this.RightWeed2, this.LeftWeed2], { rotation:this.DegreesToRadians(0), duration:2, ease: "power1.inOut"});

        this.Weed3RockLoop = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.Weed3RockLoop.to([this.RightWeed3, this.LeftWeed3], { rotation:this.DegreesToRadians(-45), duration:1.5, ease: "power1.inOut"});
        this.Weed3RockLoop.to([this.RightWeed3, this.LeftWeed3], { rotation:this.DegreesToRadians(0), duration:1.2, ease: "power1.inOut"});

        this.Weed4RockLoop = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.Weed4RockLoop.to([this.RightWeed4, this.LeftWeed4], { rotation:this.DegreesToRadians(-35), duration:1.4, ease: "power1.inOut"});
        this.Weed4RockLoop.to([this.RightWeed4, this.LeftWeed4], { rotation:this.DegreesToRadians(0), duration:1.2, ease: "power1.inOut"});



        this.ConesRight    = Renderer.CreateSprite(Game.DeepSea2Sheet, "YellowCones", {alpha:1, scale:1, position: {X:224, Y:340}, parent: this.SeaFloorContainer});
        this.ConesLeft     = Renderer.CreateSprite(Game.DeepSea2Sheet, "YellowCones", {alpha:1, scaleX:-1, scaleY:1, position: {X:-238, Y:340}, parent: this.SeaFloorContainer});


        this.PinkTubesRight    = Renderer.CreateSprite(Game.DeepSea2Sheet, "Pink", {alpha:1, scale:1, position: {X:362, Y:370}, parent: this.SeaFloorContainer});
        this.PinkTubesLeft     = Renderer.CreateSprite(Game.DeepSea2Sheet, "Pink", {alpha:1, scaleX:-1, scaleY:1, position: {X:-365, Y:370}, parent: this.SeaFloorContainer});


        this.YellowRight    = Renderer.CreateSprite(Game.DeepSea2Sheet, "MidYellow", {alpha:1, scale:1, position: {X:502, Y:480}, parent: this.SeaFloorContainer});
        this.YellowLeft     = Renderer.CreateSprite(Game.DeepSea2Sheet, "MidYellow", {alpha:1, scaleX:-1, scaleY:1, position: {X:-505, Y:480}, parent: this.SeaFloorContainer});

        this.PinkSlatesRight    = Renderer.CreateSprite(Game.DeepSea2Sheet, "PinkSlates", {alpha:1, scale:1, position: {X:600, Y:413}, parent: this.SeaFloorContainer});
        this.PinkSlatesLeft     = Renderer.CreateSprite(Game.DeepSea2Sheet, "PinkSlates", {alpha:1, scaleX:-1, scaleY:1, position: {X:-595, Y:413}, parent: this.SeaFloorContainer});

        this.BlueRight    = Renderer.CreateSprite(Game.DeepSea2Sheet, "FrontBlue", {alpha:1, scale:1, position: {X:270, Y:358}, parent: this.SeaFloorContainer});
        this.BlueLeft     = Renderer.CreateSprite(Game.DeepSea2Sheet, "FrontBlue", {alpha:1, scaleX:-1, scaleY:1, position: {X:-275, Y:358}, parent: this.SeaFloorContainer});


        ////////////////////////////////////////////////

        this.RefractionContainer = Renderer.CreateContainer( { alpha:1, position:{X:0,Y:150}, scale:1, parent:this.DemoContainer});


        this.SeaLight = Renderer.CreateSprite(Game.DeepSea3Sheet, "LightCircle", {
            alpha: 1,
            scale:1,
            rotation:this.DegreesToRadians(0.7),
            position: {X:0, Y:-130},
            parent: this.DemoContentContainer
        });


        this.SeaRefraction      = Renderer.CreateSprite(Game.DeepSea2Sheet, "Refraction1", {alpha: 1, scale:0.9, position: {X:-5, Y:-420}, parent: this.RefractionContainer});
        this.SeaRefractionLeft  = Renderer.CreateSprite(Game.DeepSea2Sheet, "Refraction2", {alpha:0.6, scale:0.9, position: {X:-500, Y:90}, parent: this.RefractionContainer});
        this.SeaRefractionRight = Renderer.CreateSprite(Game.DeepSea2Sheet, "Refraction2", {alpha:0.6, scaleX:-0.9, scaleY:0.9, position: {X:500, Y:90}, parent: this.RefractionContainer});


        this.CircleLoop = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.CircleLoop.to(this.SeaLight, {scaleX:0.9, scaleY:1.1, duration:1.2, ease: "power1.inOut"});
        this.CircleLoop.to(this.SeaLight, {scaleX:1, scaleY:1, duration:1, ease: "power1.inOut"});


        //// Top Refraction ////
        this.RefractLoopX = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.RefractLoopX.to(this.SeaRefraction, {alpha:0.4, x:5, pixi: {skewX:15}, duration:1.7, ease: "power1.inOut"});
        this.RefractLoopX.to(this.SeaRefraction, {alpha:0.7, x:-3, pixi: {skewX:-13}, duration:1.3, ease: "power1.inOut"});
        this.RefractLoopX.to(this.SeaRefraction, {alpha:0.2, x:8, pixi: {skewX:14}, duration:2, ease: "power1.inOut"});
        this.RefractLoopX.to(this.SeaRefraction, {alpha:1, x:-5, pixi: {skewX:0}, duration:1.7, ease: "power1.inOut"});

        this.RefractLoopY = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.RefractLoopY.to(this.SeaRefraction, {scaleY:1, duration:2, ease: "power1.inOut"});
        this.RefractLoopY.to(this.SeaRefraction, {scaleY:0.88, duration:1.1, ease: "power1.inOut"});
        this.RefractLoopY.to(this.SeaRefraction, {scaleY:0.96, duration:2.4, ease: "power1.inOut"});
        this.RefractLoopY.to(this.SeaRefraction, {scaleY:0.9, duration:1.4, ease: "power1.inOut"});

        //// Left Refraction ////
        this.LeftRefractLoopX = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.LeftRefractLoopX.to(this.SeaRefractionLeft, {alpha:0.4, x:-490, duration:2.2, ease: "power1.inOut"});
        this.LeftRefractLoopX.to(this.SeaRefractionLeft, {alpha:0.7, x:-503, duration:1.7, ease: "power1.inOut"});
        this.LeftRefractLoopX.to(this.SeaRefractionLeft, {alpha:0.3, x:-495, duration:1.5, ease: "power1.inOut"});
        this.LeftRefractLoopX.to(this.SeaRefractionLeft, {alpha:0.6, x:-500, duration:1.2, ease: "power1.inOut"});

        this.LeftRefractLoopY = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.LeftRefractLoopY.to(this.SeaRefractionLeft, {scaleY:1, duration:2, pixi: {skewX:5}, ease: "power1.inOut"});
        this.LeftRefractLoopY.to(this.SeaRefractionLeft, {scaleY:0.88, duration:1.5, pixi: {skewX:-5},  ease: "power1.inOut"});
        this.LeftRefractLoopY.to(this.SeaRefractionLeft, {scaleY:0.96, duration:1.4, pixi: {skewX:3},  ease: "power1.inOut"});
        this.LeftRefractLoopY.to(this.SeaRefractionLeft, {scaleY:0.9, duration:2.1,pixi: {skewX:0},  ease: "power1.inOut"});

        //// Right Refraction ////

        this.RightRefractLoopX = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.RightRefractLoopX.to(this.SeaRefractionRight, {alpha:0.7, x:510, duration:1.5, ease: "power1.inOut"});
        this.RightRefractLoopX.to(this.SeaRefractionRight, {alpha:0.5, x:495, duration:1.8, ease: "power1.inOut"});
        this.RightRefractLoopX.to(this.SeaRefractionRight, {alpha:0.6, x:508, duration:2.2, ease: "power1.inOut"});
        this.RightRefractLoopX.to(this.SeaRefractionRight, {alpha:0.6, x:500, duration:1.2, ease: "power1.inOut"});

        this.RightRefractLoopY = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
        this.RightRefractLoopY.to(this.SeaRefractionRight, {scaleY:1, duration:2, pixi: {skewX:-4}, ease: "power1.inOut"});
        this.RightRefractLoopY.to(this.SeaRefractionRight, {scaleY:0.82, duration:1.1, pixi: {skewX:5}, ease: "power1.inOut"});
        this.RightRefractLoopY.to(this.SeaRefractionRight, {scaleY:0.95, duration:2.4, pixi: {skewX:-5}, ease: "power1.inOut"});
        this.RightRefractLoopY.to(this.SeaRefractionRight, {scaleY:0.9, duration:1.4, pixi: {skewX:0}, ease: "power1.inOut"});


        /// SURFACE LIGHT LOOP ////
        this.SeaLoopX = gsap.timeline({ paused:false, onUpdate: UpdateStage, repeat:-1});
        this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.17, duration:1.7, ease: "power1.inOut"});
        this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.11, duration:1.3, ease: "power1.inOut"});
        this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.07, duration:2, ease: "power1.inOut"});
        this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.2, duration:1.7, ease: "power1.inOut"});
        this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.09, duration:1.5, ease: "power1.inOut"});
        this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.12, duration:2.2, ease: "power1.inOut"});

        this.SeaLoopY = gsap.timeline({ paused:false, onUpdate: UpdateStage, repeat:-1});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:1.07, duration:2, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:1.14, duration:1.1, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:1.09, duration:2.4, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:1.17, duration:1.4, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:1.28, duration:2.1, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:1.12, duration:1.2, ease: "power1.inOut"});


        this.AllLightsContainer = Renderer.CreateContainer( { alpha:1, position:{X:0,Y:0}, scale:1, parent:this.DemoContentContainer});

        for (var j = 0; j < 9; j++) {

            var lightArray = [];
            var lightContainer = Renderer.CreateContainer( {
                scaleY:1, ///0.7
                scaleX:1.5, /// 1.1
                position:{X:LightSettingsArray[j].X, Y:LightSettingsArray[j].Y - 60},
                alpha:LightSettingsArray[j].A,
                rotation:this.DegreesToRadians(LightSettingsArray[j].R - 2.4),
                parent:this.AllLightsContainer
            });

            for (var i = 0; i < 8; i++) {

                var randScaleX1 = (Math.random() / 2) + 0.4;
                var randScaleX2 = (Math.random() / 2) + 0.2;
                var randScaleY = (Math.random() / 3) + 0.7;
                var randAlpha1 = (Math.random() / 2) + 0.2;
                var randAlpha2 = Math.random();
                var randTime = ((Math.random()) / 5) + 0.1;

                var light = Renderer.CreateSprite(Game.DeepSeaSheet, "LightFX", {
                    alpha: randAlpha1,
                    scaleX: randScaleX1,
                    scaleY: randScaleY,
                    position: {X: 0, Y: 0},
                    parent:lightContainer
                });


                lightArray.push(light);
                lightArray[i].ScaleX1 = randScaleX1;
                lightArray[i].ScaleX2 = randScaleX2;
                lightArray[i].ScaleY1 = randScaleY;
                lightArray[i].Alpha1 = randAlpha1;
                lightArray[i].Alpha2 = randAlpha2;
                lightArray[i].FadeTime = randTime;

            }

            AllLightArray.push( lightArray );

            this.LightFlicker( lightArray );

            var rotateLoop = gsap.timeline({onUpdate: UpdateStage, repeat:-1, delay:0.04});
            rotateLoop.to(lightContainer, { rotation:this.DegreesToRadians(LightSettingsArray[j].R + 5), duration:2, ease: "power1.inOut"});
            rotateLoop.to(lightContainer, { rotation:this.DegreesToRadians(LightSettingsArray[j].R - 2.4), duration:2, ease: "power1.inOut"});

            var randInt = (Math.random() * 2) + 2.2;

            //var alphaLoop = gsap.timeline({onUpdate: UpdateStage, repeat:-1});
            //alphaLoop.to(lightContainer, { alpha:LightSettingsArray[j].A, duration:randInt, ease: "power1.inOut"});
            //alphaLoop.to(lightContainer, { alpha:0.12, duration:randInt, ease: "power1.inOut"});

        }


        this.WinUpTo = Renderer.CreateSprite(Game.DeepSeaSheet, "WinUpTo", {alpha: 1, scaleX: 1, scaleY: 1, position: {X:0, Y: 0}, parent: this.DemoContainer});
        this.Logo = Renderer.CreateSprite(Game.DeepSea3Sheet, "Logo", {alpha: 1, scaleX: 1, scaleY: 1, position: {X:0, Y: 0}, parent: this.DemoContainer});


        this.PlayContainer		    =	Renderer.CreateContainer( { alpha:0, scaleX:1, scaleY:1, position:{X:0,Y:0},  parent:this.DemoContainer} );
        this.PlayBtnGlow = Renderer.CreateSprite(Game.DeepSeaSheet, "PlayBtnGlow", { alpha: 0, position: {X:0, Y:0}, parent: this.PlayContainer});
        this.PlayBtn = Renderer.CreateSprite(Game.DeepSeaSheet, "PlayBtn", {alpha: 1, position: {X:0, Y:0}, parent: this.PlayContainer});


        this.GameLayout = Renderer.CreateSprite(Game.DeepSeaSheet, "GameLayout", {alpha:1, scale:0.98, position: {X:0, Y:700}, parent: this.DemoContainer});

        this.PlayBtn.SetButtonMode(true, this.PlayBtnClicked, this, true);


        ////// SELECTION STUFF /////
        this.SelectionContainer     =	Renderer.CreateContainer( {alpha:1, scale:1, position:{X:0,Y:0}, parent:this.DemoContainer} );

        this.Panel1Container        =	Renderer.CreateContainer( {alpha:0, scale:0.54, position:{X:-190,Y:74}, parent:this.SelectionContainer} );
        this.Panel2Container        =	Renderer.CreateContainer( {alpha:0, scale:0.54, position:{X:0,Y:74}, parent:this.SelectionContainer} );
        this.Panel3Container        =	Renderer.CreateContainer( {alpha:0, scale:0.54, position:{X:190,Y:74}, parent:this.SelectionContainer} );


        this.PanelGlow1	            =	Renderer.CreateSprite( Game.DeepSea3Sheet, "PanelGlow", { alpha:0, position:{X:0,Y:0},  parent:this.Panel1Container});
        this.Panel1	                =	Renderer.CreateSprite( Game.DeepSea3Sheet, "Panel1", { alpha:1, position:{X:0,Y:0},  parent:this.Panel1Container});
        this.PanelGlow2	            =	Renderer.CreateSprite( Game.DeepSea3Sheet, "PanelGlow", { alpha:0, position:{X:0,Y:0},  parent:this.Panel2Container});
        this.Panel2	                =	Renderer.CreateSprite( Game.DeepSea3Sheet, "Panel2", { alpha:1, position:{X:0,Y:0},  parent:this.Panel2Container});
        this.PanelGlow3	            =	Renderer.CreateSprite( Game.DeepSea3Sheet, "PanelGlow", { alpha:0, position:{X:0,Y:0},  parent:this.Panel3Container});
        this.Panel3	                =	Renderer.CreateSprite( Game.DeepSea3Sheet, "Panel3", { alpha:1, position:{X:0,Y:0},  parent:this.Panel3Container});

        //this.PanelText1	            =	Renderer.CreateSprite( Game.SplashScreenSheet, "PanelText1", { alpha:1, position:{X:0,Y:110},  parent:this.Panel1Container});
        //this.PanelTextGlow1	        =	Renderer.CreateSprite( Game.SplashScreenSheet, "PanelTextGlow1", { alpha:0, position:{X:0,Y:110},  parent:this.Panel1Container});
        //this.PanelText2	            =	Renderer.CreateSprite( Game.SplashScreenSheet, "PanelText2", { alpha:1, position:{X:0,Y:112},  parent:this.Panel2Container});
        //this.PanelTextGlow2	        =	Renderer.CreateSprite( Game.SplashScreenSheet, "PanelTextGlow2", { alpha:0, position:{X:0,Y:112},  parent:this.Panel2Container});
        //this.PanelText3	            =	Renderer.CreateSprite( Game.SplashScreenSheet, "PanelText3", { alpha:1, position:{X:0,Y:110},  parent:this.Panel3Container});
        //this.PanelTextGlow3	        =	Renderer.CreateSprite( Game.SplashScreenSheet, "PanelTextGlow3", { alpha:0, position:{X:0,Y:110},  parent:this.Panel3Container});

        this.ChooseText	            =	Renderer.CreateSprite( Game.DeepSea3Sheet, "ChooseText", { alpha:0, position:{X:0,Y:0},  parent:this.SelectionContainer});

        SelectionBtnArray = [ this.Panel1Container, this.Panel2Container, this.Panel3Container];

        SelectionBtnArray[0].PanelGlow = this.PanelGlow1;
        //SelectionBtnArray[0].Glow = this.PanelTextGlow1;
        SelectionBtnArray[0].numId = 0;
        SelectionBtnArray[1].PanelGlow = this.PanelGlow2;
        //SelectionBtnArray[1].Glow = this.PanelTextGlow2;
        SelectionBtnArray[1].numId = 1;
        SelectionBtnArray[2].PanelGlow = this.PanelGlow3;
        //SelectionBtnArray[2].Glow = this.PanelTextGlow3;
        SelectionBtnArray[2].numId = 2;


        this.Bubbles();

        this.PlayBtnInit();

        console.log("DEEP SEA");

        TheStage.addChild(this.DemoContainer);

        //	Make sure we're repositionable.
        beablib.SetRepositionable(this);
    };

    //-----------------------------------------------------------------------------------------------
    //	Public members.
    //-----------------------------------------------------------------------------------------------


    CDeepSea.prototype.Reposition = function (scale) {

        this.DemoContainer.SetPosition(TheStage.View.HalfWidth, TheStage.View.HalfHeight);
        this.DemoContainer.SetScale(scale);

        UpdateStage();
    };

    //-----------------------------------------------------------------------------------------------



    CDeepSea.prototype.PlayBtnInit			=	function(  ) {

        var	activate_button	=	function()
        {
            this.PlayContainer.SetButtonMode( true, this.StartSeaLoop, this, true  );
        }.bind(this);

        this.PlayContainer.mouseover	=	function(){
            //for( var k=0; k < 4; k++ ) {
            gsap.to( this.PlayBtnGlow, { duration:0.2, alpha:0.78, onUpdate:UpdateStage } );
        }.bind(this);
        this.PlayContainer.mouseout	=	function(){
            //for( var j=0; j < 4; j++ ) {
            gsap.to( this.PlayBtnGlow, { duration:0.2, alpha:0, onUpdate:UpdateStage } );
        }.bind(this);

        this.PlayPrompt();

        //	Yep, so reveal the start button.
        gsap.to( this.PlayContainer, { duration:0.4, alpha:1, delay:0.3, onUpdate:UpdateStage, onComplete:activate_button} );

    };

    //--------------------------------------------------------------------------------

    CDeepSea.prototype.LightFlicker			=	function( array ) {

        for (var i = 0; i < 8; i++) {


            //Light1Array.push( light );
            //Light1Array[i].ScaleX1  = randScaleX1;
            //Light1Array[i].ScaleX2  = randScaleX2;
            //Light1Array[i].ScaleY1  = randScaleY;
            //Light1Array[i].Alpha1   = randAlpha1;
            //Light1Array[i].Alpha2   = randAlpha2;
            //Light1Array[i].FadeTime = randTime;

            var tl = gsap.timeline({onUpdate: UpdateStage, repeat: -1});
            tl.to(array[i], {
                scaleX: array[i].ScaleX2,
                alpha: array[i].Alpha1,
                duration: array[i].FadeTime,
                ease: "power2.inOut",
                onUpdate: UpdateStage
            });
            tl.to(array[i], {
                scaleX: array[i].ScaleX1,
                alpha: array[i].Alpha1,
                duration: array[i].FadeTime,
                ease: "power2.inOut",
                onUpdate: UpdateStage
            });
        }

    };

    //--------------------------------------------------------------------------------

    CDeepSea.prototype.PlayPrompt			=	function(  ) {

        this.PromptTL = gsap.timeline({ onUpdate:UpdateStage, repeat:-1, repeatDelay:5, delay:2 });
        this.PromptTL.to( this.PlayContainer, { scaleX:1.1, scaleY:1.1, y:-20, duration:0.3 });
        this.PromptTL.to( this.PlayContainer, { scaleX:1, scaleY:1, y:0, duration:0.3 });
        this.PromptTL.to( this.PlayContainer, { scaleX:1.1, scaleY:1.1, y:-20, duration:0.3 });
        this.PromptTL.to( this.PlayContainer, { scaleX:1, scaleY:1, y:0, duration:0.3 });
        this.PromptTL.to( this.PlayContainer, { scaleX:1.1, scaleY:1.1, y:-20, duration:0.3 });
        this.PromptTL.to( this.PlayContainer, { scaleX:1, scaleY:1, y:0, duration:0.3 });

    };


    //--------------------------------------------------------------------------------

    CDeepSea.prototype.PlayBtnClicked			=	function( array ) {


        //	Acknowledge the click...
        //Audio.Play( "ButtonClick" );
        //Audio.Play( "Intro" );

        this.PromptTL.kill();

        gsap.to( this.Logo, { y:-185, scaleX:0.725, scaleY:0.725, duration:1, onUpdate:UpdateStage });


        this.PrizeTL = gsap.timeline({ onUpdate:UpdateStage });
        this.PrizeTL.to( this.WinUpTo, { alpha:0, duration:0.6, onUpdate:UpdateStage });
        //this.PrizeTL.to( this.WinUpTo, { pixi:{blurX:60}, duration:0.5, onUpdate:UpdateStage }, "-=1");


        this.SelectTL = gsap.timeline({ onUpdate:UpdateStage, delay:0.7 });
        this.SelectTL.to( this.Panel1Container, { scaleX:0.94, scaleY:0.94, x:-320, duration:0.7, ease:"back.out(1)" });
        this.SelectTL.to( this.Panel1Container, { alpha:1, duration:0.3 }, "-=0.7");
        this.SelectTL.to( this.Panel2Container, { scaleX:0.94, scaleY:0.94, x:0, duration:0.7, ease:"back.out(1)" }, "-=0.5");
        this.SelectTL.to( this.Panel2Container, { alpha:1, duration:0.3 }, "-=0.7");
        this.SelectTL.to( this.Panel3Container, { scaleX:0.94, scaleY:0.94, x:320, duration:0.7, ease:"back.out(1)" }, "-=0.5");
        this.SelectTL.to( this.Panel3Container, { alpha:1, duration:0.3 }, "-=0.7");
        this.SelectTL.to( this.ChooseText, { alpha:1, duration:0.3, onComplete:this.ActivateSelectionBtns, callbackScope:this }, "-=0.3");


        this.PlayTL = gsap.timeline({ onUpdate:UpdateStage });
        this.PlayTL.to( this.PlayContainer, { scaleX:0.8, scaleY:0.8, duration:0.2, y:40 });
        this.PlayTL.to( this.PlayContainer, { scaleX:1.1, scaleY:1.1, duration:0.32, y:-20 });
        this.PlayTL.to( this.PlayContainer, { alpha:0, duration:0.2 }, "-=0.2");



        //Game.PlayClicked();


        /* REVIST WHEN GAME SELECTED
        var fadeIn = gsap.timeline({onUpdate: UpdateStage});
        fadeIn.to([this.PlayBtn, this.WinUpTo], { alpha:0, duration:0.4, ease: "power1.out"});
        fadeIn.to(this.Logo, { scaleX:0.3, scaleY:0.3, duration:1, y:-240, ease: "power2.out"}, "-=0.4");
        fadeIn.to(this.DemoContentContainer, { alpha:1, y:-240, scaleX:1, scaleY:1, duration:3, ease: "power1.inOut"}, "-=0.7");
        fadeIn.to(this.SeaFloorContainer, { y:350,  duration:3, ease: "power1.out"}, "-=3");
        fadeIn.to(this.OceanFloor, { y:144,  duration:3, ease: "power1.out"}, "-=3");
        fadeIn.to(this.Rocks, { y:-20,  duration:3, ease: "power1.out"}, "-=3");
        fadeIn.to(this.FrontRocks, { y:0,  duration:3, ease: "power1.out"}, "-=3");
        fadeIn.to(this.GameLayout, { alpha:1,  duration:0.75, ease: "power1.out"}, "+=1.5");



        this.SeaLoop1 = {
            stop: function () {
            }
        };
        this.SeaLoop1 = Audio.Play("UnderWater1", {Loop: true});
        */


    };

    //-----------------------------------------------------------------------------------------------

    CDeepSea.prototype.PanelClicked		=	function( event, data )
    {

        var numId       = data.numId;
        this.PanelChosen( numId );

    };

    //--------------------------------------------------------------------------------

    CDeepSea.prototype.PanelChosen			=	function( index ) {

        console.log("I clicked :: " + index);

        Audio.Play( "Reveal1" );
        Audio.Play( "WinBurn2" );


        //Game.FlameReveal();
        //gsap.delayedCall(0.3, function(){Audio.Play( "WinBurn2" )});
        //gsap.delayedCall(1.54, function(){Audio.Play( "spin1" )});

        this.PromptTL.kill();

        var pos = this.SelectionContainer.children.length - 1;
        this.SelectionContainer.setChildIndex( SelectionBtnArray[index], pos );

        this.ResetPromptTL = gsap.timeline({ onUpdate:UpdateStage });
        this.ResetPromptTL.to( [SelectionBtnArray[0], SelectionBtnArray[1], SelectionBtnArray[2]], { scaleX:0.94, scaleY:0.94, duration:0.1});

        SelectionBtnArray[0].SetButtonMode( false );
        SelectionBtnArray[1].SetButtonMode( false );
        SelectionBtnArray[2].SetButtonMode( false );
        //SelectionBtnArray[index].Glow.alpha = 0;

        var tempOrderArray = [];

        if( index === 0 ){ tempOrderArray = [{I:0, X:-175},{I:1, X:0},{I:2, X:175}]; };
        if( index === 1 ){ tempOrderArray = [{I:1, X:0},{I:0, X:-175},{I:2, X:175}]; };
        if( index === 2 ){ tempOrderArray = [{I:2, X:175},{I:0, X:-175},{I:1, X:0}]; };

        gsap.to( this.ChooseText, { alpha:0, duration:0.4, onUpdate:UpdateStage });

        this.SelectTL = gsap.timeline({ onUpdate:UpdateStage });
        this.SelectTL.to( SelectionBtnArray[tempOrderArray[0].I], { scaleX:1.1, scaleY:1.1,  duration:0.2});
        this.SelectTL.to( SelectionBtnArray[tempOrderArray[0].I], { scaleX:0.94, scaleY:0.94,  duration:0.2});
        this.SelectTL.to( SelectionBtnArray[tempOrderArray[0].I], { scaleX:1.1, scaleY:1.1,  duration:0.2});
        this.SelectTL.to( SelectionBtnArray[tempOrderArray[0].I], { scaleX:0.94, scaleY:0.94,  duration:0.2});
        this.SelectTL.to( SelectionBtnArray[tempOrderArray[0].I], { scaleX:1.1, scaleY:1.1,  duration:0.2});
        this.SelectTL.to( SelectionBtnArray[tempOrderArray[0].I], { scaleX:0, scaleY:0, alpha:0, x:tempOrderArray[0].X, pixi:{blur:30}, duration:0.34, onComplete:this.PanDownToSeaFloor, callbackScope:this });

        this.SelectTL2 = gsap.timeline({ onUpdate:UpdateStage });
        this.SelectTL2.to( [SelectionBtnArray[tempOrderArray[1].I], SelectionBtnArray[tempOrderArray[2].I]], { alpha:0.5, duration:0.2});
        this.SelectTL2.to( SelectionBtnArray[tempOrderArray[1].I], { scaleX:0, scaleY:0, alpha:0, x:tempOrderArray[1].X, pixi:{blur:30}, duration:0.4}, "+=0.4");
        this.SelectTL2.to( SelectionBtnArray[tempOrderArray[2].I], { scaleX:0, scaleY:0, alpha:0, x:tempOrderArray[2].X, pixi:{blur:30}, duration:0.4},"-=0.4");

        //gsap.to( this.Logo, { y:-258, scaleX:0.363, scaleY:0.363, duration:0.8, delay:1, onUpdate:UpdateStage });
        //gsap.to( this.Logo, { y:-450, duration:2, delay:1.4, ease: "power1.inOut", onUpdate:UpdateStage });
        //gsap.to( this.Logo, { alpha:0, duration:0.1, delay:1.8, onUpdate:UpdateStage });

        //Game.StartInit( index );

    };

    //--------------------------------------------------------------------------------

    CDeepSea.prototype.PanDownToSeaFloor			=	function(  ) {

        this.CircleLoop.kill();
        //this.SeaLoopX.kill();
        this.SeaLoopY.kill();

        gsap.to( this.Logo, { y:-620, duration:2, ease: "power1.inOut", onUpdate:UpdateStage });

        this.SquashTopLight = gsap.timeline({onUpdate: UpdateStage});
        this.SquashTopLight.to(this.SeaLight, {scaleY:0.6, y: -370, duration:3, ease: "power1.inOut"});
        this.SquashTopLight.to(this.SeaRefraction, {scaleY: 0.5, y: -630, duration:3, ease: "power1.inOut"}, "-=3");
        this.SquashTopLight.to(this.SurfaceLight, {scaleY: 0.7, y: -360, duration:3, ease: "power1.inOut"}, "-=3");
        this.SquashTopLight.to(this.AllLightsContainer, { y:-260, duration:3, ease: "power1.inOut"}, "-=3");


        this.ParallaxTL = gsap.timeline({onUpdate: UpdateStage});
        this.ParallaxTL.to(this.SandyBottomContainer, {scaleY:1, y:0, duration:3, ease: "power1.inOut"});
        this.ParallaxTL.to(this.SideRockContainer, {scaleY:1, y:0, duration:3, ease: "power1.inOut"}, "-=3");
        this.ParallaxTL.to([this.ConesRight, this.ConesLeft], {y:170, duration:3, ease: "power1.inOut"}, "-=3");
        this.ParallaxTL.to([this.PinkTubesRight, this.PinkTubesLeft], {y:130, duration:3, ease: "power1.inOut"}, "-=3");
        this.ParallaxTL.to([this.YellowRight, this.YellowLeft], {y:76, duration:3, ease: "power1.inOut"}, "-=3");
        this.ParallaxTL.to([this.PinkSlatesRight , this.PinkSlatesLeft ], {y:133, duration:3, ease: "power1.inOut"}, "-=3");
        this.ParallaxTL.to([this.BlueRight, this.BlueLeft], {y:258, duration:3, ease: "power1.inOut"}, "-=3");
        this.ParallaxTL.to(this.GameLayout, {y:-15, duration:3, ease: "power1.inOut"}, "-=3");


        //this.PinkSlatesRight    = Renderer.CreateSprite(Game.DeepSea2Sheet, "PinkSlates", {alpha:1, scale:1, position: {X:600, Y:133}, parent: this.SeaFloorContainer});
        //this.PinkSlatesLeft     = Renderer.CreateSprite(Game.DeepSea2Sheet, "PinkSlates", {alpha:1, scaleX:-1, scaleY:1, position: {X:-595, Y:133}, parent: this.SeaFloorContainer});

        //this.BlueRight    = Renderer.CreateSprite(Game.DeepSea2Sheet, "FrontBlue", {alpha:1, scale:1, position: {X:270, Y:258}, parent: this.SeaFloorContainer});
        //this.BlueLeft     = Renderer.CreateSprite(Game.DeepSea2Sheet, "FrontBlue", {alpha:1, scaleX:-1, scaleY:1, position: {X:-275, Y:258}, parent: this.SeaFloorContainer});





        this.CircleLoop2 = gsap.timeline({onUpdate: UpdateStage, repeat:-1, delay:3.1});
        this.CircleLoop2.to(this.SeaLight, {scaleX:0.9, scaleY:0.69, duration:1.2, ease: "power1.inOut"});
        this.CircleLoop2.to(this.SeaLight, {scaleX:1, scaleY:0.6, duration:1, ease: "power1.inOut"});

        /// SURFACE LIGHT LOOP ////
        //this.SeaLoopX = gsap.timeline({ paused:false, onUpdate: UpdateStage, repeat:-1});
        //this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.17, duration:1.7, ease: "power1.inOut"});
        //this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.11, duration:1.3, ease: "power1.inOut"});
        //this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.07, duration:2, ease: "power1.inOut"});
        //this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.2, duration:1.7, ease: "power1.inOut"});
        //this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.09, duration:1.5, ease: "power1.inOut"});
        //this.SeaLoopX.to(this.SurfaceLight, {scaleX:1.12, duration:2.2, ease: "power1.inOut"});

        this.SeaLoopY = gsap.timeline({ paused:false, onUpdate: UpdateStage, repeat:-1, delay:3.1 });
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:0.83, duration:2, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:0.64, duration:1.1, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:0.9, duration:2.4, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:0.76, duration:1.4, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:0.8, duration:2.1, ease: "power1.inOut"});
        this.SeaLoopY.to(this.SurfaceLight, {scaleY:0.7, duration:1.2, ease: "power1.inOut"});

    };

    //--------------------------------------------------------------------------------

    CDeepSea.prototype.ActivateSelectionBtns			=	function(  ) {

        //// YOUR WADS AND PRIZES ////
        for (var i = 0; i < 3; i++) {

            //// PRIZES ////
            var dataObjPanel = new Object();
            dataObjPanel.numId = SelectionBtnArray[i].numId;

            var	panel_ref	=	SelectionBtnArray[i];

            panel_ref.SetButtonMode( true, this.PanelClicked, this, true, dataObjPanel);

            panel_ref.mouseover	=	function(){
                gsap.to( this.PanelGlow, { duration:0.2, alpha:0.7, onUpdate:UpdateStage });
                //gsap.to( this.Glow, { duration:0.2, alpha:1, onUpdate:UpdateStage });
            }.bind(panel_ref);
            panel_ref.mouseout	=	function(){
                gsap.to( this.PanelGlow, { duration:0.2, alpha:0, onUpdate:UpdateStage });
                //gsap.to( this.Glow, { duration:0.2, alpha:0, onUpdate:UpdateStage });
            }.bind(panel_ref);

        }

        this.SelectionPrompt();

    };

    //-----------------------------------------------------------------------------------------------

    CDeepSea.prototype.SelectionPrompt		=	function(  )
    {

        //gsap.delayedCall(0.2, function(){Audio.Play( "PromptSparkle2" )});

        this.PromptTL = gsap.timeline({ onUpdate:UpdateStage, repeat:-1, repeatDelay:5, delay:2 });
        this.PromptTL.to( SelectionBtnArray[0], { scaleX:0.98, scaleY:0.98, duration:0.22});
        this.PromptTL.to( SelectionBtnArray[0], { scaleX:0.94, scaleY:0.94, duration:0.22});
        this.PromptTL.to( SelectionBtnArray[1], { scaleX:0.98, scaleY:0.98, duration:0.22},"-=0.2");
        this.PromptTL.to( SelectionBtnArray[1], { scaleX:0.94, scaleY:0.94, duration:0.22});
        this.PromptTL.to( SelectionBtnArray[2], { scaleX:0.98, scaleY:0.98, duration:0.22},"-=0.2");
        this.PromptTL.to( SelectionBtnArray[2], { scaleX:0.94, scaleY:0.94, duration:0.22});


    };

    //-----------------------------------------------------------------------------------------------


    CDeepSea.prototype.Bubbles					=	function(  )
    {

        //var assetArray = [ "Ember1", "Ember1", "Ember3", "Ember3"];

        for (var i = 0; i < 100; i++) {

            var randAssetNum   = Math.floor(Math.random() * 4);

            var randColNum  = Math.floor(Math.random() * 4) + 1;

            var randStartX  = Math.floor(Math.random() * 1000) - 500;
            var randStartY  = Math.floor(Math.random() * 30) + 700;
            var randScale  = (Math.random() / 4 ) + 0.5;
            var randAlpha  = (Math.random() / 3 ) + 0.2;
            var randXMove   =  Math.floor(Math.random() * 24) + 10;

            var star = Renderer.CreateSprite(Game.DeepSeaSheet, "Bubble", {
                scaleX:randScale,
                scaleY:randScale,
                alpha:randAlpha,
                position: {X:randStartX , Y: 100 + randStartY},
                parent:this.DemoContentContainer
            });

            var randDrop   = (Math.floor(Math.random() * 40)) - 490;
            var randTime   = Math.random()  + 4.3;
            var randDelay  = (Math.random()  * 100);

            var tl = gsap.timeline({onUpdate: UpdateStage});
            tl.to(star, {

                y: randDrop,
                delay:randDelay,
                scaleX: randScale / 4,
                scaleY: randScale / 4,
                duration: randTime,
                ease: "none",
                onUpdate: UpdateStage
            });
            tl.to(star, {
                x:randStartX + randXMove,
                yoyo:true,
                repeat:5,
                ease: "none",
                duration: randTime/6,
                onUpdate: UpdateStage
            }, "-=4");
            //tl.to(confetti, {y: randYpos + randDrop, duration: 0.3, ease: "power.in", onUpdate: UpdateStage}, "-=0.7");
            tl.to(star, {alpha: 0, duration: 0.4, onUpdate: UpdateStage}, "-=1.4");

        }

    };


    //--------------------------------------------------------------------------------

    CDeepSea.prototype.DegreesToRadians			=	function( degree ) {

        var rads = degree * 0.0174533;

        console.log( "degree :: " + rads );

        return rads;

    };


    //-----------------------------------------------------------------------------------------------
    //	Public statics.
    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------
    //	Namespace path.
    //-----------------------------------------------------------------------------------------------

    Game.CDeepSea	=	CDeepSea;

    //-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------
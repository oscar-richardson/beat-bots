if (number == 5) {
    LoopInstance1.setVolume(0);
    LoopInstance2.setVolume(0);
    LoopInstance3.setVolume(0);
    LoopInstance4.setVolume(0);
    LoopInstance5.setVolume(0);
    LoopInstance6.setVolume(0);
    LoopInstance1 = Audio.Play("Arpegio", {Loop: true});
    LoopInstance2 = Audio.Play("Arpegio", {Loop: true});
    LoopInstance3 = Audio.Play("Strings", {Loop: true});
    LoopInstance4 = Audio.Play("Bass", {Loop: true});
    LoopInstance5 = Audio.Play("Tinkle", {Loop: true});
    LoopInstance6 = Audio.Play("Disco", {Loop: true});
    LoopInstanceArray= [LoopInstance1, LoopInstance2, LoopInstance3, LoopInstance4, LoopInstance5, LoopInstance6];
    for (var i = 0; i < 6; i++) {
        if (CRobots["RobotDancing" + (i+1)]) {
            LoopInstanceArray[i].setVolume(0.7);
        } else {
        LoopInstanceArray[i].setVolume(0);
        }
    }
}
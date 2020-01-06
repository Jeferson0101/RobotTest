 const util = require('./../util/states');
 const headStates = util.getHeadStates();
 const wristStates = util.getWristStates();
 const elbowStates = util.getElbowStates();

 // Objeto robô em repouso com configurações padrões em estado de repouso
 robot = {
    "head": {
        "rotation": headStates.rotation.IN_REST,
        "inclination": headStates.inclination.IN_REST  
    },
    "leftArm": {
        "elbow": elbowStates.IN_REST,
        "wrist": wristStates.IN_REST
    },
    "rightArm": {
        "elbow": elbowStates.IN_REST,
        "wrist": wristStates.IN_REST
    }

}

exports.getRobotState = () =>{
    return robot;
}

// inclinação da cabeça
exports.putHeadInclination = (headInclination) =>{
    robot.head.inclination = headInclination;
};

exports.getHeadInclination = () =>{
    return robot.head.inclination;
}

// Rotação da cabeça
exports.putHeadRotation = (headRotation) =>{
    robot.head.rotation = headRotation;
}

exports.getHeadRotation = () =>{
    return robot.head.rotation;
}

// estado do pulso direito
exports.putRightWristState = (rightWrist) =>{
    robot.rightArm.wrist = rightWrist;
}

exports.getRightWristState = () =>{
    return robot.rightArm.wrist;
}

// estado do pulso esquerdo
exports.putLeftWristState = (leftWrist) =>{
    robot.leftArm.wrist = leftWrist;
}

exports.getLeftWristState = () =>{
    return robot.leftArm.wrist;
}


// estado do cotovelo esquerdo
exports.putLeftElbowState = (leftElbow) =>{
    robot.leftArm.elbow = leftElbow;
}

exports.getLeftElbowState = () =>{
    return robot.leftArm.elbow;
}

// estado do cotovelo direito
exports.putRightElbowState = (rightElbow) =>{
    robot.rightArm.elbow = rightElbow;
}

exports.getRightElbowState = () =>{
    return robot.rightArm.elbow;
}

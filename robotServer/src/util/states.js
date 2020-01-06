// estados possíveis para movimentos do cotovelo

var elbowStates = {
    // Configurações padrões
    IN_REST: {
        key: "IN_REST",
        value: 1,
        previous: null,
        next: "SLIGHTLY_CONTRACTED"
    },
    // levemente contraído
    SLIGHTLY_CONTRACTED: {
        key: "SLIGHTLY_CONTRACTED",
        value: 2,
        previous: "IN_REST",
        next: "CONTRACTED"
    },
    // contraído
    CONTRACTED: {
        key: "CONTRACTED",
        value: 3,
        previous: "SLIGHTLY_CONTRACTED",
        next: "HIGHLY_CONTRACTED"
    },
    // fortemete contraído
    HIGHLY_CONTRACTED: {
        key: "HIGHLY_CONTRACTED",
        value: 4,
        previous: "CONTRACTED",
        next: null
    },

}



exports.setElbowInRest = (value, previous, next) => {

    elbowStates.IN_REST.value = value;
    elbowStates.IN_REST.previous = previous;
    elbowStates.IN_REST.next = next;
}

exports.getElbowInRest = () => {
    return elbowStates.IN_REST;
}

exports.setSlightlyContracted = (value, previous, next) => {
    elbowStates.SLIGHTLY_CONTRACTED.value = value;
    elbowStates.SLIGHTLY_CONTRACTED.previous = previous;
    elbowStates.SLIGHTLY_CONTRACTED.next = next;
}

exports.getSlightlyContracted = () => {
    return elbowStates.SLIGHTLY_CONTRACTED;
}

exports.setContracted = (value, previous, next) => {
    elbowStates.CONTRACTED.value = value;
    elbowStates.CONTRACTED.previous = previous;
    elbowStates.CONTRACTED.next = next;
}

exports.getContracted = () => {
    return elbowStates.CONTRACTED;
}

exports.setHighlyContracted = (value, previous, next) => {
    console.log('aquEEEEEEEEEEEEEEEEEEEEEi');
    elbowStates.HIGHLY_CONTRACTED.value = value;
    elbowStates.HIGHLY_CONTRACTED.previous = previous;
    elbowStates.HIGHLY_CONTRACTED.next = next;
}

exports.getHighlyContracted = () => {
    return elbowStates.HIGHLY_CONTRACTED;
}




// estados possíveis para movimentos dos pulsos
var wristStates = {
    // em graus

    MINUS_90: {
        key: "MINUS_90",
        value: 1,
        previous: null,
        next: "MINUS_45"
    },
    MINUS_45: {
        key: "MINUS_45",
        value: 2,
        previous: "MINUS_90",
        next: "IN_REST"
    },
    // em repouso
    IN_REST: {
        key: "IN_REST",
        value: 3,
        previous: "MINUS_45",
        next: "PLUS_45"
    },
    PLUS_45: {
        key: "PLUS_45",
        value: 4,
        previous: "IN_REST",
        next: "PLUS_90"
    },
    PLUS_90: {
        key: "PLUS_90",
        value: 5,
        previous: "PLUS_45",
        next: "PLUS_135"
    },

    PLUS_135: {
        key: "PLUS_135",
        value: 6,
        previous: "PLUS_90",
        next: "PLUS_180"
    },
    PLUS_180: {
        key: "PLUS_180",
        value: 7,
        previous: "PLUS_135",
        next: null
    }

}

exports.setMinus_90 = (value, previous, next) => {
    wristStates.MINUS_90.value = value;
    wristStates.MINUS_90.previous = previous;
    wristStates.MINUS_90.next = next;
}

exports.getMinus_90 = () => {
    return wristStates.MINUS_90;
}

exports.setMinus_45 = (value, previous, next) => {
    wristStates.MINUS_45.value = value;
    wristStates.MINUS_45.previous = previous;
    wristStates.MINUS_45.next = next;
}

exports.getMinus_45 = () => {
    return wristStates.MINUS_45;
}

exports.setWristInRest = (value, previous, next) => {
    wristStates.IN_REST.value = value;
    wristStates.IN_REST.previous = previous;
    wristStates.IN_REST.next = next;
}

exports.getWristInRest = () => {
    return wristStates.IN_REST;
}

exports.setPlus_45 = (value, previous, next) => {
    wristStates.PLUS_45.value = value;
    wristStates.PLUS_45.previous = previous;
    wristStates.PLUS_45.next = next;
}

exports.getPlus_45 = () => {
    return wristStates.PLUS_90;
}

exports.setPlus_90 = (value, previous, next) => {
    wristStates.PLUS_90.value = value;
    wristStates.PLUS_90.previous = previous;
    wristStates.PLUS_90.next = next;
}

exports.getPlus_90 = () => {
    return wristStates.PLUS_90;
}

exports.setPlus_135 = (value, previous, next) => {
    wristStates.PLUS_135.value = value;
    wristStates.PLUS_135.previous = previous;
    wristStates.PLUS_135.next = next;
}

exports.getPlus_135 = () => {
    return wristStates.PLUS_135;
}

exports.setPlus_180 = (value, previous, next) => {
    wristStates.PLUS_180.value = value;
    wristStates.PLUS_180.previous = previous;
    wristStates.PLUS_180.next = next;
}

exports.getPlus_180 = () => {
    return wristStates.PLUS_180;
}

// estados possíveis para movimentos da cabeça
var headStates = {

    inclination: {

        // para cima
        UP: {
            key: "UP",
            value: 1, 
            previous: null,
            next: "IN_REST"
        },
        // em repouso
        IN_REST: {
            key: "IN_REST",
            value: 2, 
            previous: "UP",
            next: "DOWN"
        },
        
        // para baixo,
        DOWN: {
            key: "DOWN",
            value: 3, 
            previous: "IN_REST",
            next: null
        },

    },

    rotation: {
        // em repouso
        
        MINUS_90: {
            key: "MINUS_90",
            value: 90,
            previous: null,
            next: "MINUS_45"
        },
        MINUS_45: {
            key: "MINUS_45",
            value: 45,
            previous: "MINUS_90",
            next: "IN_REST"
        },
        IN_REST: {
            key: "IN_REST",
            value: 1,
            previous: "MINUS_45",
            next: null
        }
    }

}

exports.getHeadInclinationStates = () =>{
    return headStates.inclination;
}

exports.getHeadRotationStates = () =>{
    return headStates.rotation;
}

exports.getHeadStates = () => {
    return headStates;
}

exports.getWristStates = () => {
    return wristStates;
}

exports.getElbowStates = () => {
    return elbowStates;
}



exports.getAlike = (req, obj) => {
    let valor
    Object.values(obj).forEach((value, index2) => {

        if (req == value.key) {
            valor = value; 
        }

    });
    return valor;
}
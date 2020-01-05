// estados possíveis para movimentos do cotovelo
exports.elbowStates = {
    // em repouso
    IN_REST: {
        value: null,
        previous: null,
        next: null
    },
    // levemente contraído
    SLIGHTLY_CONTRACTED:{
        value: null,
        previous: null,
        next: null
    },
    // contraído
    CONTRACTED: {
        value: null,
        previous: null,
        next: null
    },
    // fortemete contraído
    HIGHLY_CONTRACTED: {
        value: null,
        previous: null,
        next: null
    },

}

exports.setHighlyContracted = (value, previous, next) =>{
    this.elbowStates.HIGHLY_CONTRACTED.value = value;
    this.elbowStates.HIGHLY_CONTRACTED.previous = previous;
    this.elbowStates.HIGHLY_CONTRACTED.next = next;
}

exports.getHighlyContracted = () =>{
    return this.elbowStates.HIGHLY_CONTRACTED;
}



// estados possíveis para movimentos dos pulsos
const wristStates = {
    // em graus

    // em repouso
    IN_REST: 1,
    PLUS_90: 2,
    PLUS_45: 3,
    PLUS_135: 4,
    PLUS_180: 5,
    MINUS_90: 6,
    MINUS_45: 7,
    

}
// estados possíveis para movimentos da cabeça
const headStates = {

    inclination: {
        
        // em repouso
        IN_REST: 1,
        // para cima
        UP: 2,
        // para baixo,
        DOWN: 3,
        
    },

    rotation: {
        // em repouso
        IN_REST: 1,
        MINUS_90: 2,
        MINUS_45: 3,
        
    }

}

exports.getHeadStates = () => {
    return headStates;
}

exports.getWristStates = () => {
    return wristStates;
}

exports.getElbowStates = () =>{
    return this.elbowStates;
}
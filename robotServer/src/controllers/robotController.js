const model = require('./../model/model');
const util = require('./../util/states');

// se sobrar tempo. Garantir de que a informação foi setada .then nas funções de PUT
// Verificar se consegue alterar o cotovelo para highly_contracted e movimentar os pulsos


// inclinação da cabeça
exports.moveHeadInclination = (req, res) => {

    if (req.body.state in headStates.inclination) {
        model.putHeadInclination(req.body.state);
        res.status(200).json({ state: model.getHeadInclination() });
    } else {
        res.status(400).json('movimento inválido. Argumento no campo body inválido ou faltando');
    }

};

// rotação da cabeça
exports.moveHeadRotation = (req, res) => {

    if (req.body.state in headStates.rotation) {
        model.putHeadRotation(req.body.state);
        res.status(200).json({ state: model.getHeadRotation() });
    } else {
        res.status(400).json('movimento inválido. Argumento no campo body inválido ou faltando');
    }

}

// cotovelo direito
exports.moveRightElbow = (req, res) => {

    currentState = model.getRightElbowState();
    // verifica se o estado passado na requisição pertence a algum dos estados válidos a partir do atual
    if (req.body.state == currentState.previous || req.body.state == currentState.next) {
        // método que pega o estado correspondente ao passado na requisição
        newCurrentState = util.getAlike(req.body.state, util.getElbowStates());
        model.putRightElbowState(newCurrentState);
        res.status(200).json({ state: model.getRightElbowState() });
    } else {
        // achar o erro para esta ocasião
        res.status(400).json('Movimento proibido');
    }
};

// cotovelo esquerdo
exports.moveleftElbow = (req, res) => {

    currentState = model.getLeftElbowState();

    // verifica se o estado passado na requisição pertence a algum dos estados válidos a partir do atual
    if (req.body.state == currentState.previous || req.body.state == currentState.next) {

        // método que pega o estado correspondente ao passado na requisição
        newCurrentState = util.getAlike(req.body.state, util.getElbowStates());
        model.putLeftElbowState(newCurrentState);
        res.status(200).json({ state: model.getLeftElbowState() });
    } else {
        // achar o erro para esta ocasião
        res.status(400).json('Movimento inválido');
    }
};

//move pulso direito
exports.moveRightWrist = (req, res) => {

    // pega estado atual do cotovelo direito
    currentElbowState = model.getRightElbowState();
    currentRightWristState = model.getRightWristState();

    if (req.body.state == currentRightWristState.previous || req.body.state == currentRightWristState.next) {
        // Compara se o cotovelo está fortemente contraído
        if (currentElbowState.key == util.getElbowStates().HIGHLY_CONTRACTED.key) {
            newCurrentState = util.getAlike(req.body.state, util.getWristStates());
            model.putRightWristState(newCurrentState);
            res.status(200).json({ state: model.getRightWristState() });
        } else {
            res.status(409).json('O cotovelo deve estar fortemente contraído para realizar o movimento dos pulsos')
        }
    } else {
        // verificar qual erro é este
        res.status(409).json('Movimento inválido');
    }
}
//pulso esquerdo
exports.moveLeftWrist = (req, res) => {
    // pega estado atual do cotovelo direito
    currentElbowState = model.getLeftElbowState();
    currentLeftWristState = model.getLeftWristState();

    if (req.body.state == currentLeftWristState.previous || req.body.state == currentLeftWristState.next) {
        // Compara se o cotovelo está fortemente contraído
        if (currentElbowState.key == util.getElbowStates().HIGHLY_CONTRACTED.key) {
            newCurrentState = util.getAlike(req.body.state, util.getWristStates());
            model.putLeftWristState(newCurrentState);
            res.status(200).json({ state: model.getLeftWristState()});
        } else {
            res.status(409).json('O cotovelo deve estar fortemente contraído para realizar o movimento dos pulsos')
        }
    } else {
        // verificar qual erro é este
        res.status(409).json('Movimento inválido');
    }

}






//Movimentos

    //Braço
// Cotovelo
// 1. Em Repouso
// 2. Levemente Contraído
// 3. Contraído
// 4. Fortemente Contraído
//  Pulso
// 1. Rotação para -90º
// 2. Rotação para -45º
// 3. Em Repouso
// 4. Rotação para 45º
// 5. Rotação para 90º
// 6. Rotação para 135º
// 7. Rotação para 180º

    //Cabeça

// Rotação

// 1. Rotação -90º
// 2. Rotação -45º
// 3. Em Repouso

//Inclinação
// 1. Para Cima
// 2. Em Repouso
// 3. Para Baixo

// O estado inicial dos movimentos é Em Repouso.
//  Só poderá movimentar o Pulso caso o Cotovelo esteja Fortemente Contraído.
//  Só poderá Rotacionar a Cabeça caso sua Inclinação da Cabeça não esteja em
// estado Para Baixo.
//  Ao realizar a progressão de estados, é necessário que sempre siga a ordem
// crescente ou decrescente, por exemplo, a partir do estado 4, pode-se ir para
// os estados 3 ou 5, nunca pulando um estado.
//  Atenção aos limites! Se tentar enviar um estado inválido você irá corromper o
// sistema do R.O.B.O.

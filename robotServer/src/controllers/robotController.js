const model = require('./../model/model');
const util = require('./../util/states');

const headStates = util.getHeadStates();
const wristStates = util.getWristStates();
const elbowStates = util.getElbowStates();

util.setHighlyContracted(1,null,elbowStates.IN_REST);
console.log(util.getHighlyContracted());



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

    // verificar se o que o usuário está mandando pertence algum dos estados válidos do cotovelo
    if (req.body.state in elbowStates) {

        // Procura pelo valor de elbowStates correspondente ao index 
        Object.keys(elbowStates).forEach((value1, index1) => {
            if(req.body.state == value1){
                
                Object.values(elbowStates).forEach((value2, index2) =>{
                    if(index1 == index2){
                        model.putRightElbowState(value2);
                        res.status(200).json({ state: model.getRightElbowState()});
                    }
                     
                });
                
            }
        });
    } else {
        res.status(400).json('movimento inválido. Argumento no campo body inválido ou faltando');
    }

};

// cotovelo esquerdo
exports.moveleftElbow = (req, res) => {

    if (req.body.state in elbowStates) {

        // Procura pelo valor de elbowStates correspondente ao index 
        Object.keys(elbowStates).forEach((value1, index1) => {
            if(req.body.state == value1){
                
                Object.values(elbowStates).forEach((value2, index2) =>{
                    if(index1 == index2){
                        model.putLeftElbowState(value2);
                        res.status(200).json({ state: model.getLeftElbowState()});
                    }
                     
                });
                
            }
        });
    } else {
        res.status(400).json('movimento inválido. Argumento no campo body inválido ou faltando');
    }

};

//move pulso direito
exports.moveRightWrist = (req, res) => {

    // pega estado atual do cotovelo direito
    currentElbowState = model.getRightElbowState();

    // se o estado enviado pelo usuário pertence a algum estado permitido então ele compara se o cotovelo
    //está fortemente contraído
    if (req.body.state in wristStates) {
        console.log(currentElbowState); // remover depois

        if (currentElbowState == elbowStates.HIGHLY_CONTRACTED) {
            model.putRightWristState(req.body.state);
            res.status(200).json({ state: model.getRightWristState() });
        } else {
            res.status(409).json('O cotovelo deve estar fortemente contraído para realizar o movimento dos pulsos')
        }

    } else {
        res.status(400).json('movimento inválido. Argumento no campo body inválido ou faltando');
    }

}

//pulso esquerdo
exports.moveLeftWrist = (req, res) => {

    // pega estado atual do cotovelo esquerdo
    currentElbowState = model.getLeftElbowState();
    console.log(currentElbowState); // remover depois
    if (req.body.state in wristStates) {
        if (currentElbowState == elbowStates.HIGHLY_CONTRACTED) {
            model.putLeftWristState(req.body.state);
            res.status(200).json({ state: model.getLeftWristState() });
        } else {
            res.status(409).json('O cotovelo deve estar fortemente contraído para realizar o movimento dos pulsos');
        }

    } else {
        res.status(400).json('movimento inválido. Argumento no campo body inválido ou faltando');
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

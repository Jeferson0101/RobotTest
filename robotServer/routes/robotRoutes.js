const express = require('express');
const router = express.Router();

const robotController = require ('../src/controllers/robotController');

// move inclinação da cabeça 
router.put('/move_head_inclination', robotController.moveHeadInclination);

//move a rotação da cabeça
router.put('/move_head_rotation', robotController.moveHeadRotation);

// movimento do cotovelo direito
router.put('/move_right_elbow', robotController.moveRightElbow);

//movimento do cotovelo esquerdo
router.put('/move_left_elbow', robotController.moveleftElbow);

//movimento  do pulso direito
router.put('/move_right_wrist', robotController.moveRightWrist);

//movimento do pulso esquerdo
router.put('/move_left_wrist', robotController.moveLeftWrist);


module.exports = router;


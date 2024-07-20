const express = require('express');
const router = express.Router();
const RicecookerController = require('../controllers/RicecookerController');
const ironController = require('../controllers/IronController');
const soundSystemController = require('../controllers/SoundSystemController');
const fanController = require('../controllers/FanController');
const blenderController = require('../controllers/BlenderController');
const gasCookerController = require('../controllers/GascookerController');
const heaterJugController = require('../controllers/HeaterJugController');
const MetalPlasticController = require('../controllers/MetalPlasticController');
const CeremicController = require('../controllers/CeremicController');
const TorchController = require('../controllers/TorchController');
 


router.get('/ricecooker', RicecookerController.getRicecookerItems);
router.get('/ricecooker/:code', RicecookerController.getRicecookerItemByCode);
router.post('/ricecooker', RicecookerController.addRicecookerItem);  // Ensure this route exists
router.patch('/ricecooker/:code/decrease', RicecookerController.decreaseRicecookerQuantity);

router.get('/iron', ironController.getIronItems);
router.get('/iron/:code', ironController.getIronItemByCode);
router.post('/iron', ironController.addIronItem);  // Ensure this route exists
router.patch('/iron/:code/decrease', ironController.decreaseIronQuantity);

router.get('/soundsystem', soundSystemController.getSoundSystemsItems);
router.get('/soundsystem/:code', soundSystemController.getSoundSystemsItemByCode);
router.post('/soundsystem', soundSystemController.addSoundSystemsItem);  // Ensure this route exists
router.patch('/soundsystem/:code/decrease', soundSystemController.decreaseSoundSystemsQuantity);

router.get('/fan', fanController.getFanItems);
router.get('/fan/:code', fanController.getFanItemByCode);
router.post('/fan', fanController.addFanItem);  // Ensure this route exists
router.patch('/fan/:code/decrease', fanController.decreaseFanItemQuantity);

router.get('/blender', blenderController.getBlenderItems);
router.get('/blender/:code', blenderController.getBlenderItemByCode);
router.post('/blender', blenderController.addBlenderItem);  // Ensure this route exists
router.patch('/blender/:code/decrease', blenderController.decreaseBlenderItemQuantity);

router.get('/gascooker', gasCookerController.getGascookerItems);
router.get('/gascooker/:code', gasCookerController.getGascookerItemByCode);
router.post('/gascooker', gasCookerController.addGascookerItem);  // Ensure this route exists
router.patch('/gascooker/:code/decrease', gasCookerController.decreaseGascookerItemQuantity);

router.get('/heaterjug', heaterJugController.getHeaterJugItems);
router.get('/heaterjug/:code', heaterJugController.getHeaterJugByCode);
router.post('/heaterjug', heaterJugController.addHeaterJugItem);  // Ensure this route exists
router.patch('/heaterjug/:code/decrease', heaterJugController.decreaseHeaterJugQuantity);

router.get('/ceremic', CeremicController .getCeremicItems);
router.get('/ceremic/:code',CeremicController.getCeremicItemByCode);
router.post('/ceremic', CeremicController.addCeremicItem);  // Ensure this route exists
router.patch('/ceremic/:code/decrease', CeremicController.decreaseCeremicItemQuantity);

router.get('/plastic-metal', MetalPlasticController.getMetalPlasticItems);
router.get('/plastic-metal/:code', MetalPlasticController.getMetalPlasticItemByCode);
router.post('/plastic-metal', MetalPlasticController.addMetalPlasticItem);  // Ensure this route exists
router.patch('/plastic-metal/:code/decrease', MetalPlasticController.decreaseMetalPlasticQuantity);


router.get('/torch', TorchController .getTorchItems);
router.get('/torch/:code',TorchController.getTorchItemByCode);
router.post('/torch', TorchController.addTorchItem);  // Ensure this route exists
router.patch('/torch/:code/decrease', TorchController.decreaseTorchQuantity);

module.exports = router;

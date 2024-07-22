const express = require('express');
const router = express.Router();
const Sale = require('../models/Sale');
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
router.post('/heaterjug', heaterJugController.addHeaterJugItem);
router.patch('/heaterjug/:code/decrease', heaterJugController.decreaseHeaterJugQuantity);

router.get('/ceremic', CeremicController .getCeremicItems);
router.get('/ceremic/:code',CeremicController.getCeremicItemByCode);
router.post('/ceremic', CeremicController.addCeremicItem);  // Ensure this route exists
router.patch('/ceremic/:code/decrease', CeremicController.decreaseCeremicItemQuantity);

router.get('/metal', MetalPlasticController.getMetalPlasticItems);
router.get('/metal/:code', MetalPlasticController.getMetalPlasticItemByCode);
router.post('/metal', MetalPlasticController.addMetalPlasticItem);  // Ensure this route exists
router.patch('/metal/:code/decrease', MetalPlasticController.decreaseMetalPlasticQuantity);


router.get('/torch', TorchController .getTorchItems);
router.get('/torch/:code',TorchController.getTorchItemByCode);
router.post('/torch', TorchController.addTorchItem);  // Ensure this route exists
router.patch('/torch/:code/decrease', TorchController.decreaseTorchQuantity);

router.post('/sale', async (req, res) => {
    const { totalAmount } = req.body;
    
    const sale = new Sale({ totalAmount });
    try {
      await sale.save();
      res.status(201).json(sale);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Route to get all sales
  router.get('/sales', async (req, res) => {
    try {
      const sales = await Sale.find();
      res.status(200).json(sales);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Route to find sales by date range
  router.get('/sales/date', async (req, res) => {
    const { startDate, endDate } = req.query;
    try {
      const sales = await Sale.find({
        date: {
          $gte: new Date(startDate),
          $lte: new Date(endDate)
        }
      });
      res.status(200).json(sales);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

module.exports = router;

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
router.post('/ricecooker', RicecookerController.addRicecookerItem);
router.patch('/ricecooker/:code/decrease', RicecookerController.decreaseRicecookerQuantity);
router.put('/ricecooker/:code', RicecookerController.updateRicecookerItem); // Route for updating item
router.delete('/ricecooker/:code', RicecookerController.deleteRicecookerItem); // Route for deleting item


router.get('/iron', ironController.getIronItems);
router.get('/iron/:code', ironController.getIronItemByCode);
router.post('/iron', ironController.addIronItem);
router.patch('/iron/:code/decrease', ironController.decreaseIronQuantity);
router.put('/iron/:code', ironController.updateIronItem); // Route for updating item
router.delete('/iron/:code', ironController.deleteIronItem); // Route for deleting item


router.get('/soundsystem', soundSystemController.getSoundSystemsItems);
router.get('/soundsystem/:code', soundSystemController.getSoundSystemsItemByCode);
router.post('/soundsystem', soundSystemController.addSoundSystemsItem);
router.patch('/soundsystem/:code/decrease', soundSystemController.decreaseSoundSystemsQuantity);
router.put('/soundsystem/:code', soundSystemController.updateSoundSystemsItem); // Route for updating item
router.delete('/soundsystem/:code', soundSystemController.deleteSoundSystemsItem); // Route for deleting item


router.get('/fan', fanController.getFanItems);
router.get('/fan/:code', fanController.getFanItemByCode);
router.post('/fan', fanController.addFanItem);
router.patch('/fan/:code/decrease', fanController.decreaseFanItemQuantity);
router.put('/fan/:code', fanController.updateFanItem); // Route for updating item
router.delete('/fan/:code', fanController.deleteFanItem); // Route for deleting item


router.get('/blender', blenderController.getBlenderItems);
router.get('/blender/:code', blenderController.getBlenderItemByCode);
router.post('/blender', blenderController.addBlenderItem);  // Ensure this route exists
router.patch('/blender/:code/decrease', blenderController.decreaseBlenderItemQuantity);
router.put('/blender/:code', blenderController.updateBlenderItem); // Route for updating item
router.delete('/blender/:code', blenderController.deleteBlenderItem); // Route for deleting item


router.get('/gascooker', gasCookerController.getGascookerItems);
router.get('/gascooker/:code', gasCookerController.getGascookerItemByCode);
router.post('/gascooker', gasCookerController.addGascookerItem);
router.patch('/gascooker/:code/decrease', gasCookerController.decreaseGascookerItemQuantity);
router.put('/gascooker/:code', gasCookerController.updateGascookerItem); // Route for updating item
router.delete('/gascooker/:code', gasCookerController.deleteGascookerItem); // Route for deleting item

router.get('/heaterjug', heaterJugController.getHeaterJugItems);
router.get('/heaterjug/:code', heaterJugController.getHeaterJugByCode);
router.post('/heaterjug', heaterJugController.addHeaterJugItem);
router.patch('/heaterjug/:code/decrease', heaterJugController.decreaseHeaterJugQuantity);
router.put('/heaterjug/:code', heaterJugController.updateHeaterJugItem); // Route for updating item
router.delete('/heaterjug/:code', heaterJugController.deleteHeaterJugItem); // Route for deleting item

router.get('/ceremic', CeremicController.getCeremicItems);
router.get('/ceremic/:code', CeremicController.getCeremicItemByCode);
router.post('/ceremic', CeremicController.addCeremicItem);
router.patch('/ceremic/:code/decrease', CeremicController.decreaseCeremicItemQuantity);
router.put('/ceremic/:code', CeremicController.updateCeremicItem);
router.delete('/ceremic/:code', CeremicController.deleteCeremicItem);

router.get('/plastic-metal', MetalPlasticController.getMetalPlasticItems);
router.get('/plastic-metal/:code', MetalPlasticController.getMetalPlasticItemByCode);
router.post('/plastic-metal', MetalPlasticController.addMetalPlasticItem);
router.patch('/plastic-metal/:code/decrease', MetalPlasticController.decreaseMetalPlasticQuantity);
router.put('/plastic-metal/:code', MetalPlasticController.updateMetalPlasticItem); // Route for updating item
router.delete('/plastic-metal/:code', MetalPlasticController.deleteMetalPlasticItem); // Route for deleting item


router.get('/torch', TorchController.getTorchItems);
router.get('/torch/:code', TorchController.getTorchItemByCode);
router.post('/torch', TorchController.addTorchItem);  // Ensure this route exists
router.patch('/torch/:code/decrease', TorchController.decreaseTorchQuantity);
router.put('/torch/:code', TorchController.updateTorchItem); // Route for updating item
router.delete('/torch/:code', TorchController.deleteTorchItem); // Route for deleting item


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

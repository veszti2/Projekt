const express = require('express');
const {
    getAllTrainers,
    getTrainerById,
    createTrainer,
    updateTrainer,
    deleteTrainer,
} = require('../controllers/TrainersControllerBackend');
const router = express.Router();

router.get('/', getAllTrainers);
// router.get('/:id', getTrainerById);
// router.get('/', createTrainer);
// router.put('/modosit/:id', updateTrainer);
// router.delete('/torol/:id', deleteTrainer);

module.exports = router;

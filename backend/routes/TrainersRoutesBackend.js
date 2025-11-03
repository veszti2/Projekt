const express = require('express');
const {
    getAllTrainers,
    getTrainerById,
    createTrainer,
    updateTrainer,
    deleteTrainer,
} = require('../controllers/TrainersControllerBackend');
const pictureDeleter = require('../middlewares/pictureDelete');

const router = express.Router();

router.get('/', getAllTrainers);
router.get('/:id', getTrainerById);
// router.get('/', createTrainer);
router.put('/:id', updateTrainer);
router.delete('/:id', pictureDeleter, deleteTrainer);

module.exports = router;

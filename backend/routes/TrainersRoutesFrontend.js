const express = require('express');
const {
    getAllTrainersFrontend,
} = require('../controllers/TrainersControllerFrontend');
const router = express.Router();

router.get('/', getAllTrainersFrontend);

module.exports = router;

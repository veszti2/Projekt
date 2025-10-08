const express = require('express');
const { getAllTrainers, getTrainerById } = require('../controllers/TrainersControllerBackend');
const { get } = require('mongoose');
const router = express.Router();

router.get('/', getAllTrainers);
router.get('/:id', getTrainerById);
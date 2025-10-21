const express = require('express');
const pictureUploader = require('../middlewares/pictureUpload');
const { postNewTrainersBackend, getNewTrainersBackend } = require('../controllers/NewTrainersControllerBackend');


const router = express.Router();

router.get('/', getNewTrainersBackend);
router.post('/', pictureUploader, postNewTrainersBackend);

module.exports = router;

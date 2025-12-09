const express = require('express');
const {
    getAllUsersFrontend,
    getOneUserFrontend,
} = require('../controllers/userControllersFrontend.js');
const router = express.Router();

router.get('/', getAllUsersFrontend);
router.get('/:id', getOneUserFrontend);

module.exports = router;

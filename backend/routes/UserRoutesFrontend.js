const express = require('express');
const {
    getAllUsersFrontend,
    getOneUserFrontend,
    updateOneUserFrontend,
} = require('../controllers/userControllersFrontend.js');
const router = express.Router();

router.get('/', getAllUsersFrontend);
router.get('/:id', getOneUserFrontend);
router.patch('/:id', updateOneUserFrontend);

module.exports = router;

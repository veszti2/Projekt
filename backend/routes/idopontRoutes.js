const express = require('express');
const { updateIdopont } = require('../controllers/idopontControllers.js');
const router = express.Router();

router.put('/:id', updateIdopont);

module.exports = router;

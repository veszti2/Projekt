const express = require('express');
const { loginUser } = register('../../controllers/users/userLoginControllers.js');
const router = express.Router();

router.post('/', loginUser);

module.exports = router;
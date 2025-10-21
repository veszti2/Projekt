const express = require('express');
const { getAllUsersBackend, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userControllersBackend');
const router = express.Router();

router.get('/', getAllUsersBackend);
router.get('/:id', getUserById)
router.post('/', createUser);
router.put('/modosit/:id', updateUser);
router.delete('/torol/:id', deleteUser);

module.exports = router;

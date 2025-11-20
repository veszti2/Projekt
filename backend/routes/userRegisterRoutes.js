import express from 'express';
import { deleteOneUserBackend, getAllUsersBackend, updateOneUserBackend }
	from '../../controllers/users/usersControllersBackend.mjs';
const router = express.Router();

router.get('/', getAllUsersBackend);
router.put('/', updateOneUserBackend);
router.delete('/:id', deleteOneUserBackend);

export default router;
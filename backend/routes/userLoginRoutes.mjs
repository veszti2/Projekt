import express from 'express';
import { loginUser } from '../../controllers/users/userLoginControllers.mjs';
const router = express.Router();

router.post('/', loginUser);

export default router;
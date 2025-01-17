import express from 'express';
import { AuthController } from '../controllers/AuthController';
import UserController from '../controllers/UserController';
import { requireAccess, requireRefresh } from '../middlewares/auth';

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);
router.post('/verify', AuthController.verifyMail);
router.delete('/logout', requireAccess, AuthController.logout);
router.post('/refresh', requireRefresh, AuthController.refresh);

router.get('/me', requireAccess, UserController.me);

export default router;

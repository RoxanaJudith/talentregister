import { Router } from 'express';
import { AuthController } from './auth.controller';
import authToken from '../../middlewares/auth.token';

const router = Router();
const authController = new AuthController();

router.post('/login', authController.login);
router.post('/login-linkedin', authController.linkedin)
router.post('/login-social', authController.loginSocial);
router.post('/reset-password', authController.linkResetPassword)
router.put('/change-password', authToken.user, authController.changePassword)
router.put('/reset-password/:token', authController.resetPassword)

export default router;
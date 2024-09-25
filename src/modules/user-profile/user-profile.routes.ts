import { Router } from 'express';
import { UserProfileController } from './user-profile.controller';
import dtoValidation from '../../middlewares/validator';
import { CreateUserProfileDto } from './create-user-profile.dto';
import authToken from '../../middlewares/auth.token';
import { generateApplicationsExcel } from './excelExporter';

const router = Router();
const userProfileController = new UserProfileController();
router.get('/', userProfileController.findAll);
router.get('/export',  generateApplicationsExcel);
router.get('/:id', userProfileController.findById);
router.post(
  '/',
  authToken.user,
  dtoValidation(CreateUserProfileDto),
  userProfileController.create
);
router.put('/:id', userProfileController.update);
router.delete('/:id', userProfileController.delete);

export default router;

import { Router } from "express";
import { UserController } from "./user.controller";
import dtoValidation from "../../middlewares/validator";
import { User } from "./user.entity";
import authToken from "../../middlewares/auth.token";

const router = Router();
const userController = new UserController();
router.get('/email', userController.findByEmail);

router.get('/', userController.findAll);
router.get('/:id', userController.findById);
router.post('/', dtoValidation(User), userController.create);
router.put('/:id', [authToken.admin], userController.update);
router.delete('/:id', [authToken.admin], userController.delete);
// router.get('/email', userController.findByEmail); //esta ruta es magica funciona arriba pero no aqui, por favor si a aguien le funciona lo descomenta

export default router;
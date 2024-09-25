import { Router } from "express";
import { RoleController } from "./role.controller";
import authToken from "../../middlewares/auth.token";

const router = Router();
const roleController = new RoleController();
router.get('/', roleController.findAll);
router.get('/:id', roleController.findById);
router.post('/', [authToken.admin], roleController.create);
router.put('/:id', [authToken.admin], roleController.update);
router.delete('/:id', [authToken.admin], roleController.delete);

export default router;
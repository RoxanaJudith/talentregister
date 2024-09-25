import { Router } from "express";
import { StatusController } from "./status.controller";
import authToken from "../../middlewares/auth.token";

const router = Router();
const statusController = new StatusController();
router.get('/', statusController.findAll);
router.get('/:id', statusController.findById);
router.post('/', [authToken.admin], statusController.create);
router.put('/:id', [authToken.admin], statusController.update);
router.delete('/:id', [authToken.admin], statusController.delete);

export default router;
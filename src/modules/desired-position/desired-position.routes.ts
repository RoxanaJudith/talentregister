import { Router } from "express";
import { DesiredPositionController } from "./desired-position.controller";
import authToken from "../../middlewares/auth.token";

const router = Router();
const desiredPositionController = new DesiredPositionController();
router.get('/', desiredPositionController.findAll);
router.get('/:id', desiredPositionController.findById);
router.post('/', [authToken.admin], desiredPositionController.create);
router.put('/:id', [authToken.admin], desiredPositionController.update);
router.delete('/:id', [authToken.admin], desiredPositionController.delete);

export default router;

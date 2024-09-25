import { Router } from "express";
import { SoftSkillController } from "./soft-skill.controller";
import authToken from "../../middlewares/auth.token";

const router = Router();
const softSkillController = new SoftSkillController();
router.get('/', softSkillController.findAll);
router.get('/:id', softSkillController.findById);
router.post('/', [authToken.admin], softSkillController.create);
router.put('/:id', [authToken.admin], softSkillController.update);
router.delete('/:id', [authToken.admin], softSkillController.delete);

export default router;
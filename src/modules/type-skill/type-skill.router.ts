import { Router } from "express";
import { TypeSkillController } from "./type-skill.controller";
import { CreateTypeSkillDto } from "./typeSkill.dto";
import dtoValidationMiddleware from "../../middlewares/validator";
import authToken from "../../middlewares/auth.token";

const router = Router();
const typeSkillController = new TypeSkillController();
router.get('/', typeSkillController.findAll);
router.get('/:id', typeSkillController.findById);
router.post('/', [authToken.admin, dtoValidationMiddleware(CreateTypeSkillDto)], typeSkillController.create);
router.put('/:id', [authToken.admin, dtoValidationMiddleware(CreateTypeSkillDto)], typeSkillController.update);
router.delete('/:id', [authToken.admin], typeSkillController.delete);

export default router;
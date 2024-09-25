import { Router } from "express";
import { SkillController } from "./skill.controller";
import dtoValidationMiddleware from "../../middlewares/validator";
import { CreateSkillDto } from "./create-skill.dto";
import authToken from "../../middlewares/auth.token";

const router = Router();
const skillController = new SkillController();
router.get('/', skillController.findAll);
router.get('/:id', skillController.findById);
router.post('/', [authToken.admin, dtoValidationMiddleware(CreateSkillDto)], skillController.create);
router.put('/:id', [authToken.admin, dtoValidationMiddleware(CreateSkillDto)], skillController.update);
router.delete('/:id', [authToken.admin], skillController.delete);

export default router;
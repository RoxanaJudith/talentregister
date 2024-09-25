import { Router } from "express";
import { SoftSkillController } from "./user-profile-soft-skill.controller";

const router = Router();
const userProfileSoftSkillController = new SoftSkillController();
router.get('/', userProfileSoftSkillController.findAll);
router.get('/:id', userProfileSoftSkillController.findById);
router.post('/', userProfileSoftSkillController.create);
router.put('/:id', userProfileSoftSkillController.update);
router.delete('/:id', userProfileSoftSkillController.delete);

export default router;
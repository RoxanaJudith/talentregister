import { Router } from "express";
import { UserProfileController } from "./user-profile-skills.controller";

const router = Router();
const userProfileSkillController = new UserProfileController();
router.get('/', userProfileSkillController.findAll);
router.get('/:id', userProfileSkillController.findById);
router.post('/', userProfileSkillController.create);
router.put('/:id', userProfileSkillController.update);
router.delete('/:id', userProfileSkillController.delete);

export default router;
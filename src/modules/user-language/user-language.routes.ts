import { Router } from "express";
import { UserLanguageController } from "./user-language.controller";

const router = Router();
const userLanguageController = new UserLanguageController();
router.get('/', userLanguageController.findAll);
router.get('/:id', userLanguageController.findById);
router.post('/', userLanguageController.create);
router.put('/:id', userLanguageController.update);
router.delete('/:id', userLanguageController.delete);

export default router;
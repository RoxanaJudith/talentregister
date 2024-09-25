import { Router } from "express";
import { LanguageController } from "./language.controller";
import authToken from "../../middlewares/auth.token";

const router = Router();
const languageController = new LanguageController();
router.get('/', languageController.findAll);
router.get('/:id', languageController.findById);
router.post('/', [authToken.admin], languageController.create);
router.put('/:id', [authToken.admin], languageController.update);
router.delete('/:id', [authToken.admin], languageController.delete);

export default router;

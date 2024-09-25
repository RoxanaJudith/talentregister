import { Router } from "express";
import { EducationController } from "./education.controller";

const router = Router();
const educationController = new EducationController();
router.get('/', educationController.findAll);
router.get('/:id', educationController.findById);
router.post('/', educationController.create);
router.put('/:id', educationController.update);
router.delete('/:id', educationController.delete);

export default router;
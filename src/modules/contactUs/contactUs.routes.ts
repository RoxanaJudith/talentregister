import { Router } from "express";
import { ContactUsController } from "./contactUs.controller";

const router = Router();
const contactUsController = new ContactUsController();
router.get("/", contactUsController.findAll);
router.get("/:id", contactUsController.findById);
router.post("/",  contactUsController.create);
router.put("/:id",  contactUsController.update);
router.delete("/:id",  contactUsController.delete);

export default router;

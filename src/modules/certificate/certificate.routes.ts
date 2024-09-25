import { Router } from "express";
import { CertificatesController } from "./certificate.controller";

const router = Router();
const certificatesController = new CertificatesController();
router.get('/', certificatesController.findAll);
router.get('/:id', certificatesController.findById);
router.post('/', certificatesController.create);
router.put('/:id', certificatesController.update);
router.delete('/:id', certificatesController.delete);

export default router;
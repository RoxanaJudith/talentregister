import { Router } from "express";
import { CountryController } from "./country.controller";
import authToken from "../../middlewares/auth.token";

const router = Router();
const countryController = new CountryController();
router.get('/', countryController.findAll);
router.get('/:id', countryController.findById);
router.post('/', [authToken.admin], countryController.create);
router.put('/:id', [authToken.admin], countryController.update);
router.delete('/:id', [authToken.admin], countryController.delete);

export default router;

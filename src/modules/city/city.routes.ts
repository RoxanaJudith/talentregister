import { Router } from "express";
import { CityController } from "./city.controller";
import authToken from "../../middlewares/auth.token";

const router = Router();
const cityController = new CityController();
router.get("/", cityController.findAll);
router.get("/:id", cityController.findById);
router.post("/", [authToken.admin], cityController.create);
router.put("/:id", [authToken.admin], cityController.update);
router.delete("/:id", [authToken.admin], cityController.delete);

export default router;

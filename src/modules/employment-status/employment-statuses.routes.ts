import { Router } from "express";
import { EmploymentStatusesController } from "./employment-statuses.controller";
import authToken from "../../middlewares/auth.token";

const router = Router();
const employmentStatusesController = new EmploymentStatusesController();

router.get("/", employmentStatusesController.findAll);
router.get("/:id", employmentStatusesController.findById);
router.post("/", [authToken.admin], employmentStatusesController.create);
router.put("/:id", [authToken.admin], employmentStatusesController.update);
router.delete("/:id", [authToken.admin], employmentStatusesController.delete);

export default router;

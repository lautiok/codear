import { Router } from 'express';
import { createPlantilla, deletePlantilla, viewAllPlantillas, viewPlantilla } from '../controller/plantillas.controller.js';
import { plantillaCreateValidator, plantillaGetByIdValidator } from '../validator/plantilla.validator.js';

const router = Router();

router.post("/", plantillaCreateValidator, createPlantilla);
router.get("/", viewAllPlantillas)
router.get("/:id", plantillaGetByIdValidator, viewPlantilla)
router.delete("/:id", plantillaGetByIdValidator, deletePlantilla)
export default router;
import express from "express";
import LibroController from "../controllers/LibroController.js";

const router = express.Router();
const libroController = LibroController;

router.post("/", libroController.crearLibro);
router.get("/", libroController.listarLibros);
router.delete("/:codigo", libroController.darDeBajaLibro);
router.get("/:codigo", libroController.listarLibroPorCodigo);

export default router;
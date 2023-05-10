import { Router } from "express";
import {
  createCategoria,
  getCategorias,
  deleteCategoriaById,
  getCategoriaById,
  updateCategoriaById,
} from "../controllers/categoria.controller.js";

const router = Router();
router.get("/categoria", getCategorias);
router.get("/categoria/:id", getCategoriaById);
router.post("/categoria", createCategoria);
router.put("/categoria/:id", updateCategoriaById);
router.delete("/categoria/:id", deleteCategoriaById);

export default router;

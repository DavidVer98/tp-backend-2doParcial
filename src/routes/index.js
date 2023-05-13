import express from 'express';
import restauranteRoutes from './restaurante.routes.js';
import categoriaRoutes from './categoria.routes.js';

const router = express.Router();

router.use('/restaurantes', restauranteRoutes);
router.use('/categorias', categoriaRoutes);

export default router;
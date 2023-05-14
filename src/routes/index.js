import express from 'express';
import restauranteRoutes from './restaurante.routes.js';
import categoriaRoutes from './categoria.routes.js';
import mesaRoutes from './mesa.routes.js';

const router = express.Router();

router.use('/restaurantes', restauranteRoutes);
router.use('/categorias', categoriaRoutes);
router.use('/mesas', mesaRoutes);

export default router;
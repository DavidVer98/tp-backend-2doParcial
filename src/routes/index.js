import express from 'express';
import restauranteRoutes from './restaurante.routes.js';
import categoriaRoutes from './categoria.routes.js';
import mesaRoutes from './mesa.routes.js';
import clienteRoutes from './cliente.routes.js';
import reservaRoutes from './reserva.routes.js';

const router = express.Router();

router.use('/restaurantes', restauranteRoutes);
router.use('/categorias', categoriaRoutes);
router.use('/mesas', mesaRoutes);
router.use('/clientes', clienteRoutes);
router.use('/reserva', reservaRoutes);

export default router;
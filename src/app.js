import express from 'express';
import morgan from 'morgan';
import categoriaRoutes from './routes/categoria.routes.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(categoriaRoutes);

app.use('/api', categoriaRoutes)


export default app;
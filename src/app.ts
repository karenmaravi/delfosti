import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import allRoutes from './routes/all-routes';

const app = express();

app.use(morgan('local'));
app.use(cors());
app.use(express.json());
app.use(allRoutes);

export default app;
import express from 'express';
import knex from './database/connection';
import PointsControllers from './controllers/PointsControllers';
import ItemsControllers from './controllers/ItemsControllers';

const routes = express.Router();
const pointsControllers = new PointsControllers;
const itemsControllers = new ItemsControllers;

routes.get('/items', itemsControllers.index);

routes.post('/points', pointsControllers.create); //ok
routes.get('/points/:id', pointsControllers.show); //ok
routes.get('/points', pointsControllers.index); //prob


export default routes;
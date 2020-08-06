import express from "express";

import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();

const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso deseja atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;

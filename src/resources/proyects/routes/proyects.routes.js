import { Router } from "express";
import {
  createProyect,
  deleteProyectById,
  getProyectById,
  getProyects,
  updateProyectById,
} from "../controllers/proyects.controller.js";

const proyectsRouter = Router();

const baseURI = "/proyects";

proyectsRouter.post(baseURI, createProyect);
proyectsRouter.get(baseURI, getProyects);
proyectsRouter.get(`${baseURI}:id`, getProyectById);
proyectsRouter.put(`${baseURI}:id`, updateProyectById);
// proyectsRouter.patch(`${baseURI}:id`);
proyectsRouter.delete(`${baseURI}:id`, deleteProyectById);

export default proyectsRouter;

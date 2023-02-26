import { Router } from "express";
import { verifyToken } from "../../auth/middlewares/auth.middleware.js";
import {
  createProyect,
  deleteProyectById,
  getProyectById,
  getProyects,
  updateProyectById,
} from "../controllers/proyects.controller.js";

const proyectsRouter = Router();

const baseURI = "/proyects";

proyectsRouter.post(baseURI, verifyToken, createProyect);
proyectsRouter.get(baseURI, getProyects);
proyectsRouter.get(`${baseURI}:id`, getProyectById);
proyectsRouter.put(`${baseURI}:id`, updateProyectById);
// proyectsRouter.patch(`${baseURI}:id`);
proyectsRouter.delete(`${baseURI}:id`, deleteProyectById);

export default proyectsRouter;

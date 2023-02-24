import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/users.controller.js";

const usersRouter = Router();

const baseURI = "/users";

usersRouter.post(baseURI, createUser);
usersRouter.get(baseURI, getUsers);
usersRouter.get(`${baseURI}/:id`, getUserById);
usersRouter.put(`${baseURI}/:id`, updateUserById);
usersRouter.delete(`${baseURI}/:id`, deleteUserById);

export default usersRouter;

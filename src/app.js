import express from "express";
import { startConnection } from "./config/database.config.js";
import environment from "./config/environment.js";
import authRouter from "./resources/auth/routes/auth.routes.js";
import proyectsRouter from "./resources/proyects/routes/proyects.routes.js";
import usersRouter from "./resources/users/routes/users.routes.js";

const app = express();
app.use(express.json());

startConnection();

//Ruta por defecto
app.get("/", (req, res) => {
  res.json({
    msg: "Hello world",
    name: "Franco Odone",
  });
});

app.use(proyectsRouter);
app.use(usersRouter);
app.use(authRouter);

app.listen(environment.PORT, () => {
  console.log(`Aplicación iniciada en el puerto ${environment.PORT}`);
});

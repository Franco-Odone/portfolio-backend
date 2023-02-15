import express from "express";
import environment from "./config/environment.js";

const app = express();
app.use(express.json());

//Ruta por defecto
app.get("/", (req, res) => {
  res.json({
    msg: "Hello world",
    name: "Franco Odone",
  });
});

app.listen(environment.PORT, () => {
  console.log(`Aplicación iniciada en el puerto ${environment.PORT}`);
});

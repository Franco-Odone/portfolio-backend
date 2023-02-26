import { proyect } from "../models/proyects.model.js";

// Funciones handlers
export const createProyect = async (req, res) => {
  // Obtengo el payload del token
  const userLogged = req.user;
  console.log(`🚀 ~ userLogged`, userLogged);
  const body = req.body;
  const newProyect = await proyect.create(body);
  res.json({ newProyect });
};

export const getProyects = async (req, res) => {
  const proyects = await proyect.find();
  res.json(proyects);
};

export const getProyectById = async (req, res) => {
  const id = req.params.id;
  const oneProyect = await proyect.findById(id);
  res.json(oneProyect);
};

export const updateProyectById = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const proyectUpdated = await proyect.findByIdAndUpdate(id, body, {
    new: true,
  });
  res.json(proyectUpdated);
};

export const deleteProyectById = async (req, res) => {
  const id = req.params.id;
  const proyectRemoved = await proyect.findByIdAndDelete(id);
  res.json(proyectRemoved);
};

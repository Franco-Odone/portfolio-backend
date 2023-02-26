import mongoose from "mongoose";

/* 
Se define el esquema de mongoose, esta corresponde a la estructura de lo que sería un proyecto
El id es generado automáticamente
*/
const proyectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

// Se crea la instancia del modelo.
export const proyect = new mongoose.model("proyect", proyectSchema);

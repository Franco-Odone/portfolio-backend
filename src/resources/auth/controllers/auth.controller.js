import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import Joi from "joi";

import environment from "../../../config/environment.js";
import { user } from "../../users/models/users.model.js";

const { TOKEN_SECRET } = environment;

const login = async (req, res) => {
  const { password, email } = req.body;

  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let foundUser = await user.findOne({ email });
  if (!foundUser) return res.status(400).send("Email no válido");

  const passCorrecto = await bcryptjs.compare(password, foundUser.password);
  if (!passCorrecto) return res.status(400).send("Contraseña incorrecta");

  const authToken = (user) => {
    let token = jwt.sign(
      {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
      TOKEN_SECRET
    );
    return token;
  };

  const token = authToken(foundUser);
  res.json({ foundUser, token });
};

export { login };

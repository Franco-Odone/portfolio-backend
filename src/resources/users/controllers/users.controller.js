import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import Joi from "joi";

import environment from "../../../config/environment.js";
import { user } from "../models/users.model.js";

const { TOKEN_SECRET } = environment;

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let foundUser = await user.findOne({ email: req.body.email });

  if (foundUser)
    return res.status(400).send("El usuario o el email ya existe...");

  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);

  const newUser = await user.create({
    username,
    email,
    password: hashedPassword,
  });

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

  const token = authToken(newUser);

  res.json({ newUser, token });
};

const getUsers = async (req, res) => {
  let users = await user.find();
  res.json({ users });
};

const getUserById = async (req, res) => {
  let id = req.params.id;
  let oneUser = await user.findById(id);
  res.json({ oneUser });
};

const updateUserById = async (req, res) => {
  let body = req.body;
  let id = req.params.id;
  let userUpdated = await user.findByIdAndUpdate(id, body, {
    // You should set the new option to true to return the document after update was applied.
    new: true,
  });
  res.json({ userUpdated });
};

const deleteUserById = async (req, res) => {
  let id = req.params.id;
  let userRemoved = await user.findByIdAndDelete(id);
  res.json({ userRemoved });
};

export { createUser, getUsers, getUserById, updateUserById, deleteUserById };

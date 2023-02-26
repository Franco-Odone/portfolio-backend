import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const authRouter = Router();
const baseURI = "/auth";

// If your login request is via a user supplying a username and password then a POST is preferable,
// as details will be sent in the HTTP messages body rather than the URL. Although it will still be
// sent plain text, unless you're encrypting via https.
authRouter.post(`${baseURI}/login`, login);

export default authRouter;

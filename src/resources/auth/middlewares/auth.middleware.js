import jwt from "jsonwebtoken";
import environment from "../../../config/environment.js";
const { TOKEN_SECRET } = environment;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({
      status: "FAILED",
      error: "token no presente",
    });

  try {
    const payload = jwt.verify(token, TOKEN_SECRET);
    req.user = payload;
    next();
  } catch (e) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({
        status: "FAILED",
        error: "token expiró",
      });
    } else if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).json({
        status: "FAILED",
        error: "token inválido",
      });
    }
  }
};

export { verifyToken };

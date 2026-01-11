import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const Secret = process.env.JWT_SECRET;

declare global {
  namespace Express {
    interface Request {
      id?: string;
      userId?: string;
    }
  }
}
export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({ error: "No token provided" });
  }
  try {
    if (!Secret) {
      return res.status(400).json({
        error: "Unauthorized request",
      });
    }
    const verification = jwt.verify(token, Secret) as JwtPayload;
    req.id = verification.id;
    next();
  } catch (err: any) {
    res.status(501).json({
      error: err,
    });
  }
}

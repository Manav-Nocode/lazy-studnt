import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const Secret = process.env.JWT_SECRET;
export function authMiddleware(req, res, next) {
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
        const verification = jwt.verify(token, Secret);
        req.id = verification.id;
        next();
    }
    catch (err) {
        res.status(501).json({
            error: err,
        });
    }
}
//# sourceMappingURL=authMiddle.js.map
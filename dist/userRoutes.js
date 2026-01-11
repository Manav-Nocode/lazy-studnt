import { Router } from "express";
import bcrypt from "bcrypt";
import { z } from "zod";
import { userModel } from "./db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const authRoutes = Router();
const Secret = process.env.JWT_SECRET;
console.log(Secret);
const signupSchema = z.object({
    email: z.string().email("Invalid email input"),
    password: z.string().min(6, "password must be atlest 6 characters long"),
});
authRoutes.post("/signup", async (req, res) => {
    try {
        const validateData = signupSchema.parse(req.body);
        const email = validateData.email;
        const password = validateData.password;
        const hashedPass = await bcrypt.hash(password, 3);
        await userModel.create({
            email,
            password: hashedPass,
        });
        res.status(200).json({
            msg: "signup successful",
        });
    }
    catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({
                error: "Validation failed",
                details: err.message,
            });
        }
        if (err instanceof Error) {
            return res.status(400).json({
                msg: err.message,
            });
        }
        return res.status(500).json({
            error: "User already exists or server error",
        });
    }
});
authRoutes.post("/signin", async (req, res) => {
    try {
        const validateData = signupSchema.parse(req.body);
        const email = validateData.email;
        const password = validateData.password;
        const userExists = await userModel.findOne({
            email,
        });
        if (!userExists) {
            return res.status(400).json({
                msg: "user doesnt exist. Please signup",
            });
        }
        if (!Secret) {
            throw new Error("the key doesnt exist");
        }
        const userMatch = await bcrypt.compare(password, userExists.password);
        if (userMatch) {
            const userId = userExists?._id;
            const token = jwt.sign({
                userId,
            }, Secret);
            return res.status(200).json({
                message: "Login successful",
                token: token,
            });
        }
        else {
            res.status(500).json({
                msg: "incorret credentials",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            //@ts-ignore
            msg: err.message,
        });
    }
});
//# sourceMappingURL=userRoutes.js.map
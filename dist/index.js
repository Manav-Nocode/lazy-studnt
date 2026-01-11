import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { authRoutes } from "./userRoutes.js";
import { authMiddleware } from "./middleware/authMiddle.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/users", authRoutes);
app.get("/sign", authMiddleware, (req, res) => {
    res.json({
        m: "oye punjabi",
    });
});
async function mainChecks() {
    const db_url = process.env.DB;
    if (!db_url) {
        throw new Error("Missing DB connection string in .env file");
    }
    try {
        await mongoose.connect(db_url);
        app.listen(process.env.Port);
        console.log("db finally up");
    }
    catch (e) {
        console.log(e);
    }
}
mainChecks();
//# sourceMappingURL=index.js.map
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => {
        console.error(err);
    });

app.use(express.json());
app.use(cors);

app.use("/api/auth", authRoutes);

app.listen(3001, () => {
    console.log("Server started on port 3001");
});

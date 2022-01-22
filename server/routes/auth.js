import express from "express";
import User from "../models/User.js";

const router = express.Router();

app.post("/register", (req, res) => {
    res.send("hello world");
});

export default router;

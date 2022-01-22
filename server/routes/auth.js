import express from "express";
import User from "../models/User.js";

const router = express.Router();

app.post("/register", async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.json({ status: "ok" });
    } catch (error) {
        res.json({
            status: "error",
            error: "This email is already registered to an existing account",
        });
    }
});

app.post("/login", async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });

    if (user) {
        return res.json({ status: "ok", user: true });
    } else {
        return res.json({ status: "error", user: false });
    }
});

export default router;

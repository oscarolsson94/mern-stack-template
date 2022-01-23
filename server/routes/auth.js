import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
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

router.post("/login", async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });

    if (user) {
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.TOKEN_SECRET
        );

        return res.json({ status: "ok", token: token });
    } else {
        return res.json({ status: "error", user: false });
    }
});

export default router;

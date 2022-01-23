import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
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
    });

    if (!user) {
        return res.json({
            status: "error",
            error: "No user found with the submitted email",
        });
    }

    const isPaswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (isPaswordValid) {
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.TOKEN_SECRET
        );
        return res.json({ status: "ok", token: token });
    } else {
        return res.json({
            status: "error",
            error: "Invalid username and password combination",
        });
    }
});

export default router;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleRegister = async () => {
        const response = await axios.post(
            "http://localhost:3001/api/auth/register",
            {
                name,
                email,
                password,
            }
        );
        console.log(response);

        /* if (data.status === "ok") {
            navigate("/login");
        } */
    };

    return (
        <div>
            <h1>Register</h1>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
            />
            <br />
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
            />
            <br />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
            />
            <br />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

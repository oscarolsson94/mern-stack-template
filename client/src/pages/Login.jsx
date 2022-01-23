import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await axios.post(
            "http://localhost:3001/api/auth/login",
            {
                body: {
                    email,
                    password,
                },
            }
        );

        console.log(response);

        /*  if (data.user) {
            localStorage.setItem("token", data.token);
            navigate("/user");
        } */
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
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
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};
